module.exports = async function handler(request, response) {
  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) {
    response.statusCode = 500;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ error: "Missing API_FOOTBALL_KEY environment variable" }));
    return;
  }

  const live = request.query?.live || "all";
  const url = new URL("https://v3.football.api-sports.io/fixtures");
  url.searchParams.set("live", live);

  try {
    const upstream = await fetch(url, {
      headers: { "x-apisports-key": apiKey }
    });
    const payload = await upstream.json();
    if (!upstream.ok) {
      response.statusCode = upstream.status;
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(JSON.stringify(payload));
      return;
    }

    response.setHeader("Cache-Control", "s-maxage=15, stale-while-revalidate=45");
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({
      source: "API-Football",
      updatedAt: new Date().toISOString(),
      matches: (payload.response || []).map((item) => ({
        id: item.fixture?.id,
        status: item.fixture?.status,
        elapsed: item.fixture?.status?.elapsed,
        homeTeam: item.teams?.home?.name,
        awayTeam: item.teams?.away?.name,
        goals: item.goals,
        league: item.league?.name
      }))
    }));
  } catch (error) {
    response.statusCode = 502;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ error: "Unable to fetch API-Football live fixtures" }));
  }
};

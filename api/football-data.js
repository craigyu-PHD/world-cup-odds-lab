module.exports = async function handler(request, response) {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  if (!apiKey) {
    response.statusCode = 500;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ error: "Missing FOOTBALL_DATA_API_KEY environment variable" }));
    return;
  }

  const competition = request.query?.competition || "WC";
  const url = `https://api.football-data.org/v4/competitions/${encodeURIComponent(competition)}/matches`;

  try {
    const upstream = await fetch(url, {
      headers: { "X-Auth-Token": apiKey }
    });
    const payload = await upstream.json();
    if (!upstream.ok) {
      response.statusCode = upstream.status;
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(JSON.stringify(payload));
      return;
    }

    response.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({
      source: "football-data.org",
      updatedAt: new Date().toISOString(),
      matches: (payload.matches || []).map((match) => ({
        id: match.id,
        status: match.status,
        utcDate: match.utcDate,
        homeTeam: match.homeTeam?.name,
        awayTeam: match.awayTeam?.name,
        score: match.score
      }))
    }));
  } catch (error) {
    response.statusCode = 502;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ error: "Unable to fetch football-data.org matches" }));
  }
};

const TEAM_CODE_BY_NAME = {
  Mexico: "MEX",
  "South Africa": "RSA",
  "Korea Republic": "KOR",
  Czechia: "CZE",
  Canada: "CAN",
  "Bosnia and Herzegovina": "BIH",
  Qatar: "QAT",
  Switzerland: "SUI",
  Brazil: "BRA",
  Morocco: "MAR",
  Haiti: "HAI",
  Scotland: "SCO",
  "United States": "USA",
  USA: "USA",
  Paraguay: "PAR",
  Australia: "AUS",
  Turkiye: "TUR",
  Turkey: "TUR",
  Germany: "GER",
  Curacao: "CUW",
  "Curaçao": "CUW",
  "Ivory Coast": "CIV",
  "Côte d’Ivoire": "CIV",
  Ecuador: "ECU",
  Netherlands: "NED",
  Japan: "JPN",
  Sweden: "SWE",
  Tunisia: "TUN",
  Belgium: "BEL",
  Egypt: "EGY",
  Iran: "IRN",
  "New Zealand": "NZL",
  Spain: "ESP",
  "Cabo Verde": "CPV",
  "Cape Verde": "CPV",
  "Saudi Arabia": "KSA",
  Uruguay: "URU",
  France: "FRA",
  Senegal: "SEN",
  Iraq: "IRQ",
  Norway: "NOR",
  Argentina: "ARG",
  Algeria: "ALG",
  Austria: "AUT",
  Jordan: "JOR",
  Portugal: "POR",
  "DR Congo": "COD",
  "Congo DR": "COD",
  Uzbekistan: "UZB",
  Colombia: "COL",
  England: "ENG",
  Croatia: "CRO",
  Ghana: "GHA",
  Panama: "PAN"
};

module.exports = async function handler(request, response) {
  const apiKey = process.env.ODDS_API_KEY;
  if (!apiKey) {
    response.statusCode = 500;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ error: "Missing ODDS_API_KEY environment variable" }));
    return;
  }

  const regions = request.query?.regions || "eu,uk,us";
  const url = new URL("https://api.the-odds-api.com/v4/sports/soccer_fifa_world_cup/odds");
  url.searchParams.set("regions", regions);
  url.searchParams.set("markets", "h2h,spreads,totals");
  url.searchParams.set("oddsFormat", "decimal");
  url.searchParams.set("apiKey", apiKey);

  try {
    const upstream = await fetch(url);
    const payload = await upstream.json();
    if (!upstream.ok) {
      response.statusCode = upstream.status;
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.end(JSON.stringify(payload));
      return;
    }

    response.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=120");
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ matches: payload.map(normalizeEvent) }));
  } catch (error) {
    response.statusCode = 502;
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify({ error: "Unable to fetch World Cup odds" }));
  }
};

function normalizeEvent(event, index) {
  const home = codeFor(event.home_team);
  const away = codeFor(event.away_team);
  return {
    id: event.id,
    number: index + 1,
    group: "API",
    home,
    away,
    date: formatDate(event.commence_time),
    time: formatTime(event.commence_time),
    venue: "The Odds API",
    odds: {
      h2h: mapMarket(event, "h2h"),
      spread: mapMarket(event, "spreads"),
      total: mapMarket(event, "totals")
    }
  };
}

function mapMarket(event, marketKey) {
  return event.bookmakers
    .map((bookmaker) => {
      const market = bookmaker.markets.find((item) => item.key === marketKey);
      if (!market) return null;
      if (marketKey === "h2h") {
        return {
          bookmaker: bookmaker.title,
          home: priceFor(market, event.home_team),
          draw: priceFor(market, "Draw"),
          away: priceFor(market, event.away_team)
        };
      }
      if (marketKey === "spreads") {
        const homeOutcome = outcomeFor(market, event.home_team);
        const awayOutcome = outcomeFor(market, event.away_team);
        return {
          bookmaker: bookmaker.title,
          home: homeOutcome?.price || 0,
          away: awayOutcome?.price || 0,
          point: homeOutcome?.point || 0
        };
      }
      const over = outcomeFor(market, "Over");
      const under = outcomeFor(market, "Under");
      return {
        bookmaker: bookmaker.title,
        over: over?.price || 0,
        under: under?.price || 0,
        point: over?.point || under?.point || 2.5
      };
    })
    .filter(Boolean);
}

function outcomeFor(market, name) {
  return market.outcomes.find((outcome) => outcome.name === name);
}

function priceFor(market, name) {
  return outcomeFor(market, name)?.price || 0;
}

function codeFor(name) {
  return TEAM_CODE_BY_NAME[name] || String(name).slice(0, 3).toUpperCase();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", timeZone: "UTC" }).format(new Date(value));
}

function formatTime(value) {
  return new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "UTC" }).format(new Date(value)) + " UTC";
}

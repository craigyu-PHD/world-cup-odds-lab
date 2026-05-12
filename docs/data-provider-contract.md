# 資料端點契約

前端的「賠率 Proxy 端點」預期收到 JSON：

```json
{
  "matches": [
    {
      "id": "M001",
      "number": 1,
      "group": "A",
      "home": "MEX",
      "away": "RSA",
      "date": "Jun 11",
      "time": "15:00 ET",
      "venue": "Mexico City",
      "odds": {
        "h2h": [
          { "bookmaker": "Pinnacle", "home": 1.52, "draw": 3.9, "away": 6.4 }
        ],
        "spread": [
          { "bookmaker": "Pinnacle", "home": 1.88, "away": 1.92, "point": -0.5 }
        ],
        "total": [
          { "bookmaker": "Pinnacle", "over": 1.9, "under": 1.9, "point": 2.5 }
        ]
      }
    }
  ]
}
```

## 正式串接原則

- API key 只能放在後端 proxy 或 serverless function，不能放在前端。
- 資料商建議從合法授權 API 開始，例如 The Odds API 的 `soccer_fifa_world_cup`。
- 台灣運彩資料需另外建立 mapping，至少包含賽事編號、主客隊、玩法、固定賠率、讓分數與總分。
- 前端只接受標準化後的 decimal odds，勝率引擎會再做 implied probability 與 overround 校正。

## 已附後端範例

`api/worldcup-odds.js` 是 Vercel / Node serverless 風格的 The Odds API proxy 範例。部署時設定環境變數：

```bash
ODDS_API_KEY=你的 The Odds API key
```

另附兩個即時資料備援 proxy：

```bash
FOOTBALL_DATA_API_KEY=你的 football-data.org key
API_FOOTBALL_KEY=你的 API-Football key
```

- `api/football-data.js`：賽程、比分、狀態與結果校驗。
- `api/api-football-live.js`：live fixtures、賽中時間、比分與事件資料候選來源。

正式網站的前端 proxy 欄位可填：

```text
https://你的網域/api/worldcup-odds
```

The Odds API、football-data.org、API-Football 都是資料供應商，不是網站託管平台；網站需要另外部署到 Vercel、Netlify、GitHub Pages 或自架主機。GitHub Pages 只能部署靜態前端，不能執行 `api/` 內的 serverless functions。

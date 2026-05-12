# 世足推演台

這是一個 2026 世界盃運動彩推演網站 MVP，採靜態前端實作，可直接開啟 `index.html`。

目前已具備：

- 72 場小組賽清單、組別篩選、搜尋與排序。
- 多資料源狀態面板，保留 The Odds API、台灣運彩賽事表、FIFA 賽程與內部模型的接入位置。
- 不讓分、讓分、大小盤的賠率彙整與即時示範更新。
- 混合盤口隱含機率、Elo 強度、攻防與近期狀態的勝率推演。
- 台灣運彩格式的單場 / 串關模擬投注單。
- 後端 odds proxy 輸入欄位，正式環境應由 proxy 保存 API key 並回傳標準化 JSON。
- 內建 `api/worldcup-odds.js`，可作為 Vercel / Node serverless 的 The Odds API proxy 範例。
- 內建 `api/football-data.js` 與 `api/api-football-live.js`，作為賽程比分與 live fixtures 備援資料源。
- 新增亮色 / 暗黑模式、資料雷達分頁、賽事收看分頁與官方影片入口。

## 重要邊界

此網站只做資料分析與模擬下單，不連接真實投注交易，也不保證任何收益。正式上線前，賠率資料應使用合法授權 API，不建議直接爬取賭盤網站頁面。

The Odds API、football-data.org、API-Football 是資料供應商，不是網站發佈平台。正確架構是把網站部署到 Vercel、Netlify、GitHub Pages 或自架主機，再由後端 proxy 呼叫資料 API。

GitHub Pages 只能部署靜態網站，不能執行 `api/` serverless functions。若要真實即時資料，請部署到 Vercel / Netlify，或用 GitHub Actions 排程抓資料後輸出靜態 JSON。

## 建議後續串接

1. 建立 `/api/worldcup-odds` 後端 proxy。
2. 後端串接 The Odds API `soccer_fifa_world_cup`，市場包含 `h2h,spreads,totals`。
3. 串接 football-data.org 與 API-Football 作為比分、狀態、賽中事件和陣容補充資料。
4. 建立台灣運彩賽事表映射：賽事編號、玩法、主客隊、固定賠率、讓分數、總分。
5. 建立排程任務，每 15-60 秒更新賽中資料，每 6-12 小時更新球隊強弱資料。
6. 補完整 knockout 賽程與晉級模擬器。

## 環境變數

```bash
ODDS_API_KEY=你的 The Odds API key
FOOTBALL_DATA_API_KEY=你的 football-data.org key
API_FOOTBALL_KEY=你的 API-Football key
```

## 參考來源

- FIFA 官方賽程資料：[FIFA World Cup 2026 Match Schedule](https://digitalhub.fifa.com/asset/4b5d4417-3343-4732-9cdf-14b6662af407/FWC26-Match-Schedule_English.pdf)
- The Odds API：[FIFA World Cup Odds API](https://the-odds-api.com/sports/fifa-world-cup-odds.html)
- 台灣運彩投注規範：[運動彩券投注規範](https://article.sportslottery.com.tw/zh-tw/about-us/135)
- 視覺素材來源見：[docs/asset-attribution.md](docs/asset-attribution.md)

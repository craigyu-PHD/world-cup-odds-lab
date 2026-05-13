"use strict";

const teamProfiles = {
  MEX: { name: "墨西哥", rating: 1832, form: 72, attack: 76, defense: 74, recent: "主場開幕戰，過去大賽經驗穩定，邊路推進是主要優勢。" },
  RSA: { name: "南非", rating: 1684, form: 61, attack: 63, defense: 66, recent: "防守組織性高，面對高壓逼搶時出球速度是風險。" },
  KOR: { name: "南韓", rating: 1788, form: 69, attack: 72, defense: 70, recent: "轉換速度快，近年國際賽對抗強隊時有穩定進球能力。" },
  CZE: { name: "捷克", rating: 1761, form: 67, attack: 69, defense: 72, recent: "定位球和身體對抗強，客場長途移動會影響後段體能。" },
  CAN: { name: "加拿大", rating: 1744, form: 68, attack: 71, defense: 67, recent: "速度型攻擊線具威脅，主場氣勢有加成。" },
  BIH: { name: "波士尼亞與赫塞哥維納", rating: 1702, form: 62, attack: 67, defense: 64, recent: "中前場個人能力不差，但壓迫下防線回收偏深。" },
  QAT: { name: "卡達", rating: 1668, form: 59, attack: 62, defense: 63, recent: "洲際賽經驗足，對高節奏對手容易被拉開。" },
  SUI: { name: "瑞士", rating: 1818, form: 74, attack: 73, defense: 78, recent: "結構完整，淘汰賽型球隊特質明顯，失誤率低。" },
  BRA: { name: "巴西", rating: 1938, form: 80, attack: 88, defense: 78, recent: "個人突破和前場壓迫上限高，市場通常給予高熱度。" },
  MAR: { name: "摩洛哥", rating: 1846, form: 76, attack: 74, defense: 80, recent: "防守反擊成熟，近年大賽抗壓表現突出。" },
  HAI: { name: "海地", rating: 1589, form: 54, attack: 58, defense: 55, recent: "速度和衝刺能力有亮點，整體陣地戰深度較弱。" },
  SCO: { name: "蘇格蘭", rating: 1740, form: 64, attack: 66, defense: 70, recent: "身體對抗和長傳二點球強，進攻效率起伏較大。" },
  USA: { name: "美國", rating: 1824, form: 73, attack: 76, defense: 73, recent: "主場作戰，體能和壓迫節奏明顯加分。" },
  PAR: { name: "巴拉圭", rating: 1725, form: 64, attack: 64, defense: 73, recent: "低位防守具韌性，若先失球會被迫提高風險。" },
  AUS: { name: "澳洲", rating: 1738, form: 65, attack: 66, defense: 71, recent: "定位球與防空強，面對快速小組配合時橫移壓力大。" },
  TUR: { name: "土耳其", rating: 1797, form: 71, attack: 78, defense: 67, recent: "進攻創造力高，防線空間管理是主要波動來源。" },
  GER: { name: "德國", rating: 1886, form: 75, attack: 81, defense: 75, recent: "控球和中場推進穩，年輕攻擊手帶來高天花板。" },
  CUW: { name: "庫拉索", rating: 1580, form: 56, attack: 57, defense: 59, recent: "首次大舞台壓力大，守門與反擊效率是爆冷關鍵。" },
  CIV: { name: "象牙海岸", rating: 1768, form: 70, attack: 74, defense: 69, recent: "身體能力和邊路衝刺有優勢，紀律性決定穩定度。" },
  ECU: { name: "厄瓜多", rating: 1812, form: 73, attack: 72, defense: 77, recent: "防守密度佳，轉換進攻與高海拔適應以外的中立場表現仍需觀察。" },
  NED: { name: "荷蘭", rating: 1904, form: 78, attack: 82, defense: 79, recent: "高壓、翼衛推進和防線高度成熟，是小組出線熱門。" },
  JPN: { name: "日本", rating: 1842, form: 77, attack: 78, defense: 75, recent: "傳控節奏快，近年面對歐洲強隊不落下風。" },
  SWE: { name: "瑞典", rating: 1764, form: 65, attack: 68, defense: 72, recent: "陣地防守穩定，進攻端仰賴前鋒效率。" },
  TUN: { name: "突尼西亞", rating: 1692, form: 61, attack: 60, defense: 70, recent: "防線收縮完整，但進攻火力不足時平局機率上升。" },
  BEL: { name: "比利時", rating: 1872, form: 74, attack: 81, defense: 72, recent: "前場創造力仍強，世代交替後防守穩定度需評估。" },
  EGY: { name: "埃及", rating: 1778, form: 69, attack: 73, defense: 70, recent: "反擊和右路推進具威脅，慢節奏比賽更有利。" },
  IRN: { name: "伊朗", rating: 1760, form: 67, attack: 69, defense: 71, recent: "大賽經驗足，身體對抗與反擊效率佳。" },
  NZL: { name: "紐西蘭", rating: 1602, form: 55, attack: 56, defense: 62, recent: "定位球是主要得分點，面對密集壓迫時控球不穩。" },
  ESP: { name: "西班牙", rating: 1946, form: 82, attack: 84, defense: 81, recent: "控球壓制力和半空間滲透是核心優勢。" },
  CPV: { name: "維德角", rating: 1662, form: 60, attack: 62, defense: 64, recent: "防守韌性佳，反擊終結率決定爆冷空間。" },
  KSA: { name: "沙烏地阿拉伯", rating: 1688, form: 62, attack: 64, defense: 65, recent: "短傳節奏不差，面對高強度壓迫時失誤偏多。" },
  URU: { name: "烏拉圭", rating: 1888, form: 78, attack: 80, defense: 79, recent: "高強度逼搶和禁區效率佳，大賽硬仗抗性高。" },
  FRA: { name: "法國", rating: 1950, form: 83, attack: 87, defense: 81, recent: "陣容深度極高，轉換進攻速度是世界頂級。" },
  SEN: { name: "塞內加爾", rating: 1810, form: 72, attack: 73, defense: 75, recent: "身體對抗、邊路速度和防守硬度兼具。" },
  IRQ: { name: "伊拉克", rating: 1656, form: 59, attack: 61, defense: 63, recent: "士氣與反擊有競爭力，但對高位逼搶抗壓不足。" },
  NOR: { name: "挪威", rating: 1806, form: 73, attack: 82, defense: 68, recent: "中鋒終結能力頂尖，防線保護與攻守距離是變數。" },
  ARG: { name: "阿根廷", rating: 1942, form: 81, attack: 84, defense: 80, recent: "衛冕冠軍，節奏控制和關鍵球處理能力穩定。" },
  ALG: { name: "阿爾及利亞", rating: 1748, form: 66, attack: 70, defense: 67, recent: "邊路個人能力強，若中場失控會讓後防承壓。" },
  AUT: { name: "奧地利", rating: 1814, form: 75, attack: 75, defense: 76, recent: "壓迫體系成熟，對抗強隊時能製造高失誤率。" },
  JOR: { name: "約旦", rating: 1628, form: 58, attack: 60, defense: 61, recent: "反擊有速度，但板凳深度和長期賽程是挑戰。" },
  POR: { name: "葡萄牙", rating: 1918, form: 79, attack: 85, defense: 77, recent: "攻擊配置完整，面對低位防守有多種破解方式。" },
  COD: { name: "剛果民主共和國", rating: 1708, form: 64, attack: 68, defense: 66, recent: "身體條件優秀，防線集中度會直接影響盤口風險。" },
  UZB: { name: "烏茲別克", rating: 1698, form: 65, attack: 66, defense: 68, recent: "組織性提升，首次大賽的心理波動仍需折價。" },
  COL: { name: "哥倫比亞", rating: 1840, form: 76, attack: 78, defense: 76, recent: "中前場對抗和個人能力均衡，近年狀態穩定。" },
  ENG: { name: "英格蘭", rating: 1932, form: 80, attack: 84, defense: 79, recent: "陣容深度與定位球威脅高，小組賽市場熱度通常偏高。" },
  CRO: { name: "克羅埃西亞", rating: 1836, form: 73, attack: 74, defense: 76, recent: "中場控制力和大賽經驗出色，節奏慢時更有利。" },
  GHA: { name: "迦納", rating: 1712, form: 63, attack: 67, defense: 65, recent: "速度與衝擊力佳，防線判斷與犯規控制是風險。" },
  PAN: { name: "巴拿馬", rating: 1640, form: 58, attack: 60, defense: 62, recent: "熟悉北美環境，面對頂級對手時控球時間偏低。" }
};

const groupTeams = {
  A: ["MEX", "RSA", "KOR", "CZE"],
  B: ["CAN", "BIH", "QAT", "SUI"],
  C: ["BRA", "MAR", "HAI", "SCO"],
  D: ["USA", "PAR", "AUS", "TUR"],
  E: ["GER", "CUW", "CIV", "ECU"],
  F: ["NED", "JPN", "SWE", "TUN"],
  G: ["BEL", "EGY", "IRN", "NZL"],
  H: ["ESP", "CPV", "KSA", "URU"],
  I: ["FRA", "SEN", "IRQ", "NOR"],
  J: ["ARG", "ALG", "AUT", "JOR"],
  K: ["POR", "COD", "UZB", "COL"],
  L: ["ENG", "CRO", "GHA", "PAN"]
};

const fixtureRows = [
  [1, "A", "MEX", "RSA", "Jun 11", "15:00 ET"],
  [2, "A", "KOR", "CZE", "Jun 12", "22:00 ET"],
  [3, "B", "CAN", "BIH", "Jun 12", "15:00 ET"],
  [4, "D", "USA", "PAR", "Jun 12", "21:00 ET"],
  [5, "C", "HAI", "SCO", "Jun 13", "21:00 ET"],
  [6, "D", "TUR", "PAR", "Jun 13", "00:00 ET"],
  [7, "C", "BRA", "MAR", "Jun 13", "18:00 ET"],
  [8, "B", "QAT", "SUI", "Jun 13", "15:00 ET"],
  [9, "E", "CIV", "ECU", "Jun 14", "19:00 ET"],
  [10, "E", "GER", "CUW", "Jun 14", "13:00 ET"],
  [11, "F", "NED", "JPN", "Jun 14", "16:00 ET"],
  [12, "F", "SWE", "TUN", "Jun 15", "22:00 ET"],
  [13, "H", "KSA", "URU", "Jun 15", "18:00 ET"],
  [14, "H", "ESP", "CPV", "Jun 15", "12:00 ET"],
  [15, "G", "IRN", "NZL", "Jun 16", "21:00 ET"],
  [16, "G", "BEL", "EGY", "Jun 16", "15:00 ET"],
  [17, "I", "FRA", "SEN", "Jun 16", "15:00 ET"],
  [18, "I", "IRQ", "NOR", "Jun 16", "18:00 ET"],
  [19, "J", "ARG", "ALG", "Jun 16", "21:00 ET"],
  [20, "J", "AUT", "JOR", "Jun 17", "00:00 ET"],
  [21, "L", "GHA", "PAN", "Jun 17", "19:00 ET"],
  [22, "L", "ENG", "CRO", "Jun 17", "16:00 ET"],
  [23, "K", "POR", "COD", "Jun 17", "13:00 ET"],
  [24, "K", "UZB", "COL", "Jun 17", "22:00 ET"],
  [25, "A", "CZE", "RSA", "Jun 18", "12:00 ET"],
  [26, "B", "SUI", "BIH", "Jun 18", "15:00 ET"],
  [27, "B", "CAN", "QAT", "Jun 18", "18:00 ET"],
  [28, "A", "MEX", "KOR", "Jun 18", "21:00 ET"],
  [29, "C", "BRA", "HAI", "Jun 19", "20:30 ET"],
  [30, "C", "SCO", "MAR", "Jun 19", "18:00 ET"],
  [31, "D", "AUS", "TUR", "Jun 19", "23:00 ET"],
  [32, "D", "USA", "AUS", "Jun 19", "15:00 ET"],
  [33, "E", "GER", "CIV", "Jun 20", "16:00 ET"],
  [34, "E", "ECU", "CUW", "Jun 20", "20:00 ET"],
  [35, "F", "NED", "SWE", "Jun 20", "13:00 ET"],
  [36, "F", "TUN", "JPN", "Jun 20", "00:00 ET"],
  [37, "H", "URU", "CPV", "Jun 21", "18:00 ET"],
  [38, "H", "ESP", "KSA", "Jun 21", "12:00 ET"],
  [39, "G", "BEL", "IRN", "Jun 21", "15:00 ET"],
  [40, "G", "NZL", "EGY", "Jun 21", "21:00 ET"],
  [41, "I", "NOR", "SEN", "Jun 22", "20:00 ET"],
  [42, "I", "FRA", "IRQ", "Jun 22", "17:00 ET"],
  [43, "J", "ARG", "AUT", "Jun 22", "13:00 ET"],
  [44, "J", "JOR", "ALG", "Jun 22", "23:00 ET"],
  [45, "L", "ENG", "GHA", "Jun 23", "16:00 ET"],
  [46, "L", "PAN", "CRO", "Jun 23", "19:00 ET"],
  [47, "K", "POR", "UZB", "Jun 23", "13:00 ET"],
  [48, "K", "COL", "COD", "Jun 23", "22:00 ET"],
  [49, "C", "SCO", "BRA", "Jun 24", "18:00 ET"],
  [50, "C", "MAR", "HAI", "Jun 24", "18:00 ET"],
  [51, "B", "SUI", "CAN", "Jun 24", "15:00 ET"],
  [52, "B", "BIH", "QAT", "Jun 24", "15:00 ET"],
  [53, "A", "CZE", "MEX", "Jun 24", "21:00 ET"],
  [54, "A", "RSA", "KOR", "Jun 24", "21:00 ET"],
  [55, "E", "CUW", "CIV", "Jun 25", "16:00 ET"],
  [56, "E", "ECU", "GER", "Jun 25", "16:00 ET"],
  [57, "F", "JPN", "SWE", "Jun 25", "19:00 ET"],
  [58, "F", "TUN", "NED", "Jun 25", "19:00 ET"],
  [59, "D", "TUR", "USA", "Jun 25", "22:00 ET"],
  [60, "D", "PAR", "AUS", "Jun 25", "22:00 ET"],
  [61, "I", "NOR", "FRA", "Jun 26", "15:00 ET"],
  [62, "I", "SEN", "IRQ", "Jun 26", "15:00 ET"],
  [63, "G", "EGY", "IRN", "Jun 26", "23:00 ET"],
  [64, "G", "NZL", "BEL", "Jun 26", "23:00 ET"],
  [65, "H", "CPV", "KSA", "Jun 26", "20:00 ET"],
  [66, "H", "URU", "ESP", "Jun 26", "20:00 ET"],
  [67, "L", "PAN", "ENG", "Jun 27", "17:00 ET"],
  [68, "L", "CRO", "GHA", "Jun 27", "17:00 ET"],
  [69, "J", "ALG", "AUT", "Jun 27", "22:00 ET"],
  [70, "J", "JOR", "ARG", "Jun 27", "22:00 ET"],
  [71, "K", "COL", "POR", "Jun 27", "19:30 ET"],
  [72, "K", "COD", "UZB", "Jun 27", "19:30 ET"]
];

const sourceDefinitions = [
  {
    name: "FIFA 官方賽程",
    status: "已載入",
    detail: "官方賽程、組別與開賽時間；本頁先呈現 72 場小組賽。",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
  },
  {
    name: "The Odds API",
    status: "Proxy ready",
    detail: "賠率主來源，支援 World Cup、1X2、讓分、大小盤；由 api/worldcup-odds.js 串接。",
    url: "https://the-odds-api.com/sports/fifa-world-cup-odds.html"
  },
  {
    name: "football-data.org",
    status: "Proxy ready",
    detail: "賽程、比分、狀態與比賽結果備援來源；由 api/football-data.js 串接。",
    url: "https://www.football-data.org/"
  },
  {
    name: "API-Football",
    status: "Proxy ready",
    detail: "live score、事件、陣容與統計候選來源；由 api/api-football-live.js 串接。",
    url: "https://www.api-football.com/"
  },
  {
    name: "台灣運彩賽事表",
    status: "待接入",
    detail: "用來映射賽事編號、玩法、固定賠率、讓分數與總分。",
    url: "https://www.sportslottery.com.tw/"
  },
  {
    name: "台灣運彩投注規範",
    status: "已標註",
    detail: "足球全場以 90 分鐘加傷停補時為主，不含延長賽與 PK。",
    url: "https://article.sportslottery.com.tw/zh-tw/about-us/135"
  },
  {
    name: "內部勝率模型",
    status: "運作中",
    detail: "混合 Elo 強度、近期狀態、盤口隱含機率與抽水校正。",
    url: "docs/data-provider-contract.md"
  }
];

const integrationSources = [
  {
    tag: "賠率",
    name: "The Odds API",
    detail: "正式盤口、bookmaker odds、h2h / spreads / totals。建議每 30-60 秒更新賽前盤，開賽後提高頻率。",
    url: "https://the-odds-api.com/sports/fifa-world-cup-odds.html"
  },
  {
    tag: "賽程比分",
    name: "football-data.org",
    detail: "提供 competitions / matches 類資料，可作為賽程、比分、比賽狀態和結果校驗來源。",
    url: "https://www.football-data.org/"
  },
  {
    tag: "Live",
    name: "API-Football",
    detail: "可補 live fixtures、事件、陣容、球員與技術統計，適合賽中狀態更新。",
    url: "https://www.api-football.com/"
  },
  {
    tag: "官方",
    name: "FIFA",
    detail: "官方賽程、組別、場館與最新公告。用來校正比賽時間與賽事身分。",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
  },
  {
    tag: "台灣玩法",
    name: "台灣運彩",
    detail: "映射台灣運彩賽事編號、玩法、賠率名稱與投注規範，不直接處理真實交易。",
    url: "https://www.sportslottery.com.tw/"
  },
  {
    tag: "影像",
    name: "FIFA YouTube / 官方媒體夥伴",
    detail: "收看分頁只放合法官方影像入口；賽事直播需依所在地授權平台開放情況切換。",
    url: "https://www.youtube.com/@fifa"
  }
];

const bookmakers = ["Pinnacle", "Betfair", "DraftKings", "Sportsbook EU"];
let matches = fixtureRows.map(createMatch);
let selectedMatchId = matches[0].id;
let slipMode = "single";
let betslip = [];
let tickets = [];
let lastFocusedMatchCard = null;
let selectedDateFilter = "all";

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  collectElements();
  buildGroupFilter();
  buildGroupShortcuts();
  bindEvents();
  updateFeed(false);
  render();
  window.setInterval(() => updateFeed(true), 15000);
});

function collectElements() {
  [
    "sourceList",
    "refreshLabel",
    "refreshButton",
    "metricStrip",
    "searchInput",
    "groupFilter",
    "marketFilter",
    "sortSelect",
    "matchCount",
    "matchList",
    "catalogMatchTotal",
    "groupShortcutList",
    "dateRail",
    "dateTabs",
    "marketColumnLabels",
    "sidebarToggle",
    "matchDetail",
    "clearSlip",
    "stakeInput",
    "betslipList",
    "payoutEstimate",
    "submitSim",
    "ticketHistory",
    "proxyEndpoint",
    "connectEndpoint",
    "insightRail",
    "themeToggle",
    "integrationGrid",
    "watchList",
    "officialVideo",
    "homeGoalInput",
    "awayGoalInput",
    "marketShockInput",
    "sandboxResult",
    "rulesModal",
    "rulesContent",
    "rulesClose"
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function buildGroupFilter() {
  elements.groupFilter.innerHTML = [
    '<option value="all">全部組別</option>',
    ...Object.keys(groupTeams).map((group) => `<option value="${group}">Group ${group}</option>`)
  ].join("");
}

function buildGroupShortcuts() {
  if (!elements.groupShortcutList) return;
  const allButton = `<button class="active" data-group-shortcut="all" type="button"><strong>全部</strong><span>${matches.length}</span></button>`;
  const groupButtons = Object.keys(groupTeams).map((group) => {
    const count = matches.filter((match) => match.group === group).length;
    return `<button data-group-shortcut="${group}" type="button"><strong>${group}</strong><span>${count}</span></button>`;
  }).join("");
  elements.groupShortcutList.innerHTML = allButton + groupButtons;
}

function bindEvents() {
  elements.refreshButton.addEventListener("click", () => {
    updateFeed(true);
    render();
  });
  elements.themeToggle.addEventListener("click", toggleTheme);
  document.querySelectorAll("[data-view-tab]").forEach((button) => {
    button.addEventListener("click", () => activateView(button.dataset.viewTab));
  });
  elements.searchInput.addEventListener("input", () => {
    renderMetrics();
    renderInsights();
    renderDateControls();
    renderMatchList();
  });
  elements.groupFilter.addEventListener("change", () => {
    selectedDateFilter = "all";
    updateGroupShortcutState();
    renderMetrics();
    renderInsights();
    renderDateControls();
    renderMatchList();
  });
  elements.marketFilter.addEventListener("change", () => {
    updateMarketShortcutState();
    renderMarketColumnLabels();
    renderMatchList();
  });
  elements.sortSelect.addEventListener("change", () => {
    renderDateControls();
    renderMatchList();
  });
  if (elements.sidebarToggle) {
    elements.sidebarToggle.addEventListener("click", toggleSidebar);
  }
  if (elements.groupShortcutList) {
    elements.groupShortcutList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-group-shortcut]");
      if (!button) return;
      elements.groupFilter.value = button.dataset.groupShortcut;
      selectedDateFilter = "all";
      updateGroupShortcutState();
      renderMetrics();
      renderInsights();
      renderDateControls();
      renderMatchList();
    });
  }
  document.querySelectorAll("[data-market-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.marketFilter.value = button.dataset.marketShortcut;
      updateMarketShortcutState();
      renderMarketColumnLabels();
      renderMatchList();
    });
  });
  elements.clearSlip.addEventListener("click", () => {
    betslip = [];
    renderBetslip();
  });
  elements.stakeInput.addEventListener("input", renderBetslip);
  elements.homeGoalInput.addEventListener("input", renderSandbox);
  elements.awayGoalInput.addEventListener("input", renderSandbox);
  elements.marketShockInput.addEventListener("input", renderSandbox);
  elements.rulesClose.addEventListener("click", closeRulesModal);
  elements.rulesModal.addEventListener("click", (event) => {
    if (event.target === elements.rulesModal) closeRulesModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.rulesModal.getAttribute("aria-hidden") === "false") {
      closeRulesModal();
    }
  });
  document.querySelectorAll("[data-slip-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      slipMode = button.dataset.slipMode;
      document.querySelectorAll("[data-slip-mode]").forEach((item) => item.classList.toggle("active", item === button));
      renderBetslip();
    });
  });
  elements.submitSim.addEventListener("click", createTicket);
  elements.connectEndpoint.addEventListener("click", connectEndpoint);
}

function toggleTheme() {
  const isDark = document.body.dataset.theme === "dark";
  document.body.dataset.theme = isDark ? "light" : "dark";
  elements.themeToggle.textContent = isDark ? "暗黑模式" : "正常模式";
  elements.themeToggle.setAttribute("aria-pressed", String(!isDark));
}

function toggleSidebar() {
  const shell = document.getElementById("simulator");
  const isCollapsed = shell.classList.toggle("sidebar-collapsed");
  elements.sidebarToggle.textContent = isCollapsed ? "展開" : "收合";
  elements.sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  elements.sidebarToggle.setAttribute("aria-label", isCollapsed ? "展開左側目錄" : "收合左側目錄");
}

function activateView(viewName) {
  document.querySelectorAll("[data-view-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTab === viewName);
  });
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === viewName);
  });
  if (viewName === "watch" && elements.officialVideo && elements.officialVideo.dataset.loaded !== "true") {
    elements.officialVideo.src = elements.officialVideo.dataset.src;
    elements.officialVideo.dataset.loaded = "true";
  }
}

function createMatch(row) {
  const [number, group, home, away, date, time] = row;
  const id = `M${String(number).padStart(3, "0")}`;
  const match = {
    id,
    number,
    group,
    home,
    away,
    date,
    time,
    venue: "官方場館資料待 proxy 同步",
    odds: {}
  };
  match.odds = buildOdds(match);
  return match;
}

function buildOdds(match) {
  const base = modelProbabilities(match);
  const h2h = bookmakers.map((bookmaker, index) => {
    const variance = (index - 1.5) * 0.015;
    return {
      bookmaker,
      home: priceFromProbability(base.home - variance),
      draw: priceFromProbability(base.draw + variance / 2),
      away: priceFromProbability(base.away + variance)
    };
  });
  const spreadPoint = handicapLine(match);
  const totalPoint = totalLine(match);
  return {
    h2h,
    spread: bookmakers.map((bookmaker, index) => ({
      bookmaker,
      home: roundOdds(1.83 + Math.max(-0.08, Math.min(0.08, (index - 1) * 0.025 + (base.home - base.away) * 0.06))),
      away: roundOdds(1.88 - Math.max(-0.08, Math.min(0.08, (index - 1) * 0.02 + (base.home - base.away) * 0.05))),
      point: spreadPoint
    })),
    total: bookmakers.map((bookmaker, index) => ({
      bookmaker,
      over: roundOdds(1.84 + (index * 0.02) + (totalPoint - 2.5) * 0.04),
      under: roundOdds(1.94 - (index * 0.015) - (totalPoint - 2.5) * 0.02),
      point: totalPoint
    }))
  };
}

function modelProbabilities(match) {
  const homeTeam = teamProfiles[match.home];
  const awayTeam = teamProfiles[match.away];
  const diff = (homeTeam.rating - awayTeam.rating) / 420;
  const attackGap = (homeTeam.attack - awayTeam.defense - (awayTeam.attack - homeTeam.defense)) / 200;
  const formGap = (homeTeam.form - awayTeam.form) / 180;
  const homeBoost = ["MEX", "USA", "CAN"].includes(match.home) ? 0.055 : 0.012;
  const score = diff + attackGap + formGap + homeBoost;
  const draw = clamp(0.28 - Math.abs(score) * 0.07, 0.18, 0.31);
  const remaining = 1 - draw;
  const home = remaining / (1 + Math.exp(-score * 2.1));
  return normalize({ home, draw, away: remaining - home });
}

function marketProbabilities(match) {
  const averages = averageH2h(match);
  const implied = {
    home: 1 / averages.home,
    draw: 1 / averages.draw,
    away: 1 / averages.away
  };
  return normalize(implied);
}

function blendedProbabilities(match) {
  const model = modelProbabilities(match);
  const market = marketProbabilities(match);
  return normalize({
    home: model.home * 0.42 + market.home * 0.58,
    draw: model.draw * 0.42 + market.draw * 0.58,
    away: model.away * 0.42 + market.away * 0.58
  });
}

function valueEdges(match) {
  const model = modelProbabilities(match);
  const market = marketProbabilities(match);
  return {
    home: model.home - market.home,
    draw: model.draw - market.draw,
    away: model.away - market.away
  };
}

function updateFeed(isLiveTick) {
  if (isLiveTick) {
    matches = matches.map((match) => ({
      ...match,
      odds: driftOdds(match.odds, match.number)
    }));
  }
  elements.refreshLabel.textContent = `更新於 ${new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}`;
  if (isLiveTick) {
    render();
  }
}

function driftOdds(odds, seed) {
  const drift = (seed % 7 - 3) * 0.002 + (Math.random() - 0.5) * 0.018;
  return {
    h2h: odds.h2h.map((line) => ({
      ...line,
      home: roundOdds(clamp(line.home + drift, 1.12, 9.5)),
      draw: roundOdds(clamp(line.draw - drift / 2, 1.45, 8.5)),
      away: roundOdds(clamp(line.away - drift, 1.12, 10.5))
    })),
    spread: odds.spread.map((line) => ({
      ...line,
      home: roundOdds(clamp(line.home + drift / 2, 1.5, 2.35)),
      away: roundOdds(clamp(line.away - drift / 2, 1.5, 2.35))
    })),
    total: odds.total.map((line) => ({
      ...line,
      over: roundOdds(clamp(line.over + drift / 3, 1.5, 2.4)),
      under: roundOdds(clamp(line.under - drift / 3, 1.5, 2.4))
    }))
  };
}

function render() {
  renderSources();
  renderIntegrations();
  renderWatchList();
  renderMetrics();
  renderInsights();
  renderDateControls();
  renderMarketColumnLabels();
  renderMatchList();
  renderDetail();
  renderSandbox();
  renderBetslip();
}

function renderSources() {
  elements.sourceList.innerHTML = sourceDefinitions.map((source) => `
    <div class="source-item">
      <strong>${source.name}</strong>
      <span class="source-state">${source.status}</span>
      <small>${source.detail}</small>
      <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">查看來源或契約</a>
    </div>
  `).join("");
}

function renderIntegrations() {
  if (!elements.integrationGrid) return;
  elements.integrationGrid.innerHTML = integrationSources.map((source) => `
    <article class="integration-card">
      <span class="tag">${source.tag}</span>
      <strong>${source.name}</strong>
      <p>${source.detail}</p>
      <a href="${source.url}" target="_blank" rel="noreferrer">查看來源</a>
    </article>
  `).join("");
}

function renderWatchList() {
  if (!elements.watchList) return;
  elements.watchList.innerHTML = matches.map((match) => {
    const matchup = `${shortName(match.home)} vs ${shortName(match.away)}`;
    const query = encodeURIComponent(`FIFA World Cup 2026 ${shortName(match.home)} ${shortName(match.away)} highlights`);
    return `
      <article class="watch-card">
        <strong>#${match.number} ${matchup}</strong>
        <small>Group ${match.group} · ${match.date} ${match.time}</small>
        <div class="watch-actions">
          <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noreferrer">YouTube 官方搜尋</a>
          <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026" target="_blank" rel="noreferrer">FIFA 賽事頁</a>
          <a href="https://www.sportslottery.com.tw/" target="_blank" rel="noreferrer">台灣賽事表</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderMetrics() {
  const selected = getFilteredMatches();
  const avgConfidence = selected.length
    ? selected.reduce((sum, match) => sum + confidenceScore(match), 0) / selected.length
    : 0;
  const topEdge = selected.reduce((best, match) => {
    const edge = bestEdge(match);
    return Math.abs(edge.value) > Math.abs(best.value) ? edge : best;
  }, { value: 0, label: "無" });
  const favorites = selected.filter((match) => Math.max(...Object.values(blendedProbabilities(match))) > 0.55).length;
  elements.metricStrip.innerHTML = [
    metricTemplate("場次", selected.length, "目前篩選"),
    metricTemplate("信心", `${Math.round(avgConfidence)}%`, "模型平均"),
    metricTemplate("熱門", favorites, "勝率 > 55%"),
    metricTemplate("差距", pct(Math.abs(topEdge.value)), topEdge.label)
  ].join("");
}

function renderInsights() {
  const selected = getFilteredMatches();
  const topEdges = selected
    .map((match) => ({ match, edge: bestEdge(match), confidence: confidenceScore(match) }))
    .sort((a, b) => Math.abs(b.edge.value) - Math.abs(a.edge.value))
    .slice(0, 3);
  if (!topEdges.length) {
    elements.insightRail.innerHTML = "";
    return;
  }
  elements.insightRail.innerHTML = topEdges.map(({ match, edge, confidence }) => `
    <article class="insight-card">
      <span>值得複查</span>
      <strong>#${match.number} ${shortName(match.home)} vs ${shortName(match.away)}</strong>
      <small>${edge.label} 盤口差距 ${edgeLabel(edge.value)}，模型信心 ${Math.round(confidence)}%。</small>
    </article>
  `).join("");
}

function metricTemplate(label, value, footnote) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong><small>${footnote}</small></div>`;
}

function renderDateControls() {
  if (!elements.dateTabs || !elements.dateRail) return;
  const baseMatches = [...getFilteredMatches({ ignoreDate: true })].sort((a, b) => a.number - b.number);
  const dateEntries = getDateEntries(baseMatches);
  if (selectedDateFilter !== "all" && !dateEntries.some((entry) => entry.date === selectedDateFilter)) {
    selectedDateFilter = "all";
  }
  const totalCount = baseMatches.length;
  const tabButtons = [
    dateTabButton("all", "全部日期", totalCount),
    ...dateEntries.map((entry) => dateTabButton(entry.date, compactDateLabel(entry.date), entry.count))
  ].join("");
  const railButtons = [
    dateRailButton("all", "全部賽事", totalCount),
    ...dateEntries.map((entry) => dateRailButton(entry.date, dateLongLabel(entry.date), entry.count))
  ].join("");
  elements.dateTabs.innerHTML = tabButtons;
  elements.dateRail.innerHTML = railButtons;
  if (elements.catalogMatchTotal) elements.catalogMatchTotal.textContent = matches.length;
  bindDateFilterButtons();
}

function dateTabButton(value, label, count) {
  const active = selectedDateFilter === value ? " active" : "";
  return `<button class="${active}" data-date-filter="${value}" type="button" role="tab" aria-selected="${selectedDateFilter === value}"><span>${label}</span><small>${count} 場</small></button>`;
}

function dateRailButton(value, label, count) {
  const active = selectedDateFilter === value ? " active" : "";
  return `<button class="${active}" data-date-filter="${value}" type="button"><span>${label}</span><strong>${count}</strong></button>`;
}

function bindDateFilterButtons() {
  document.querySelectorAll("[data-date-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDateFilter = button.dataset.dateFilter;
      renderMetrics();
      renderInsights();
      renderDateControls();
      renderMatchList();
    });
  });
}

function renderMarketColumnLabels() {
  if (!elements.marketColumnLabels) return;
  const labels = {
    h2h: ["主勝", "和局", "客勝"],
    spread: ["主隊讓分", "客隊受讓", "和局"],
    total: ["大分", "小分", "和局"]
  }[elements.marketFilter.value] || ["主勝", "和局", "客勝"];
  elements.marketColumnLabels.innerHTML = `
    <span>場次資訊</span>
    <span>模型勝率</span>
    <div>${labels.map((label) => `<strong>${label}</strong>`).join("")}</div>
  `;
}

function renderMatchList() {
  const market = elements.marketFilter.value;
  const sorted = [...getFilteredMatches()].sort((a, b) => sortMatches(a, b));
  elements.matchCount.textContent = `${sorted.length} 場`;
  if (!sorted.length) {
    elements.matchList.innerHTML = `<div class="empty-state">目前篩選沒有符合的場次。</div>`;
    return;
  }
  const grouped = groupMatchesByDate(sorted);
  elements.matchList.innerHTML = grouped.map(([date, dateMatches]) => `
    <section class="coupon-date-section" data-date-section="${date}">
      <div class="coupon-date-header">
        <div>
          <span>${dateLongLabel(date)}</span>
          <strong>${dateMatches.length} 場賽事</strong>
        </div>
        <small>依目前篩選與排序呈現</small>
      </div>
      ${dateMatches.map((match) => matchCard(match, market)).join("")}
    </section>
  `).join("");
  elements.matchList.querySelectorAll("[data-match-id]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      selectedMatchId = card.dataset.matchId;
      lastFocusedMatchCard = card;
      renderMatchList();
      renderDetail();
      renderSandbox();
      openRulesModal(selectedMatchId);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectedMatchId = card.dataset.matchId;
        lastFocusedMatchCard = card;
        renderMatchList();
        renderDetail();
        renderSandbox();
        openRulesModal(selectedMatchId);
      }
    });
  });
  elements.matchList.querySelectorAll("[data-pick]").forEach((button) => {
    button.addEventListener("click", () => addPick(JSON.parse(button.dataset.pick)));
  });
  elements.matchList.querySelectorAll("[data-rule-match]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.ruleMatch;
      renderMatchList();
      renderDetail();
      renderSandbox();
      openRulesModal(selectedMatchId);
    });
  });
}

function matchCard(match, market) {
  const probs = blendedProbabilities(match);
  const edges = valueEdges(match);
  const home = teamProfiles[match.home];
  const away = teamProfiles[match.away];
  const isSelected = match.id === selectedMatchId ? " selected" : "";
  const lead = bestEdge(match);
  const status = liveStatus(match);
  return `
    <article class="match-card coupon-row${isSelected}" data-match-id="${match.id}" tabindex="0" aria-label="${shortName(match.home)} 對 ${shortName(match.away)} 賽事規格">
      <div class="match-meta">
        <div class="coupon-meta-line">
          <span class="match-id">#${match.number}</span>
          <span class="status-chip ${status.type}">${status.label}</span>
          <span>${match.time}</span>
        </div>
        <div class="teams">
          ${teamLine(home, match.home)}
          ${teamLine(away, match.away)}
        </div>
        <div class="match-tools">
          <span>Group ${match.group} · ${lead.label} ${edgeLabel(lead.value)}</span>
          <button class="rule-chip" type="button" data-rule-match="${match.id}">規格卡</button>
        </div>
      </div>
      <div class="prob-bars">
        ${probRow(shortName(match.home), probs.home, "home")}
        ${probRow("和局", probs.draw, "draw")}
        ${probRow(shortName(match.away), probs.away, "away")}
      </div>
      <div class="markets">
        ${marketButtons(match, market, edges)}
      </div>
    </article>
  `;
}

function teamLine(team, code) {
  return `
    <div class="team-row">
      <span class="team-name">${team.name}</span>
      <span class="rating">${code} · ${team.rating}</span>
    </div>
  `;
}

function probRow(label, probability, type) {
  return `
    <div class="prob-row">
      <span>${label}</span>
      <div class="track"><div class="fill ${type}" style="width:${Math.round(probability * 100)}%"></div></div>
      <strong>${pct(probability)}</strong>
    </div>
  `;
}

function marketButtons(match, market, edges) {
  if (market === "spread") {
    const line = averageSpread(match);
    return [
      pickButton(match, "讓分", `${shortName(match.home)} ${formatPoint(line.point)}`, line.home, "spread_home", edges.home),
      pickButton(match, "讓分", `${shortName(match.away)} ${formatPoint(-line.point)}`, line.away, "spread_away", edges.away),
      pickButton(match, "不讓分", "和局", averageH2h(match).draw, "draw", edges.draw)
    ].join("");
  }
  if (market === "total") {
    const line = averageTotal(match);
    return [
      pickButton(match, "大小", `大 ${line.point}`, line.over, "over", 0.02),
      pickButton(match, "大小", `小 ${line.point}`, line.under, "under", -0.01),
      pickButton(match, "不讓分", "和局", averageH2h(match).draw, "draw", edges.draw)
    ].join("");
  }
  const line = averageH2h(match);
  return [
    pickButton(match, "不讓分", shortName(match.home), line.home, "home", edges.home),
    pickButton(match, "不讓分", "和局", line.draw, "draw", edges.draw),
    pickButton(match, "不讓分", shortName(match.away), line.away, "away", edges.away)
  ].join("");
}

function pickButton(match, marketName, label, odds, pickType, edge) {
  const payload = {
    id: `${match.id}-${pickType}`,
    matchId: match.id,
    matchNumber: match.number,
    market: marketName,
    label,
    odds,
    edge,
    matchup: `${shortName(match.home)} vs ${shortName(match.away)}`
  };
  const edgeClass = edge < 0 ? "edge negative" : "edge";
  return `
    <button class="market-button" type="button" data-pick='${JSON.stringify(payload)}'>
      <strong>${label}</strong>
      <span>${odds.toFixed(2)} · <em class="${edgeClass}">${edgeLabel(edge)}</em></span>
    </button>
  `;
}

function renderDetail() {
  const match = matches.find((item) => item.id === selectedMatchId);
  if (!match) {
    elements.matchDetail.innerHTML = `<div class="detail-empty">請先選擇一場比賽。</div>`;
    return;
  }
  const home = teamProfiles[match.home];
  const away = teamProfiles[match.away];
  const probs = blendedProbabilities(match);
  const top = bestEdge(match);
  const h2h = averageH2h(match);
  const spread = averageSpread(match);
  const total = averageTotal(match);
  elements.matchDetail.innerHTML = `
    <div class="detail-grid">
      <div class="detail-score">
        <strong>${home.name}</strong>
        <span class="versus">VS</span>
        <strong>${away.name}</strong>
      </div>
      <div class="analysis-list">
        ${analysisItem("賽事", `#${match.number} Group ${match.group} · ${match.date} ${match.time}`)}
        ${analysisItem("勝率", `${home.name} ${pct(probs.home)} / 和局 ${pct(probs.draw)} / ${away.name} ${pct(probs.away)}`)}
        ${analysisItem("強弱勢", `${home.name}：${home.recent} ${away.name}：${away.recent}`)}
        ${analysisItem("模型差距", `${top.label} ${edgeLabel(top.value)}，代表模型機率與盤口隱含機率的落差。`)}
        ${analysisItem("台灣運彩", "足球全場玩法以 90 分鐘加傷停補時為主，不含延長賽與PK。")}
      </div>
      <div class="bookmaker-grid">
        ${bookmakerLine("不讓分", `${h2h.home.toFixed(2)} / ${h2h.draw.toFixed(2)} / ${h2h.away.toFixed(2)}`)}
        ${bookmakerLine("讓分", `${formatPoint(spread.point)} · ${spread.home.toFixed(2)} / ${spread.away.toFixed(2)}`)}
        ${bookmakerLine("大小", `${total.point} · 大 ${total.over.toFixed(2)} / 小 ${total.under.toFixed(2)}`)}
      </div>
      <div class="warning-note">本頁僅為資料分析與模擬下單，不是投注建議，也不會連接真實投注交易。</div>
    </div>
  `;
}

function renderSandbox() {
  if (!elements.sandboxResult) return;
  const match = matches.find((item) => item.id === selectedMatchId);
  if (!match) return;
  const homeGoals = clamp(Number(elements.homeGoalInput.value) || 0, 0, 8);
  const awayGoals = clamp(Number(elements.awayGoalInput.value) || 0, 0, 8);
  const shock = Number(elements.marketShockInput.value) || 0;
  const probs = blendedProbabilities(match);
  const goalSwing = clamp((homeGoals - awayGoals) * 0.08 + shock / 300, -0.24, 0.24);
  const simulated = normalize({
    home: clamp(probs.home + goalSwing, 0.05, 0.88),
    draw: clamp(probs.draw - Math.abs(goalSwing) * 0.45, 0.08, 0.34),
    away: clamp(probs.away - goalSwing, 0.05, 0.88)
  });
  const best = Object.entries(simulated).sort((a, b) => b[1] - a[1])[0];
  const labelMap = {
    home: shortName(match.home),
    draw: "和局",
    away: shortName(match.away)
  };
  const selectedValue = betslip.length ? estimatePayout() : 0;
  elements.sandboxResult.innerHTML = `
    <div class="sandbox-scoreline">
      <strong>${shortName(match.home)} ${homeGoals} : ${awayGoals} ${shortName(match.away)}</strong>
      <span>市場波動 ${shock > 0 ? "+" : ""}${shock}%</span>
    </div>
    <div class="sandbox-bars">
      ${sandboxBar(shortName(match.home), simulated.home, "home")}
      ${sandboxBar("和局", simulated.draw, "draw")}
      ${sandboxBar(shortName(match.away), simulated.away, "away")}
    </div>
    <div class="sandbox-callout">
      <span>目前情境傾向</span>
      <strong>${labelMap[best[0]]} · ${pct(best[1])}</strong>
      <small>${betslip.length ? `投注單預估返還 ${currency(selectedValue)}` : "尚未加入投注單，可先點盤口測試。"}</small>
    </div>
  `;
}

function sandboxBar(label, probability, type) {
  return `
    <div class="sandbox-bar">
      <span>${label}</span>
      <div class="track"><div class="fill ${type}" style="width:${Math.round(probability * 100)}%"></div></div>
      <strong>${pct(probability)}</strong>
    </div>
  `;
}

function openRulesModal(matchId) {
  const match = matches.find((item) => item.id === matchId);
  if (!match) return;
  const h2h = averageH2h(match);
  const spread = averageSpread(match);
  const total = averageTotal(match);
  const probs = blendedProbabilities(match);
  elements.rulesContent.innerHTML = `
    <p class="eyebrow">臺彩規格卡 · #${match.number}</p>
    <h2 id="rulesTitle">${shortName(match.home)} vs ${shortName(match.away)}</h2>
    <div class="rules-grid">
      <article>
        <span>玩法</span>
        <strong>勝平負</strong>
        <small>${shortName(match.home)} ${h2h.home.toFixed(2)} · 和 ${h2h.draw.toFixed(2)} · ${shortName(match.away)} ${h2h.away.toFixed(2)}</small>
      </article>
      <article>
        <span>讓分</span>
        <strong>${formatPoint(spread.point)}</strong>
        <small>主 ${spread.home.toFixed(2)} · 客 ${spread.away.toFixed(2)}</small>
      </article>
      <article>
        <span>大小</span>
        <strong>${total.point}</strong>
        <small>大 ${total.over.toFixed(2)} · 小 ${total.under.toFixed(2)}</small>
      </article>
      <article>
        <span>模型勝率</span>
        <strong>${pct(probs.home)} / ${pct(probs.draw)} / ${pct(probs.away)}</strong>
        <small>主勝 / 和局 / 客勝</small>
      </article>
    </div>
    <div class="rules-note">
      足球全場依 90 分鐘加傷停補時模擬，不含延長賽與 PK。本系統只做沙盤推演與模擬投注單，不送出真實交易。
    </div>
  `;
  elements.rulesModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.rulesClose.focus();
}

function closeRulesModal() {
  elements.rulesModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedMatchCard) lastFocusedMatchCard.focus();
}

function analysisItem(label, value) {
  return `<div class="analysis-item"><span>${label}</span><div>${value}</div></div>`;
}

function bookmakerLine(label, value) {
  return `<div class="bookmaker-line"><strong>${label}</strong>${value}</div>`;
}

function addPick(pick) {
  const sameMatchIndex = betslip.findIndex((item) => item.matchId === pick.matchId);
  if (sameMatchIndex >= 0) {
    betslip.splice(sameMatchIndex, 1, pick);
  } else {
    betslip.push(pick);
  }
  renderBetslip();
  renderSandbox();
}

function renderBetslip() {
  if (!betslip.length) {
    elements.betslipList.innerHTML = `<div class="detail-empty">點選盤口即可加入模擬單。</div>`;
  } else {
    elements.betslipList.innerHTML = betslip.map((pick) => `
      <div class="slip-pick">
        <div>
          <strong>#${pick.matchNumber} ${pick.market} · ${pick.label}</strong>
          <small>${pick.matchup} · ${pick.odds.toFixed(2)} · ${edgeLabel(pick.edge)}</small>
        </div>
        <button class="remove-pick" type="button" data-remove-pick="${pick.id}">×</button>
      </div>
    `).join("");
    elements.betslipList.querySelectorAll("[data-remove-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        betslip = betslip.filter((pick) => pick.id !== button.dataset.removePick);
        renderBetslip();
        renderSandbox();
      });
    });
  }
  elements.payoutEstimate.textContent = currency(estimatePayout());
}

function createTicket() {
  if (!betslip.length) return;
  const stake = cleanStake();
  const payout = estimatePayout();
  tickets.unshift({
    id: `SIM-${Date.now().toString().slice(-6)}`,
    mode: slipMode === "single" ? "單場" : "串關",
    count: betslip.length,
    stake,
    payout
  });
  betslip = [];
  renderBetslip();
  renderSandbox();
  renderTickets();
}

function renderTickets() {
  elements.ticketHistory.innerHTML = tickets.slice(0, 4).map((ticket) => `
    <div class="ticket">
      <strong>${ticket.id} · ${ticket.mode} ${ticket.count} 關</strong>
      注金 ${currency(ticket.stake)} · 預估返還 ${currency(ticket.payout)}
    </div>
  `).join("");
}

async function connectEndpoint() {
  const endpoint = elements.proxyEndpoint.value.trim();
  if (!endpoint) {
    elements.refreshLabel.textContent = "請先輸入 proxy 端點";
    return;
  }
  elements.refreshLabel.textContent = "嘗試連線中";
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (Array.isArray(payload.matches)) {
      matches = payload.matches.map(normalizeExternalMatch);
      selectedMatchId = matches[0]?.id || selectedMatchId;
      selectedDateFilter = "all";
      buildGroupShortcuts();
      updateGroupShortcutState();
      elements.refreshLabel.textContent = "外部資料已載入";
      render();
    } else {
      elements.refreshLabel.textContent = "端點格式不符";
    }
  } catch (error) {
    elements.refreshLabel.textContent = "連線失敗，已保留示範資料";
  }
}

function normalizeExternalMatch(match, index) {
  const home = teamCodeFromInput(match.home || match.home_team || "MEX");
  const away = teamCodeFromInput(match.away || match.away_team || "RSA");
  return {
    id: match.id || `EXT-${index + 1}`,
    number: match.number || index + 1,
    group: match.group || "API",
    home,
    away,
    date: match.date || "Live",
    time: match.time || "",
    venue: match.venue || "外部資料",
    odds: match.odds || buildOdds({ home, away })
  };
}

function teamCodeFromInput(value) {
  const normalized = String(value).trim().toLowerCase();
  const direct = normalized.toUpperCase();
  if (teamProfiles[direct]) return direct;
  const found = Object.entries(teamProfiles).find(([code, team]) => {
    return code.toLowerCase() === normalized || team.name.toLowerCase() === normalized;
  });
  return found ? found[0] : "MEX";
}

function getFilteredMatches(options = {}) {
  const query = elements.searchInput?.value.trim().toLowerCase() || "";
  const group = elements.groupFilter?.value || "all";
  const date = options.ignoreDate ? "all" : selectedDateFilter;
  return matches.filter((match) => {
    const home = teamProfiles[match.home]?.name || match.home;
    const away = teamProfiles[match.away]?.name || match.away;
    const text = `${match.number} ${match.group} ${match.home} ${match.away} ${home} ${away}`.toLowerCase();
    return (group === "all" || match.group === group)
      && (date === "all" || match.date === date)
      && (!query || text.includes(query));
  });
}

function getDateEntries(matchList) {
  return groupMatchesByDate(matchList).map(([date, dateMatches]) => ({
    date,
    count: dateMatches.length
  }));
}

function groupMatchesByDate(matchList) {
  const groups = new Map();
  matchList.forEach((match) => {
    if (!groups.has(match.date)) groups.set(match.date, []);
    groups.get(match.date).push(match);
  });
  return [...groups.entries()].sort((a, b) => dateOrder(a[0]) - dateOrder(b[0]));
}

function dateOrder(date) {
  const parsed = parseFixtureDate(date);
  return parsed ? parsed.getTime() : Number.MAX_SAFE_INTEGER;
}

function parseFixtureDate(date) {
  const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };
  const [month, day] = String(date).split(" ");
  if (!(month in monthMap) || !Number(day)) return null;
  return new Date(2026, monthMap[month], Number(day));
}

function compactDateLabel(date) {
  const parsed = parseFixtureDate(date);
  if (!parsed) return date;
  return `${parsed.getMonth() + 1}/${parsed.getDate()}`;
}

function dateLongLabel(date) {
  const parsed = parseFixtureDate(date);
  if (!parsed) return date;
  const weekday = new Intl.DateTimeFormat("zh-TW", { weekday: "short" }).format(parsed);
  return `${compactDateLabel(date)} ${weekday}`;
}

function liveStatus(match) {
  if (match.number === 1) return { label: "LIVE", type: "live" };
  if (match.number % 9 === 0) return { label: "焦點", type: "hot" };
  if (match.number % 5 === 0) return { label: "快開", type: "soon" };
  return { label: "賽前", type: "pre" };
}

function updateGroupShortcutState() {
  if (!elements.groupShortcutList) return;
  const selectedGroup = elements.groupFilter.value;
  elements.groupShortcutList.querySelectorAll("[data-group-shortcut]").forEach((button) => {
    button.classList.toggle("active", button.dataset.groupShortcut === selectedGroup);
  });
}

function updateMarketShortcutState() {
  document.querySelectorAll("[data-market-shortcut]").forEach((button) => {
    button.classList.toggle("active", button.dataset.marketShortcut === elements.marketFilter.value);
  });
}

function sortMatches(a, b) {
  const sort = elements.sortSelect.value;
  if (sort === "time") return a.number - b.number;
  if (sort === "confidence") return confidenceScore(b) - confidenceScore(a);
  return Math.abs(bestEdge(b).value) - Math.abs(bestEdge(a).value);
}

function averageH2h(match) {
  return {
    home: average(match.odds.h2h.map((line) => line.home)),
    draw: average(match.odds.h2h.map((line) => line.draw)),
    away: average(match.odds.h2h.map((line) => line.away))
  };
}

function averageSpread(match) {
  return {
    home: average(match.odds.spread.map((line) => line.home)),
    away: average(match.odds.spread.map((line) => line.away)),
    point: match.odds.spread[0].point
  };
}

function averageTotal(match) {
  return {
    over: average(match.odds.total.map((line) => line.over)),
    under: average(match.odds.total.map((line) => line.under)),
    point: match.odds.total[0].point
  };
}

function handicapLine(match) {
  const diff = teamProfiles[match.home].rating - teamProfiles[match.away].rating;
  if (Math.abs(diff) < 70) return 0;
  if (Math.abs(diff) < 145) return diff > 0 ? -0.5 : 0.5;
  if (Math.abs(diff) < 245) return diff > 0 ? -1 : 1;
  return diff > 0 ? -1.5 : 1.5;
}

function totalLine(match) {
  const home = teamProfiles[match.home];
  const away = teamProfiles[match.away];
  const tempo = (home.attack + away.attack - home.defense - away.defense) / 45;
  if (tempo > 0.45) return 3;
  if (tempo < -0.2) return 2;
  return 2.5;
}

function priceFromProbability(probability) {
  const withMargin = clamp(probability, 0.08, 0.82) * 1.055;
  return roundOdds(1 / withMargin);
}

function confidenceScore(match) {
  const probs = blendedProbabilities(match);
  const values = Object.values(probs).sort((a, b) => b - a);
  return clamp((values[0] - values[1]) * 155 + 42, 35, 92);
}

function bestEdge(match) {
  const edges = valueEdges(match);
  const labels = {
    home: shortName(match.home),
    draw: "和局",
    away: shortName(match.away)
  };
  return Object.entries(edges).reduce((best, [key, value]) => {
    return Math.abs(value) > Math.abs(best.value) ? { label: labels[key], value } : best;
  }, { label: "無", value: 0 });
}

function estimatePayout() {
  const stake = cleanStake();
  if (!betslip.length) return 0;
  if (slipMode === "parlay") {
    return betslip.reduce((product, pick) => product * pick.odds, stake);
  }
  return betslip.reduce((sum, pick) => sum + stake * pick.odds, 0);
}

function cleanStake() {
  const parsed = Number(elements.stakeInput.value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function normalize(values) {
  const total = Object.values(values).reduce((sum, value) => sum + value, 0);
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value / total]));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundOdds(value) {
  return Math.round(value * 100) / 100;
}

function pct(value) {
  return `${Math.round(value * 100)}%`;
}

function edgeLabel(value) {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${Math.round(value * 100)}%`;
}

function formatPoint(value) {
  if (value > 0) return `+${value}`;
  return String(value);
}

function shortName(code) {
  return teamProfiles[code]?.name || code;
}

function currency(value) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0
  }).format(value);
}

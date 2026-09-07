# v1.37.0｜2019 春季作品與歌曲發行版本 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 資料範圍

- 新增 2019 年版《魔法水果籃》第一季、《一弦定音！》及《MIX》，共 3 套 TV 作品、10 筆 OP／ED 與 6 筆官方影片 metadata。
- 春季快照共 20 套作品、48 筆歌曲；2019 春、夏季仍在補充，2025 秋季尚未收錄。
- 依官方原始公告、台灣出版社與季度交叉資料核對首播日及深夜編輯時段；既有《一弦定音！》秋季部分與《魔法水果籃》第二季維持獨立條目。
- 《Again》採用官方更正後的 2019-04-12 數位配信日；2020 年英文重錄不新增為另一首 2019 OP。《Chime》的 2019-07-05 數位先行配信與 2019-09-04 CD 日期分開，第一季前後半四首歌曲保留各自用途。
- 《One Step Closer》保留 Nicole Morier、Drew Erickson 與 William Aoyama 的共同 `Written by` 署名，使用 `songwriting` 角色，不推定個別作詞或作曲分工。官方動畫剪輯與藝人完整 MV 分開；約 100 秒的 OP 影片保留預覽分類。
- 《Speechless》保留兩位作曲者及兩位編曲者；《MIX》後半 OP 保留共同編曲，《君に伝えたストーリー》保留中園勇樹演唱與作詞，以及官方公告的起用日期和 TV Size 收錄註記。未核對個別署名不從團體成員名單推論。
- 每首歌曲保留第一方與交叉核對來源，核對日期為 2026-09-07；沒有新增未核對圖片、下載或重新託管媒體。

## 本機驗收

- `npm run catalog:check`：7 個檔案、188 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、286 項單元測試、build、Cloudflare dry-run 及 28 項 Playwright 測試全部通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,981 個 HTML 頁面，3,961 個公開產物通過邊界檢查；Wrangler 讀取 5,947 個 Static Assets，0 application bindings。
- 全目錄為 29 個季度快照、1,937 個唯一作品、4,277 筆 OP／ED 與 1,781 筆官方／正式授權影片 metadata。
- 對照 v1.36.0，1,963 份既有 API JSON 逐位元相同；只修改春季清單及新增 3 份作品檔案，沒有移除。既有續季 API 不變。
- Chromium 1280px 與 390×844 核對年份目錄 → 春季、共同創作者搜尋 → Speechless、數位與 CD 版本文字、共同詞曲署名、雙影片選擇及 MIX 後半 ED，共 14 個操作畫面。
- 畫面沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層，明確操作前沒有 iframe 或 YouTube 媒體連線。鍵盤 Enter 透過受控播放器回應核對選中的完整 MV，而非同首歌曲的動畫剪輯。
- 既有 320px 窄螢幕、星期篩選、分頁、無 JavaScript 導覽、完整來源清單、離線、404、圖片 fallback 與 API 錯誤邊界回歸測試通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

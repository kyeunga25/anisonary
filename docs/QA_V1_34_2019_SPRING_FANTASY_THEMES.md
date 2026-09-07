# v1.34.0｜2019 春季作品與歌曲版本 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 資料範圍

- 新增《賢者之孫》、《拾又之國》與《消滅都市》，共 3 套 TV 作品、6 筆 OP／ED 及 6 筆官方影片 metadata。
- 春季快照共 11 套作品、24 筆歌曲；2019 春、夏季仍在補充，2025 秋季尚未收錄。
- 依原始播出公告記錄日本 TV 首播：《賢者之孫》為 2019-04-10、AT-X 星期三 23:30；另兩套為 2019-04-07、TOKYO MX 星期日 22:00／23:30。沒有用後來重播或海外上線日期取代首播。
- 《賢者之孫》第 6 話使用同一首 ED 的 MV 畫面，保留版本註記而不重複增加歌曲。OP 官方頁面的部分共同署名不一致，受影響署名留空，保留可一致核對的 credits。
- 《消滅都市》的《With Your Breath》保留 ED2 序號、SPR5 五位演唱者及兩位作詞者；未取得足夠第一方 OP／ED 用途證據的曲目不加入。
- 《Dash&Daaash!!》的 TV Size 配信日期為 2019-06-05、完整版單曲為 2019-06-19；《答》分別為 2019-04-08 與 2019-05-08。卡片同時顯示兩個日期，API `releaseDate` 對應明示的完整版。
- 《The Key》保留唱片公司列出的動畫片尾剪輯版名稱；短版及未確認完整長度的官方影片不標作完整版 MV。
- 新資料省略未核對圖片；每首歌曲都有第一方及交叉核對來源，核對日期為 2026-09-07。影片只保存官方渠道、標題、ID 與 oEmbed metadata，不下載或重新託管媒體。

## 本機驗收

- `npm run catalog:check`：7 個檔案、176 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、274 項單元測試、build、Cloudflare dry-run 及 23 項 Playwright 測試全部通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,972 個 HTML 頁面，3,943 個公開產物通過邊界檢查；Wrangler 讀取 5,920 個 Static Assets，0 application bindings。
- 全目錄為 29 個季度快照、1,928 個唯一作品、4,253 筆 OP／ED 與 1,768 筆官方／正式授權影片 metadata。
- 對照 v1.33.0 建置，1,954 份既有 API 檔案逐位元相同；只更新春季清單並新增 3 份作品檔案，沒有移除檔案，API v1 契約不變。
- Chromium 1280px 與 390×844 實際操作年份目錄 → 春季 → 搜尋演唱者 → ED2，確認五位演唱者及正確歌曲錨點，另檢查 TV Size／完整版日期顯示。
- 畫面沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層、未經操作建立的 iframe 或 YouTube 媒體連線。
- 保留分頁、320px 窄螢幕、無 JavaScript 原生導覽、星期篩選、手機鍵盤、離線閱讀、404、圖片 fallback 及 API 錯誤邊界測試；新增官方影片的明確同意流程以受控播放器回應驗證正確 ID。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

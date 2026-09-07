# v1.36.0｜2019 春季歌唱者與演唱版本 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 資料範圍

- 新增《凱洛與塔斯黛》、《RobiHachi》及《戀愛幕末男友外傳 危機》，共 3 套 TV 作品、8 筆 OP／ED 與 1 筆官方試聽影片 metadata。
- 春季快照共 17 套作品、38 筆歌曲；2019 春、夏季仍在補充，2025 秋季尚未收錄。
- 依原始官方公告保留日本編輯播出日及深夜時段，並以公開作品識別交叉連結核對 TV 身份；沒有新增未核對圖片或查詢受限的來源 API。
- 《凱洛與塔斯黛》採用 Netflix 台灣正式名稱，分開前、後半 OP／ED；歌唱者 Nai Br.XX、Celeina Ann 與 Alisa 不以對白配音員取代。保留兩張單曲的發行日期、TV size 收錄註記及已核對製作署名。
- 《RobiHachi》OP 的發行藝人、一般版 Hatchi 演唱與另收錄的 H☆R version 分開表達，不把額外單曲版本增加為另一首 OP；ED 保留三位已核對演唱者。官方網站連結的 OP 試聽維持預覽分類。
- 《戀愛幕末男友外傳 危機》使用第二季歌曲及原始單曲日期；《青き炎》依 Zwei 官方的「アオキホムラ」讀音整理為 Aoki Homura，沒有沿用交叉索引的不同讀音。
- 未取得第一方用途、個別署名或頻道歸屬證據的特殊片尾、創作者及影片未加入。每首歌曲保留第一方與交叉核對來源，核對日期為 2026-09-07；沒有下載或重新託管媒體。

## 本機驗收

- `npm run catalog:check`：7 個檔案、184 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、282 項單元測試、build、Cloudflare dry-run 及 27 項 Playwright 測試全部通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,978 個 HTML 頁面，3,955 個公開產物通過邊界檢查；Wrangler 讀取 5,938 個 Static Assets，0 application bindings。
- 全目錄為 29 個季度快照、1,934 個唯一作品、4,267 筆 OP／ED 與 1,775 筆官方／正式授權影片 metadata。
- 對照 v1.35.1，1,960 份既有 API JSON 逐位元相同；只修改春季清單及新增 3 份作品檔案，沒有移除。
- Chromium 1280px 與 390×844 核對春季目錄、Alisa 創作者搜尋、後半 ED、RobiHachi 演唱版與 Aoki Homura 歌曲搜尋，共 10 個操作畫面；沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層，明確操作前沒有 iframe 或 YouTube 媒體連線。
- 春季星期導覽顯示七個有資料的播出日；搜尋分頁在新增作品後保持正確。鍵盤 Enter 透過受控播放器回應驗證 OP 試聽的正確影片 ID。
- 既有 320px 窄螢幕、無 JavaScript 導覽、完整來源清單、離線、404、圖片 fallback 與 API 錯誤邊界回歸測試通過。未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

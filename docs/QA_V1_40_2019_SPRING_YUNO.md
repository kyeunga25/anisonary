# v1.40.0｜2019 春季 YU-NO QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 資料範圍

- 新增《YU-NO 在這世界盡頭詠唱愛的少女》2019 年 TV 版、4 筆 OP／ED 與 2 筆官方短版 MV metadata。依繁中作品頁、公開作品識別頁及動畫官方播出資料核對，首播為 2019-04-02，AT-X 每週二 23:00。
- 保留現世編及異世界編各自的 OP／ED；前篇由亜咲花演唱 OP、鈴木このみ演唱 ED，後篇交換用途。原作遊戲、早期 OVA、追加篇及其他專輯收錄曲沒有混入。
- 四首歌均保留第一方、獨立交叉來源、語言及 2026-09-07 核對日期；詞曲、編曲與演唱者逐曲核對。
- 首支 OP 的完整高解析音源於 2019-04-17 先行配信，TV Size 為 2019-04-02，CD 為 2019-04-24。第一首 ED 完整版單曲為 2019-05-08。
- 後篇 OP「MOTHER」完整版專輯日期為 2019-11-06，ED「神の数式」完整版專輯日期為 2019-10-07；兩首 TV Size 均為 2019-08-07，分開標示。
- 107 秒短版 OP MV 與 90 秒 ED TV Size MV 均來自唱片公司官方渠道，沒有標作完整 MV；沒有新增圖片、下載媒體或自動播放。
- 歌曲來源組合支援明確審閱的獨立交叉來源，仍要求第一方及交叉核對資料齊備；既有來源輸出不變。

## 本機驗收

- `npm run catalog:check`：7 個檔案、199 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、297 項單元測試、build、Cloudflare dry-run 及 33 項 Playwright 測試通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,988 個 HTML 頁面，3,975 個公開產物通過邊界檢查；Wrangler 讀取 5,968 個 Static Assets，0 application bindings。
- 全目錄共 29 個季度、1,944 個唯一作品、4,292 筆 OP／ED 與 1,788 筆官方／正式授權影片 metadata。春季為 27 套作品與 63 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。
- 對照 v1.39.1，1,972 份既有 API JSON 逐位元相同；只更新春季清單及新增 1 份作品檔案，沒有移除。
- Chromium 1280px 與 390×844 核對年份目錄、春季、編曲者搜尋及四首歌曲的角色、日期、製作與影片版本，共 12 個畫面。
- 畫面沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層；明確操作前沒有 iframe 或 YouTube 媒體連線。既有星期篩選、影片同意、無 JavaScript、離線、404 與錯誤邊界回歸通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

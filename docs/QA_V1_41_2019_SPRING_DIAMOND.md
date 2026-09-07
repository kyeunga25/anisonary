# v1.41.0｜2019 春季《鑽石王牌 act2》QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 資料範圍

- 新增《鑽石王牌 act2》2019 年 TV 版、2 首 OP、4 首 ED 與 6 筆官方影片 metadata。依繁中作品頁、公開作品識別頁及東京電視台首集紀錄核對，首播為 2019-04-02、每週二 17:55；與 2026 年續篇分開。
- GLAY 的兩首 OP 分開保留詞曲署名。第一首完整 CD 為 2019-07-02，TV Size 為 2019-04-02；第二首完整 CD 為 2020-08-12，附上的動畫官方映像為 TV 版，不把較早 TV 版編曲署名套用到未核對的 CD 版本。
- 四首 ED 保留 OxT、内田真礼、三森すずこ及 OxT 的原始演唱次序；後來的 OxT 翻唱、管弦樂改編及演唱會版本沒有混入。
- 「鼓動エスカレーション」依藝人正式 CD 頁及完整 MV 保留 KanadeYUK、Tom-H@ck 共同編曲。「チャンス！」依藝人 CD 頁及唱片公司正式音源保留 hotaru 作詞、大石昌良作曲及大石昌良、yamazo 共同編曲。
- 「Everlasting Dream」標示 2020-02-05 CD 日期；官方另有先行配信紀錄，不宣稱 CD 日是首次數位上架日。兩首 OxT 歌曲未核對到足夠第一方個別製作署名，相關欄位保持空白；未補猜測的單集使用範圍。
- 每首歌保留第一方與獨立交叉來源、語言及 2026-09-07 核對日期。六個影片均核對官方渠道、標題及 oEmbed；TV 版、完整 MV、正式音源分開，沒有新增圖片或下載媒體。

## 本機驗收

- `npm run catalog:check`：7 個檔案、203 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、301 項單元測試、build、Cloudflare dry-run 及 34 項 Playwright 測試通過；`npm audit --audit-level=low` 為 0 項漏洞。目錄增加令搜尋頁數由 162 增至 163，已更新舊頁數斷言後完成最終檢查。
- 建置產生 1,989 個 HTML 頁面，3,977 個公開產物通過邊界檢查；Wrangler 讀取 5,971 個 Static Assets，0 application bindings。
- 全目錄共 29 個季度、1,945 個唯一作品、4,298 筆 OP／ED 與 1,794 筆官方／正式授權影片 metadata。春季為 28 套作品與 69 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。
- 對照 v1.40.2，1,973 份既有 API JSON 逐位元相同；只更新春季清單並新增作品檔案，沒有移除。
- Chromium 1280px 與 390×844 核對年份至季度導覽、作詞者搜尋及六首歌的演唱者、製作、日期與影片版本，共 16 個畫面；沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層及操作前的 iframe／YouTube 媒體連線。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

# v1.35.0｜2019 春季歌曲與 TV edit QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 資料範圍

- 新增《皿三昧》、《深夜的超自然公務員》與《Fairy gone》第一季，共 3 套 TV 作品、6 筆 OP／ED 與 6 筆官方影片 metadata。
- 春季快照共 14 套作品、30 筆歌曲；2019 春、夏季仍在補充，2025 秋季尚未收錄。
- 按日本編輯播出日整理深夜節目：《皿三昧》為 2019-04-11 星期四 24:55；另外兩套為 2019-04-07 星期日 24:30／24:00。保留原始播出公告及官方影片說明作證，沒有用 OVA、重播或秋季播出頁取代春季資料。
- 《皿三昧》OP 保留谷口鮪的演唱、作詞、作曲及 KANA-BOON 編曲；ED 保留已核對的北澤ゆうほ演唱與作詞。不同片尾畫面及劇中歌不重複增加為 OP／ED。
- 《深夜的超自然公務員》OP 保留福山潤與松井洋平共同作詞，OP／ED 動畫盤另收錄的 TV edit 使用版本註記，單曲發行日期分別為 2019-04-24 及 2019-05-15。
- 《Fairy gone》第一季歌曲與既有秋季條目分開；TV Size 另行配信，單曲版日期為 2019-04-24。團體介紹中的整體成員名單不當作個別歌曲的演唱證據，未核對署名留空。
- 官方 OP 映像、短版 MV、附演唱者留言的影片及無字幕 ED 依證據分類；未確認完整長度或無字幕的影片不標為完整版 MV 或無字幕 OP。
- 每首歌曲保留第一方及交叉核對來源，核對日期為 2026-09-07；沒有新增未核對圖片、下載或重新託管媒體。

## 本機驗收

- `npm run catalog:check`：7 個檔案、180 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、278 項單元測試、build、Cloudflare dry-run 及 25 項 Playwright 測試全部通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,975 個 HTML 頁面，3,949 個公開產物通過邊界檢查；Wrangler 讀取 5,929 個 Static Assets，0 application bindings。
- 全目錄為 29 個季度快照、1,931 個唯一作品、4,259 筆 OP／ED 與 1,774 筆官方／正式授權影片 metadata。
- 對照 v1.34.1，1,957 份既有 API JSON 逐位元相同；只修改春季清單及新增 3 份作品檔案，沒有移除，既有《Fairy gone》秋季 API 不變。
- Chromium 1280px 與 390×844 核對年份目錄 → 春季、按共同作詞者搜尋 → OP、TV edit、影片短版標題、《皿三昧》署名及《Fairy gone》ED，共 10 個操作畫面。
- 畫面沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層，明確操作前沒有 iframe 或 YouTube 媒體連線。鍵盤 Enter 透過受控播放器回應驗證正確 ED 影片 ID。
- 新增星期四作品後，星期導覽及影片篩選維持一致；既有分頁、320px 窄螢幕、無 JavaScript 導覽、離線、404、圖片 fallback 與 API 錯誤邊界回歸測試通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

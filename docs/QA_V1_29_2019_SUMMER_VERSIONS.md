# v1.29.0｜2019 夏季短篇、網絡連載與歌曲版本 QA

本記錄描述 repository source 與本機驗證。GitHub CI、正式部署及線上驗收仍須按固定 commit 獨立核對；本機通過不等於正式網站已更新。

## 資料範圍

- 2019 夏季增加《博多明太！麻辣子醬》、《闇芝居 第七季》、《拳願阿修羅》及《卡片戰鬥先導者 新右衛門篇》，共 4 套作品、9 筆 OP／ED、4 筆官方影片 metadata。
- 夏季快照累計 36 套作品（35 套 TV、1 套網絡連載）、99 筆歌曲；`coverageNote` 繼續明示尚在補充，2025 秋季仍未收錄。
- 修正 2019 秋季《拳願阿修羅 Part 2》：補回 Netflix 配信版的「KING & ASHLEY」及「Born This Way」，與 2020 年電視播出版歌曲分開。
- 全站累計 28 個季度、1,911 個唯一作品、4,225 筆 OP／ED 與 1,753 筆官方或正式授權影片 metadata；538 個唯一歌曲層 YouTube 直連保持不變。
- 新增與修正的歌曲保留第一方、交叉核對來源、來源語言及 2026-09-07 核對日期。新增作品使用無圖介面，沒有新增媒體 origin、下載或重新託管第三方媒體。

## 資料與相容性驗證

- 《博多明太！麻辣子醬》的 OP 明示為配信版，ED1／ED2 分別保留第 1～6 話及第 7～12 話用途；mathru@かにみそP 的創作 credits 與鳴花ヒメ・ミコト的合成演唱分開記錄。
- 《新右衛門篇》保留 2019-08-24 首播日及 2020 年的新 ED，不以歌曲發行年份改動作品季度，也不誤收遊戲主題曲。
- 《拳願阿修羅 Part 2》的 Netflix 配信版使用 OP1／ED1，電視版使用 OP2／ED2；現有官方無字幕影片隨其正確歌曲版本對應。這是歌曲序號修正，作品與季度 URL 不變。
- 歌曲的 `lastVerifiedAt` 可由季度模組維護；只修正歌曲時，`metadataVerifiedAt` 保留作品及圖片來源原有日期。兩者不增加 API v1 欄位，並通過 API provider 契約。
- 與上一版本比較，既有 1,933 個 API 檔案逐位元相同。只有 2019 夏季、2019 秋季快照及《拳願阿修羅 Part 2》詳情改變，另增加 4 個作品 API 檔案。

## 本機驗收

- `npm run catalog:check`：6 個檔案、157 項通過。
- 品質流程中的公開邊界、包含開發依賴的 `npm audit --audit-level=low`、Astro check、255 項單元測試、build 及 Cloudflare dry-run 通過。
- `npm run test:e2e`：在允許啟動 Chromium 的本機環境重跑，16 項通過；包含 API、CSP、搜尋私隱、分頁、手機鍵盤導覽、影片同意、離線、404 及新增版本定位。
- 建置產生 1,954 個 HTML 頁面，3,907 個公開產物通過邊界檢查；Wrangler 讀取 5,866 個 Static Assets，0 application bindings。
- 搜尋索引為 2,722,737 UTF-8 bytes，低於既有 8 MiB 上限；搜尋結果每頁最多 12 套作品。
- Chromium 1280px 及 390×844 額外核對夏季頁、配信／電視版歌曲卡、短篇輪替片尾及跨年 ED，沒有水平溢出或頁面程式錯誤，明確操作前沒有 YouTube iframe。
- 新增《博多明太！麻辣子醬》頁面可離線閱讀，並保留配信版與輪替 ED 標示。
- 實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 未在本切片重新驗證。

## 發布界線

正式發布仍須核對固定 PR head SHA、GitHub checks、合併結果、Workers Builds 正式部署與流量，再驗證 live routes、headers、API 及產物 hash。結果記錄於對應 GitHub Release；本文件不保存來源原始回應、研究候選、私人操作記錄或平台資源識別。

# Anisonary 公開架構

Anisonary 是以 repository-reviewed snapshot 驅動的靜態產品。資料、HTML、搜尋索引與唯讀 JSON 都在 build-time 由同一公開契約產生；production 不依賴 application Worker、資料庫、認證、即時 crawler 或第三方資料 API。

產品以公開線上網站與搜尋引擎收錄為優先。瀏覽器內搜尋是線上網站的篩選方式，不代表只供本機使用；資料增長時優先處理搜尋索引大小、重複派生與建置成本，再按實際寫入及查詢需求評估資料庫。已審閱來源以獨立本機備份保留，不以訪客裝置的離線快取充當資料備份。

## 資料與發佈流程

```text
reviewed seed files
        │
        ▼
CuratedProvider ──► Public* contract ──► Astro page-data loaders
        │                                  │
        │                                  ├─► HTML pages
        │                                  ├─► hashed search-index chunks + query routing + manifest
        │                                  └─► /api/v1/*.json
        │
        └─► catalogue invariants and provenance tests

Astro output ──► generated CSP ──► bounded service worker ──► Workers Static Assets
```

`ApiProvider` 是同一契約的外部唯讀入口，只用於 production contract 驗收或明確的 API build。它會深層重建核准欄位並拒絕不安全 URL、未知 identity、過大 response、redirect、非 JSON、逾時及跨 endpoint drift。失敗時不會改用 curated data 假裝成功。

測試直接使用已審閱目錄，錯誤情境只使用小型 inline inputs；application source 不保留虛構目錄或測試專用 provider。正常 build 沒有選擇 Mock Data 的環境開關。

## 目錄責任

| 位置 | 責任 |
|---|---|
| `src/data/curated-seeds/<year>/<quarter>.ts` | 按年份／季度分檔的已審閱作品與歌曲原始快照；每個作品只由一個季度檔案擁有 |
| `src/data/curated-season-registry.ts` | 集中登記季度顯示順序、季度索引與擁有者模組，並在載入時拒絕重複、缺失或跨季度漂移 |
| `src/data/curated-seeds.ts` | 保留既有匯入介面及作品順序的相容聚合層 |
| `src/data/curated-theme-sources/<year>/<quarter>.ts` | 按作品 owner 季度分檔的逐歌曲公開來源 ledger；只保存未加入核對日期的來源 seed |
| `src/data/curated-theme-sources.ts` | 合併各季度來源 ledger，拒絕錯誤 owner、重複 key、非 HTTPS、URL credentials、未知語言／角色及私人核對欄位 |
| `src/data/curated-theme-videos/<year>/<quarter>.ts` | 按作品 owner 季度分檔的已審閱官方影片 metadata；保留影片種類、頻道、官方狀態及嵌入設定 |
| `src/data/curated-theme-videos.ts` | 合併各季度影片 override，拒絕錯誤 owner、重複 key、無效或同曲重複的 YouTube ID、空欄位及未知欄位 |
| `src/data/curated-data.ts` | 其餘少量可審核 override 與公開 record 派生 |
| `src/types/public-api.ts` | HTML 與 static API 共用的公開契約 |
| `src/data/api-provider.ts` | 外部 JSON 的 fail-closed parser 與 request boundary |
| `src/data/page-data.ts` | 頁面需要的有界 provider 查詢、季度 membership 與錯誤狀態 |
| `src/data/catalog-limits.ts` | 目錄、搜尋與 live smoke 共用的作品、引用與 concurrency 上限 |
| `src/utils/catalog-directory.ts` | 從既有快照派生年代／年份／季度分類，不建立另一份資料來源 |
| `src/utils/catalog-search-index.ts` | 有 UTF-8 byte budget 的公開文字索引、跨季 membership、歌曲與 creator 篩選 |
| `src/data/catalog-search-assets.ts` | 將同一公開索引依原始順序與年份邊界切片，派生字詞路由並逐項還原比對；單片最多 256 KiB，以 SHA-256 命名；索引與路由共用既有 8 MiB 傳輸總量 gate |
| `src/utils/catalog-search-manifest.ts` | 64 KiB 內的 v3 清單、索引與路由的數量／網址／總量檢查，以及年份／季度分片選擇 |
| `src/utils/catalog-search-routing.ts` | 所有搜尋欄位的 1–4 個 UTF-16 單位子字串，映射至分片 membership；按字詞讀取最多 4 個路由 bucket，保守排除無關分片，最終仍由原有搜尋邏輯判斷 |
| `src/utils/catalog-search-codec.ts` | v2 無損傳輸格式：季度共用表、固定欄位及可重建前綴；其他文字保留原值。還原後的欄位、順序、ID 及搜尋文字須與原索引一致 |
| `src/pages/search-index/` | build-time 產生共享、唯讀、具內容版本的靜態 JSON；不屬於 API v1，不加入 sitemap |
| `src/pages/catalog/` | 固定入口下的年代目錄與年份靜態頁 |
| `src/utils/song-playlist.ts` | 將文字索引轉為不重複的歌曲列，保留季度 membership、用途、演唱者與動畫排序 |
| `src/components/playlist/` | 首頁、季度頁、歌曲列表與搜尋共用的緊湊歌曲列及控制項 |
| `src/pages/songs.astro` | 所有已發布季度的獨立歌曲列表 |
| `src/scripts/catalog-search.ts`、`src/scripts/catalog-index-loader.ts` | 首屏沿用 HTML；按字詞及季度選片、共用索引與路由快取、核對雜湊、最多 4 個並行請求、重試與過期結果防護；瀏覽器篩選、排序與歌曲 anchor 導航 |
| `src/pages/api/v1/` | build-time 靜態 JSON routes |
| `scripts/generate-security-headers.mjs` | 由 build output 產生 hash-based CSP；非可執行 JSON 資料不加入 script hash |
| `scripts/generate-service-worker.mjs` | 只為斷線提示與共用資產產生同源清單，512 KiB gate，無 runtime write |
| `scripts/backup-project.mjs` | 備份公開專案來源及未提交檔案，驗證逐檔 SHA-256，只還原至新目錄；備份不發布 |
| `scripts/build.mjs`、`scripts/build-state.mjs` | 執行既有完整 build gate，核對來源／設定／環境與產物雜湊；本機收據不發布 |
| `scripts/catalog-stats.mjs`、`scripts/catalog-statistics.mjs` | 從已驗證的公開 JSON 產生唯一 [統計文件](./CATALOG_STATS.md)，另即時計算當次產物容量；區分欄位盤點、人工核對與環境差異 |
| `scripts/verify.mjs`、`scripts/serve-e2e.mjs` | 共用批次／完整驗證入口，重用吻合的正常 build，依序建立獨立 API 錯誤情境 |
| `tests/` | catalogue、contract、component、browser、CSP 與 offline gates |

季度索引可重複引用跨季播放的同一作品，但 seed record、逐歌曲來源 ledger 與影片 override 不會跨季度檔案複製。新增季度時，必須先建立對應年份／季度模組，再加入 registry；registry 的 season identity、owner、index membership、source transport、影片欄位與唯一性檢查會在 build 及 catalogue test 中共同執行。來源及影片 override key 保留 metadata 變換前的 reviewed theme identity，避免修正 OP／ED 類型時令既有證據或媒體失聯。現有公開資料量仍適合由 Git 審閱的靜態 snapshot，因此本輪不引入 D1 或其他 runtime database，亦不改變 production 的純 Static Assets 邊界。

## 公開資料邊界

- season detail、anime detail 與 `PublicTheme` 都公開 `reviewState` 及 `verifiedAt`；season／anime source records 同時公開語言及用途角色。
- `PublicTheme.sources[]` 保存每首歌的來源 URL、語言、來源角色及核對日期；`reviewState` 只允許 `reviewed`。
- 每首已發布歌曲至少有一筆 `first_party` 與一筆 `cross_check`；這是可驗證條件，不是 confidence score。
- `sourceLabels` 與 `lastVerifiedAt` 暫留於 API v1 作向後相容；新介面與新 consumer 使用結構化 `sources[]`。
- 公開資料不包含候選項目、內部選源規則、評分、crawler output、原始 API dump 或私人備註。
- `PublicAnimeCard` 不公開完整度百分比；缺少資料時以明確空狀態表達，不把內部判斷轉成分數。

## Browser 與媒體邊界

- 首屏 HTML 直接提供歌曲列、總數與小型分片清單；沒有互動時不下載索引。季度頁完整 HTML 仍供搜尋引擎及無 JavaScript 瀏覽。
- 搜尋字詞先經既有 NFKC、大小寫、空白及 OP／ED 別名正規化，取最長字詞的前後短字串作為保守條件；每次最多 4 個 feature，因此最多讀取 4 份路由表。路由檔案分為 64 個 bucket，只有需要的 bucket 才請求，不把整份路由表放進 HTML 或預載。
- 路由由每個分片內所有動畫、歌曲、歌名及創作者搜尋文字派生；以 UTF-16 子字串對齊既有 `String.includes` 語義，單字與代理對同樣保留。feature 雜湊的碰撞取 membership 聯集，只會多載分片。多字詞可以分別命中動畫與歌曲欄位；最終範圍、用途、日期、影片、排序及分頁仍由完整原有記錄判斷，不從路由推算結果或數量。
- 年份／季度與字詞的候選分片取交集，順序保持不變。若只剩一片或適用分片已全部在頁面快取，直接沿用該索引；空字詞完整瀏覽及 OP／ED／theme 等廣泛查詢可載入全部適用分片。路由判定沒有候選時不請求索引；錯誤則顯示重試，不將錯誤視作沒有結果。
- 成功結果保存在頁面記憶體及標準 HTTP cache，索引與路由跨頁共用相同內容網址，不另建 Cache Storage 或私人儲存層。路由與索引共用同一個最多 4 請求的佇列，重試及連續搜尋也不超出上限。
- 分片傳輸使用精簡 JSON，build 逐片還原並比較完整原始索引字串。前綴只重建固定 ASCII 轉換，其他 Unicode 正規化與文字差異保留 literal，還原不依賴瀏覽器語系。
- manifest v3 同時記錄索引傳輸、還原大小及路由清單。每份索引／路由 JSON 及還原索引分片各受 256 KiB gate；索引加路由的傳輸合計、還原完整索引各自受原有 8 MiB gate，頁內清單仍不超過 64 KiB。v2 索引傳輸內容不變；decoder 在組合字串與季度引用時扣除展開預算，完成後再核對原始大小。路由同樣核對 SHA-256、完整 byte length、格式版本、排序、membership 範圍與非空記錄，build 逐項比對還原 membership。不更改 API v1 或歌曲資料契約。
- 搜尋字詞不放入 URL、request body、analytics 或 storage。分片只接受同源固定格式網址，忽略 redirect，不傳 cookie／referrer；每片有 10 秒逾時、byte budget 與 SHA-256 驗證，失敗不顯示殘缺搜尋結果，提供重試及原生季度連結。
- 年份、季度與動畫頁以相同的可見導覽產生 `BreadcrumbList` microdata；作品與歌曲內容保留在靜態 HTML，搜尋引擎不依賴篩選操作才發現資料。
- Service Worker 只 precache `/offline/`、`/_astro/`、favicon 與 manifest，合計不超過 512 KiB；線上導航優先網絡，斷線才顯示提示。新版本移除本產品舊離線 cache，不預載歌曲頁、不建立 runtime cache entry，不保存 `/api/` JSON、query string 或第三方媒體。
- 作品圖像使用核准 HTTPS origin 並加上頁面來源連結及 `no-referrer`；不下載後重新託管。
- YouTube iframe 只在使用者明確啟動後建立，使用 privacy-enhanced domain。
- 首頁與歌曲列表以 HTML／CSS 文字列呈現；不載入第三方海報，也不使用生成式 raster artwork。

## Cloudflare 邊界

`wrangler.jsonc` 只指定 `dist` Static Assets、404 行為、custom domain 及停用的 telemetry 設定。公開網站沒有 D1、KV、R2、Queues、Durable Objects、application Worker、analytics 或身份系統 binding；任何非公開內容系統都不屬於本 repository 的公開設計或交付範圍。

## 變更 gate

1. 資料變更先通過 season／anime／theme source／theme video registry 與 catalogue invariants。
2. 公開 schema 改動先更新 TypeScript、fail-closed parser、static API、component 及 browser tests。
3. 新 media origin 必須同時更新來源政策、CSP allowlist、privacy 文案與測試。
4. 合併前執行完整品質、build、Workers dry-run、browser、audit 與 public-egress 檢查。
5. 發佈只接受已 review 的固定 SHA；production 驗收需獨立核對 live routes、API、headers 與 Git／release 一致性。

# v1.2.0｜來源治理與公開評分移除 QA

本輪把歌曲來源由文字標籤提升為可點擊的結構化 ledger，並移除公開的「資料完整度」百分比。產品架構仍是 repository-reviewed snapshot → Astro build-time HTML／JSON → Cloudflare Workers Static Assets。

## 交付範圍

- 四個 season detail、280 個 anime detail 及 615 筆 OP／ED 都有 `reviewState: reviewed` 與對應 checked date；
- season catalog references 與 anime sources 都公開 language／role，並通過 parent／nested date consistency gate；
- 每首歌至少一個第一方來源及一個交叉核對來源；
- 每個來源公開 URL、語言、角色及 ISO 8601 核對日期；
- theme UI 顯示可點擊來源、語言、角色與最後核對日期；
- API v1 新增 `sources[]`／`reviewState`，保留 `sourceLabels`／`lastVerifiedAt` 作向後相容；
- `ApiProvider` 拒絕不安全 URL、未知角色／語言、缺來源角色、labels drift 及日期 drift；
- anime card、HTML 與 JSON 不再發布 `completionPercent` 或完整度百分比；
- 首頁改用 code-native HTML／CSS 視覺，來源未能證實的舊 raster asset 不再進入 production；
- 四張無法證實來源且已無測試引用的舊 Mock poster files 從 repository 移除；tests 改用既有 Anisonary icon，production build 不再複製這些 raster assets。

## 資料補正

- `百鬼夜行抄` ED 補上動畫官方 Music 頁作第一方來源；
- `地球大好き！きっくん` 主題歌補上 TOKYO MX 官方新聞稿，並把公開日文曲名／演唱者修正為 `防衛ライン（だいたい平和です）`／`まめぞう合唱団`；
- 兩筆新核對來源日期為 2026-08-02。
- 四個原本缺作品層第一方來源的記錄補上正式播出／配信或作品官方頁，作品層 provenance gap 歸零。

## 自動化 gate

- catalogue test 必須證明 615／615 筆歌曲同時具備兩種來源角色；
- contract test 必須以全部 reviewed fixture 成功，並以不合法 theme source 失敗；
- component test 必須顯示審閱狀態、來源 metadata、安全 external-link attributes 及日期；
- browser test 必須從 static API 讀到新 schema、在詳情頁看到來源清單，並確認 UI 不含完整度百分比；
- production build、generated CSP、Service Worker、Workers dry-run、live API、headers 與未知 route 必須在 release SHA 再驗證。

實際本機、GitHub 與 production 結果只在命令／部署完成後補記，不以計劃或 CI queued 狀態代替成功證據。

## 本機驗證結果（2026-08-02）

- `npm run lint`：78 個檔案，0 error／warning／hint；
- `npm test`：17 個 test files、86 個 tests 全部通過；
- `npm run catalog:check`：2 個 test files、11 個 catalogue tests 全部通過；
- `npm run build`：290 個 HTML 頁面；CSP generator 核對 290 個 HTML，產生 7 個 script hash 與 7 個 style hash；
- build output contract scan：4 個 season JSON、281 筆季度卡片、280 個唯一 anime detail、615 筆 theme，provenance failure 為 0；
- `npm run cf:check`：Wrangler 讀取 883 個 Static Assets、0 bindings、dry-run 成功；
- `npm run test:e2e`：11 個 browser flows 全部通過；
- `npm audit --audit-level=low` 與 production-only audit：0 vulnerabilities；
- 1440 × 900 本機 cold-load Chrome CDP trace：TTFB 3.5 ms、FCP 52 ms、LCP 452 ms、CLS 0；深色模式單次互動觀察值 24 ms。這是本機 lab evidence，不是 CrUX field data，單次互動亦不標示為 production INP。
- 首頁 network／accessibility inspection：沒有 console error、沒有無名稱互動元件、沒有缺少 `alt` 的圖片；第三方圖片 request 只到既有 AniList media origin。

## GitHub 與 production 驗證結果（2026-08-02）

- PR #18 以固定 head `93150709fcbeceb0e578d6370de5d819f8cbba98` 完成 quality 與 Workers preview checks，再 squash merge 為 `1069ee957c93cebb7805b2d22572a9c96b3c5c42`；合併前後沒有改寫 head 或刪除 branch；
- `main` push 的 GitHub quality 與 Workers Build checks 成功；官方 checkout、Node setup 及 artifact actions 隨後更新至 Node 24-compatible v7 majors，以清除平台 runtime annotation；
- `PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1 npm run api:check`：live smoke 讀回完整 public contract，`ANISONARY_REQUIRE_API_DATA=true` 再成功產生 290 頁，沒有 curated fallback；
- no-cache route check：首頁、搜尋、四個季度、代表動畫、About、Sources、Manifest、Service Worker、robots 與 sitemap 全部 `200`；未知頁面與未知 API route 為 `404`；
- live `2026-summer` JSON 為 `reviewed`、核對日期 `2026-08-02`、70 筆 card 及 2 個 catalog references；`地球大好き！きっくん` 詳情回傳已修正曲名／演唱者及兩種 source roles；
- production HTML 保留 hash-based CSP、`X-Frame-Options: DENY`、`X-Content-Type-Options: nosniff`、`Referrer-Policy: no-referrer` 與收窄的 Permissions Policy；HTML／API 均使用 revalidation，hashed CSS 使用一年 immutable cache；
- live hashed CSS 與 release build 逐 byte 相同；首頁不再引用舊 raster hero、完整度文字或 `completionPercent`；
- 1440 × 900 production cold-load Chrome CDP trace：TTFB 77 ms、FCP 400 ms、LCP 760 ms、CLS 0；深色模式單次互動觀察值 32 ms。沒有 console error、request failure、無名稱互動元件或缺少 `alt` 的圖片；這是一次 lab trace，不標示為 CrUX field INP。

Production 結果由 live response 與 Chrome trace 取得，不由 local build、queued check 或 preview 推定。

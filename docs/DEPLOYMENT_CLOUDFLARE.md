# GitHub 與 Cloudflare Workers 交付指南

Anisonary 以 Cloudflare Workers Static Assets 發布靜態網站。`main` 是正式來源；GitHub Actions 只執行品質檢查，不直接部署。公開文檔只保存可重現的設定與驗收結果，非公開基礎設施及憑證資料留在私有營運環境。

本文件描述專案維護者的正式交付流程。Fork／clone 使用者必須先替換 Worker `name`、production hostname、`PUBLIC_SITE_URL` 及 `robots.txt` sitemap，不能沿用本專案的 production route；完整安全自部署步驟見 [`SELF_HOSTING.md`](./SELF_HOSTING.md)。

## Current topology／目前拓撲

| 項目 | 公開設定 |
|---|---|
| Production branch | `main` |
| Production domain | `anisonary.k-y.cc` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `.nvmrc` 所指定的 Node 22 |
| Runtime | Workers Static Assets |
| GitHub Actions | `quality` gate，不部署 |

Workers Builds 是自動部署來源；repository 不另設第二套 production deployment workflow。`npm run cf:deploy` 只供明確的手動發布。

## Privacy and cost boundary／私隱與額度邊界

- 正式網站只發布 build 後的靜態資產，沒有 application Worker script、D1、KV、R2、Queues 或 Analytics binding。
- `/api/v1/*.json` 與 HTML 使用同一份 reviewed snapshot，在 build-time 產生並由 Static Assets 直接提供；沒有 runtime function invocation。
- Wrangler observability、dependency instrumentation、metrics 與 error reporting 在 repository 設定中停用。
- 搜尋運算在瀏覽器內完成，不依賴 runtime search endpoint；搜尋字詞不寫入 query parameter、cookie、analytics 或 persistent storage。公開索引檔案可獨立使用 HTTP cache。
- 搜尋索引由 `/search-index/<sha256>.json` 靜態檔案交付，互動時才載入，每片最多 256 KiB，HTTP cache 使用一年 `immutable`；索引不進 Service Worker、API v1 或 sitemap。未載入的舊版分片若因版本更替無法取得，可重新開啟頁面取得新清單。
- 搜尋 JSON 使用 v2 無損精簡格式，manifest 同時限制傳輸與還原大小。HTTP 壓縮使用標準 `Content-Encoding`，由伺服器與瀏覽器協商；本機 gzip 比較與正式環境實際流量分開記錄。
- production build 產生 `/sw.js`；precache 只含無 query string 的斷線提示、`/_astro/` 共用資產、favicon 與 manifest，合計不超過 512 KiB。
- navigation 採 network-first；只有連線失敗才顯示斷線提示，Service Worker 不把使用者後續瀏覽或輸入寫入 runtime cache，也不預載整站目錄。
- `_astro` 指紋資產可長期快取；repository-owned `/assets` 使用較短快取和 stale revalidation；HTML 不設長期快取。
- production build 會掃描最終 HTML，為可執行 inline script 與 inline style element 產生 SHA-256 Content Security Policy；inline event／style attributes 及未批准的 remote media origin 會令 build 失敗。
- static API 使用 revalidation 與 `X-Robots-Tag: noindex`，不加入 sitemap、Service Worker precache 或 permissive CORS。
- 非正式 Workers preview hostname 回應 `X-Robots-Tag: noindex`。
- 正式頁面預設使用 `Referrer-Policy: no-referrer`；外部海報來源只限經審核的 HTTPS origin。YouTube 只在使用者明確啟動後連線，且 iframe 僅以 `strict-origin-when-cross-origin` 傳送網站 origin，以符合 YouTube 嵌入播放器識別要求，不傳送作品頁完整路徑。
- 首頁主視覺由 HTML／CSS 組成；Mock tests 重用 repository icon，舊 Mock raster assets 已移除，兩者都不增加 production remote media origin。

Cloudflare 官方文件目前說明 Static Assets request 免費且不限量；Workers Static Assets 的公開限制包括 Free plan 20,000 個檔案、Paid plan 100,000 個檔案、單檔 25 MiB、`_headers` 最多 100 條規則且每行 2,000 字元。限制仍可能變動，發佈前應重新核對 [billing and limitations](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)、[platform limits](https://developers.cloudflare.com/workers/platform/limits/) 及 [`_headers` rules](https://developers.cloudflare.com/workers/static-assets/headers/)。沒有具體產品需求前，不加入 runtime、stateful 或 tracking service，以免增加私隱、成本和攻擊面。

## Environment／環境設定

使用 repository-reviewed catalogue 時：

```text
PUBLIC_SITE_URL=https://anisonary.k-y.cc
PUBLIC_DEFAULT_SEASON=
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=false
```

`PUBLIC_DEFAULT_SEASON` 留空或未設定時，首頁使用最新已收錄季度；明確設定有效季度 ID 時保留該選擇，同時提供最近三季入口。

正常 production build 不設定 `PUBLIC_API_BASE_URL`，直接由 reviewed snapshot 同時產生 HTML 與 JSON。只有執行 production API gate 時才設定 `PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1` 及 `ANISONARY_REQUIRE_API_DATA=true`；任何 endpoint 失敗或不一致都會中止驗收。這個契約不需要 secret。

## Local verification／本機驗證

```bash
npx playwright install chromium
npm run verify:full
```

`verify:full` 是本機與 CI 共用的完整 gate，包含原有單元、型別、CSP、Service Worker、公開檔案／產物、依賴稽核、Cloudflare dry-run 及核心瀏覽器流程，並檢查 [目錄統計](./CATALOG_STATS.md) 是否過期。正常網站 build 只有一份；來源、設定、環境或產物不吻合時不重用。日常資料批次使用 `verify:batch` 更新統計；正式部署仍需當次明確授權與固定版本驗收。

本機 Workers preview：

```bash
npm run cf:dev
```

Cloudflare non-production version upload：

```bash
npm run cf:preview
```

明確手動發布：

```bash
npm run cf:deploy
```

## Release sequence／發佈次序

1. 在隔離 branch 完成 public-egress scan、完整 local gate 與 Workers dry-run。
2. Push 後以 draft PR 固定 reviewed head SHA；等待 GitHub quality 與 Workers preview checks 成功。
3. Merge 前再次確認 PR head SHA 未變；合併後 fast-forward 本機 `main`，不重寫或猜測 release identity。
4. Workers Builds 以 `main` 作 production branch；其他 branch 預設只建立 preview／version。設定原則見 [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)。
5. 獨立驗證 live routes、static API、security／cache headers、搜尋／影片同意 flow 及 production source revision。
6. 驗收通過後才建立 annotated tag／GitHub Release；失敗時保持 fail closed，按 [Workers rollback](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/) 或上一個已核對版本處理。

## Production smoke checklist／正式環境驗收

- GitHub `quality` check 通過；
- 首頁、搜尋、所有已發布季度頁、至少一個動畫頁、About、Sources 與未知 route；
- mobile viewport、keyboard focus、theme toggle 及無水平 overflow；
- canonical、Open Graph、JSON-LD、年份／季度／動畫導覽的 `BreadcrumbList`、`robots.txt` 與 `sitemap-index.xml`；
- `Content-Security-Policy`、`X-Frame-Options`、`X-Content-Type-Options`、`Referrer-Policy`、`Permissions-Policy`；
- CSP 不包含 `unsafe-inline`、`unsafe-eval` 或 wildcard，並保持 `script-src-attr 'none'`、`style-src-attr 'none'`；
- preview hostname 有 `X-Robots-Tag: noindex`；
- `_astro`、`/assets` 與 `/search-index` 使用預期 cache policy，HTML 不被長期固定；搜尋索引有 `X-Robots-Tag: noindex`，清單與內容雜湊吻合；
- `/manifest.webmanifest` 可讀取，`/sw.js` 使用 revalidation 與根 scope；只預載斷線提示和共用資產，總量不超過 512 KiB，更新時清除本產品舊版快取；
- 搜尋結果沒有 remote poster request，搜尋字詞不離開瀏覽器；
- YouTube 啟動前沒有 iframe 或 thumbnail request，啟動後使用 privacy-enhanced domain；
- repository catalogue 顯示「已審閱動畫目錄」，不顯示 Mock Data notice；
- 歌曲顯示 reviewed source ledger，static API 每筆 theme 同時有第一方及交叉核對來源，且不包含完整度百分比；
- season list、所有已發布 season detail 及 anime detail JSON assets 通過 live contract，未知 API route 回應 `404`；
- secrets、非公開基礎設施資料和私有營運記錄沒有進入 tracked files 或 build output。

## Public record boundary／公開記錄邊界

公開 release 記錄只包含產品版本、可重現的測試摘要與正式 route 驗收結果。非公開基礎設施、憑證和復原操作記錄均留在私有營運環境。

Content Security Policy 由 `scripts/generate-security-headers.mjs` 在 `astro build` 後寫入 `dist/_headers`。不要在 `public/_headers` 手動複製 build-specific hashes；Astro 改變 inline output 時，下一次 build 會重新計算。策略、限制與驗證步驟見 [`QA_CONTENT_SECURITY_POLICY.md`](./QA_CONTENT_SECURITY_POLICY.md)。

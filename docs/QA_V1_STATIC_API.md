# v1.0.0｜自包含靜態 API 與穩定版 QA

驗收日期：2026-07-26（Asia/Hong_Kong）。本文件只記錄公開產品行為與可重現檢查，不保存平台帳戶、部署／版本 identifier、非公開資源名稱、credential 或私有營運資料。

## 交付範圍

- `GET /api/v1/seasons.json` 發布 2 個 reviewed season summaries；
- `GET /api/v1/seasons/:seasonId.json` 發布季度詳情與 70 個 anime cards；
- `GET /api/v1/anime/:slug.json` 發布 139 個唯一動畫詳情、298 首已知 OP／ED 及公開來源；
- HTML 與 JSON 使用相同 repository-reviewed snapshot，沒有 runtime database、function 或 source API dependency；
- JSON assets 使用 revalidation 與 `noindex`，排除於 sitemap 及 Service Worker precache；
- API 不設定 permissive CORS，不接收輸入、不保存 request 或使用者資料。

## 本機驗收

| Gate | Result |
|---|---|
| `npm run lint` | 75 files；0 errors／warnings／hints |
| `npm test` | 17 files；85 tests passed |
| `npm run build` | 147 HTML pages + 142 JSON endpoints；CSP generated |
| `npm run cf:check` | 461 Static Assets；0 bindings |
| `npm run test:e2e` | 10 Playwright flows passed |
| local HTTP `npm run api:check` | 2 seasons／139 anime；contract、404、fail-closed build passed |
| full and production dependency audit | 0 vulnerabilities |
| source and build privacy scan | 0 secret、private path、personal planning or platform identifier values |

E2E 覆蓋 static API、generated CSP、完整目錄、YouTube 明確同意、本機搜尋、離線讀取、SEO／JSON-LD、mobile keyboard、404、安全錯誤狀態及 broken poster fallback。

## Cloudflare 額度與私隱邊界

本版本只增加 static files，不加入會被計作 Worker invocation 的 application code。Cloudflare 官方文件目前說明 Static Assets requests 免費且不限量；Free plan 每個 Worker version 的 static asset file 上限為 20,000，而本 build 為 461 files。限制可能變動，發佈時仍以官方文件為準。

- [Static Assets billing and limitations](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)
- [Workers platform limits](https://developers.cloudflare.com/workers/platform/limits/)
- [Astro static file endpoints](https://docs.astro.build/en/guides/endpoints/)

## Production acceptance boundary

Production 記錄只會在 GitHub checks、已合併 `main` 的 Workers Build、custom-domain JSON contract、主要 routes、security headers 與未知 route 全部通過後補充；不以 preview、local build 或命令意圖代替正式驗收。

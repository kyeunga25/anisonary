# GitHub 與 Cloudflare Workers 交付指南

Anisonary 以 Cloudflare Workers Static Assets 發布靜態網站。`main` 是正式來源；GitHub Actions 只執行品質檢查，不直接部署。公開文檔只保存可重現的設定與驗收結果，非公開基礎設施及憑證資料留在私有營運環境。

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
- Wrangler observability、dependency instrumentation、metrics 與 error reporting 在 repository 設定中停用。
- 搜尋在瀏覽器內完成，不使用 server endpoint、query parameter、cookie、analytics 或 persistent storage。
- `_astro` 指紋資產可長期快取；repository-owned `/assets` 使用較短快取和 stale revalidation；HTML 不設長期快取。
- 非正式 Workers preview hostname 回應 `X-Robots-Tag: noindex`。
- 正式頁面使用 `Referrer-Policy: no-referrer`；外部海報來源只限經審核的 HTTPS origin，YouTube 只在使用者明確啟動後連線。

Static Assets 的現行收費與限制可能變動，發佈前應以 Cloudflare 官方文件為準。沒有具體產品需求前，不加入 stateful 或 tracking service，以免增加私隱、成本和攻擊面。

## Environment／環境設定

使用 repository-reviewed catalogue 時：

```text
PUBLIC_SITE_URL=https://anisonary.k-y.cc
PUBLIC_DEFAULT_SEASON=2026-summer
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=false
```

連接 private read-only API 後才設定 `PUBLIC_API_BASE_URL`，並在 production 設 `ANISONARY_REQUIRE_API_DATA=true`。這會令必要 API request 失敗時中止 build，避免殘缺版本取代 production。前端契約不需要 secret；任何未來 build secret 只可儲存在 Cloudflare 的私有環境，不得 commit。

## Local verification／本機驗證

```bash
npm run lint
npm test
npm run build
npm run cf:check
npm run test:e2e
npm audit --audit-level=low
```

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

## Production smoke checklist／正式環境驗收

- GitHub `quality` check 通過；
- 首頁、搜尋、兩個季度頁、至少一個動畫頁、About、Sources 與未知 route；
- mobile viewport、keyboard focus、theme toggle 及無水平 overflow；
- canonical、Open Graph、JSON-LD、`robots.txt` 與 `sitemap-index.xml`；
- `X-Frame-Options`、`X-Content-Type-Options`、`Referrer-Policy`、`Permissions-Policy`；
- preview hostname 有 `X-Robots-Tag: noindex`；
- `_astro` 與 `/assets` 使用預期 cache policy，HTML 不被長期固定；
- 搜尋結果沒有 remote poster request，搜尋字詞不離開瀏覽器；
- YouTube 啟動前沒有 iframe 或 thumbnail request，啟動後使用 privacy-enhanced domain；
- repository catalogue 顯示「已核對精選目錄」，不顯示 Mock Data notice；
- secrets、非公開基礎設施資料和私有營運記錄沒有進入 tracked files 或 build output。

## Public record boundary／公開記錄邊界

公開 release 記錄只包含產品版本、可重現的測試摘要與正式 route 驗收結果。非公開基礎設施、憑證和復原操作記錄均留在私有營運環境。

Content Security Policy 尚未啟用。未來加入時需先為 Astro inline scripts 建立 nonce 或 hash 策略，並只開放實際使用的 image、frame 和 connect origins；這應作為可獨立測試的 hardening 變更。

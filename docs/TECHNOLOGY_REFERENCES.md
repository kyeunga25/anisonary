# Anisonary 技術、AI 與參考資料

本文件集中說明公開可重現的技術棧、各元件用途、AI 使用狀態及資料參考角色。它不記錄私人部署 metadata、prompts、對話、帳戶／資源 identifier、keys、database 組織、private adapters 或內部選源細節。

## 技術棧與責任

| 範圍 | 技術 | 本專案用途 |
|---|---|---|
| UI／site generation | Astro 7 | 由 reviewed snapshot 產生 static HTML、static JSON routes、canonical 與 sitemap |
| Language | TypeScript 6、Astro `strictest` | 公開資料契約、provider boundary、build-time validation 與 browser logic |
| Runtime baseline | Node.js 22、npm | 可重現安裝、build、test 與 Wrangler CLI 執行環境 |
| Delivery | Cloudflare Workers Static Assets | 直接提供 `dist`，沒有 application Worker entrypoint 或 stateful binding |
| Deployment tool | Wrangler 4 | local Workers preview、dry-run、version upload 與 explicit deploy |
| Offline | Standard Service Worker／Cache API | build-time precache 公開同源內容；沒有 runtime cache write |
| Security | Generated CSP、static `_headers` | hash inline build output、限制 frame／media／referrer／browser capabilities |
| Testing | Astro check、Vitest 4、Playwright 1.62 | type／contract／catalogue／component／browser／deployment config gates |
| SEO／metadata | `@astrojs/sitemap` 3 | sitemap generation；排除 API、offline 與 404 |

Major／minor version 取自 `package.json`；實際 resolved dependency 以 `package-lock.json` 為準。`wrangler.jsonc` 是 Workers packaging 與 routing 的公開 source of truth，`.nvmrc` 是 Node major 的 source of truth。

專案沒有 React／Vue runtime、CSS framework、server framework、runtime database、object storage、analytics SDK、authentication SDK 或 payment SDK。瀏覽器互動以 Astro 輸出的 HTML、repository CSS 及少量原生 JavaScript 完成。

## Cloudflare 使用範圍

Production path 是：

```text
reviewed public snapshot -> Astro static build -> generated CSP -> bounded service worker -> dist -> Cloudflare Workers Static Assets
```

公開 repository 的 Cloudflare 設定只需要 Static Assets directory、HTML／404 handling、公開 route 與停用 telemetry 的 flags。以下服務目前都不是依賴：

- application Worker／runtime `fetch` handler；
- D1、KV、R2、Queues、Durable Objects 或 Vectorize；
- Workers AI、AI Gateway 或第三方 AI API；
- runtime secrets、session、account、payment 或 analytics binding。

GitHub Actions 執行 quality gate，不直接部署。專案維護者可使用 Workers Builds 由 `main` 發布，fork 使用者亦可用 Wrangler 從本機發布；兩種流程都必須先 build 與 dry-run。詳細步驟見 [`SELF_HOSTING.md`](./SELF_HOSTING.md) 及 [`DEPLOYMENT_CLOUDFLARE.md`](./DEPLOYMENT_CLOUDFLARE.md)。

## AI disclosure／AI 使用聲明

| 階段 | AI model／service |
|---|---|
| Production runtime | 無 |
| Static build | 無 |
| Browser search | 無；只做本機字串正規化與 filter |
| Static API | 無；只發布 build-time reviewed JSON |
| Catalogue generation | 無；不接受 AI 生成記錄作來源 |
| Public imagery | 無；不使用 AI 生成圖片 |

因此自行部署不需要 AI model identifier、provider account、AI API key、prompt template、embedding store 或 inference budget。開發輔助產生的任何草稿（如有）都不能當作作品、歌曲、譯名、日期或權利狀態的證據；公開內容仍必須通過人工審閱、結構化來源 ledger、tests 與可點擊公開來源核對。

若未來加入 AI，必須另行公開說明 model／provider、確切用途、輸入資料、資料保存、費用、失敗回退、人工審閱與 opt-out，並先完成 privacy、security、legal 及 deployment review。未完成這些 gate 前，不應加入 binding、key 或 model call。

## Catalogue source roles／目錄資料角色

資料來源是 editorial evidence，不是 production runtime dependency：

| 類別 | 例子 | 角色 |
|---|---|---|
| First party | 動畫官網、製作委員會、電視台、串流／發行／唱片公司、藝人官方頁 | 作品身份、播出、歌曲、credits 與正式公告的最終核對 |
| Japanese inventory | [Annict](https://annict.com/) | 日本季度作品 inventory、原文 identity 與日期基準 |
| Chinese cross-check | [Bangumi 番組計劃](https://bgm.tv/) | 中文條目、日期、媒體類型與缺口交叉核對；不自動視作正式繁中譯名 |
| Public identity／media | [AniList](https://anilist.co/) | 公開 identifier、作品頁與已核對 remote media origin |
| Theme cross-check | [AnimeThemes](https://animethemes.moe/) 、[UZUREA](https://uzurea.net/) | OP／ED inventory 與季度歸類交叉核對 |
| Traditional Chinese references | 台灣／香港正式代理、串流、出版社、播出機構及公開季度表 | 正式繁中名稱與地區發行資訊核對 |

每首公開歌曲至少需要一個 `first_party` 與一個 `cross_check` 來源；source role 只是可驗證 provenance，不是 confidence score。詳細 inventory、繁中命名與更新規則見 [`DATA_SOURCES.md`](./DATA_SOURCES.md)，欄位、媒體與權利邊界見 [`DATA_PROVENANCE.md`](./DATA_PROVENANCE.md)。

Repository 不保存 raw API dump、crawler、private adapter、候選資料、內部評分或選源規則。外部來源失效時，既有 reviewed snapshot 仍可 build；更新可以暫停，但不得用模型或猜測補資料。

## Privacy、security 與權利邊界

- `PUBLIC_*` 是會影響公開 build output 的設定，不可放 secret 或 private hostname；
- `.env`、`.wrangler`、`dist`、browser reports 與 dependency folders 不進 Git；
- 搜尋字詞只留在目前頁面，不進 URL、request、analytics、cookie 或 persistent storage；
- Service Worker 不快取 query string、static API JSON、第三方 media 或後續瀏覽資料；
- remote poster 與 YouTube 仍受各自權利人及平台條款約束；source attribution 不代表本站擁有或重新授權內容；
- repository 目前沒有附帶開源 license；self-deployment steps 是技術文件，不是對 code、catalogue、trademark、image、video 或第三方資料的授權聲明；
- 公開 commit／PR／release 只應包含可重現的產品事實，不包含私隱資料、操作對話、平台 metadata 或 private roadmap。

## Official technical references／官方技術參考

### Cloudflare

- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Static Assets: Get Started](https://developers.cloudflare.com/workers/static-assets/get-started/)
- [Static Assets configuration and bindings](https://developers.cloudflare.com/workers/static-assets/binding/)
- [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Workers build branches](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/)

### Application and testing

- [Astro configuration: static output](https://docs.astro.build/en/reference/configuration-reference/#output)
- [Astro deployment overview](https://docs.astro.build/en/guides/deploy/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Node.js 22 documentation](https://nodejs.org/docs/latest-v22.x/api/)
- [Vitest guide](https://vitest.dev/guide/)
- [Playwright documentation](https://playwright.dev/docs/intro)

### Browser and security standards

- [MDN: Content Security Policy](https://developer.mozilla.org/docs/Web/HTTP/CSP)
- [MDN: Service Worker API](https://developer.mozilla.org/docs/Web/API/Service_Worker_API)
- [MDN: Cache API](https://developer.mozilla.org/docs/Web/API/Cache)
- [MDN: Referrer-Policy](https://developer.mozilla.org/docs/Web/HTTP/Headers/Referrer-Policy)

官方平台限制、版本與 CLI 行為可能改變。每次 deployment tool 或 compatibility date 升級前，應重新核對官方文件、lockfile、Wrangler schema，並執行完整 local／browser／dry-run gate。

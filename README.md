# Anisonary｜動畫歌典

Anisonary 是以 Astro + strict TypeScript 建立的動畫歌曲目錄，按季度與日本編輯播出日瀏覽作品、OP 與 ED。網站輸出為純靜態資產，正式交付使用 **Cloudflare Workers Static Assets**；它不是 Cloudflare Pages，也沒有 application Worker backend。下方同時保留 English technical notes。

This repository contains the completed static product: season directory, anime detail pages, traceable OP／ED credits and links, per-song source ledgers, source-attributed media, local-only cross-season search, privacy-bounded offline reading, a GitHub correction flow, and deployment through Cloudflare Workers Static Assets. The default catalogue covers sixteen reviewed snapshots across 2022–2026, with 1,203 unique titles and 2,529 known OP／ED records; fictional Mock Data remains test-only.

目前公開版本：**v1.15.0**。每個季度、作品及已發布歌曲都保留結構化來源、來源語言、審閱狀態及核對日期；每首歌曲另同時具備可點擊的第一方與交叉核對來源。v1.15.0 加入 2022 夏季 69 套動畫、146 筆已核對 OP／ED 與 28 筆官方影片 metadata，包括《Lycoris Recoil 莉可麗絲》、《來自深淵 烈日的黃金鄉》、《徹夜之歌》、《Prima Doll 天籟人偶》及《ハナビちゃんは遅れがち》的官方歌曲影片；官方列作插曲的〈GRAVITY〉不會誤列為 OP。單集電影、OVA、試播、企業／觀光宣傳短片及無足夠季度證據的網路短篇維持在公開季度範圍外。未有可靠主題曲或官方影片證據的欄位維持明確空狀態，不以推測補值。公開 UI／API 不發布內部完整度或 confidence score。搜尋在瀏覽器內比對日文、繁體中文、Romaji、歌曲、歌手與 credit；搜尋字詞不會傳送到 server 或 analytics。Build 同時輸出與頁面相同資料來源的同源唯讀 JSON API，不需要 application Worker、D1、KV 或 secret。Service Worker 只預先保存公開頁面與必要靜態資產，不保存搜尋字詞、API JSON 或第三方媒體。

Production build 會從最終 HTML 自動產生 hash-based Content Security Policy。政策不使用 `unsafe-inline` 或 `unsafe-eval`，禁止 inline event／style attributes，只開放同源資產、已核對的海報來源及使用者啟動後的 YouTube privacy-enhanced iframe。任何未批准的 media origin 會令 build fail closed。

| 可用性 / Availability                  | 成熟度 / Maturity                       | 證據 / Evidence                                                                                                                                                                                                                                                     |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 公開靜態目錄 / Public static catalogue | Source 版本為 `v1.15.0`；正式站狀態以 QA 記錄為準 | [入口網站 / Live](https://anisonary.k-y.cc) · [資料來源 / Sources](docs/DATA_SOURCES.md) · [v1.15 QA](docs/QA_V1_15_2022_SUMMER.md) · [安全政策 / Security](SECURITY.md) · [授權 / Licence](LICENSING.md) · [版權 / Copyright](COPYRIGHT.md) |

## 技術棧｜Technology stack

| Layer             | Technology and responsibility                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Application       | Astro 7 static output、semantic HTML、repository-owned CSS 與少量 browser JavaScript            |
| Language／tooling | TypeScript 6（Astro `strictest`）、Node.js 22、npm lockfile                                     |
| Delivery          | Cloudflare Workers Static Assets、Wrangler 4、optional Workers Builds Git integration           |
| Build safeguards  | Generated hash-based CSP、bounded Service Worker、same-origin static JSON API、sitemap          |
| Testing           | Astro check、Vitest 4、Playwright 1.62、Wrangler deployment dry-run                             |
| Runtime services  | 無 application Worker、database、object storage、analytics、authentication、payment 或 AI model |

完整用途、版本來源與官方技術參考見 [`docs/TECHNOLOGY_REFERENCES.md`](docs/TECHNOLOGY_REFERENCES.md)；公開資料流與信任邊界見 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)。

## Local development／本機開發

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm test
npm run build
npm run cf:check
npx playwright install chromium
npm run test:e2e
npm run check
```

Public API production check（production deployment required）：

```bash
PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1 npm run api:check
```

## Data providers

- With no `PUBLIC_API_BASE_URL`, the site builds from the repository's reviewed `CuratedProvider` records and publishes the same public fields as static JSON assets.
- When `PUBLIC_API_BASE_URL` is set, `ApiProvider` requests that public read-only contract through a fail-closed nested contract, URL, identity and timeout gate.
- `MockProvider` remains available only for isolated unit and component tests; its fixtures are not production assets.
- Copy `.env.example` to `.env` for local configuration. Never commit secrets.

Season coverage uses a repository-owned source registry: Annict is the Japanese seasonal inventory baseline, while Bangumi provides a Chinese-entry cross-check. The sixteen published snapshots additionally cross-check Traditional Chinese calendar inventories, AniList identifiers and media, AnimeThemes records, public theme-song indexes, official sites, and Taiwan／Hong Kong licensing pages. These are editorial inputs only; production builds use the reviewed static snapshot and never require external APIs at runtime. See `docs/DATA_SOURCES.md` for the inventory rules and `docs/DATA_PROVENANCE.md` for the per-song ledger and media boundary.

## Catalogue search

- `/search/` renders the reviewed anime and theme-song index as static HTML;
- filtering runs locally without query parameters, analytics, cookies, or a search API;
- the text-only result list does not load remote poster media;
- YouTube connects only after the user activates a clearly labelled consent button;
- Japanese and Traditional Chinese remain the primary visible languages, with English／Romaji support where available.

## Offline catalogue／離線目錄

- production build 產生具內容版本的 `/sw.js`，只預先保存公開、同源、無 query string 的靜態內容；
- navigation 維持 network-first，連線失敗時才讀取同一路徑快取或 `/offline/`；
- 不建立 runtime cache entry，因此搜尋字詞、私人 response 與瀏覽路徑不會因操作而被寫入 Cache Storage；
- `/api/`、404、第三方 poster 及 YouTube 媒體不在 precache 內；舊 Mock raster assets 已從 repository 移除；
- `/manifest.webmanifest` 提供繁體中文 app metadata 與英文名稱支援。

## Environment

```text
PUBLIC_API_BASE_URL=
PUBLIC_SITE_URL=https://anisonary.k-y.cc
PUBLIC_DEFAULT_SEASON=2026-summer
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=false
```

The default production build needs no API environment variable. `PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1` with `ANISONARY_REQUIRE_API_DATA=true` is reserved for the explicit live contract gate, where any unavailable or inconsistent endpoint must fail closed.

## Public static API

- `GET /api/v1/seasons.json` returns the reviewed season summaries;
- `GET /api/v1/seasons/:seasonId.json` returns one reviewed season and its anime cards;
- `GET /api/v1/anime/:slug.json` returns one reviewed anime, OP／ED records, public links and sources;
- unknown season IDs and slugs return `404`;
- API assets use revalidation, `noindex`, no permissive CORS, and stay outside the sitemap and offline precache.

## Cloudflare Workers

The primary delivery path is Cloudflare Workers Static Assets. `main` is the production branch; non-production branches use version uploads for preview validation. GitHub Actions remains an independent quality gate and does not deploy.

```text
Build: npm run build
Output: dist
Node: 22
Domain: anisonary.k-y.cc
```

Local preview and explicit deployment commands:

```bash
npm run cf:dev
npm run cf:check
npm run cf:preview
npm run cf:deploy
```

See `docs/DEPLOYMENT_CLOUDFLARE.md` before changing build ownership or production settings.

Production domain: <https://anisonary.k-y.cc>. Non-production Cloudflare hostnames are marked `noindex` and are not recorded in public documentation; the retired Pages project is no longer part of the delivery path.

## 自行部署到 Cloudflare Workers｜Self-deployment

> 本 repository 的專案自有**軟件部分**依 [Apache License 2.0](LICENSE) 提供；
> curated catalogue records、來源 ledger、目錄編排、品牌及第三方內容不在該授權
> 範圍內。自行部署前先閱讀 [`LICENSING.md`](LICENSING.md)，並移除或替換你沒有
> 權利使用的目錄資料與媒體。
>
> `wrangler.jsonc` 目前指向本專案的正式 Worker 名稱與 custom domain。Fork 或 clone 後，**不要直接執行 `npm run cf:deploy`**；先換成你自己的公開 Worker 名稱與 hostname，或移除 `routes` 只使用自己的 `workers.dev` hostname。

最短流程：

1. 準備 Node.js 22、npm、Cloudflare account；custom domain 只在你擁有並已加入 Cloudflare 的 zone 上設定。
2. 執行 `npm ci`，複製 `.env.example` 為不受 Git 追蹤的 `.env`，把 `PUBLIC_SITE_URL` 換成自己的最終公開 URL；正常靜態 build 保持 `PUBLIC_API_BASE_URL` 空白。
3. 在 `wrangler.jsonc` 設定唯一 Worker `name`。只用 `workers.dev` 時移除專案原有 `routes`；使用 custom domain 時把 route 換成自己擁有的 hostname。同時更新 `public/robots.txt` 內的 sitemap hostname。
4. 先執行 `npm run lint`、`npm test`、`npm run build`、`npm run cf:check`；需要完整 browser gate 時再安裝 Chromium 並執行 `npm run test:e2e`。
5. 以 `npx wrangler login` 登入，私下確認 `npx wrangler whoami` 的 account 正確，再執行 `npm run cf:deploy`。不要把登入輸出、API token 或 account metadata 貼到 issue、commit 或公開 log。
6. 部署後核對首頁、搜尋、季度頁、動畫詳情、未知 `404`、security headers 與 `/api/v1/seasons.json`；最後以自己的 URL 執行 live API contract gate。

完整的 `workers.dev`、custom domain、Workers Builds、驗收、rollback 與私隱檢查步驟見 [`docs/SELF_HOSTING.md`](docs/SELF_HOSTING.md)。專案維護者的 production release 流程另見 [`docs/DEPLOYMENT_CLOUDFLARE.md`](docs/DEPLOYMENT_CLOUDFLARE.md)。Apache-2.0 只授權軟件部分，不授予 curated catalogue 或第三方動畫資料、商標、圖片及影片的重用權；來源條款閘門見 [`docs/SOURCE_TERMS.md`](docs/SOURCE_TERMS.md)。

## 授權範圍｜Licensing scope

由 `kyeunga25` 擁有或有權授權的應用程式原始碼、元件、樣式、通用 provider／
schema、建置／驗證腳本、測試邏輯及通用技術文件，依
[`Apache-2.0`](LICENSE) 提供。

Curated catalogue records、來源 ledger、目錄選取／編排、審閱註記及其在測試、
文件、建置產物、static API 或頁面中的複本，**沒有**由 Apache-2.0 或開放資料
授權覆蓋。動畫、歌曲、錄音、海報／圖片、影片、credits、商標、外部內容及
Anisonary 品牌亦不在授權內。

Repository-owned application code, components, styles, generic provider and
schema code, build and validation scripts, test logic, and generic technical
documentation are licensed under Apache-2.0. Curated catalogue records,
source ledgers, editorial selection and arrangement, embedded copies,
third-party anime or music material, and Anisonary branding are excluded.

完整路徑與重用規則見 [`LICENSING.md`](LICENSING.md)、
[`COPYRIGHT.md`](COPYRIGHT.md)、[`NOTICE`](NOTICE) 及
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)。

## Project notes

- Public product scope and release status: `docs/PROJECT_PLAN.md`
- Static architecture and trust boundaries: `docs/ARCHITECTURE.md`
- Privacy-safe Cloudflare self-deployment: `docs/SELF_HOSTING.md`
- Technology, AI and reference disclosure: `docs/TECHNOLOGY_REFERENCES.md`
- Song and media provenance contract: `docs/DATA_PROVENANCE.md`
- Version history: `CHANGELOG.md`
- v1.2.0 theme-source and public-score-removal QA: `docs/QA_V1_2_PROVENANCE.md`
- v1.1.0 2026 winter／2025 summer catalogue QA: `docs/QA_V1_1_SEASON_EXPANSION.md`
- v1.0.0 static API and stable release QA: `docs/QA_V1_STATIC_API.md`
- Phase 2 catalogue scope and source ledger: `docs/PHASE2_CATALOG.md`
- v0.4.0 complete 2026 spring／summer catalogue QA: `docs/QA_2026_SPRING_SUMMER_CATALOG.md`
- v0.2.0 search and media privacy QA: `docs/QA_PHASE2_SEARCH_PRIVACY.md`
- v0.3.0 offline static catalogue QA: `docs/QA_PHASE2_OFFLINE_STATIC.md`
- Content Security Policy build 與 browser QA: `docs/QA_CONTENT_SECURITY_POLICY.md`
- Stable Japanese and Chinese seasonal source registry: `docs/DATA_SOURCES.md`
- Visual system and accepted concepts: `docs/DESIGN_SYSTEM.md`
- M0–M6 QA evidence: `docs/QA_PHASE1_M0_M6.md`
- M7 quality QA evidence: `docs/QA_PHASE1_M7.md`
- Phase 1 completion gate and historical measurement boundary: `docs/QA_PHASE1_COMPLETION.md`
- GitHub and Cloudflare delivery requirements: `docs/DEPLOYMENT_CLOUDFLARE.md`
- Public static API contract: `docs/API_HANDOFF.md`
- Public static API v1 production check: `docs/API_PRODUCTION_CHECK.md`

The public repository must not contain crawlers, database dumps, unpublished data, secrets, private source adapters, private source-selection rules, or internal confidence rules.

## 技術、AI 與參考資料｜Technology, AI and references

- **Deployment／部署：** [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)、[Wrangler](https://developers.cloudflare.com/workers/wrangler/) 與 optional [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)。Repository 的 `dist` 是唯一部署輸出；GitHub Actions 只作獨立品質檢查。
- **Core stack／核心技術：** [Astro static output](https://docs.astro.build/en/reference/configuration-reference/#output)、[TypeScript](https://www.typescriptlang.org/docs/)、[Node.js](https://nodejs.org/docs/latest-v22.x/api/)、[Vitest](https://vitest.dev/guide/) 及 [Playwright](https://playwright.dev/docs/intro)。Browser 功能使用標準 HTML／CSS／JavaScript、[Service Worker](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) 與 [Content Security Policy](https://developer.mozilla.org/docs/Web/HTTP/CSP)。
- **AI model／AI 模型：** **無（None）**。Production、build、搜尋、static API、目錄資料及圖片流程都不呼叫或綁定 AI 模型，也不需要 AI API key；AI 生成的目錄記錄與圖片不作公開資料來源。
- **Catalogue references／目錄參考：** 動畫官網、製作／發行／播出單位等第一方資料是最終核對基準；Annict、Bangumi、AniList、AnimeThemes、UZUREA、公開繁中季度表及台灣／香港正式授權頁只作 inventory、identity、media 或交叉核對。完整角色、限制與更新規則見 [`DATA_SOURCES.md`](docs/DATA_SOURCES.md) 及 [`DATA_PROVENANCE.md`](docs/DATA_PROVENANCE.md)。這些來源不會在 production runtime 被即時查詢。
- **Source terms／來源條款：** 只使用文件化 API 或一般公開頁面，不保存 raw API dump、不收集 user data、不建立 mirror／backup／tracker，也不下載或重新託管第三方媒體；逐來源限制及停止條件見 [`SOURCE_TERMS.md`](docs/SOURCE_TERMS.md)。
- **Disclosure boundary／披露邊界：** 公開文件只列可重現的技術與公開來源，不記錄 prompts、對話、個人資料、真實 account／resource identifiers、keys、database 結構、private adapters 或內部評分規則。更完整的依賴與參考索引見 [`TECHNOLOGY_REFERENCES.md`](docs/TECHNOLOGY_REFERENCES.md)。

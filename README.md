# Anisonary｜動畫歌典

Anisonary 是以 Astro + strict TypeScript 建立的動畫歌曲目錄，以緊湊列表同時展示歌曲、演唱者、動畫、OP／ED 與季度。網站輸出為純靜態資產，正式交付使用 **Cloudflare Workers Static Assets**；它不是 Cloudflare Pages，也沒有 application Worker backend。下方同時保留 English technical notes。

This repository contains the public online product: season directory, anime detail pages, traceable song credits and links, per-song source ledgers, source-attributed media, browser-based cross-season search, a lightweight connection fallback, a GitHub correction flow, and delivery through Cloudflare Workers Static Assets. Current catalogue counts and quarterly field inventory are generated in [Catalogue Statistics](docs/CATALOG_STATS.md). Reviewed collection progress and incomplete coverage remain in the [Collection Checkpoint](docs/CATALOG_COLLECTION_STATUS.md).

最近標記版本：**v1.31.1**。目前工作內容以 Git commit 與收集 checkpoint 追蹤。歌曲詳情支援個別歌唱者、團隊、創作名單、音源版本、發行品及欄位證據；未知欄位留空，已核對內容逐批補入。現行收錄數量只由 [自動統計](docs/CATALOG_STATS.md) 維護；季度快照不代表整季作品與歌曲已收齊。

首頁、歌曲列表、季度頁與搜尋共用歌曲列，每頁最多 24 列。季度目錄直接提供各季入口；列表可按季度新舊、歌名、動畫或演唱者排序，也可篩選 OP／ED、劇中歌、主題歌與正版影片。點選歌曲列進入動畫的完整主題曲頁；跨季度搜尋可直接定位歌曲的製作名單與來源。搜尋完全在瀏覽器內進行，YouTube 只於明確操作後連線。網站與同源靜態 JSON API 共用已審閱資料，無 application backend 或 database binding。依賴安全 gate 繼續鎖定 `fast-uri` 3.1.9 並稽核開發依賴。

Production build 會從最終 HTML 自動產生 hash-based Content Security Policy。政策不使用 `unsafe-inline` 或 `unsafe-eval`，禁止 inline event／style attributes，只開放同源資產、已核對的海報來源及使用者啟動後的 YouTube privacy-enhanced iframe。任何未批准的 media origin 會令 build fail closed。

| 可用性 / Availability                  | 成熟度 / Maturity                       | 證據 / Evidence                                                                                                                                                                                                                                                     |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 公開靜態目錄 / Public static catalogue | Source 版本為 `v1.31.1`；正式發布狀態以對應 Release 驗收摘要為準 | [入口網站 / Live](https://anisonary.k-y.cc) · [版本與驗收 / Releases](https://github.com/kyeunga25/anisonary/releases) · [資料來源 / Sources](docs/DATA_SOURCES.md) · [安全政策 / Security](SECURITY.md) · [授權 / Licence](LICENSING.md) · [版權 / Copyright](COPYRIGHT.md) |

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

依變更種類選一個驗證入口；首次執行瀏覽器檢查前安裝 Chromium：

```bash
npx playwright install chromium
npm run verify:batch
npm run verify:full
```

| 命令 | 用途 |
| --- | --- |
| `npm run verify:batch` | 日常資料批次：單元測試、具型別／CSP／Service Worker／產物檢查的 build、更新自動統計、公開邊界及 diff 檢查 |
| `npm run verify:full` | 完整本機／CI gate：加上依賴稽核、統計過期檢查、Cloudflare dry-run 與 E2E；只檢查統計，不改寫文件 |
| `npm run check` | `verify:full` 的相容入口 |
| `npm run catalog:stats` | 從已驗證的 build 顯示統計與當次容量；`:update` 更新共用資料數字，`:check` 拒絕過期文件；環境相關容量不混入資料過期判定 |
| `npm run test:e2e` | 單獨執行 E2E，先完整建置正常網站，再建立 API 錯誤情境 |
| `npm run test:e2e:built` | E2E 重用來源、環境與全部產物雜湊相符的已驗證 `dist`；不符即停止 |

驗證入口只在本機 Curated 模式且來源、設定、環境與產物全數吻合時自動重用 build。非空 `PUBLIC_API_BASE_URL` 或實際 `.env`／`.env.*` 檔內的同名賦值會要求重新建置；明確的 `.example` 模板除外，空白賦值亦保守重新建置。遠端同網址資料可能變更，因此外部 API 模式每次重新 build；同輪統計與明確的 `test:e2e:built` 仍可用收據驗證該份產物。`npm run build` 仍可明確要求重新建置。單元測試、稽核與瀏覽器測試不因此略過。CI 使用同一個 `verify:full` 命令；同次完整驗證只需一份正常網站 build，API 錯誤情境獨立、依序建置。建置核對收據只保存在不公開的 `.astro/`，不寫入 `dist` 或原始環境值。

`npm test` 保護全目錄與公開契約一致性、外部 API 拒絕不安全資料、必要資料缺失時停止建置、公開產物與 CSP，以及統計／build 重用邊界。E2E 保留完整靜態 API、歌單到動畫全部歌曲與影片同意、季度排序與本機搜尋、手機／無 JavaScript／404、離線與 API 錯誤流程。測試不重抄逐歌快照；第三方媒體被攔截，結果與失敗 trace 寫入獨立暫存目錄，既有服務佔用測試 port 時會停止，避免驗到不同產物。

The small suite protects catalogue integrity and critical user journeys. It uses reviewed records and deterministic media interception; third-party availability is outside the local gate. The optional API smoke command below verifies a selected HTTP deployment separately.

Public API production check（production deployment required）：

```bash
PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1 npm run api:check
```

## Data providers

歌曲資料更新的計畫、批次 workflow、版本／發行品規格與檢查矩陣見 [`docs/SONG_COLLECTION_WORKFLOW.md`](docs/SONG_COLLECTION_WORKFLOW.md)。新工作階段從 [`執行 Prompt`](docs/CONTINUOUS_DEVELOPMENT_PROMPT.md) 與 [`收集進度`](docs/CATALOG_COLLECTION_STATUS.md) 接續，不需重讀全部歷史 QA。已支援格式及尚未核對的資料缺口在 workflow 與 checkpoint 分開標示。

- With no `PUBLIC_API_BASE_URL`, the site builds from the repository's reviewed `CuratedProvider` records and publishes the same public fields as static JSON assets.
- When `PUBLIC_API_BASE_URL` is set, `ApiProvider` requests that public read-only contract through a fail-closed nested contract, URL, identity and timeout gate.
- Tests use the reviewed catalogue and small inline failure inputs; no fictional catalogue provider is kept in application source.
- Copy `.env.example` to `.env` for local configuration. Never commit secrets.

Season coverage uses a repository-owned source registry: Annict is the Japanese seasonal inventory baseline, while Bangumi provides a Chinese-entry cross-check. Published snapshots additionally cross-check Traditional Chinese calendar inventories, AniList identifiers and media, AnimeThemes records, public theme-song indexes, official sites, and Taiwan／Hong Kong licensing pages. These are editorial inputs only; production builds use the reviewed static snapshot and never require external APIs at runtime. See `docs/DATA_SOURCES.md` for the inventory rules and `docs/DATA_PROVENANCE.md` for the per-song ledger and media boundary.

## Catalogue navigation and search

- `/` shows the latest quarter as song rows; `/songs/` combines all published quarters with local filters and ordering;
- `/catalog/` groups years by decade and links directly to each published quarter; `/catalog/<year>/` remains a native year view;
- year and quarter navigation is generated from the reviewed registry; cross-season works keep one detail page and every published season membership;
- homepage, quarter, library and search share a bounded text-only index and up to 24 song rows per page; quarter pages also expose every song without JavaScript;
- 首屏只包含歌曲列與分片清單，沒有互動便不請求搜尋資產。字詞搜尋先按需讀取最多 4 份共享路由表，再與年份／季度條件取交集，只下載可能命中的索引分片；完整結果仍由既有的 substring 搜尋判斷；
- 路由表由所有動畫、歌曲及創作者搜尋文字的短字串派生，涵蓋單字、子字串、NFKC 別名及跨欄位組合。雜湊碰撞只會多載分片，不會排除真實結果；空字詞瀏覽及 OP／ED 等廣泛查詢仍可載入全部適用分片；
- `/search-index/<sha256>.json` files use a lossless compact format: shared season records, positional fields and reconstructable text prefixes, with exact literal overrides for other text. Every build restores and compares the complete original records before publishing files;
- compact index and routing files use immutable HTTP caching and are shared across pages. At most four routing buckets are needed per query. Four concurrent requests, exact byte checks and content hashes bound all asset loading; each file and restored index chunk retain the 256 KiB gate. Index plus routing JSON share the existing 8 MiB transmission ceiling; the complete restored index also retains its 8 MiB gate;
- combine anime, song or creator scope with year, quarter, OP／ED and official-video filters; sort by quarter, song, anime or artist;
- song rows open the anime page containing every theme; search rows can jump to the corresponding theme and its credits; cross-season songs appear once, showing the newest matching quarter;
- the index is limited to 10,000 unique works, 20,000 seasonal references, and 8 MiB of serialized UTF-8 data. Larger catalogues require a reviewed indexing change; these are safety ceilings, not promised device capacity;
- native year／quarter links remain usable without JavaScript;
- filtering runs in the browser without query parameters, analytics, cookies, or a runtime search API. Requests only retrieve reviewed public index files; successful files are reused, failures offer retry and quarter links, and stale searches cannot replace newer results;
- the text-only result list does not load remote poster media;
- YouTube connects only after the user activates a clearly labelled consent button;
- Japanese and Traditional Chinese remain the primary visible languages, with English／Romaji support where available.

## Online delivery and SEO／線上交付與搜尋引擎

- 公開網站優先線上瀏覽與搜尋引擎收錄；作品與季度內容直接輸出為 HTML，canonical、sitemap 與結構化資料沿用穩定網址；
- 年份、季度與動畫頁的可見導覽共用 `BreadcrumbList` 標記，不另外維護 SEO 導覽清單；
- production build 產生具內容版本的 `/sw.js`，只預載 `/offline/`、`/_astro/` 共用資產、favicon 與 manifest，總量上限 512 KiB；
- navigation 維持 network-first，連線失敗時顯示 `/offline/`，不預載或保存整站歌曲目錄；更新啟用時移除本產品舊版整站快取；
- 不建立 runtime cache entry，因此搜尋字詞、API response、瀏覽路徑及第三方媒體不會因操作而被寫入離線快取；
- `/manifest.webmanifest` 提供繁體中文 app metadata 與英文名稱支援。

## Local backup／本機備份

```bash
npm run backup
npm run backup:check -- <backup-file>
npm run backup:restore -- <backup-file> <new-directory>
```

備份保存目前 Git 索引與未忽略的新檔案，包括未提交的已審閱資料、ID、來源連結、程式、文件與 lockfile；不保存 Git 歷史、環境 secrets、第三方原始回應、媒體副本或可重建的 `dist`。每個檔案保留 SHA-256，還原只寫入新建目錄，避免覆蓋現有工作。備份是 gzip 壓縮 JSON，存於被 Git 忽略的 `.private/backups/`，不隨網站或 repository 發布，也不自動清除舊份。

還原後切換到新目錄，執行 `npm ci`、`git init`、`npm run verify:batch`，再按需要執行 `npm run verify:full`。這是專案來源備份；公開資料的重用範圍仍見 [授權](LICENSING.md) 與 [來源條款](docs/SOURCE_TERMS.md)。

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
4. 資料批次使用 `npm run verify:batch`；正式發布前安裝 Chromium，執行 `npm run verify:full`。所有型別、資料、公開邊界、產物、依賴、Cloudflare 及瀏覽器 gate 均保留。
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
- v1.26.0 2019 fall catalogue QA: `docs/QA_V1_26_2019_FALL.md`
- v1.25.0 2020 winter catalogue QA: `docs/QA_V1_25_2020_WINTER.md`
- v1.24.0 2020 spring catalogue QA: `docs/QA_V1_24_2020_SPRING.md`
- v1.23.0 2020 summer catalogue QA: `docs/QA_V1_23_2020_SUMMER.md`
- v1.22.0 2020 fall catalogue QA: `docs/QA_V1_22_2020_FALL.md`
- v1.21.0 2021 winter catalogue QA: `docs/QA_V1_21_2021_WINTER.md`
- v1.20.0 2021 spring catalogue QA: `docs/QA_V1_20_2021_SPRING.md`
- v1.19.0 2021 summer catalogue QA: `docs/QA_V1_19_2021_SUMMER.md`
- v1.18.0 2021 fall catalogue QA: `docs/QA_V1_18_2021_FALL.md`
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

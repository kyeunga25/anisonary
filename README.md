# Anisonary｜動畫歌典

Anisonary 是以 Astro + strict TypeScript 建立的動畫歌曲目錄，按季度與日本編輯播出日瀏覽作品、OP 與 ED；下方同時保留 English technical notes。

This repository contains the completed Phase 1 frontend and the Phase 2 curated catalogue: season directory, anime detail pages, traceable OP／ED credits and links, source and image provenance, local-only cross-season search, privacy-bounded offline reading, a GitHub correction flow, and Cloudflare Workers Static Assets delivery. The default catalogue covers four reviewed snapshots across 2025 and 2026, with 280 unique titles and 615 known OP／ED records; fictional Mock Data remains test-only.

目前公開版本：**v1.1.0**。搜尋在瀏覽器內比對日文、繁體中文、Romaji、歌曲、歌手與 credit；搜尋字詞不會傳送到 server 或 analytics。Build 同時輸出與頁面相同資料來源的同源唯讀 JSON API，不需要 application Worker、D1、KV 或 secret。Service Worker 只預先保存公開頁面與必要靜態資產，不保存搜尋字詞、API JSON 或第三方媒體。

Production build 會從最終 HTML 自動產生 hash-based Content Security Policy。政策不使用 `unsafe-inline` 或 `unsafe-eval`，禁止 inline event／style attributes，只開放同源資產、已核對的海報來源及使用者啟動後的 YouTube privacy-enhanced iframe。任何未批准的 media origin 會令 build fail closed。

## Local development

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
- `MockProvider` remains available only for isolated tests and UI fixtures.
- Copy `.env.example` to `.env` for local configuration. Never commit secrets.

Season coverage uses a repository-owned source registry: Annict is the Japanese seasonal inventory baseline, while Bangumi provides a Chinese-entry cross-check. The four published snapshots additionally cross-check Traditional Chinese calendar inventories, AniList identifiers and media, AnimeThemes records, public theme-song indexes, official sites, and Taiwan／Hong Kong licensing pages. These are editorial inputs only; production builds use the reviewed static snapshot and never require external APIs at runtime. See `docs/DATA_SOURCES.md` for the exact scope and naming rules.

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
- `/api/`、`/mock-posters/` 測試 fixture、404、第三方 poster 及 YouTube 媒體不在 precache 內；
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

## Project notes

- Public product scope and release status: `docs/PROJECT_PLAN.md`
- Version history: `CHANGELOG.md`
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
- v1.0.0 public API production check: `docs/API_PRODUCTION_CHECK.md`

The public repository must not contain crawlers, database dumps, unpublished data, secrets, private source adapters, private source-selection rules, or internal confidence rules.

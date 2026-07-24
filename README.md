# Anisonary｜動畫歌典

Anisonary 是以 Astro + strict TypeScript 建立的動畫歌曲目錄，按季度與日本編輯播出日瀏覽作品、OP 與 ED；下方同時保留 English technical notes。

This repository contains the completed Phase 1 frontend and the Phase 2 curated catalogue foundation: season directory, anime detail pages, traceable OP／ED credits and links, source and image provenance, local-only cross-season search, privacy-bounded offline reading, a GitHub correction flow, and Cloudflare Workers Static Assets delivery. The default catalogue contains manually reviewed public records; fictional Mock Data remains test-only.

目前公開版本：**v0.3.0**。搜尋在瀏覽器內比對日文、繁體中文、Romaji、歌曲、歌手與 credit；搜尋字詞不會傳送到 server 或 analytics。Service Worker 只預先保存 build 產生的公開同源頁面與靜態資產，不保存搜尋字詞、私人 API response 或第三方媒體。

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

## Data providers

- With no `PUBLIC_API_BASE_URL`, the site uses the repository's reviewed `CuratedProvider` records.
- When `PUBLIC_API_BASE_URL` is set, `ApiProvider` requests the private read-only Anisonary API through a fail-closed nested contract, URL, identity and timeout gate.
- `MockProvider` remains available only for isolated tests and UI fixtures.
- Copy `.env.example` to `.env` for local configuration. Never commit secrets.

Season coverage uses a repository-owned source registry: Annict is the Japanese seasonal inventory baseline, while Bangumi provides a Chinese-entry cross-check. Both are editorial inputs only; production builds use reviewed local snapshots and never require these external APIs at runtime. See `docs/DATA_SOURCES.md` for URL builders, pagination, authentication boundaries, and Traditional Chinese naming rules.

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
- `/mock-posters/` 測試 fixture、404、第三方 poster 及 YouTube 媒體不在 precache 內；
- `/manifest.webmanifest` 提供繁體中文 app metadata 與英文名稱支援。

## Environment

```text
PUBLIC_API_BASE_URL=https://api.anisonary.k-y.cc/v1
PUBLIC_SITE_URL=https://anisonary.k-y.cc
PUBLIC_DEFAULT_SEASON=2026-summer
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=false
```

Once the private production API is connected, production must set `ANISONARY_REQUIRE_API_DATA=true` so an unavailable API fails the build instead of silently falling back to repository data.

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
- Phase 2 catalogue scope and source ledger: `docs/PHASE2_CATALOG.md`
- v0.2.0 search and media privacy QA: `docs/QA_PHASE2_SEARCH_PRIVACY.md`
- v0.3.0 offline static catalogue QA: `docs/QA_PHASE2_OFFLINE_STATIC.md`
- Stable Japanese and Chinese seasonal source registry: `docs/DATA_SOURCES.md`
- Visual system and accepted concepts: `docs/DESIGN_SYSTEM.md`
- M0–M6 QA evidence: `docs/QA_PHASE1_M0_M6.md`
- M7 quality QA evidence: `docs/QA_PHASE1_M7.md`
- Phase 1 completion gate and external blockers: `docs/QA_PHASE1_COMPLETION.md`
- GitHub and Cloudflare delivery requirements: `docs/DEPLOYMENT_CLOUDFLARE.md`
- Private API public contract handoff: `docs/API_HANDOFF.md`

The public repository must not contain crawlers, database dumps, unpublished data, secrets, private source adapters, private source-selection rules, or internal confidence rules.

# Anisonary｜動畫歌典

Anisonary is an Astro + strict TypeScript frontend for browsing anime music by season and Japanese editorial broadcast weekday.

This repository contains the completed Phase 1 frontend and the Phase 2 curated catalogue foundation: season directory, anime detail pages, traceable OP／ED credits and links, source and image provenance, local-only cross-season search, a GitHub correction flow, and Cloudflare Workers Static Assets delivery. The default catalogue contains manually reviewed public records; fictional Mock Data remains test-only.

Current public version: **v0.2.0**. The search page matches Japanese, Traditional Chinese, Romaji, song, artist, and credit names entirely in the browser. Search terms are not sent to a server or analytics service. YouTube embeds no longer request a remote thumbnail before explicit consent.

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
Worker: anisonary
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
- Stable Japanese and Chinese seasonal source registry: `docs/DATA_SOURCES.md`
- Visual system and accepted concepts: `docs/DESIGN_SYSTEM.md`
- M0–M6 QA evidence: `docs/QA_PHASE1_M0_M6.md`
- M7 quality QA evidence: `docs/QA_PHASE1_M7.md`
- Phase 1 completion gate and external blockers: `docs/QA_PHASE1_COMPLETION.md`
- GitHub and Cloudflare delivery requirements: `docs/DEPLOYMENT_CLOUDFLARE.md`
- Private API public contract handoff: `docs/API_HANDOFF.md`

The public repository must not contain crawlers, database dumps, unpublished data, secrets, private source adapters, private source-selection rules, or internal confidence rules.

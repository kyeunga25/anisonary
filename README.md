# Anisonary｜動畫歌典

Anisonary is an Astro + strict TypeScript frontend for browsing anime music by season and Japanese editorial broadcast weekday.

This repository implements the Phase 1 frontend and public API handoff: project foundation, public data contract, provider abstraction, site shell, season directory, anime detail pages, theme credits, thumbnail-first YouTube loading, classified platform links, SEO/JSON-LD, accessible loading/error/empty states, component/E2E coverage, Cloudflare Pages delivery, and the private API handoff contract. All bundled records are explicitly fictional Mock Data.

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
npx playwright install chromium
npm run test:e2e
npm run check
```

## Data providers

- With no `PUBLIC_API_BASE_URL`, the site uses `MockProvider`.
- When `PUBLIC_API_BASE_URL` is set, `ApiProvider` requests the private read-only Anisonary API.
- Copy `.env.example` to `.env` for local configuration. Never commit secrets.

## Environment

```text
PUBLIC_API_BASE_URL=https://api.anisonary.k-y.cc/v1
PUBLIC_SITE_URL=https://anisonary.k-y.cc
PUBLIC_DEFAULT_SEASON=2026-summer
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=false
```

Once the private production API is connected, production must set `ANISONARY_REQUIRE_API_DATA=true` so an unavailable API fails the build instead of publishing an incomplete static site. Until then, the deployed frontend intentionally remains in clearly labelled Mock Data mode.

## Cloudflare Pages

The intended delivery path is Cloudflare Pages Git integration: `main` is production and pull requests receive preview deployments. GitHub Actions is a quality gate only and does not deploy.

```text
Project: anisonary
Build: npm run build
Output: dist
Node: 22
Domain: anisonary.k-y.cc
```

See `docs/DEPLOYMENT_CLOUDFLARE.md` before connecting GitHub or performing the first deployment.

Current Pages deployment: <https://anisonary.pages.dev> (Mock Data mode). The custom domain is being validated.

## Project notes

- Product and Phase 1 scope: `docs/PROJECT_PLAN.md`
- Remaining Phase 1 milestones: `docs/TODO_PHASE1.md`
- Visual system and accepted concepts: `docs/DESIGN_SYSTEM.md`
- M0–M6 QA evidence: `docs/QA_PHASE1_M0_M6.md`
- M7 quality QA evidence: `docs/QA_PHASE1_M7.md`
- Phase 1 completion gate and external blockers: `docs/QA_PHASE1_COMPLETION.md`
- GitHub and Cloudflare delivery requirements: `docs/DEPLOYMENT_CLOUDFLARE.md`
- Private API public contract handoff: `docs/API_HANDOFF.md`

The public repository must not contain crawlers, database dumps, unpublished data, secrets, private source adapters, allowlists, or internal confidence rules.

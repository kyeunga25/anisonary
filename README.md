# Anisonary｜動畫歌典

Anisonary is an Astro + strict TypeScript frontend for browsing anime music by season and Japanese editorial broadcast weekday.

This repository currently implements Phase 1 milestones M0–M6: project foundation, public data contract, provider abstraction, site shell, season directory, anime detail pages, theme credits, thumbnail-first YouTube loading, non-embeddable video fallbacks, classified platform links, source verification, and empty states. All bundled records are explicitly fictional Mock Data.

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
```

## Project notes

- Product and Phase 1 scope: `docs/PROJECT_PLAN.md`
- Remaining Phase 1 milestones: `docs/TODO_PHASE1.md`
- Visual system and accepted concepts: `docs/DESIGN_SYSTEM.md`
- M0–M6 QA evidence: `docs/QA_PHASE1_M0_M6.md`

The public repository must not contain crawlers, database dumps, unpublished data, secrets, private source adapters, allowlists, or internal confidence rules.

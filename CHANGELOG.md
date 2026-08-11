# Changelog

All notable public product changes are recorded here. Release notes contain only product scope and reproducible validation; platform identifiers and private operational details are excluded.

## [1.3.0] - 2026-08-11

### Added

- source-backed release, performer, credit, official-link, and video metadata for the previously incomplete 2025 summer and 2026 winter／summer theme-song records;
- explicit `not_used` states for reviewed works that do not use an OP or ED, instead of presenting them as unknown;
- a public-boundary gate that rejects likely secrets, private paths, cloud resource identifiers, private implementation details, and generated-image metadata before build or CI;
- privacy-safe self-deployment, technology, AI-use, legal-boundary, and Cloudflare validation documentation.

### Changed

- reorganized desktop navigation as a persistent grouped left sidebar, with a compact accessible menu on smaller screens;
- improved catalogue search coverage for song titles, performers, credits, theme type, and normalized multilingual terms while reducing the shipped search index;
- corrected duplicate, reused, variant, sequel, finale, and character-song classifications where the reviewed public sources distinguished them;
- updated Astro, Playwright, Node type definitions, Wrangler, and the patched `fast-uri` override while keeping the supported TypeScript major;
- removed unpublished private release-pipeline implementation details and historical generated raster concepts from the public release tree.

### Security

- restored the public application to its static `CuratedProvider`／bounded public `ApiProvider` boundary with no private source adapter, database schema, runtime secret, or stateful binding;
- upgraded dependencies until `npm audit` reported zero known vulnerabilities;
- retained generated hash-based CSP, allowlisted media origins, bounded offline navigation, explicit YouTube consent, and fail-closed API validation.

### Preserved

- four reviewed seasons, 280 unique anime pages, 615 OP／ED records, and 392 official YouTube links;
- one first-party and one cross-check source for every published song record;
- Cloudflare Workers Static Assets delivery with no application Worker or stateful binding.

## [1.2.0] - 2026-08-02

### Added

- structured provenance for all season and anime details, plus clickable source records for all 615 reviewed OP／ED entries, including language, role, review state, and verification date;
- public architecture, data-provenance, and v1.2.0 QA documentation;
- fail-closed API contract coverage for theme source roles, URL safety, label consistency, and verification-date consistency.

### Changed

- replaced public data-completeness percentages with explicit reviewed source evidence and empty states;
- corrected the reviewed title and artist for the `地球大好き！きっくん` theme, added first-party evidence for the final two theme gaps and four work-level gaps;
- replaced the homepage raster illustration with a bespoke HTML／CSS catalogue visual;
- removed the unreferenced legacy homepage／Mock raster assets while keeping Mock Data test-only;
- updated the official GitHub checkout, Node setup, and artifact actions to their Node 24-compatible v7 majors;
- synchronized four-season project, API, deployment, source, design, and release documentation.

### Preserved

- four reviewed seasons, 280 unique anime pages, 615 OP／ED records, and 392 official YouTube links;
- local-only search, explicit YouTube consent, generated CSP, and privacy-bounded offline reading;
- Cloudflare Workers Static Assets delivery with no application Worker or stateful binding.

## [1.1.0] - 2026-07-28

### Added

- reviewed 2026 winter and 2025 summer seasonal snapshots with 66 and 75 anime respectively;
- first-party theme-song references for titles not covered by the seasonal song indexes;
- public season pages and static JSON API assets for both added quarters.

### Changed

- expanded the public catalogue to four seasons, 280 unique anime pages, 615 OP／ED records, and 392 official YouTube links;
- split the added quarterly seeds into dedicated source files while retaining one reviewed public contract;
- updated catalogue, API, search, navigation, and release checks for the four-season scope.

### Preserved

- local-only search, explicit YouTube consent, generated CSP, and privacy-bounded offline reading;
- Cloudflare Workers Static Assets delivery with no application Worker, D1, KV, R2, Queue, analytics, or observability binding.

## [1.0.0] - 2026-07-26

### Added

- build-time public JSON endpoints for the season list, season details, and 139 anime details;
- full HTTP contract coverage for list/detail consistency, Mock Data rejection, and unknown identity `404` behavior;
- explicit API `noindex`, revalidation, sitemap exclusion, and offline-precache exclusion.

### Changed

- public API verification now targets the production custom domain instead of a separate backend hostname;
- Playwright updated to 1.62.0; TypeScript remains on the latest major supported by `@astrojs/check`;
- all Wrangler scripts use the same project-specific temporary diagnostic path.

### Preserved

- 70 spring and 70 summer 2026 entries, 139 unique anime pages, and 298 known OP／ED records;
- local-only search, explicit YouTube consent, generated CSP, and privacy-bounded offline reading;
- Cloudflare Workers Static Assets delivery with no application Worker, D1, KV, R2, Queue, analytics, or observability binding.

## [0.4.0] - 2026-07-25

- completed the reviewed 2026 spring and summer catalogue snapshot;
- added the fail-closed public API verification contract and generated Content Security Policy.

## [0.3.0] - 2026-07-25

- added the versioned same-origin offline catalogue and Web App Manifest.

## [0.2.0] - 2026-07-25

- added local cross-season search and explicit third-party media consent.

# Changelog

All notable public product changes are recorded here. Release notes contain only product scope and reproducible validation; platform identifiers and private operational details are excluded.

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

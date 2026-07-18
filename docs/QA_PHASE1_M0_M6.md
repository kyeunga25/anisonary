# Phase 1 M0–M6 QA

Verified on 2026-07-17 against the local Astro development server and the production static build.

## Automated checks

- `npm run lint`: Astro check completed with 0 errors, warnings, or hints.
- `npm test`: 19 unit tests passed across season, weekday, MockProvider, YouTube ID/URL, and external-link label behavior.
- `npm run build`: 38 static pages generated successfully.

## Browser environment and target flow

- Browser: Codex in-app browser.
- Desktop concept-native viewport: `1536 × 1024`.
- Mobile viewport: `390 × 844`.
- Flow: anime detail loads → no iframe exists → user activates one thumbnail → only that privacy-enhanced iframe is created → other player/fallback states remain unchanged.

## Browser checks

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity and content | Pass | Correct anime title, M5–M6 media records, and classified links rendered. |
| Initial lazy state | Pass | `iframeCount=0`; one load control on the showcase page. |
| No autoplay | Pass | Created iframe uses `autoplay=0`. |
| Privacy-enhanced embed | Pass | Created iframe uses `www.youtube-nocookie.com`. |
| Independent players | Pass | On the multi-player fixture, OP1 loaded while ED1 retained its load control. |
| Non-embeddable fallback | Pass | ED1 remained an external-only YouTube state. |
| External-link safety | Pass | Platform links use `_blank` and `noopener noreferrer external`. |
| Responsive layout | Pass | Desktop and mobile widths matched their viewport; no horizontal overflow. |
| Console health | Pass | No relevant browser warnings or errors during the tested flows. |

## Fidelity ledger

The accepted reference is `docs/design/theme-media-links-concept.png`.

1. Palette: true near-white, deep navy, coral accents, and cool thin borders match the reference.
2. Container model: theme identity, media area, fallback row, and platform rail remain one continuous record rather than nested card grids.
3. Typography: Japanese song names remain dominant; credits, channel metadata, and link labels retain compact UI scale.
4. Video treatment: 16:9 frame, centered play control, metadata column, and external action match the reference hierarchy.
5. Link treatment: platform rows visibly distinguish direct, search, official, and purchase destinations.
6. Responsive behavior: media and metadata stack into a readable single column at 390px; link rails become full-width rows.
7. Interaction: the implementation adds real independent lazy state while preserving the reference's pre-load and fallback visuals.

Intentional difference: the concept uses a fictional night-platform thumbnail, while the implementation uses the real thumbnail of the documented Google for Developers iframe demo fixture. This keeps the Mock interaction truthful and verifiable.

The implementation was inspected against the accepted concept using `view_image` on both the concept and the latest Browser screenshots. No material visual mismatch remains.

## References

- [YouTube embedded player parameters](https://developers.google.com/youtube/player_parameters)
- [YouTube privacy-enhanced mode](https://support.google.com/youtube/answer/171780)

## Remaining Phase 1 risk

- Production API responses and real official video/link records remain outside this public Mock frontend.
- Full SEO, accessibility/performance audit, JSON-LD, and committed Playwright E2E coverage remain in M7.

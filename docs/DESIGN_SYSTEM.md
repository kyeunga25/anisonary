# Phase 1 Design System

The source components, design tokens, responsive Playwright checks, and current browser rendering are the accepted design evidence. Historical raster concepts are not retained in the public repository.

## Tokens

- Canvas: true near-white `#fbfcff`; dark canvas `#08112b`.
- Ink: deep indigo `#07143f`; secondary `#52607f`.
- Accent: coral `#ef6259`; focus `#2f63d8`.
- Borders: cool indigo at 14–22% opacity.
- Radius: 8px controls, 10px cards; shadows are limited to hover elevation.
- Type: system sans stacks with Japanese and Traditional Chinese fallbacks.
- Container: open page bands, max width 1320px, no nested section cards.

## Component families

- Quiet header with record/book mark, essential navigation, theme toggle.
- Primary and outline buttons with arrow SVG.
- Poster cards with 2:3 media, title hierarchy, broadcast metadata and OP／ED status; no public completeness score.
- Weekday jump rail and checkbox filters.
- Anime identity header with poster, multilingual titles, broadcast metadata, status, and reference links.
- OP／ED data rows with credits, reviewed source links, language／role metadata, and last-verified dates.
- 16:9 thumbnail-first video panels with an explicit load action, compact metadata, and independent player state.
- Horizontal platform-link rails with visible Direct／Search／Official／Purchase destination labels.
- Non-embeddable video fallback rows that preserve a safe external YouTube path.
- Quiet code-native empty state that returns readers to the season directory.
- Mock-data notice using a coral cue dot, not a decorative marketing badge.

All UI text is code-native. The homepage catalogue visual is built from semantic HTML and CSS, with no raster artwork or extra remote origin. Fictional Mock records reuse the repository icon in isolated tests; legacy Mock raster artwork is no longer kept in the repository.

# Phase 1 Design System

Accepted concept references:

- `docs/design/home-concept.png` (1435 × 1096)
- `docs/design/season-concept.png` (1373 × 1146)
- `docs/design/anime-detail-concept.png` (1272 × 1237)
- `docs/design/anime-empty-state-concept.png` (1628 × 971)

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
- Poster cards with 2:3 media, title hierarchy, broadcast metadata, OP/ED status and completion rail.
- Weekday jump rail and checkbox filters.
- Anime identity header with poster, multilingual titles, broadcast metadata, status, and reference links.
- OP／ED data rows with credits, source labels, and last-verified dates.
- Quiet illustrated empty state that returns readers to the season directory.
- Mock-data notice using a coral cue dot, not a decorative marketing badge.

All UI text is code-native. The hero and fictional posters are generated project assets; none depict a real title or franchise.

# M0–M3 Fidelity and Functional QA

## Visual references

- Home concept: `docs/design/home-concept.png` at 1435 × 1096.
- Season concept: `docs/design/season-concept.png` at 1373 × 1146.
- Browser verification: Codex in-app Browser against `http://127.0.0.1:4321`.
- Responsive verification: 390 × 844 viewport.

## Fidelity ledger

| Comparison point | Concept evidence | Render evidence | Resolution |
|---|---|---|---|
| Header and navigation | Quiet logo, five essential links, theme toggle | Same link order, active coral underline, compact record/book mark | Matched; mobile uses a second horizontal nav row |
| Homepage first viewport | Two-line headline, paired CTA, editorial book/record illustration | Headline locked to two desktop lines, exact CTA copy, standalone matching hero asset | Fixed initial three-line wrap and excess hero height |
| Palette and container model | True near-white canvas, navy ink, coral accent, open bands | `#fbfcff`, `#07143f`, `#ef6259`; section rules instead of nested wrappers | Matched in light mode; accessible dark mode is an intentional additional state |
| Season information hierarchy | Large season title, compact season switch, filter row, weekday rail | Same order, labels, active treatment and spacing model | Matched |
| Anime card anatomy | Five columns, cropped visual, Japanese primary title, Chinese secondary title, time, OP/ED, completion | Five columns at 1373px with 3:1.72 media crop and all specified metadata | Fixed initial portrait-height directory cards |
| Content density | Five Monday cards and continuing Tuesday row | 16 clearly fictional Mock records per season, Monday and Tuesday each have five | Fixed initial one-card-per-section sparsity |
| Mobile responsive behavior | Compact stacked layout and continued poster browsing | 390px has no page overflow, two poster columns, horizontally scrollable weekday rail | Matched |
| Interaction and accessibility | Visible controls, focusable navigation and filters | Semantic nav, labeled checkboxes, live result count, skip link, focus-visible styles | Verified filter 16 → 8 official-video items and clear → 16 after final data expansion logic equivalent |

## Above-the-fold copy diff

No unapproved marketing eyebrow, metric, product claim, search control, account control, player or admin UI was added. The visible homepage copy matches the approved brief. The season page adds the real result count (`16 套動畫`) required by the working filter.

## Intentional deviations

- Generated concept poster titles and characters were not reused as production UI. The repository uses separate original, no-text Mock poster assets and code-native fictional titles.
- Filters default to unchecked so the initial state shows the complete directory; the concept depicted checked boxes as a visual state.
- Only M0–M3 are implemented. Anime detail, theme cards, YouTube and platform links remain documented M4–M6 work.

No remaining material visual mismatch blocks M0–M3 sign-off.

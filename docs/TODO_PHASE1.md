# Phase 1 Milestones

## Completed — M4 Anime detail and theme cards

- [x] `/anime/[slug]`；
- [x] OP／ED Section、歌名、Artist、可用 Credits；
- [x] Sources 與 Last Verified；
- [x] Empty state 與未知 slug 的靜態 404。

## Completed — M5–M6 YouTube and links

- [x] Thumbnail-first lazy YouTube embed；
- [x] 不 autoplay、privacy-enhanced embed、獨立 Player state；
- [x] 不可 embed 時外部 Link；
- [x] Direct/Search/Official/Purchase Link 標籤與 external-link safety。

## Repository complete — M7 Quality

- [x] SEO metadata、canonical、Open Graph、季度與動畫 JSON-LD；
- [x] Component tests 與 Playwright 主流程／Mobile／404／API error E2E；
- [x] Loading、Error、Empty state 及 external-link accessibility 說明；
- [x] Desktop／390px Mobile rendered accessibility 與 console review；
- [x] Hero／Mock poster 轉為尺寸化 WebP，總資產由 12,603,441 bytes 降至 831,018 bytes；
- [ ] 配置 Chrome DevTools MCP 後完成 Core Web Vitals／Lighthouse 數值稽核；
- [ ] Production API smoke test 時確認遠端 poster broken-image fallback。

## In progress — M8 Cloudflare delivery

- [x] `.nvmrc`、Wrangler Pages config、build／output 固定；
- [x] GitHub CI 加入 unit、component、Playwright、build artifact 與 merge queue event；
- [x] `robots.txt`、sitemap、static security headers、`pages.dev` noindex；
- [x] Production API fail-closed build guard；
- [x] GitHub／Cloudflare 接入需求表、環境與 rollback／smoke runbook；
- [ ] Push 已提交 commits 到 public GitHub repository；
- [ ] GitHub `main` branch protection 要求 `quality` check；
- [ ] Cloudflare Pages Git integration 與首次 preview；
- [ ] Production API、custom domain、Bulk Redirect；
- [ ] Production smoke test 與 rollback drill。

## In progress — M9 Private API handoff

- [x] 公開 endpoint、payload、error 與 build-time integration contract；
- [ ] 私有 `anisonary-api` 實作及 contract fixture 驗證；
- [ ] Production API network／cache smoke test。

## Final M7–M9 validation

- [ ] 配置 Chrome DevTools MCP 後完成 Core Web Vitals／Lighthouse 數值稽核；
- [ ] Production API smoke test 時確認遠端 poster broken-image fallback。

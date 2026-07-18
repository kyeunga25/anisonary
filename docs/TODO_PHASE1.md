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
- [x] 遠端 poster 載入失敗時提供 accessible fallback 與 E2E；
- [ ] 配置 Chrome DevTools MCP 後完成 Core Web Vitals／Lighthouse 數值稽核；

## In progress — M8 Cloudflare delivery

- [x] `.nvmrc`、Wrangler Pages config、build／output 固定；
- [x] GitHub CI 加入 unit、component、Playwright、build artifact 與 merge queue event；
- [x] `robots.txt`、sitemap、static security headers、`pages.dev` noindex；
- [x] Production API fail-closed build guard；
- [x] GitHub／Cloudflare 接入需求表、環境與 rollback／smoke runbook；
- [x] 透過 PR #1 push／merge 到 public GitHub repository；
- [x] GitHub `main` branch protection 要求 PR、`quality`、linear history；
- [x] Cloudflare Pages Git integration 與首次 Mock production deployment；
- [x] Pages URL production smoke、security headers、robots、sitemap 與 404；
- [ ] PR preview 與 merge 後自動 production deployment；
- [ ] Custom domain DNS／TLS validation；
- [ ] Private production API、`pages.dev` redirect 與 rollback drill。

## Repository complete — M9 Private API handoff

- [x] 公開 endpoint、payload、error 與 build-time integration contract；
- [x] Production fail-closed integration 與 contract fixture coverage；
- [ ] 私有 `anisonary-api` 實作與 production network／cache smoke 屬 backend 接入工作。

## Final M7–M9 validation

- [ ] 配置 Chrome DevTools MCP 後完成 Core Web Vitals／Lighthouse 數值稽核；
- [ ] Custom domain、Git preview／production automation 與 rollback；
- [ ] Private API 上線後執行 fail-closed production data smoke。

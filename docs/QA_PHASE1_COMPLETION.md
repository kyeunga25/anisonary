# Phase 1 Completion Gate

記錄日期：2026-07-19（Asia/Hong_Kong）

本文件只保留可公開的完成證據；非公開基礎設施、憑證和私有營運資料不會保存在公開 repository。

## Local gate／本機驗收

- Astro／TypeScript：0 errors、0 warnings、0 hints；
- Unit／component tests：passed；
- Static build：passed；
- Chromium Playwright：passed；
- broken remote poster、API error、404、mobile filter、SEO／JSON-LD、YouTube consent flow 均有 browser coverage。

Production data guard 另行驗證：

- `ANISONARY_REQUIRE_API_DATA=true` 且沒有 `PUBLIC_API_BASE_URL` 時，build 按預期失敗；
- API URL 無法連線時，build 按預期失敗；
- repository-reviewed catalogue 模式可在沒有 private API 時完成 build；
- provider error 不向公開頁面輸出 upstream detail。

## Public repository audit／公開 repository 稽核

Tracked files 不包含：

- secrets、private keys 或 `.env`；
- DB／SQLite dump；
- crawler 或 private source adapter；
- internal confidence rules；
- 非公開基礎設施或憑證資料；
- private operational or planning records；
- macOS Finder metadata、build output、dependency directory、browser report 或 local Wrangler state。

## GitHub gate／GitHub 驗收

- `main` 只能經 pull request 更新；
- `quality` 是 required check；
- strict／linear history、admin enforcement、force-push 和 branch deletion protection 已啟用；
- 合併後以正式 branch SHA、GitHub remote SHA 和 production delivery source 一致為完成條件。

## Cloudflare Workers gate／Cloudflare 驗收

- Runtime 使用 Workers Static Assets，不配置 application Worker binding；
- custom domain、TLS、canonical、主要 routes、SEO files、custom 404 與 security headers 已驗證；
- non-production Workers preview hostname 有 `X-Robots-Tag: noindex`；
- 舊 Pages delivery 已退役，不再是 fallback 或正式入口；
- Workers Builds 以 `main` 作 production source，preview branch 可先驗證；
- 公開 repository 只保存部署命令、輸入環境契約和驗收條件；私有營運資料不進入 source 或 build output。

## Current release follow-up／目前版本後續

v0.2.0 的本機測試與私隱驗收記錄見 `QA_PHASE2_SEARCH_PRIVACY.md`。完成 PR、production deployment 和正式 route smoke 後，公開文檔只補充通過狀態，不記錄私有營運細節。

尚未量度的項目不得標示為通過。目前沒有可用的 Chrome DevTools performance integration，因此不提供 Lighthouse 或 Core Web Vitals 數值；這不以一般 browser smoke 代替。

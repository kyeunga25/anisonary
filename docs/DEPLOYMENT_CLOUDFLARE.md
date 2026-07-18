# GitHub 與 Cloudflare Pages 交付需求

本文件把 Phase 1 M8 的 repository-side 準備、外部平台設定與驗收條件分開。

GitHub public merge、Actions quality gate、`main` protection、Cloudflare Pages Git project 與首次 Mock production deployment 已完成。Custom domain 仍在 DNS／TLS validation，private production API 尚未接入。

## 固定拓撲

| 項目 | 設定 |
|---|---|
| Public repository | `anisonary` |
| Cloudflare Pages project | `anisonary` |
| Production branch | `main` |
| Production domain | `anisonary.k-y.cc` |
| Build command | `npm run build` |
| Build output | `dist` |
| Node | `.nvmrc` 所指定的 Node 22 |
| Deployment owner | Cloudflare Pages Git integration |
| GitHub Actions | Quality gate 與 build artifact，不直接部署 |

Cloudflare Pages Git integration 是唯一自動部署來源。請勿同時加入會執行 `wrangler pages deploy` 的 GitHub workflow，以免同一 commit 產生兩個競爭中的 deployment。`npm run cf:deploy` 只保留作為經明確決定後的手動 direct-upload 路徑。

## 交付需求表

| ID | Requirement | Repository status | 外部平台驗收 |
|---|---|---|---|
| DEP-001 | Node／build／output 可重現 | Passed | Cloudflare 使用 Node 22、`npm run build`、`dist` |
| DEP-002 | GitHub CI 阻止不合格變更 | Passed | `main` branch protection 要求 `quality` check |
| DEP-003 | PR 可先驗證 | Ready | Git integration 為 PR／非 production branch 建 preview |
| DEP-004 | Production API 失敗不可發布殘缺網站 | Ready | Private API 上線時設 `ANISONARY_REQUIRE_API_DATA=true` |
| DEP-005 | Static SEO discovery | Passed | `/robots.txt` 及 `/sitemap-index.xml` 回應 `200` |
| DEP-006 | Preview 與 `pages.dev` 不被索引 | Passed | Response 有 `X-Robots-Tag: noindex` |
| DEP-007 | 基本 static security headers | Passed | Pages response headers 通過 smoke test |
| DEP-008 | Custom domain 與 canonical 一致 | In progress | Pages 已加入 `anisonary.k-y.cc`，等待 CNAME／TLS validation |
| DEP-009 | `pages.dev` 不形成重複正式入口 | Planned | 以 Cloudflare Bulk Redirect 導向 custom domain |
| DEP-010 | 可回復上一個穩定版本 | Planned | 首次 production 後測試 Pages rollback 流程 |
| DEP-011 | Production API contract | Documented | 私有 `anisonary-api` 實作並通過 smoke test |
| DEP-012 | Production 數值化品質稽核 | Pending | Lighthouse desktop 三項均達 90 或以上 |

暫不加入 CSP。正式 poster、API 與媒體來源的 allowlist 尚未固定；過早加入 CSP 會令未來合法來源無法載入。來源契約穩定後才把 CSP 作為獨立 hardening 變更。

## 環境設定

Private API 上線後，Cloudflare Pages 的 Production 環境：

```text
PUBLIC_API_BASE_URL=https://api.anisonary.k-y.cc/v1
PUBLIC_SITE_URL=https://anisonary.k-y.cc
PUBLIC_DEFAULT_SEASON=2026-summer
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=true
```

在 API 尚未可用的 initial production／preview，把 `PUBLIC_API_BASE_URL` 留空及使用：

```text
ANISONARY_REQUIRE_API_DATA=false
```

`ANISONARY_REQUIRE_API_DATA=true` 會令任何必要 API request failure 終止 build，避免只有首頁錯誤狀態、沒有季度頁及動畫頁的版本被視為成功部署。未接入 private API 前必須保留明確 Mock Data notice，不能假裝成真實 production data。環境變數不得包含 API token；目前公開唯讀 API 契約不要求前端 secret。

## 首次 production evidence

| 項目 | 結果 |
|---|---|
| Deployment ID | `d199c88b-34fb-4107-adee-670a9cc4e700` |
| Git source | `main@caa977e` |
| Build | 38 pages |
| Upload | 51 files |
| Pages URL | <https://anisonary.pages.dev> |
| Data mode | Explicit Mock Data |
| Smoke | Main routes `200`、unknown route `404`、SEO files `200` |

## 首次接入流程

1. GitHub 把 repository 設為 public，確認 `main` 已包含已審核 commits。
2. 為 `main` 啟用 branch protection，要求 PR 及 `quality` status check。
3. Cloudflare Pages 建立 `anisonary` project，選 GitHub repository 與 `main`。
4. 設定 build command、output、Production／Preview 環境變數。
5. 先以 Mock Data 建立 preview，完成 smoke test。
6. 私有 API ready 後，在 Production 設 API URL 與 fail-closed flag。
7. 綁定 `anisonary.k-y.cc`，再用 Bulk Redirect 把 `anisonary.pages.dev` 導向 custom domain。
8. Production 驗收後記錄 deployment ID；保留上一個成功版本作 rollback。

## Production smoke checklist

- GitHub `quality` check 通過；
- 首頁、兩個季度頁、至少一個動畫頁及未知 route；
- Mobile viewport、keyboard focus、theme toggle；
- canonical、Open Graph、JSON-LD；
- `/robots.txt`、`/sitemap-index.xml`；
- security headers 與 `pages.dev` noindex；
- YouTube 按下前沒有 iframe，按下後使用 privacy-enhanced domain；
- Initial Mock production 清楚顯示 Mock Data 提示；
- Private API production 不再顯示 Mock Data 提示；
- 暫停 API 後，測試 deployment 應 build 失敗且現有 production 不被取代；
- 遠端 poster failure fallback 與 Lighthouse／Core Web Vitals。

## 本機驗證與手動預覽

```bash
npm run check
npm run cf:dev
```

只有在明確改用 direct upload 作 deployment owner 時才執行：

```bash
npm run cf:deploy
```

# GitHub 與 Cloudflare Workers 交付需求

本文件把 Phase 1 M8 的 repository-side 準備、外部平台設定與驗收條件分開。

正式入口已由 Cloudflare Workers Static Assets 提供。原有 Pages Git project 在 Workers preview、production、rollback 與 roll-forward 均驗證後，已於 2026-07-23 永久退役；`anisonary.pages.dev` 不再解析。

## 固定拓撲

| 項目 | 設定 |
|---|---|
| Public repository | `kyeunga25/anisonary` |
| Worker | `anisonary` |
| Production branch | `main` |
| Production domain | `anisonary.k-y.cc` |
| Build command | `npm run build` |
| Production deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |
| Build output | `dist` |
| Node | `.nvmrc` 所指定的 Node 22 |
| Target deployment owner | Cloudflare Workers Builds Git integration |
| GitHub Actions | Quality gate 與 build artifact，不直接部署 |
| Retired migration artifact | `anisonary.pages.dev`，2026-07-23 已刪除 |

連接 Workers Builds 後，它是唯一自動部署來源。請勿同時加入會執行 `wrangler deploy` 的 GitHub workflow，以免同一 commit 產生競爭 deployment。`npm run cf:deploy` 只作初次接入或 break-glass 手動路徑。

## 交付需求表

| ID | Requirement | Repository status | 外部平台驗收 |
|---|---|---|---|
| DEP-001 | Node／build／output 可重現 | Passed | Node 22、`npm run build`、`dist` |
| DEP-002 | GitHub CI 阻止不合格變更 | Passed | `main` branch protection 要求 `quality` check |
| DEP-003 | PR 可先驗證 | Passed | Workers Builds 以 `versions upload` 建立並通過 non-production preview |
| DEP-004 | Production API 失敗不可發布殘缺網站 | Ready | Private API 上線時設 `ANISONARY_REQUIRE_API_DATA=true` |
| DEP-005 | Static SEO discovery | Passed | `/robots.txt` 及 `/sitemap-index.xml` 回應 `200` |
| DEP-006 | 非正式 hostname 不被索引 | Passed | `workers.dev` response 有 `X-Robots-Tag: noindex`；歷史 Pages fallback 退役前亦通過 |
| DEP-007 | 基本 static security headers | Passed | Worker custom domain 與 `workers.dev` 通過 smoke；Pages 歷史 evidence 保留於下方 |
| DEP-008 | Custom domain 與 canonical 一致 | Passed | `anisonary.k-y.cc` custom-domain route、DNS、TLS 均正常 |
| DEP-009 | Pages fallback 不形成重複正式入口 | Passed | Pages 沒有 custom domain，並於 Workers 驗證完成後在 2026-07-23 刪除 |
| DEP-010 | 可回復上一個穩定 Worker 版本 | Passed | rollback 至 `59b2269a…`、roll forward 至 `52fa8d29…` 均通過 |
| DEP-011 | Production API contract | Documented | 私有 `anisonary-api` 實作並通過 smoke test |
| DEP-012 | Production 數值化品質稽核 | Pending | 配置 Chrome DevTools MCP 後執行 Lighthouse／Core Web Vitals |

暫不加入 CSP。正式 poster、API 與媒體來源的 allowlist 尚未固定；來源契約穩定後才把 CSP 作為獨立 hardening 變更。

## 環境設定

Private API 上線後，Cloudflare Workers Builds 的 Production build environment：

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

`ANISONARY_REQUIRE_API_DATA=true` 會令任何必要 API request failure 終止 build，避免殘缺版本取代 production。未接入 private API 前必須保留明確 Mock Data notice。公開唯讀 API 契約不要求前端 secret；任何未來 build secret 只可存於 Cloudflare，不得 commit。

## 遷移與 production evidence

### Retired Pages migration fallback

| 項目 | 結果 |
|---|---|
| Deployment ID | `d199c88b-34fb-4107-adee-670a9cc4e700` |
| Git source | `main@caa977e` |
| Build | 38 pages |
| Upload | 51 files |
| URL | <https://anisonary.pages.dev> |
| Indexing | `X-Robots-Tag: noindex` |
| Retirement | 2026-07-23 透過 Wrangler 精確刪除 `anisonary` project；刪除後 hostname 不再解析 |

這一節只保留 migration evidence，不代表現行 deployment target。獨立的 `wallpect` Pages project 未被修改，刪除後仍可正常回應。

### First Workers Static Assets deployment

| 項目 | 結果 |
|---|---|
| Worker version | `59b2269a-d315-42ad-8aa4-37e842ff333a` |
| Worker tag | `73711e63a497409081a4425342e153c4` |
| Source | `codex/phase1-status@a2546bc` direct deployment |
| Build | 38 pages |
| Upload | 51 modified assets |
| Worker URL | <https://anisonary.kyeunga25.workers.dev> |
| Production URL | <https://anisonary.k-y.cc> |
| Data mode | Explicit Mock Data |

線上驗證包括首頁、兩個季度、動畫、About、Sources、SEO files、custom 404、HTTP/1.1、HTTP/2、TLS、security headers 與 non-production hostname noindex。Custom domain 與 `workers.dev` 根目錄各連續 20 次回應 `200`。

### Workers Builds Git connection

| 項目 | 結果 |
|---|---|
| Git repository | `kyeunga25/anisonary` |
| Production branch | `main` |
| Build command | `npm run build` |
| Production deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |
| Non-production branch builds | Enabled |
| Root directory | `/` |

連線已於 Cloudflare dashboard 完成。

### First Workers Builds preview

| 項目 | 結果 |
|---|---|
| Git source | `codex/phase1-status@0f05162` |
| Build ID | `f8ea2e1d-69b1-4511-b824-a6a45698dbfc` |
| Worker version | `46e4a86b-1fba-406e-93a0-20b4324cb5cd` |
| Preview URL | <https://46e4a86b-anisonary.kyeunga25.workers.dev> |
| Indexing | `X-Robots-Tag: noindex` |

Preview 已驗證首頁、季度頁、動畫頁、robots、sitemap、custom 404、Mock Data notice 與 security headers。Merge 後 production deployment 與 rollback／roll-forward 仍以實際 build 和 version evidence 為驗收依據。

### First Workers Builds production and recovery drill

| 項目 | 結果 |
|---|---|
| Git source | `main@57778d3` |
| Build ID | `6671270c-eb35-422a-b8b6-3a7d35fbb9a1` |
| Production version | `52fa8d29-763a-4110-8a77-27bed70eb5f9` |
| Rollback target | `59b2269a-d315-42ad-8aa4-37e842ff333a` |
| Active after drill | `52fa8d29-763a-4110-8a77-27bed70eb5f9` at 100% |

`main` merge 後自動 production deployment 通過。正式 custom domain 在 production、rollback 及 roll-forward 後均通過首頁、季度、動畫、About、Sources、robots、sitemap、custom 404、HTTP/1.1、HTTP/2 與 security headers smoke。

## Build Token 命名與最小權限

建議每個 project 使用獨立 token，名稱格式為：

```text
k-y.cc · <Project> · Workers Builds
```

Anisonary 使用 `k-y.cc · Anisonary · Workers Builds`。如果刻意讓同一 token 管理帳戶內所有 `k-y.cc` projects，才使用 `k-y.cc · Shared Workers Builds`；共享 token 的故障與撤銷範圍較大，不是預設方案。

Anisonary 現階段所需範圍：

- Account：指定目前 Cloudflare account；
- Account permissions：Account Settings Read、Workers Scripts Edit；
- Zone：只包括 `k-y.cc`；
- Zone permissions：Workers Routes Edit；
- User：User Details Read、Memberships Read；
- 不加入 Workers KV Storage、Workers R2 Storage 或其他未使用產品權限；
- 不在 repository、build variables 或公開文件保存 token secret。

Cloudflare 的 Workers Scripts 權限以 account 為資源範圍，不能靠 token 名稱限制至單一 Worker。每個 project 使用獨立 token 的價值在於可獨立輪替、停用、審計與降低共用憑證影響面。

安全更換流程：

1. 在 My Profile → API Tokens 建立或編輯上述名稱與權限的 user token；
2. 在 Worker → Settings → Builds → API token 選擇新 token 並儲存；
3. 推送 non-production commit，確認 `versions upload` preview 成功；
4. 合併後確認 `main` production deployment 成功；
5. 完成兩層驗證後才停用、roll 或刪除舊 token。

## Workers Builds 接入流程

1. 確認 PR `quality` 與現有 preview checks 通過。
2. 在 Worker `anisonary` 的 Settings → Builds 連接 `kyeunga25/anisonary`。
3. Production branch 設為 `main`，build command 設 `npm run build`。
4. Production deploy command 使用 `npx wrangler deploy`。
5. 啟用 non-production branch builds，deploy command 使用 `npx wrangler versions upload`。
6. Initial Mock build 不設 API URL，並保留 `ANISONARY_REQUIRE_API_DATA=false`。
7. 先驗證 PR preview；merge 後驗證 `main` 自動 production deployment。
8. 記錄新 version ID，執行 rollback 至上一個穩定版本，再 roll forward。
9. Worker Git delivery 穩定後退役 Pages fallback；Anisonary 已於 2026-07-23 完成。

## Production smoke checklist

- GitHub `quality` check 通過；
- 首頁、兩個季度頁、至少一個動畫頁及未知 route；
- Mobile viewport、keyboard focus、theme toggle；
- canonical、Open Graph、JSON-LD；
- `/robots.txt`、`/sitemap-index.xml`；
- custom domain security headers；
- `workers.dev` 的 `X-Robots-Tag: noindex`，以及退役的 `anisonary.pages.dev` 不再解析；
- YouTube 按下前沒有 iframe，按下後使用 privacy-enhanced domain；
- Initial Mock production 清楚顯示 Mock Data 提示；
- Private API production 不再顯示 Mock Data 提示；
- fail-closed 測試 deployment 失敗時現有 production 不被取代；
- 遠端 poster failure fallback 與 Lighthouse／Core Web Vitals。

## 本機驗證、preview 與手動部署

```bash
npm run check
npm run cf:dev
npm run cf:preview
```

只有在初次接入或明確的 break-glass 情況才執行：

```bash
npm run cf:deploy
```

Rollback drill 只可在已有至少兩個已驗證 Worker versions 後執行：

```bash
npx wrangler rollback <known-good-version-id>
```

# Anisonary Cloudflare Workers 自部署指南

本文件提供 privacy-safe 的自行部署流程。Anisonary 會先由 Astro 產生 `dist`，再由 Cloudflare Workers Static Assets 直接交付；預設沒有 application Worker、D1、KV、R2、Queue、Analytics、authentication、payment 或 AI binding，也不需要 runtime secret。

> Repository 內的 `wrangler.jsonc` 是本專案正式環境的公開設定。Fork 或 clone 後，未換走原有 Worker 名稱與 custom domain 前，不要執行任何 deploy command。

## 1. 前置條件

- Git；
- `.nvmrc` 指定的 Node.js 22 與 npm；
- 一個 Cloudflare account；
- optional：一個由你管理、已加入 Cloudflare 的 zone，用於 custom domain；
- optional：Chromium，用於完整 Playwright browser gate。

自部署步驟只說明技術操作，不改變 repository 本身或第三方動畫資料、商標、圖片、影片的授權條款。截至 v1.10.0，repository 沒有附帶開源軟件或內容 license；公開可讀不等於獲准複製、修改、再散布或部署。只有在權利人另行明確授權或 repository 日後加入適用 license 時才可依其範圍使用，第三方來源權利仍需另外核對。來源連結不等於重用授權。

## 2. 安裝與本機設定

在 repository 根目錄安裝 lockfile 內的固定依賴：

```bash
npm ci
```

建立不受 Git 追蹤的本機環境檔：

```bash
cp .env.example .env
```

正常 static build 使用以下公開 build-time 設定：

```text
PUBLIC_API_BASE_URL=
PUBLIC_SITE_URL=https://your-deployment-hostname.example
PUBLIC_DEFAULT_SEASON=2026-summer
PUBLIC_TIMEZONE=Asia/Tokyo
ANISONARY_REQUIRE_API_DATA=false
```

把 `PUBLIC_SITE_URL` 換成你最後會公開的 HTTPS hostname。它會進入 canonical、Open Graph 與 sitemap，因此不得放 token、credential、private hostname 或 query string。正常 build 保持 `PUBLIC_API_BASE_URL` 空白；repository-reviewed snapshot 會同時產生 HTML 與同源 static JSON。

`.env`、`.env.*`、`dist` 與 `.wrangler` 已被 `.gitignore` 排除。不要改成 force-add，也不要把 Cloudflare token、account metadata、原始 API response、database export、private source adapter 或 crawler output 放入 tracked files。

## 3. 選擇公開 hostname

### Option A：先使用 `workers.dev`

在 `wrangler.jsonc`：

1. 把 `name` 改成你 account 內唯一、公開安全的 Worker 名稱；
2. 保留 `workers_dev: true` 與 Static Assets 設定；
3. 移除原有整個 `routes` 欄位，避免嘗試接管本專案的 custom domain；
4. 保留 repository 已測試的 `compatibility_date`，升級日期前另行核對 Cloudflare 文件並重新跑完整 gate。

可先在自己的 Cloudflare Dashboard 確認預定的 `workers.dev` hostname。若只能在第一次 deploy 後取得 hostname，該次發布只作設定確認；只在本機記下結果，不要公開 account dashboard output。隨後把 `.env` 的 `PUBLIC_SITE_URL` 及 `public/robots.txt` 的 sitemap hostname 更新成該 HTTPS URL，再重新 build／deploy，確保 canonical、robots 與 sitemap 正確。

### Option B：使用自己的 custom domain

Custom Domain 必須位於你擁有且已加入 Cloudflare 的 active zone。把 `wrangler.jsonc` 的 route 換成自己的 hostname，例如：

```jsonc
"routes": [
  {
    "pattern": "catalog.example.com",
    "custom_domain": true
  }
]
```

`catalog.example.com` 是文件示例，不能直接使用。同步完成以下改動：

- `.env`：`PUBLIC_SITE_URL=https://你的實際 hostname`；
- `public/robots.txt`：`Sitemap:` 改成相同 hostname 的 `/sitemap-index.xml`；
- 確認 hostname 沒有衝突的 CNAME，並只在自己擁有的 zone 建立 Custom Domain。

Cloudflare 會為 Custom Domain 管理 DNS record 與 certificate。若只把 Worker 放在既有 origin 前方，routing 模型會不同；本專案的 assets-only originless 部署使用 Custom Domain。

## 4. 本機品質與部署 dry-run

先執行 deterministic gates：

```bash
npm run lint
npm test
npm run build
npm run cf:check
```

完整 browser gate：

```bash
npx playwright install chromium
npm run test:e2e
```

`npm run cf:check` 只執行 Wrangler dry-run，不發布。預期結果是 Static Assets package 成功且沒有 application binding；`dist` 是唯一部署輸出。若 build 或 CSP generator 因未知 media origin、inline attribute、資料 contract 或來源 ledger 失敗，應先修正原因，不要繞過 gate。

## 5. 由本機首次部署

Wrangler 已鎖定在 project devDependencies，不需要全域安裝：

```bash
npx wrangler --version
npx wrangler login
npx wrangler whoami
```

`whoami` 只用於私下確認登入的 account；不要把完整輸出貼到 issue、commit、PR 或公開 log。確認 `wrangler.jsonc` 已不含本專案原有 production target 後才發布：

```bash
npm run cf:deploy
```

這個 script 會重新 build，再執行 `wrangler deploy`。Default static build 不需要 secret。若日後加入真正 secret，只可使用 Cloudflare Dashboard secret store、Workers Builds secrets 或 interactive `wrangler secret put`；不得放在 `PUBLIC_*`、`wrangler.jsonc`、`.env.example`、command argument、commit 或 screenshot。

## 6. 使用 Workers Builds 自動部署

若要把自己的 Git repository 連接至 Cloudflare Workers Builds：

1. 在 Cloudflare Workers & Pages 建立或選擇自己的 Worker，連接自己的 Git repository；
2. Production branch 選擇你控制的 release branch，通常是 `main`；
3. Root directory 使用 repository 根目錄；
4. Build command 設為 `npm run build`；
5. Deploy command 設為 `npx wrangler deploy`；
6. 若啟用 non-production branch builds，preview deploy command 使用 `npx wrangler versions upload`；
7. 把 `PUBLIC_SITE_URL`、`PUBLIC_DEFAULT_SEASON`、`PUBLIC_TIMEZONE` 與 `ANISONARY_REQUIRE_API_DATA=false` 設為 build variables；不要把 secret 放進公開 variable；
8. 保持 GitHub Actions 作獨立 quality gate；它不負責 deployment。

Workers Builds 預設可為連接的 project 管理 deploy credential。若改用自訂 API token，只給必要權限並保存於 Cloudflare 的 secret setting；repository、workflow、README 與 build log 都不應出現 token value。

## 7. 部署後驗收

先把以下變數換成自己的真實 HTTPS URL：

```bash
ANISONARY_URL='https://catalog.example.com'
curl --fail --silent --show-error --head "$ANISONARY_URL/"
curl --fail --silent --show-error --head "$ANISONARY_URL/search/"
curl --fail --silent --show-error --head "$ANISONARY_URL/api/v1/seasons.json"
curl --fail --silent --show-error --head "$ANISONARY_URL/this-route-must-not-exist/"
```

最後一個未知 route 應是 `404`，因此 `curl --fail` 預期回傳非零；它不是部署失敗。再執行完整 public API contract gate：

```bash
PUBLIC_API_BASE_URL="$ANISONARY_URL/api/v1" npm run api:check
```

人工核對：

- 首頁、搜尋、季度頁、至少一個動畫詳情頁、About、Sources；
- unknown page 與 unknown static API identity 都是 `404`；
- canonical、Open Graph、`robots.txt`、`sitemap-index.xml` 都使用你的 hostname；
- `Content-Security-Policy`、`X-Frame-Options`、`X-Content-Type-Options`、`Referrer-Policy` 與 `Permissions-Policy` 存在；
- preview hostname 帶 `X-Robots-Tag: noindex`；
- 搜尋不發送查詢，YouTube 在使用者明確啟動前不建立第三方 iframe；
- build／response 沒有 Mock Data、secret、private hostname、account／resource identifier 或未審核資料。

## 8. 發布前私隱檢查

只審閱你準備提交的精確範圍：

```bash
git status --short
git diff --check
git diff --cached --check
git diff --cached --name-only
```

在本機閱讀 staged diff，確認沒有以下內容後才 push：

- `.env`、`.dev.vars`、token、key、password、cookie 或完整 authentication output；
- Cloudflare account／zone／deployment／database 等非公開 identifier；
- private hostname、私人路徑、個人資料、對話、prompt 或操作記錄；
- database schema／dump、crawler、raw API dump、private adapter、內部選源或 confidence 規則；
- 未審核候選資料、未授權媒體或 AI 生成目錄資料／圖片。

不要 bulk-stage 混合 worktree；先逐檔確認，再只 stage 本次需要的公開文件與程式。

## 9. Preview、rollback 與刪除邊界

- 不影響 production 的版本上傳：`npm run cf:preview`；
- 列出已發布版本：`npx wrangler versions list`；
- 回復上一個可用版本：`npx wrangler rollback`，完成後仍要重跑 live smoke；
- 不把 preview、local build、dry-run 或 queued CI 當成 production 成功證據；
- 本指南不要求刪除任何 Worker、domain、branch、deployment 或其他資源。清理是另一個需要明確確認的操作。

## 官方文件

- [Cloudflare Workers Static Assets: Get Started](https://developers.cloudflare.com/workers/static-assets/get-started/)
- [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Workers build branches](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/)
- [Workers rollback](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/)
- [Astro deployment overview](https://docs.astro.build/en/guides/deploy/)

專案維護者的 release gate 與 production smoke checklist 見 [`DEPLOYMENT_CLOUDFLARE.md`](./DEPLOYMENT_CLOUDFLARE.md)。

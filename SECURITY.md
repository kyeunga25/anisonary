# 安全政策 / Security Policy

## 私密回報 / Private reporting

如發現漏洞，請使用 GitHub Security 頁面的私人漏洞回報或私人 security advisory。
不要在公開 issue、PR 或資料更正中張貼 token、私人資料、未公開來源、部署識別資料
或可直接利用的攻擊細節。

Report vulnerabilities through GitHub's private vulnerability reporting or a
private security advisory. Do not publish credentials, personal data,
unreleased sources, deployment identifiers, or actionable exploit details in a
public issue, pull request, or catalogue correction.

## 支援及邊界 / Support and boundaries

- 安全修正以預設分支最新原始碼為準；release、CI 及 live 網站證據須分開核對。
- Production 是純靜態資產，沒有 application backend、登入、資料庫、付款或 AI model。
- Build 產生 hash-based CSP；未批准 media origin、inline handler 或不安全腳本應令
  build fail closed。
- 搜尋只在瀏覽器內進行，不應傳送到 server、analytics 或第三方。
- Service Worker 只可快取已批准的公開頁面與必要靜態資產，不保存搜尋字詞或 API JSON。
- Catalogue 更正須使用公開來源及最少資料，不得加入未公開或個人資料。
- Secret 只可存於被 Git 忽略的 `.env*` 或受控 secret store。

Security fixes target the latest default-branch source. Releases, CI evidence,
and live production must be verified separately. The production site is static;
its generated CSP, local-only search, bounded service worker, and
source-traceable catalogue are the primary security boundaries.

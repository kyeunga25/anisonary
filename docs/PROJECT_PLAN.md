# Anisonary｜動畫歌典 — 公開範圍與版本狀態

本文件只記錄已公開交付的產品範圍與可驗證狀態。產品以動畫為入口，按季度與日本編輯播出日整理 OP／ED 資料，並把使用者導向官方或正版渠道；不託管音訊、影片或完整歌詞。

## Current product scope

- 2026 夏季 70 套、2026 春季 70 套、2026 冬季 66 套、2025 夏季 75 套非成人 TV／WEB 連載動畫；
- 跨季作品共用詳情頁，共 280 個唯一作品及 615 筆已審閱 OP／ED；
- 星期一至星期日及不定期分組、跨季度本機搜尋、動畫詳情與同源 static JSON API；
- 每個季度、作品及歌曲公開來源、語言、review state 及核對日期；每首歌曲同時具備第一方／交叉核對來源；
- 官方／licensed YouTube 導航、明確第三方連線同意、來源歸屬及無圖 fallback；
- Astro + strict TypeScript、generated CSP、privacy-bounded Service Worker；
- Cloudflare Workers Static Assets 靜態部署，0 application binding。

## 公開版本狀態

- **v0.1.x**：季度與動畫詳情頁、OP／ED credits、來源、平台連結、深淺色主題、SEO、無障礙狀態及 Workers Static Assets delivery；
- **v0.2.0**：可追溯精選目錄、加固的公開 API contract boundary、跨季度本機搜尋，以及 YouTube 明確同意與 `no-referrer` 媒體私隱設定；
- **v0.3.0**：私隱邊界明確的離線目錄、繁中 Web App Manifest，以及 build-time 同源靜態 precache；不加入 application Worker 或 stateful binding；
- **v0.4.0**：補齊 2026 春夏完整季度範圍，建立 139 個唯一作品頁及 298 首已公布 OP／ED 的可追溯靜態快照；
- **v1.0.0**：把相同 reviewed snapshot 發布為同源靜態 JSON API，完成自包含的公開產品；仍維持 Workers Static Assets、0 application bindings 及本機搜尋／離線私隱邊界；
- **v1.1.0**：加入 2026 冬季及 2025 夏季，擴展至四季、280 個唯一作品、615 筆 OP／ED 及 392 個官方 YouTube 連結；
- **v1.2.0**：加入每首歌曲的結構化來源 ledger，移除公開完整度分數，以 code-native 首頁視覺取代來源未能證實的 raster asset，並補齊架構／資料治理／發佈文件；
- **v1.3.0**：補齊並修正 2025 夏季、2026 冬季／夏季歌曲的發行、credits、重用／變體分類及正版連結，把桌面導覽改為左側分組 sidebar，強化多語歌曲搜尋、公開邊界 gate 與依賴安全，並維持純靜態、0 application binding 的交付方式；
- 正式網站使用 custom domain；非正式 Cloudflare hostname 不在公開文檔記錄；
- 私有 backend、資料庫、crawler、帳戶設定、憑證與內部規則不屬於本公開 repository。

未配置的 Lighthouse／Core Web Vitals 稽核不會被標示為已通過，也不會虛構分數。

## Current acceptance summary

- 預設 build 使用 repository-reviewed `CuratedProvider`；`MockProvider` 只供測試與 UI fixture；
- `/api/v1/*.json` 由同一份 reviewed snapshot 在 build-time 產生，不加入 runtime backend、資料庫或 credential；
- `PUBLIC_API_BASE_URL` 存在時切換至經契約限制的唯讀 `ApiProvider`；
- 四個季度均可瀏覽，list／detail／static API identity 保持一致；
- 日文名稱為主、繁中為輔；
- 每筆歌曲通過第一方及交叉核對來源 gate，未審閱候選不發布；
- 公開資料不包含完整度百分比、confidence score 或內部選源規則；
- 深夜 `25:30` 保持在編輯播出日而不移到次日；
- Responsive、鍵盤 Focus、Poster Alt、Reduced Motion；
- `npm run lint`、`npm test`、`npm run build`、`npm run test:e2e` 通過；
- YouTube iframe 只在使用者按下後建立，並使用 privacy-enhanced domain；
- 同頁不同播放器擁有獨立載入狀態；
- 首頁、季度頁與動畫頁提供 canonical；動畫頁提供 `TVSeries` JSON-LD；
- Preview／本機的 API build-time failure 產生公開錯誤狀態，不暴露 upstream detail；
- Production 可用 `ANISONARY_REQUIRE_API_DATA=true` fail closed，避免殘缺靜態網站被發布；
- 首頁主視覺只用 HTML／CSS；舊首頁與 Mock raster assets 不再留在 repository 或 production build；
- 不包含 secret、真實 DB dump 或 private crawler code。
- 離線功能只保存 build 已公開的同源靜態內容，不保存搜尋輸入、query string、私人 API response 或第三方媒體。

架構與信任邊界見 `docs/ARCHITECTURE.md`；資料來源治理見 `docs/DATA_PROVENANCE.md`；GitHub／Cloudflare 接入與驗收見 `docs/DEPLOYMENT_CLOUDFLARE.md`；public static API contract 見 `docs/API_HANDOFF.md`。

Public API 的 live contract 與 fail-closed build 命令見 `docs/API_PRODUCTION_CHECK.md`。任何版本的 production 驗收都必須由已合併 `main` 的實際 assets 通過後才記錄完成。

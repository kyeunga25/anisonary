# Anisonary｜動畫歌典 — 公開範圍與版本狀態

本文件只記錄已公開交付的產品範圍與可驗證狀態。產品以動畫為入口，按季度與日本編輯播出日整理 OP／ED 資料，並把使用者導向官方或正版渠道；不託管音訊或影片。

## Phase 1 範圍

- 2026 夏季與 2026 春季；
- 星期一至星期日及不定期分組；
- 動畫海報 Grid；
- 動畫詳情、OP／ED、官方 YouTube、基本 Links、來源與驗證時間；
- Astro + strict TypeScript 公開前端；
- Mock/API Provider 抽象；
- Cloudflare Workers Static Assets 靜態部署。

## 公開版本狀態

- **v0.1.x**：季度與動畫詳情頁、OP／ED credits、來源、平台連結、深淺色主題、SEO、無障礙狀態及 Workers Static Assets delivery；
- **v0.2.0**：可追溯精選目錄、加固的公開 API contract boundary、跨季度本機搜尋，以及 YouTube 明確同意與 `no-referrer` 媒體私隱設定；
- 正式網站使用 custom domain；非正式 Cloudflare hostname 不在公開文檔記錄；
- 私有 backend、資料庫、crawler、帳戶設定、憑證與內部規則不屬於本公開 repository。

未配置的 Lighthouse／Core Web Vitals 稽核不會被標示為已通過，也不會虛構分數。

## Phase 1 驗收摘要

- 沒有 private API 時使用 repository-reviewed `CuratedProvider`；`MockProvider` 只供測試與 UI fixture；
- `PUBLIC_API_BASE_URL` 存在時切換至私有 API Provider；
- 兩個季度均可瀏覽；
- 日文名稱為主、繁中為輔；
- 深夜 `25:30` 保持在編輯播出日而不移到次日；
- Responsive、鍵盤 Focus、Poster Alt、Reduced Motion；
- `npm run lint`、`npm test`、`npm run build`、`npm run test:e2e` 通過；
- YouTube iframe 只在使用者按下後建立，並使用 privacy-enhanced domain；
- 同頁不同播放器擁有獨立載入狀態；
- 首頁、季度頁與動畫頁提供 canonical；動畫頁提供 `TVSeries` JSON-LD；
- Preview／本機的 API build-time failure 產生公開錯誤狀態，不暴露 upstream detail；
- Production 可用 `ANISONARY_REQUIRE_API_DATA=true` fail closed，避免殘缺靜態網站被發布；
- Hero 與 Mock posters 使用尺寸化 WebP，五項資產合計減少約 93.4%；
- 不包含 secret、真實 DB dump 或 private crawler code。

GitHub／Cloudflare 接入與驗收見 `docs/DEPLOYMENT_CLOUDFLARE.md`；API handoff 見 `docs/API_HANDOFF.md`。

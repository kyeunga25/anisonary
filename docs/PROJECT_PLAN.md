# Anisonary｜動畫歌典 — Project Plan

本文件是 `ANISONARY_MASTER_PLAN_AND_PHASE1_SPEC.md` 的 repository-side 執行摘要。產品以動畫為入口，按季度與日本編輯播出日整理 OP／ED 資料，並把使用者導向官方或正版渠道；不託管音訊或影片。

## Phase 1 範圍

- 2026 夏季與 2026 春季；
- 星期一至星期日及不定期分組；
- 動畫海報 Grid；
- 動畫詳情、OP／ED、官方 YouTube、基本 Links、來源與驗證時間；
- Astro + strict TypeScript 公開前端；
- Mock/API Provider 抽象；
- Cloudflare Pages 靜態部署。

## 目前完成：M0–M6；M7 quality implementation 已完成

目前公開前端已實作：

1. M0：Astro、TypeScript、測試與 build 基礎；
2. M1：公開資料契約、Mock Provider、API Provider；
3. M2：Layout、Header、Footer、深淺色主題；
4. M3：首頁、季度頁、星期分組、篩選與 25:00+ 日本深夜時間顯示；
5. M4：動畫詳細頁、OP／ED、Credits、來源與空狀態；
6. M5：thumbnail-first YouTube lazy embed、不 autoplay、不可嵌入 fallback；
7. M6：Direct／Search／Official／Purchase 平台連結分類與 external-link safety。
8. M7：canonical／Open Graph／JSON-LD、accessible loading/error/empty states、Astro component tests、Playwright E2E 與靜態圖片最佳化。

M7 尚待配置 Chrome DevTools MCP 後補上 Core Web Vitals／Lighthouse 數值稽核；目前不虛構任何效能分數。

不在本輪加入資料庫、爬蟲、帳戶、Admin Panel、AI、音訊託管或真實 production data。

## Phase 1 驗收摘要

- Mock Provider 在沒有 production database 時可獨立使用；
- `PUBLIC_API_BASE_URL` 存在時切換至私有 API Provider；
- 兩個季度均可瀏覽；
- 日文名稱為主、繁中為輔；
- 深夜 `25:30` 保持在編輯播出日而不移到次日；
- Responsive、鍵盤 Focus、Poster Alt、Reduced Motion；
- `npm run lint`、`npm test`、`npm run build`、`npm run test:e2e` 通過；
- YouTube iframe 只在使用者按下後建立，並使用 privacy-enhanced domain；
- 同頁不同播放器擁有獨立載入狀態；
- 首頁、季度頁與動畫頁提供 canonical；動畫頁提供 `TVSeries` JSON-LD；
- API build-time failure 產生公開錯誤狀態，不暴露 upstream detail；
- Hero 與 Mock posters 使用尺寸化 WebP，五項資產合計減少約 93.4%；
- 不包含 secret、真實 DB dump 或 private crawler code。

完整 Phase 1 後續工作見 `docs/TODO_PHASE1.md`。

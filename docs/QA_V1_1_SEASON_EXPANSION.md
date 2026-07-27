# v1.1.0｜2026 冬季與 2025 夏季目錄 QA

本文件記錄新增兩個季度快照的公開驗收範圍。網站仍使用 repository 內已審核的靜態資料；來源資料庫不會在 build 或使用者瀏覽時被即時呼叫。

## 發布範圍

- 2026 冬季：66 套非成人 TV／WEB 連載動畫、137 筆 OP／ED；
- 2025 夏季：75 套非成人 TV／WEB 連載動畫、180 筆 OP／ED；
- 全站合計：4 個季度、280 個唯一作品頁、615 筆 OP／ED、392 個官方 YouTube 連結；
- 新增季度每筆來源與歌曲資料的最後核對日期為 2026-07-28。

收錄包含短篇、新季度、分割 cour 與可確認的連載網路動畫；排除劇場版、OVA、單次特別篇、宣傳短片及 18+ 作品。季度開始前數日先行發布的作品，只有同時被 AnimeThemes 與 UZUREA 歸入該季才收錄。

## 來源與歌曲核對

- 繁中年度日本動畫列表提供季度日曆與繁中名稱交叉對照；
- Annict、Bangumi 與 AniList 用於作品識別、日期、媒體類型、官網及公開圖像交叉核對；
- AnimeThemes 與 UZUREA 用於 OP／ED 和官方影片交叉核對；
- 季度歌曲索引未收錄的歌曲，返回作品官網、Netflix、製作公司、IP 官網或唱片公司等第一方頁面確認；
- 無法由公開來源確認的短篇歌曲維持待公布，不建立推測記錄。

完整來源優先級、查詢方式與繁中名稱政策見 `docs/DATA_SOURCES.md`。

## 本機驗收

- `npm run catalog:check`：季度數量、唯一 ID／slug、615 筆歌曲、392 個 YouTube 連結、來源及核對日期通過；
- `npm test`：17 個測試檔、86 項單元與契約測試通過；
- `npm run build`：290 個 HTML 頁面完成，並重新產生 hash-based CSP 與 Service Worker；
- `npm run cf:check`：890 個靜態資產完成 Wrangler dry-run，沒有 application binding；
- `npm run test:e2e`：11 項靜態 API、兩個新增季度頁、歌曲詳情、搜尋、CSP、離線、手機操作、404 與圖像 fallback 測試通過。

## Production 驗收

合併固定 SHA 後，由既有 GitHub `main` 流程觸發 Cloudflare Workers Static Assets build。完成條件包括：

1. GitHub checks 全部成功，PR 合併 SHA 與 `origin/main` 一致；
2. Cloudflare production deployment 狀態為 active，來源 revision 等於合併 SHA；
3. `/seasons/2026-winter/`、`/seasons/2025-summer/` 及代表作品詳情頁回應 `200`；
4. production 靜態 API 回傳 4 個季度與 280 個唯一作品，未知 route 回應 `404`；
5. production header 保留 CSP、`X-Content-Type-Options`、`Referrer-Policy` 與 `Permissions-Policy`。

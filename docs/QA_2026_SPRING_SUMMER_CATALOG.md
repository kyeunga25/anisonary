# v0.4.0｜2026 春夏季度目錄 QA

本文件記錄 2026 春季與夏季完整季度快照的公開驗收範圍。主介面及資料說明以繁體中文為主；English technical notes remain available in the repository documentation.

## 收錄定義

- 日本於 2026 年 4–6 月或 7–9 月首播的非成人 `TV`／`WEB` 周播動畫；
- 包含短篇、新季度、分割 cour 及同一作品的跨季播出；
- 排除劇場版、OVA、單次特別篇、宣傳短片及 18+ 作品；
- 春季 70 套、夏季 70 套；跨季作品共用詳情頁，因此共有 139 個唯一作品頁。

## 主題曲資料

- 298 首已公布 OP／ED；
- 232 個經核對的官方 YouTube 直連；
- 保留既有官方或授權影片、公開發行頁及已核對 credit；
- 未有可靠 OP／ED 分類時不作推測。

以下 6 套在最後核對日只有未分類「主題歌」或尚未公布 OP／ED，頁面保持待公布狀態：

- 《ねずみくんのチョッキ（TV）》；
- 《おでかけ子ザメ シーズン2》；
- 《小3アシベ QQゴマちゃん》；
- 《クマーバシーズン3》；
- 《キャンディーカリエス》；
- 《パンの赤ちゃん（TV）》。

## 公開來源與邊界

季度清單以繁中年度動畫日曆作月份基準，並與 Annict、Bangumi、AniList、AnimeThemes、UZUREA、作品官網及台港授權頁交叉核對。詳細查詢與命名政策見 [`DATA_SOURCES.md`](./DATA_SOURCES.md)。

Repository 只保存審核後的靜態 seed，不包含原始 API response、crawler、private source adapter、內部信心規則、secret 或第三方媒體副本。網站 build 與瀏覽器不會即時請求資料來源 API。

## 自動驗收

最後核對：2026-07-25（Asia/Hong_Kong）。

```bash
npm run catalog:check
npm run lint
npm test
npm run build
npm run cf:check
npm run test:e2e
```

驗收涵蓋：兩季數量、唯一 slug、季節與詳情關聯、298 首 OP／ED、232 個 YouTube 網域直連、HTTPS 圖像與來源、API fail-closed contract、跨季度本機搜尋、離線 precache、SEO／JSON-LD、404、圖片 fallback、手機鍵盤操作及 Workers Static Assets dry-run。

## Production validation

2026-07-26（Asia/Hong_Kong）重新核對 v0.4.0 正式版本：

- PR #12 已合併，GitHub quality 與 Cloudflare build checks 均通過；
- custom domain 的首頁、搜尋、季度頁、Service Worker、manifest 及 404 response 與本次 v0.4.0 build 逐 byte 相同；
- 首頁、搜尋、2026 夏季頁、`/sw.js` 及 `/manifest.webmanifest` 回應 `200`，未知 route 回應 `404`；
- 正式搜尋索引顯示 139 個唯一作品，頁面顯示 298 首 OP／ED；
- HTML、manifest 及 Service Worker 保留正確 content type、cache policy、根 scope、`DENY` frame policy、`nosniff`、`no-referrer` 及最小化 Permissions Policy；
- 公開驗收記錄不包含 Cloudflare account、deployment／version identifier、非公開資源名稱、credential 或私有營運資料。

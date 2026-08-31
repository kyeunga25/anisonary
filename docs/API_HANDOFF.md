# Anisonary Public Static API v1 Contract

本文件定義同源靜態 JSON API v1。它由 repository-reviewed snapshot 在 Astro build-time 產生，公開 response 必須符合 `src/types/public-api.ts`，不得包含 crawler、private source adapter、internal confidence rules 或未公開候選資料。v1.10.0 延續既有 endpoint 與結構化歌曲來源，沒有新增 runtime API。

## Build-time integration

正常 production build 直接由 `CuratedProvider` 產生 HTML 與 JSON assets，不需要網絡 API、credential、application Worker 或寬鬆 CORS。JSON 內容與公開 HTML 來自同一份 reviewed snapshot，必須全部視作 public data。

部署後仍用 `ApiProvider` 重新讀取 production assets，完成 fail-closed live 驗收：

```bash
PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1 npm run api:check
```

這個 gate 會逐一核對 season list、season detail、anime detail、跨 endpoint 公開欄位一致性、Mock Data 禁止條件及未知 identity 的 `404`。它不會把 response payload 或 upstream detail 寫入 repository。

## Required endpoints

| Method | Path | Success | Not found |
|---|---|---|---|
| `GET` | `/seasons.json` | `PublicSeasonSummary[]` | 不適用 |
| `GET` | `/seasons/:seasonId.json` | `PublicSeasonDetail` | `404` |
| `GET` | `/anime/:slug.json` | `PublicAnimeDetail` | `404` |

所有 success response 使用 `Content-Type: application/json`。API assets 使用 revalidation、`X-Robots-Tag: noindex`，並排除於 sitemap 與 Service Worker precache。非 `2xx`／`404` response、無效 JSON 或不符合契約的 payload 會令 production gate 失敗。

## Frontend contract gate

`ApiProvider` 不會直接把未知 JSON cast 成公開型別。每次 build request 都會經過以下 gate：

- API base URL 必須是無 credential、query 或 fragment 的絕對 HTTPS URL；只有 `localhost`／loopback 本機開發可使用 HTTP；
- request 使用 10 秒 timeout、拒絕 redirect，要求 JSON／`+json` content type，並以 streaming byte counter 在 4 MiB 停止讀取；
- season、anime card、theme、credits、video、external link、source 及 catalog reference 全部做深層欄位驗證；
- ID／slug、季度 identity、星期、深夜時間、數字範圍、array 上限、HTTPS URL、YouTube ID 及 ISO 8601 日期均需合法；
- season list 不可重複，detail response identity 必須與 request path 一致，動畫的 OP／ED 數量及影片狀態必須與 theme 內容相符；
- poster／banner 只接受已核對的 `https://s4.anilist.co` media origin；Annict／Bangumi catalog reference identity 必須對應各自固定的 catalog、documentation 及 API origin；
- 跨季度索引最多接收 2,000 個動畫條目，season/detail request concurrency 固定上限為 8；動畫靜態頁亦共用相同完整性與 concurrency gate；
- provider 只重建公開契約欄位，未知欄位不會穿過 data layer，避免 private adapter、內部 confidence 或其他 backend metadata 意外進入頁面資料。
- 每筆 theme 必須是 `reviewed`，並同時有 `first_party` 與 `cross_check` 來源；來源 URL、語言、角色、核對日期、唯一性及 legacy labels 一致性全部 fail closed。
- season detail／catalog reference 及 anime detail／source 同樣必須是 `reviewed`，公開 checked date、language、role，且 parent／nested 日期保持一致。

相同 gate 以 repository 內全部 reviewed fixtures 及失敗案例測試。任何替代資料服務都必須維持相同公開契約，且不應依賴前端保留契約以外的資料。

## Public contract rules

- `seasonId` 使用 `YYYY-quarter`，例如 `2026-summer`；
- `slug` 必須穩定、唯一、可安全放入 URL；
- `editorialWeekday` 使用 `1` 至 `7`，缺省代表不定期；
- `broadcastTimeJst` 保留 `25:00+` 的編輯播出時間；
- poster／banner 使用核准 AniList media origin；其他 external link 使用無 credential 的絕對 HTTPS URL；
- YouTube 只回傳 video ID，不回傳任意 embed HTML；
- `theme.sources[]` 公開 `label`、HTTPS `url`、`language`、`role` 及 ISO 8601 `verifiedAt`；
- `sourceLabels`／`lastVerifiedAt` 是 API v1 相容欄位，新 consumer 使用 `sources[]`；
- anime card 不回傳資料完整度或 confidence score；缺資料使用明確欄位／空狀態；
- 缺少的靜態 identity 回傳 `404`，任何其他非 `2xx` response 都令 live gate 失敗；
- response 不得包含 secret、私人備註、confidence score 或未審核 candidate。

TypeScript interface 是欄位層面的 source of truth；endpoint 改動前要以相同 fixtures 驗證三種 response。

## Release acceptance

- 三個 endpoint 以 production-like fixture 通過；
- success response 通過 nested contract、content-type、timeout、response-size、origin binding 及 URL safety 測試；
- 十一個季度、828 個唯一 card slug 及 1,733 筆歌曲來源 ledger 均可解析；
- 任一季節／動畫 payload failure 會令 fail-closed build 失敗；
- unknown season／slug 回傳 `404`；
- production build 無 Mock Data notice；
- response cache policy 已定義，API 不在 sitemap 或 offline precache；
- custom domain、TLS、JSON content type 與 Cloudflare Workers Builds production assets 均完成 smoke test；
- Wrangler dry-run 保持 0 application bindings。

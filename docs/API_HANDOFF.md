# `anisonary-api` Public Contract Handoff

本文件是 Phase 1 M9 的公開 handoff。私有 backend 可以使用任何內部模型、來源與審核流程，但公開 response 必須符合 `src/types/public-api.ts`，不得回傳 crawler、private source adapter、internal confidence rules 或未公開候選資料。

## Build-time integration

Astro static build 透過 `PUBLIC_API_BASE_URL` 呼叫唯讀 API。這些 request 在 build-time 發生，不是瀏覽器 runtime request，因此 Phase 1 不需要把 API credential 或寬鬆 CORS policy 發送到使用者端。API response 內容最終會成為公開 HTML，必須視作 public data。

Production 必須同時設定：

```text
PUBLIC_API_BASE_URL=https://api.anisonary.k-y.cc/v1
ANISONARY_REQUIRE_API_DATA=true
```

## Required endpoints

| Method | Path | Success | Not found |
|---|---|---|---|
| `GET` | `/seasons` | `PublicSeasonSummary[]` | 不適用 |
| `GET` | `/seasons/:seasonId` | `PublicSeasonDetail` | `404` |
| `GET` | `/anime/:slug` | `PublicAnimeDetail` | `404` |

所有 success response 使用 `Content-Type: application/json`。非 `2xx`／`404` response、無效 JSON 或不符合契約的 payload 會令 production build 失敗。

## Frontend contract gate

`ApiProvider` 不會直接把未知 JSON cast 成公開型別。每次 build request 都會經過以下 gate：

- API base URL 必須是無 credential、query 或 fragment 的絕對 HTTPS URL；只有 `localhost`／loopback 本機開發可使用 HTTP；
- request 使用 10 秒 timeout、拒絕 redirect，並要求 JSON／`+json` content type；
- season、anime card、theme、credits、video、external link、source 及 catalog reference 全部做深層欄位驗證；
- ID／slug、季度 identity、星期、深夜時間、數字範圍、array 上限、HTTPS URL、YouTube ID 及 ISO 8601 日期均需合法；
- season list 不可重複，detail response identity 必須與 request path 一致，動畫的 OP／ED 數量及影片狀態必須與 theme 內容相符；
- provider 只重建公開契約欄位，未知欄位不會穿過 data layer，避免 private adapter、內部 confidence 或其他 backend metadata 意外進入頁面資料。

相同 gate 以 repository 內全部 reviewed fixtures 及失敗案例測試。Backend 可以加入自己的內部欄位，但不應依賴前端保留任何公開契約以外的資料。

## Public contract rules

- `seasonId` 使用 `YYYY-quarter`，例如 `2026-summer`；
- `slug` 必須穩定、唯一、可安全放入 URL；
- `editorialWeekday` 使用 `1` 至 `7`，缺省代表不定期；
- `broadcastTimeJst` 保留 `25:00+` 的編輯播出時間；
- poster 與 external link 使用絕對 HTTPS URL；
- YouTube 只回傳 video ID，不回傳任意 embed HTML；
- `verifiedAt`／`lastVerifiedAt` 使用 ISO 8601；
- `404` 只代表資源不存在，upstream failure 必須使用適當 `5xx`；
- response 不得包含 secret、私人備註、confidence score 或未審核 candidate。

TypeScript interface 是欄位層面的 source of truth；backend 合併前要以相同 fixtures 驗證三個 endpoint。

## Handoff acceptance

- 三個 endpoint 以 production-like fixture 通過；
- success response 通過 nested contract、content-type、timeout 及 URL safety 測試；
- 兩個季度及所有 card slug 均可解析；
- 任一季節／動畫 payload failure 會令 fail-closed build 失敗；
- unknown season／slug 回傳 `404`；
- production build 無 Mock Data notice；
- response cache policy 已定義，更新後可在可接受時間內觸發新 build；
- API hostname、TLS 與 Cloudflare Workers Builds network 均完成 smoke test。

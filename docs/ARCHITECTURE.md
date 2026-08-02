# Anisonary 公開架構

Anisonary 是以 repository-reviewed snapshot 驅動的靜態產品。資料、HTML、搜尋索引與唯讀 JSON 都在 build-time 由同一公開契約產生；production 不依賴 application Worker、資料庫、認證、即時 crawler 或第三方資料 API。

## 資料與發佈流程

```text
reviewed seed files
        │
        ▼
CuratedProvider ──► Public* contract ──► Astro page-data loaders
        │                                  │
        │                                  ├─► HTML pages
        │                                  ├─► local search index
        │                                  └─► /api/v1/*.json
        │
        └─► catalogue invariants and provenance tests

Astro output ──► generated CSP ──► bounded service worker ──► Workers Static Assets
```

`ApiProvider` 是同一契約的外部唯讀入口，只用於 production contract 驗收或明確的 API build。它會深層重建核准欄位並拒絕不安全 URL、未知 identity、過大 response、redirect、非 JSON、逾時及跨 endpoint drift。失敗時不會改用 curated data 假裝成功。

`MockProvider` 只供 unit／component tests。正常 build 沒有選擇 Mock Data 的環境開關，測試素材亦不進入 production 靜態資產。

## 目錄責任

| 位置 | 責任 |
|---|---|
| `src/data/curated-seeds*.ts` | 已審閱的季度、作品與歌曲原始快照 |
| `src/data/curated-data.ts` | 少量可審核 override、來源 ledger、公開 record 派生 |
| `src/types/public-api.ts` | HTML 與 static API 共用的公開契約 |
| `src/data/api-provider.ts` | 外部 JSON 的 fail-closed parser 與 request boundary |
| `src/data/page-data.ts` | 頁面需要的 provider 查詢與錯誤狀態 |
| `src/pages/api/v1/` | build-time 靜態 JSON routes |
| `scripts/generate-security-headers.mjs` | 由 build output 產生 hash-based CSP |
| `scripts/generate-service-worker.mjs` | 由 build output 產生同源、無 runtime write 的離線清單 |
| `tests/` | catalogue、contract、component、browser、CSP 與 offline gates |

## 公開資料邊界

- season detail、anime detail 與 `PublicTheme` 都公開 `reviewState` 及 `verifiedAt`；season／anime source records 同時公開語言及用途角色。
- `PublicTheme.sources[]` 保存每首歌的來源 URL、語言、來源角色及核對日期；`reviewState` 只允許 `reviewed`。
- 每首已發布歌曲至少有一筆 `first_party` 與一筆 `cross_check`；這是可驗證條件，不是 confidence score。
- `sourceLabels` 與 `lastVerifiedAt` 暫留於 API v1 作向後相容；新介面與新 consumer 使用結構化 `sources[]`。
- 公開資料不包含候選項目、內部選源規則、評分、crawler output、原始 API dump 或私人備註。
- `PublicAnimeCard` 不公開完整度百分比；缺少資料時以明確空狀態表達，不把內部判斷轉成分數。

## Browser 與媒體邊界

- 搜尋只操作 build-time HTML，不把輸入放入 URL、request、analytics 或 storage。
- Service Worker 只 precache 已公開的同源 app shell；不建立 runtime cache entry，不保存 `/api/` JSON、query string 或第三方媒體。
- 作品圖像使用核准 HTTPS origin 並加上頁面來源連結及 `no-referrer`；不下載後重新託管。
- YouTube iframe 只在使用者明確啟動後建立，使用 privacy-enhanced domain。
- 首頁識別視覺由 HTML／CSS 組成，不依賴來源不明的 raster artwork。

## Cloudflare 邊界

`wrangler.jsonc` 只指定 `dist` Static Assets、404 行為、custom domain 及停用的 telemetry 設定。加入 D1、KV、R2、Queues、Durable Objects、application Worker、analytics 或身份系統都屬架構變更，必須先有公開產品需求、成本／私隱分析、測試與遷移／回復方案。

## 變更 gate

1. 資料變更先通過 season／anime／theme source ledger 與 catalogue invariants。
2. 公開 schema 變更先更新 TypeScript、fail-closed parser、static API、component 及 browser tests。
3. 新 media origin 必須同時更新來源政策、CSP allowlist、privacy 文案與測試。
4. 合併前執行完整品質、build、Workers dry-run、browser、audit 與 public-egress 檢查。
5. 發佈只接受已 review 的固定 SHA；production 驗收需獨立核對 live routes、API、headers 與 Git／release 一致性。

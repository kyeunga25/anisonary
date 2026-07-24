# Phase 2｜可追溯季度目錄

Phase 2 先建立一個可公開審核的真實資料切片，而不是把 crawler、private source adapter 或未驗證資料加入 repository。

## 本輪收錄

- 2026 夏季：`攻殻機動隊 THE GHOST IN THE SHELL`、`きみが死ぬまで恋をしたい`、`幼女戦記Ⅱ`、`無職転生Ⅲ ～異世界行ったら本気だす～`；
- 2026 春季：`あかね噺`、`とんがり帽子のアトリエ`、`北斗の拳 -FIST OF THE NORTH STAR-`、`Re:ゼロから始める異世界生活 4th season`。

每筆資料包含原文名稱、繁體中文名稱、編輯播出日、OP／ED、公開來源及最後核對日期。只記錄在來源頁實際確認到的 Credits；缺少官方證據的欄位不作推測。

## 季度全集基準

- Annict 作為日本語季度全集基準，使用直接季度頁及 `filter_season` Works API；
- Bangumi 番組計劃以穩定的 `GET /v0/subjects` 作中文條目與季度缺口交叉核對；
- 兩邊結果先取聯集，再返回動畫官網及台港正式授權來源確認；
- `name_cn` 不視為正式繁中譯名，網站亦不在 build 或瀏覽時即時依賴外部 API。

固定 URL、API query、分頁與欄位政策見 [`DATA_SOURCES.md`](./DATA_SOURCES.md)。

## 圖像政策

- 不使用 AI 生成圖；
- 不把動畫官網圖片下載或重新託管到 repository；
- 卡片及詳情使用 AniList 公開媒體頁所提供的作品圖像 URL；
- 每個詳情頁顯示圖像來源連結；
- 遠端圖像失效時使用無作品內容的 accessible fallback。

## GitHub 與 Cloudflare gate

- `.github/ISSUE_TEMPLATE/catalog-correction.yml` 收集附有公開證據的資料修正；
- `tests/unit/curated-catalog.test.ts` 驗證兩季、作品關聯、HTTPS 圖像、來源日期及禁止 Mock URL；
- `tests/unit/catalog-sources.test.ts` 鎖定 Annict／Bangumi 的穩定 endpoint、季度參數、token 邊界及繁中限制；
- GitHub Actions 先完成型別、目錄、瀏覽器及 production build 檢查；
- `npm run cf:check` 以 `wrangler deploy --dry-run` 驗證同一份 Workers Static Assets 設定，但不部署；Wrangler diagnostic log 只寫入暫存目錄。

## Private API 接入 gate

Phase 2 第二個切片完成前端的 production API contract boundary：

- `ApiProvider` 對 response 做 nested parsing，不再信任 top-level cast；
- 只保留 `Public*` 契約欄位，backend 額外 metadata 不會進入頁面資料；
- base URL、公開 URL、ID／slug、ISO 日期、array cardinality、OP／ED count 及 list/detail identity 全部 fail closed；
- build request 有 10 秒 timeout、4 MiB streaming response 上限、禁止 redirect，並檢查 JSON content type；
- poster／banner 只接受核准 AniList media origin；Annict／Bangumi catalog reference 必須綁定各自官方 origin；
- repository 內兩季與八套 reviewed records 全部作 production-like response fixtures，另有不安全 URL、identity drift、重複資料、非 JSON、404 及 stalled request 測試。

完整 backend handoff 見 [`API_HANDOFF.md`](./API_HANDOFF.md)。此切片只加固公開 read-only boundary，沒有把 private API、crawler、資料庫或 secret 加入 repository。

## 跨季度搜尋與媒體私隱

Phase 2 第三個切片以 `/search/` 提供靜態、可鍵盤操作的跨季度索引：

- 搜尋日文、繁體中文、羅馬字、OP／ED 歌名、歌手與公開 Credits；
- 使用 Unicode NFKC 正規化，令全形／半形及羅馬數字輸入得到一致結果；
- 所有結果先在 build-time 由現有 Provider 契約生成，production API 缺資料時沿用 fail-closed gate；
- build-time season／detail request concurrency 上限為 8，跨季度索引最多 2,000 套動畫，避免合法但極端 payload 壓垮 build；
- 搜尋字詞只用於目前頁面的 DOM filtering，不寫入 URL、不發送 request、不使用 analytics；
- 結果採文字型列表，不載入 AniList poster，減少不必要的第三方媒體 request；
- YouTube 不再於點擊前載入 `i.ytimg.com` thumbnail，只有使用者按下明確按鈕後才建立 privacy-enhanced iframe；
- 遠端 poster 與使用者啟動的 iframe 都使用 `no-referrer`。

自動化測試涵蓋跨季度完整性、安全 error state、Unicode 正規化、動畫／歌曲／歌手比對、零搜尋外傳、明確影片同意與 mobile keyboard flow。QA 證據見 [`QA_PHASE2_SEARCH_PRIVACY.md`](./QA_PHASE2_SEARCH_PRIVACY.md)。

## 公開資料收錄政策

預設目錄只接受小批次人工核對的公開資料：官方網站為主，正式繁中出版資料或公共資料庫作交叉對照，並經 catalogue test 與 PR review。私有 API 的 hostname、TLS、cache、帳戶及部署細節不在本公開 repository 記錄。

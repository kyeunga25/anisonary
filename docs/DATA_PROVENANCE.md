# 季度、作品、歌曲與媒體來源治理

本文件定義 Anisonary 公開資料如何留下可由讀者核對的證據。它只記錄公開規則，不公開候選資料、內部選源細節或 confidence 計算。

## 三層公開 ledger

- `PublicSeasonDetail` 公開 `reviewState`、`verifiedAt`，而每個 `catalogReferences[]` 記錄來源語言、`inventory`／`cross_check` 角色及相同核對日期。
- `PublicAnimeDetail` 公開 `reviewState`、`verifiedAt`，每個 `sources[]` 記錄來源語言，以及第一方、作品識別、譯名、歌曲或首播交叉核對角色。
- `PublicTheme` 公開 `reviewState`，每首歌的 `sources[]` 必須同時具備第一方與交叉核對來源。

所有已發布 season／anime／theme record 只接受 `reviewed`。未完成審閱的候選不發布；checked date 與 nested source dates 不一致時，外部 API contract fail closed。

## 每首歌曲的公開欄位

每筆 `PublicTheme` 必須包含：

| 欄位 | 公開含義 |
|---|---|
| `reviewState` | 只接受 `reviewed`；未完成審閱的候選不發布 |
| `sources[].label` | 使用者可辨識的來源名稱 |
| `sources[].url` | 無 credential 的絕對 HTTPS 頁面 |
| `sources[].language` | `zh-Hant`、`zh-Hans`、`ja`、`en` 或 `multi` |
| `sources[].role` | `first_party` 或 `cross_check` |
| `sources[].verifiedAt` | 該來源最後人工核對的 ISO 8601 日期 |

`first_party` 表示動畫製作／發行方、唱片公司、藝人官方渠道、官方影片或正式播出機構的公開頁面。`cross_check` 表示用於發現缺口及交叉比對的公開索引。兩種角色都是來源分類，不代表數值信心或內容評分。

目前六季快照的 season references、421 個作品及 904 筆 OP／ED 都有結構化 provenance；904 筆歌曲全部至少保留一個 `first_party` 與一個 `cross_check` 來源。`tests/unit/curated-catalog.test.ts` 鎖定來源數量、角色、語言、HTTPS、核對日期、Mock URL 禁止條件，以及 legacy labels 與結構化 ledger 的一致性。

## 欄位決策

- 日文曲名、演唱者、credits、影片及發行頁以第一方公開資料作最終核對。
- AnimeThemes、UZUREA、Annict、Bangumi、AniList 與年度動畫列表用於盤點及交叉核對，不單獨取代第一方證據。
- 繁中作品名稱優先採用台灣／香港正式代理、串流、出版社或官方社群；沒有可確認名稱時保留原文，不把自動轉換或社群欄位標示為正式譯名。
- 不生成曲名、譯名、credits、來源或影片；衝突未解決時保留原有 reviewed record 或不發布新欄位。
- `sourceLabels`／`lastVerifiedAt` 暫留於 API v1 作相容欄位，不供新 UI 作唯一證據。

## 圖像與影片

- 不使用 AI 生成圖作公開產品媒體。
- 首頁使用 code-native HTML／CSS 視覺，不需要 raster illustration 或新增 remote origin。
- 作品 poster／banner 目前由 AniList 公開媒體 origin 直接載入；詳情頁連回公開媒體頁，request 使用 `no-referrer`，搜尋與離線 cache 不載入／保存這些圖像。
- 公開媒體頁可提供來源追溯，但不等同 repository 擁有圖像權利。未完成權利與 hotlink review 前，不下載、修改、重新託管或宣稱擁有授權。
- 官方 YouTube 只保存 reviewed video ID／連結；不託管、下載或自動播放媒體。
- 新圖像或 iframe origin 必須先有來源／權利依據，再更新 CSP、privacy 文案和 browser tests；缺任何一項即停止發布。

## 修正與審閱

1. 修正者提供可公開存取的精確來源 URL，指出作品、歌曲與欄位。
2. 維護者先核對第一方頁面，再用另一個公開來源交叉確認。
3. 更新 seed 或明確 override、來源 ledger 及 `verifiedAt`，不提交原始 response dump。
4. 執行 `npm run catalog:check`、`npm test`、`npm run build` 與 browser gate。
5. 經 PR review 後才合併；production API 再用同一 public contract 讀回驗收。

公開資料修正表單：<https://github.com/kyeunga25/anisonary/issues/new?template=catalog-correction.yml>

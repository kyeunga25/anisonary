# 季度動畫資料來源與更新規則

這份文件是 Anisonary 的長期季度盤點基準。目標是用兩個公開、可重複查詢的中日資料來源找齊季度作品，再以動畫官網及正式授權資料完成最終核對。

公開可查詢不等於可任意重用。所有查詢、最少欄位、署名、媒體及停止條件均須符合
[`SOURCE_TERMS.md`](./SOURCE_TERMS.md)；curated records 與來源 ledger 不在
repository 的 Apache-2.0 軟件授權範圍內，詳見
[`../LICENSING.md`](../LICENSING.md)。

## 目前收錄範圍

季度完整性定義為：在日本於該季度日曆月份首播的非成人 `TV`／`WEB` 連載動畫，包含短篇、新季度與分割 cour；排除劇場版、OVA、宣傳短片及 18+ 作品。正式播出／配信的獨立特別篇只有在至少兩個季度來源一致歸入該季、並有可追溯第一方發布時才收錄。若作品在季度開始前數日先行發布，亦須由至少兩個季度目錄或主題曲索引一致歸入該季。同一作品跨季時共用一個詳情頁。

目前已發布的審核快照為：2026 夏季 70 套、2026 春季 70 套、2026 冬季 66 套、2025 夏季 75 套、2025 春季 82 套、2025 冬季 59 套、2024 秋季 88 套、2024 夏季 68 套、2024 春季 76 套、2024 冬季 75 套、2023 秋季 100 套、2023 夏季 75 套、2023 春季 79 套、2023 冬季 72 套、2022 秋季 80 套、2022 夏季 69 套、2022 春季 79 套、2022 冬季 58 套、2021 秋季 65 套及 2021 夏季 46 套，共 1,451 個作品詳情、3,039 筆 OP／ED 與 538 個唯一歌曲層 YouTube 直連；其中 1,305 筆已保留官方或正式授權影片 metadata。

每季先以繁中年度動畫表的對應月份建立日曆清單，再與 Annict、Bangumi 及 AniList identifier 取聯集核對。OP／ED 以作品官網和官方 YouTube 為主，並用 AnimeThemes、UZUREA 與 UtaTen 等季度主題曲表交叉確認；季度歌曲索引未收錄的作品，須返回 Netflix、唱片公司、IP 官網、正式播出機構或製作公司等第一方頁面補證。台港正式代理、串流或出版社名稱優先；未有可確認的繁中名稱時保留原文，不宣稱為正式授權譯名。

每首已發布歌曲在 `PublicTheme.sources[]` 留下 URL、語言、`first_party`／`cross_check` 角色及核對日期。二十季快照的 3,039 筆歌曲都必須同時具備兩種角色；這是公開 provenance gate，不是 confidence score。第三方索引將歌曲標為 OP／ED、但第一方頁面只證實插曲、劇中歌、Victory Dance、其他節目用途、舊季度歌曲、其他改編版本或一般「主題歌」時，不把它升格為官方 OP／ED；在既有導航契約中保留的一般主題曲會明示「主題歌（官方分類）」。完整欄位與媒體邊界見 [`DATA_PROVENANCE.md`](./DATA_PROVENANCE.md)。

## 固定來源

### Annict｜日本語季度全集基準

- 季度頁：`https://annict.com/works/{year}-{quarter}?display=list_detailed`；秋季的 Annict 參數使用 `autumn`
- Works API：`GET https://api.annict.com/v1/works`
- API 文件：<https://docs.annict.com/docs/ja/api/v1/works>
- 利用規約：<https://api.annict.com/terms>
- 季度參數：`filter_season=2026-summer`
- 用途：盤點日本季度作品範圍、原文標題、媒體類型、首播日及動畫官網。
- 限制：API 使用 OAuth 2.0 access token，每頁最多 50 筆；社群維護資料仍可能較官網更新稍遲。

範例查詢只示範參數，不把 token 寫入 URL 或 repository：

```bash
curl -H 'Authorization: Bearer <ANNICT_ACCESS_TOKEN>' \
  'https://api.annict.com/v1/works?filter_season=2026-summer&per_page=50&sort_season=asc'
```

### Bangumi 番組計劃｜中文條目交叉核對

- 年度日本動畫目錄：`https://bgm.tv/anime/browser/日本/airtime/{year}`
- 穩定 browse API：`GET https://api.bgm.tv/v0/subjects`
- API 文件：<https://bangumi.github.io/api/>
- 版權及開發者平台聲明：<https://bgm.tv/about/copyright>
- 季度參數：`type=2&year=2026&month=7&sort=date&limit=100&offset=0`
- 用途：交叉核對原文標題、中文別名、首播日期、媒體類型與條目圖像，找出 Annict 可能遺漏的條目。
- 限制：`name_cn` 通常是簡體中文及社群維護資料，不可直接當作台灣或香港正式繁中譯名；月份結果亦須再確認是否日本新番。只使用文件化 API、必要欄位及可識別 User-Agent，不以 crawler 或 raw dump 代替 API。條目信息的 Bangumi 衍生部分維持其版權聲明所列 CC BY-SA 條款及來源連結，使用者內容不得收集或再散布。

程式化存取要使用可識別的 User-Agent，並按回傳的 `total` 以 `offset` 完成分頁：

```bash
curl -H 'User-Agent: Anisonary/0.1 (https://github.com/kyeunga25/anisonary)' \
  'https://api.bgm.tv/v0/subjects?type=2&year=2026&month=7&sort=date&limit=100&offset=0'
```

不要用 `POST /v0/search/subjects` 建立長期流程；Bangumi 的 OpenAPI 把這個搜尋 endpoint 標記為實驗性。季度 inventory 使用穩定的 `GET /v0/subjects`。

## 季度與欄位規則

季度起始月份固定為冬季 1 月、春季 4 月、夏季 7 月、秋季 10 月。兩個來源的結果先取聯集，不以單一來源的數量判定完整性。

作品匹配依序使用：原文標題、官方網站、首播日及公開資料庫 ID。不可只靠中文譯名自動合併。`TV`、網絡配信、電影、OVA 和短篇要分開標記；加入季度預設目錄前，人工確認產品目前收錄的媒體範圍。

繁中名稱依序採用台灣或香港正式代理、串流平台、出版社或官方社群公布的名稱。未有正式繁中名稱時，保留原文並清楚標示，不把 Bangumi 的 `name_cn` 自動轉換後當成官方譯名。

播出日期、星期、OP／ED 曲名、演唱者及 Credits 必須返回動畫官網、唱片公司、藝人官方頁或官方影片確認。Annict 與 Bangumi 都不是這些欄位的最終真相來源。

## 更新流程

1. 由 `src/data/catalog-sources.ts` 產生目標季度的 Annict 目錄和兩個 API query。
2. 完成 Annict 50 筆分頁與 Bangumi `total`／`offset` 分頁，取得兩邊聯集。
3. 以原文標題、日期、官網及 ID 人工比對，列出新增、缺口及衝突。
4. 返回官方來源核對後，才更新 `src/data/curated-seeds.ts` 或對應的季度 seed 檔案，以及少量明確的 credit／source override；每筆保留結構化來源及 `verifiedAt`。
5. 執行 `npm run catalog:check`、`npm run lint` 及完整 `npm run check`，經 PR review 後合併。

## Repository 邊界

- 網站 build 和瀏覽器不即時依賴 Annict 或 Bangumi；production 使用 repository 內已審核的 snapshot。
- 不提交 access token、API 回應 dump、crawler、private source adapter 或內部信心規則。
- 不收集來源使用者資料，不把來源作 backup／mirror／批量資料集，也不向第三方提供
  raw 平台資料；來源終止或要求刪除時，先停止更新並移除受影響資料。
- 外部來源失效不應令現有季度頁無法 build；更新工作可以延後，但不可用猜測補資料。
- repository 只保存人工審核後的靜態 seed，不保存原始 API response、抓取器或私有比對規則。
- 公開 UI／API 不輸出內部完整度、信心或來源評分；缺口以空狀態或未發布欄位表示。
- API schema 或 endpoint 改動時，只修改集中式 `src/data/catalog-sources.ts` 及對應契約測試。

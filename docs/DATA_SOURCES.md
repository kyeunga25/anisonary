# 季度動畫資料來源與更新規則

這份文件是 Anisonary 的長期季度盤點基準。目標是用兩個公開、可重複查詢的中日資料來源找齊季度作品，再以動畫官網及正式授權資料完成最終核對。

## 固定來源

### Annict｜日本語季度全集基準

- 季度頁：`https://annict.com/works/{year}-{quarter}?display=list_detailed`
- Works API：`GET https://api.annict.com/v1/works`
- API 文件：<https://docs.annict.com/docs/ja/api/v1/works>
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
- 季度參數：`type=2&year=2026&month=7&sort=date&limit=100&offset=0`
- 用途：交叉核對原文標題、中文別名、首播日期、媒體類型與條目圖像，找出 Annict 可能遺漏的條目。
- 限制：`name_cn` 通常是簡體中文及社群維護資料，不可直接當作台灣或香港正式繁中譯名；月份結果亦須再確認是否日本新番。

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
4. 返回官方來源核對後，才更新 `src/data/curated-data.ts`；每筆保留來源及 `verifiedAt`。
5. 執行 `npm run catalog:check`、`npm run lint` 及完整 `npm run check`，經 PR review 後合併。

## Repository 邊界

- 網站 build 和瀏覽器不即時依賴 Annict 或 Bangumi；production 使用 repository 內已審核的 snapshot。
- 不提交 access token、API 回應 dump、crawler、private source adapter 或內部信心規則。
- 外部來源失效不應令現有季度頁無法 build；更新工作可以延後，但不可用猜測補資料。
- API schema 或 endpoint 改動時，只修改集中式 `src/data/catalog-sources.ts` 及對應契約測試。

# v1.0.0｜Public static API production check

本文件記錄 Anisonary v1.0.0 build-time JSON assets 的 production 驗收命令。它只驗證已公開的 read-only contract，不包含 runtime backend、資料來源流程、credential 或 Cloudflare 資源資料。

## 驗收範圍

`api:smoke` 直接使用前端的 `ApiProvider`，因此 live response 會經過與 production build 相同的 HTTPS、timeout、redirect、content type、response size、nested public contract 與 URL safety gate，並額外驗證：

- season list 與 season detail 的公開欄位一致；
- season card 與 anime detail 的公開欄位一致；
- 每個公開 season 及 anime detail 都存在；
- production season 不得標記為 Mock Data；
- 保留給 smoke 的未知 season／slug 必須回傳 `404`；
- catalogue 最多驗證 2,000 套作品，同時 request 上限為 8。

執行 live API smoke 與 fail-closed static build：

```bash
PUBLIC_API_BASE_URL=https://anisonary.k-y.cc/api/v1 npm run api:check
```

Production domain、TLS、endpoint 或 contract 未通過時，本命令必須失敗；不得回退至 repository data 後標示成功。一般 `npm test` 不會呼叫 live API，避免把部署可用性混入 deterministic CI。

## 公開與私隱邊界

- smoke failure 只輸出公開 identity 或分類後錯誤，不保存 response payload 或 upstream detail；
- API 由與 HTML 相同的 reviewed snapshot 產生，沒有 API credential、Cloudflare account／database identifier、非公開資源名稱或部署 identifier；
- API response 最終會進入公開 HTML，因此只可包含 `src/types/public-api.ts` 定義且已審核的公開資料；
- 本命令不加入 crawler、private source adapter、database、analytics、CORS wildcard 或 stateful binding；
- 此 gate 不量測 Lighthouse／Core Web Vitals，亦不以 build 時間或 asset 大小代替瀏覽器 performance trace。

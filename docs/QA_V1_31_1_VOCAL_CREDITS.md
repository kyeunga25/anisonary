# v1.31.1｜演唱 credits 顯示 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 修正範圍

- 歌曲卡片原本隱藏所有 `vocals` credits。現在顯示與 `artistDisplayName` 不同的已審閱演唱者；與藝人欄完全相同的名稱維持單次顯示。
- 《まるつけ》的ギヴン版本顯示矢野奨吾，《博多明太！麻辣子醬》的首支片尾分清製作人與鳴花ヒメ・ミコト合成歌聲。
- 純音樂作品不新增演唱角色，未核對的 credits 保持待確認；沒有新增或重寫任何歌曲、演唱者、來源、圖片或核對日期。
- 導覽、搜尋篩選、影片同意、公開 API 欄位及資料量保持不變。
- 跨季度內容測試的直接導覽改為等待 DOM 就緒，再核對實際標題、歌曲、篩選及影片入口；避免第三方海報的網路延遲佔用整項測試時限。所有內容斷言與獨立圖片 fallback 測試保留。

## 本機驗收

- `npm run catalog:check`：6 個檔案、163 項通過。
- `CI=true npm run check`：完整流程通過，包含公開邊界、`npm audit --audit-level=low`、Astro check、261 項單元測試、build、Cloudflare dry-run 及 19 項 Playwright 測試；依賴安全檢查為 0 項漏洞。
- 建置產生 1,960 個 HTML 頁面，3,919 個公開產物通過邊界檢查；Wrangler 讀取 5,884 個 Static Assets，0 application bindings。
- 對照 v1.31.0 建置，1,946 個公開 API 檔案逐位元相同，沒有新增、移除或改動。
- Chromium 1280px 與 390×844 實際操作「2019 夏季 → 創作者搜尋矢野奨吾 → 《まるつけ》」；到達正確歌曲錨點，並看見獨立演唱欄。兩種寬度也核對 F/ACE 的 5 筆角色演唱 credits；均沒有水平溢出、頁面程式錯誤、錯誤覆蓋層或未經操作建立的 iframe。
- E2E 同時驗證合成歌聲、藝人同名去重、純音樂與未核對 credits；既有導覽、手機鍵盤、搜尋私隱、離線、404 及圖片 fallback 測試全部保留。
- 首輪跨季度測試因等待第三方海報完成載入而逾時；追蹤確認後只調整該測試的直接導覽等待條件，保留 60 秒上限及所有內容斷言。完整重跑 19 項一次通過，該測試約 4 秒完成。
- 影片同意使用受控播放器回應驗證；本切片沒有重新核對實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

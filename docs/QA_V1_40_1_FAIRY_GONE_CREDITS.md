# v1.40.1｜Fairy gone 逐曲署名 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 改動範圍

- 補上《Fairy gone》春季 OP「KNOCK on the CORE」的 Ayaka Tachibana、AIJ 演唱署名，以及 ED「Ash-like Snow」的 NIKIIE 演唱署名；團體名義維持 `(K)NoW_NAME`。
- 依創作者所屬公司 2019 年 4 月單曲履歷，補上兩首歌的宮崎誠作曲、編曲及 ED 的 eNu 作詞；OP 作詞未有足夠第一方證據，沒有推定。
- 個別演唱者依 Radio NIKKEI 播出資料與 mora 藝人訪談逐曲核對；保留來源語言、角色及 2026-09-07 核對日期。
- 發行日期、TV Size 說明、官方影片、作品識別及秋季第二部分不變；沒有新增媒體、圖片或 API 欄位。

## 本機驗收

- `npm run catalog:check`：7 個檔案、200 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、298 項單元測試、build、Cloudflare dry-run 及 33 項 Playwright 測試通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,988 個 HTML 頁面，3,975 個公開產物通過邊界檢查；Wrangler 讀取 5,968 個 Static Assets，0 application bindings。
- 對照 v1.40.0，1,973 份既有 API JSON 逐位元相同；只更新 `fairy-gone` 作品檔案的歌曲署名與來源，沒有新增或移除檔案。
- 創作者搜尋涵蓋個別演唱者、作詞、作曲及 OP／ED 篩選；未參與對應演唱的團體成員不會因本次署名更新而出現在該歌曲的搜尋結果。
- Chromium 1280px 與 390×844 核對兩位不同演唱者的搜尋結果及兩首歌曲卡片，共 8 個畫面；完整署名、日期與 9 個來源連結可讀，沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層、iframe 或未經操作的 YouTube 媒體連線。
- 既有季度分組、導覽、影片鍵盤同意、無 JavaScript、離線、404 與錯誤狀態回歸通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。

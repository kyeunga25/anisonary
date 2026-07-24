# v0.2.0｜跨季度搜尋與媒體私隱 QA

本文件記錄 Anisonary v0.2.0 的公開驗收範圍。主介面以繁體中文呈現，並保留 English／Romaji 搜尋支援。

## 交付範圍

- `/search/` 靜態跨季度搜尋頁；
- 動畫原文、繁中、羅馬字、OP／ED、歌手與 Credits 搜尋；
- Unicode 全形／半形及羅馬數字正規化；
- 搜尋字詞只在目前頁面處理，不加入 URL、不呼叫搜尋 API、不使用 analytics；
- 搜尋頁使用文字結果，不載入遠端 poster；
- YouTube iframe 只在明確點擊後建立，點擊前不載入第三方 thumbnail；
- 遠端 poster 及 YouTube iframe 使用 `no-referrer`。

## Automated validation

| Gate | Result |
|---|---|
| `npm run lint` | 0 errors／warnings／hints |
| `npm test` | 13 files；67 tests passed |
| `npm run build` | 15 static pages generated |
| `npm run cf:check` | 48 static assets；0 bindings |
| `npm run test:e2e` | 7 flows passed |
| `npm audit --audit-level=low` | 0 vulnerabilities |

E2E 覆蓋跨季度搜尋、全形輸入、同一歌手多作品、繁中動畫名稱、Escape 清除、零搜尋外部 request、點擊前零 YouTube request、點擊後 privacy-enhanced iframe、mobile keyboard、404、API error state 及 poster fallback。

## Browser validation

- Desktop：8 套動畫、17 首主題曲完整呈現；`ＭＹＴＨ & ＲＯＩＤ` 正確命中兩套作品；
- Mobile 390 × 844：沒有水平 overflow；`幼女戰記` 正確命中 1 套動畫與 2 首主題曲；
- Media consent：點擊前沒有 iframe 或 YouTube thumbnail，點擊後只建立 `www.youtube-nocookie.com` iframe；
- Browser console：0 error／warning。

## Security and privacy boundary

- UI 不使用 `innerHTML` 處理搜尋字詞，只切換預先產生元素的 `hidden` state；
- 搜尋 input 最長 80 個字元，不提交表單或持久化內容；
- response／provider failure 仍使用公開錯誤狀態，不顯示 upstream detail；
- API response 以 4 MiB streaming 上限讀取，外部 image／catalog origins 必須符合經審核的公開來源清單，完整索引最多 2,000 套動畫及 8 個並行 detail requests；
- 一般目錄頁的作品 poster 會連線至核准 AniList media CDN；`no-referrer` 阻止頁面網址外傳，但連線本身仍會出現，因此 About 頁已明確披露。搜尋頁維持零 remote poster request；
- Cloudflare request observability、dependency instrumentation、Wrangler metrics 及 error reporting 均在公開部署設定停用；
- Astro／Wrangler 已升級至修復版本，受影響的 lint-only `fast-uri` transitive dependency 以相容 patched version 覆寫；`npm audit` 為 0；
- 本次沒有新增圖像、crawler、database dump、credential、private source adapter 或內部資料欄位。

## Performance evidence boundary

Static build、DOM interaction 與 responsive layout 已驗證，但本輪沒有可用的 Chrome DevTools trace capability，因此不填寫或推測 Lighthouse／Core Web Vitals 分數。該數值稽核仍保留為獨立驗收項目。

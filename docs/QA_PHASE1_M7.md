# Phase 1 M7 Quality QA

日期：2026-07-19

## 實作範圍

- `BaseLayout` 統一產生 description、robots、canonical、Open Graph 與 Twitter metadata；
- 首頁輸出 `WebSite`、季度頁輸出 `CollectionPage`、動畫頁輸出 `TVSeries` JSON-LD；
- JSON-LD serialization 會 escape `<`，避免資料關閉 script element；
- 首頁 provider failure 會顯示公開 `role="alert"` 錯誤狀態，不輸出 upstream error detail；
- YouTube 按需載入加入 `aria-busy` 與 `aria-live` loading feedback；
- 外部平台、YouTube、作品參考及來源連結明確說明會在新分頁開啟；
- Hero 與四張 Mock poster 轉為尺寸化 WebP，並為主要圖片加入 intrinsic dimensions；
- 加入 Astro Container component tests 與 Playwright E2E。

## 自動化驗證

| Check | Result |
|---|---|
| `npm run lint` | Pass；46 files，0 errors／warnings／hints |
| `npm test` | Pass；8 files，29 tests |
| `npm run build` | Pass；38 static pages |
| `npm run test:e2e` | Pass；5 Playwright tests |
| `git diff --check` | Pass |

Playwright 覆蓋：

1. 首頁至季度、星期 navigation、filter、動畫詳情；
2. YouTube iframe 初始不存在，按下後使用 `youtube-nocookie.com`；
3. External platform link；
4. Season／Anime canonical 與 JSON-LD；
5. 390 × 844 mobile keyboard filter；
6. 404 與 `noindex, follow`；
7. Production-style API failure static build 與公開 error fallback。

## Rendered QA

- Browser：Codex in-app browser；
- Desktop：1280px；
- Mobile：390 × 844；
- Page identity、meaningful DOM、framework overlay、console、interaction 均通過；
- Desktop 與 mobile 均無水平 overflow；
- YouTube 載入前 iframe count 為 0，載入後為 1，且 `aria-busy` 回復 `false`；
- 首頁 WebP hero natural width 為 1200，poster natural width 為 768；
- Console errors／warnings：0。

## 資產比較

| Asset group | Before | After |
|---|---:|---:|
| Hero + 4 Mock posters | 12,603,441 bytes | 831,018 bytes |

減少 11,772,423 bytes，約 93.4%。最終 `dist/` 約 1.7 MB，沒有大於 500 KB 的單一檔案。

## Remaining

本環境沒有配置 Chrome DevTools MCP，因此未執行 Core Web Vitals trace，也不記錄未量測的 Lighthouse 分數。配置工具後需補做 LCP、CLS、network dependency 與 accessibility snapshot；Production API smoke test 時亦需驗證遠端 broken-poster 行為。

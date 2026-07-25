# Content Security Policy QA

本文件記錄 Anisonary 靜態網站的 CSP 交付契約與可重現驗證。政策由 production build 根據最終 HTML 產生，不需要 application Worker、nonce server、資料庫、Cloudflare binding 或第三方回報端點。

## Delivery model／交付方式

1. Astro 先產生完整 `dist`；
2. `scripts/generate-security-headers.mjs` 掃描所有 HTML；
3. 可執行 inline scripts 與 inline style elements 以 SHA-256 加入 policy；
4. `application/ld+json` 是結構化資料，不作為可執行 script 加入 hash 清單；
5. 生成器把單一 `Content-Security-Policy` 寫入 `dist/_headers` 的全站規則；
6. Service Worker 最後產生，並繼續排除 `_headers`。

`public/_headers` 只保存穩定的 security 與 cache headers。CSP hashes 屬於 build output，不應手動複製回 source file。

## Policy boundary／政策邊界

- `default-src 'self'`；
- `script-src` 與 `style-src` 只允許同源檔案及本次 build 的 SHA-256；
- `script-src-attr 'none'`、`style-src-attr 'none'`；
- `object-src 'none'`、`frame-ancestors 'none'`、`media-src 'none'`；
- remote images 只允許目前 catalogue 使用的 AniList media origin；
- iframe 只允許 YouTube privacy-enhanced origin，且仍由使用者按下後才建立；
- `connect-src`、Web Worker 與 Web App Manifest 只允許同源；
- 不使用 `unsafe-inline`、`unsafe-eval`、wildcard、CSP reporting endpoint 或 tracking service。

build 也會檢查 HTML attributes 與 remote media origins。新增 inline event handler、inline style attribute、未批准的海報 origin 或 iframe origin 時，build 會直接失敗，要求先完成明確的安全審核。

## Automated verification／自動驗證

```bash
npm run lint
npm test
npm run build
npm run cf:check
npm run test:e2e
```

驗證覆蓋：

- hash 計算與 JSON-LD 排除；
- minimal source allowlist；
- inline attribute 與意外 remote origin 的 fail-closed 行為；
- `_headers` 單一 CSP 注入及 Cloudflare 每行長度限制；
- 最終 147 個 HTML 頁面沒有 inline event／style attributes；
- 瀏覽器收到 CSP 後，theme、search、season filter、poster fallback、Service Worker 與 lazy YouTube 流程仍可操作；
- browser console 沒有 CSP violation。

本機 static test server 會讀取 build 後 `_headers` 的全站規則，令 Playwright 測試與 Workers Static Assets 的 header 行為保持一致。正式發佈後仍須在 custom domain 重新核對 CSP response header 及主要互動流程。

## References／官方參考

- [Cloudflare Workers Static Assets `_headers`](https://developers.cloudflare.com/workers/static-assets/headers/)
- [Cloudflare security headers example](https://developers.cloudflare.com/workers/examples/security-headers/)
- [MDN `script-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)

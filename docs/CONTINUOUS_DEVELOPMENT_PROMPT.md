# Anisonary 持續開發 Prompt

> 這是一份可公開的執行契約，不是私人 roadmap。不得加入私人來源候選、內部評分、原始資料 dump、部署識別碼、審核者資料或對話紀錄。

你正在持續設計、開發及改善 Anisonary。目標是提供快速、易搜尋、具來源證據、對版權與使用者私隱負責的動畫歌曲目錄，並維持可離線使用的靜態公開產品。

## 不可破壞的邊界

- 繁體中文為主要介面語言，必要資訊提供英文；日文名稱保留原文並清楚標示。
- 公開 catalogue 只使用已人工核對的結構化資料；不得生成 catalogue data、生成圖片、爬取全站或提交 raw API dump。
- 每筆公開內容需要來源角色、核對狀態、語言、HTTPS URL 與核對日期；衝突未解決時不得發布。
- 公開來源可查閱不等於可再散佈。程式碼授權、資料庫／編纂權、商標、海報、影片與第三方條款要分開處理；無圖 fallback 是合法性不明時的安全預設。
- 公開 frontend 維持靜態、fail-closed 的已審核 snapshot 邊界；私人候選、審核、抓取或模型輸出不得進入公開 runtime 或 artifact。
- 不與其他 app 共用 auth、analytics、資料庫、storage、secret 或私人 telemetry，也不得把 catalogue 自動送入音訊生成。
- 保留所有既有未提交變更；不得 bulk stage、重置、覆蓋或批量刪除。

## 永續 development loop

1. **重新定位**：核對目錄、Git root、remote、branch、狀態及適用指令。所有既有變更均視為使用者所有。
2. **讀取證據**：檢查 data contract、provider order、來源 ledger、static build、security headers、service worker、release scripts 與 tests；不猜測 live API 或 production。
3. **選一個 cycle**：最多列三項候選，按讀者價值、資料正確性、安全／私隱／法律、免費方案成本、效能與本機可驗證性選一個最小垂直切片。
4. **定義驗收**：寫明 public allowlist schema、來源與權利、輸入／輸出界限、identity／digest、404／offline fallback、CSP、cache、無障礙、SEO 與 rollback。
5. **實作與測試**：先補 contract／negative tests，再作最小修改；未知欄位預設剝除，release input 必須先驗證及安全編碼，production 只接受 approved branch／fixed reviewed SHA。
6. **公開輸出檢查**：掃描 staged files 與 build artifact，拒絕 secret、私人路徑、Cloudflare 識別碼、內部評分、候選資料、crawler／model output、私人欄位、未核准媒體及本地產物。
7. **本機 gates**：執行既有 lint、unit、catalog check、build、Cloudflare dry-run、release verification 及 E2E；live smoke 只有在當前任務授權且網路穩定時執行。
8. **提交 cycle**：精準 stage 本輪檔案，檢查 cached diff，以 `type: content` 建立一個 commit；不可混入既有使用者文件變更。
9. **繼續演進**：完成後立即選下一個安全切片；不得用未核實資料、無效文件或版本 churn 充數。

Cloudflare 登入、私人 snapshot 或 live API 不可用時，保持現有 public snapshot 及 fail-closed gate，轉做下一個本機資料品質、UX、效能或安全 cycle。

## 本產品的優先選擇規則

優先改善：搜尋與分類體驗、來源透明度、public allowlist schema、release input／ref hardening、snapshot 可回復性、無圖與 offline UX、CSP／cache、效能與無障礙。任何資料擴充都先建立來源證據及法律判斷，不以數量作唯一成功指標。

## Suite 整合契約

只輸出最小、版本化、具 digest 的公開 catalogue／產品狀態 manifest。其他 app 只能顯示公開 metadata 與來源連結；不得視為再利用、改編或訓練授權。私人 release pipeline 與公開 frontend 必須保持分離，整合失敗時仍可由最後已審核 snapshot 正常運作。

## English runner contract

Ship one reviewed, source-backed, public-safe vertical slice per cycle. Preserve the static fail-closed product boundary, strip unknown/private fields, validate release identity and rights, verify exact staged and built output, create one focused commit, then immediately select the next safe cycle.

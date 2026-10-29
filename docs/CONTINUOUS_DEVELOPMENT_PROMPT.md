# Anisonary 收集工作交接 / Collection Runner

本文件是可公開的操作入口。資料規則集中在 [`AGENTS.md`](../AGENTS.md)，收集流程與驗證矩陣在 [`SONG_COLLECTION_WORKFLOW.md`](./SONG_COLLECTION_WORKFLOW.md)，唯一接續位置在 [`CATALOG_COLLECTION_STATUS.md`](./CATALOG_COLLECTION_STATUS.md)。不保存對話、私人偏好、憑證、原始取回資料或營運 logs。

## 工作階段

1. 核對 Git 狀態及相關文件，從 checkpoint 的最後可靠進度接續，保留已有修改。
2. 沿用已登記的目標、固定年份、用途範圍、資料截止日及完成條件；範圍調整只影響後續工作，不撤回已完成成果。
3. 由新季度往舊季度選取下一批。每批預設 20–30 筆用途或約 10 部動畫；先確認曲名、演唱及動畫用途，再補創作名單、已證實音源、官方影片、收錄發行品與正版外連。
4. 新格式只需以 3–5 首真實歌曲完成相容格式、parser、公開 JSON 及頁面展示；已接通的能力直接沿用。歌曲、動畫用途、音源、發行品及平台項目分開，保持公開 ID 與 URL 穩定。
5. 重用有效證據及原核對日期，只查真正缺口與到期項目。兩輪定向查找仍無明確證據時，記錄缺口和續查條件，繼續其他歌曲。
6. 按變更矩陣收尾檢查一次，預覽實際新增內容，更新同一 checkpoint 的公開 ID、實際差異、驗證結果及下一批位置。
7. 已授權的階段以範圍明確的 commit 保存；推送及部署按照當前發布範圍執行。提交前排除密鑰、私人資訊、logs、原始資料及本機測試產物；必要的通用測試邏輯可以公開。

## 來源並行查核

可按工作槽安排最多三個研究工作，另保留主整合工作。啟動前在同一 checkpoint 登記公開作品／用途 ID，按不重疊作品分組；研究結果只交付已查核事實、精確來源、欄位支持範圍、核對日期及缺口觸發條件。同一來源由研究工作共用已核結果，避免重複取得。

研究工作不修改共用 seed、checkpoint 或建置輸出，不自行提交或發布。主整合先比對當前公開資料與既有 override，保留已核名義、用途標籤及歷史關係，再統一修改、驗證、備份、提交及走既有發布流程。動態網頁須確認普通渲染的正文；只取得 shell、搜尋摘要或訪問失敗時，不能當成完整欄位證據。

## 執行狀態

只有明確開始或繼續要求才啟動收集。暫停或停止時不再啟動新收集、修改或檢查，只作最小安全收尾及保存位置；未驗證修改清楚標示。恢復需要明確指令，不自動安排背景或排程工作。

批次完成、範圍完成與整體目標完成分開。較大目標按已登記條件判定；仍有必需缺口時保留未完成狀態。本機驗證、GitHub CI、預覽及 production 證據各自記錄，建置通過不等於已部署。

## English handoff

Resume from the shared checkpoint. Preserve the fixed scope, evidence cutoff, stable identities and existing work. Verify song identity and anime use before enriching creators, recordings, releases and official platform appearances. Reuse valid sources, retain actual review dates and save unresolved gaps after two targeted search rounds. Run the applicable checks once and record the public changes and next position. Commit and publish only the reviewed, authorised scope; exclude credentials, private information, raw responses, logs and local test artifacts. Pause on request, save progress and resume only with explicit instruction. Keep batch completion and overall completion separate, and verify deployment independently from local builds.

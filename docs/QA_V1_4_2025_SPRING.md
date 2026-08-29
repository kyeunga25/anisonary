# v1.4.0｜2025 春季目錄與導覽 QA

本輪把公開靜態目錄向前一季擴展至 2025 春季，維持 repository-reviewed snapshot、純 Static Assets 與公開來源可追溯邊界。網站不加入即時 crawler、資料庫、私人 adapter、原始 API dump、內部 confidence rules 或 runtime secret。

## 公開資料結果

- 新增 2025 春季 82 套非成人 TV／WEB 連載動畫；收錄短篇與季度連載，排除劇場版、OVA、單次特別篇、宣傳短片及 18+ 作品；
- 新季度發布 153 筆已核對 OP／ED；59 套作品已有歌曲，23 套維持明確的待公布空狀態，不以推測補值；
- 新增 79 筆已審閱影片 metadata；全站合計 495 筆，其中 491 筆標記為官方、4 筆標記為正式授權；
- 全站現為 5 個季度、362 個唯一作品頁、768 筆 OP／ED、533 筆 YouTube link record（531 個唯一 URL）；
- 768 筆歌曲都必須同時具備至少一個第一方及一個交叉核對來源，公開欄位只保存 URL、語言、來源角色、審閱狀態及核對日期。

## 盤點與歌曲核對

季度範圍以繁中年度動畫列表、Annict、Bangumi、AniList、AnimeThemes 與 UZUREA 取聯集，再逐套返回動畫官網、發行方、藝人官方頁、正式播出機構或官方影片核對。3 月先行作品只有在 AnimeThemes 與 UZUREA 同時歸入春季時才收錄。

本輪特別鎖定以下容易漂移的資料：

- 《おいでよ魔法少女村（不法占拠）》片頭曲、角色演唱者與第一方製作資訊；
- 《増田こうすけ劇場 ギャグマンガ日和GO》片頭／片尾曲及官方影片；
- 《ウィッチウォッチ》特殊片頭／片尾曲的曲名、序號與演唱者；
- 《ムーンライズ》的有效第一方作品頁；
- 只有正式授權音訊、尚無可確認官方影片或歌曲未公布的項目，保留較保守的公開狀態。

來源連結只供查證，不代表本站擁有第三方動畫、商標、圖片、音訊或影片的重用權。Repository 不下載、修改、重新託管或自動播放第三方媒體，也不收錄完整歌詞。

## 導覽與顯示

- 桌面繼續使用左側分組 vertical sidebar，把探索、季度與資訊分開；2025 春季加入季度清單；
- 手機維持可用鍵盤及 Escape 操作的收合 menu；
- 影片篩選器使用「有正版影片」，準確涵蓋官方與正式授權來源；
- 1440 × 900 與 390 × 844 browser gate 驗證 active link、menu 展開／關閉、內容可讀性及沒有水平溢出；
- 2025 春季季度頁、動畫詳情、歌曲、來源及影片 metadata 與 static JSON API 使用同一份 reviewed snapshot。

## 本機 release gate

- `npm run catalog:check`：5 個檔案、124 項目錄／來源／影片 registry 檢查通過；
- `npm run lint`：102 個檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、205 項測試通過；
- `npm run build`：373 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；753 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：1,131 個 Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括新季度、static API、CSP、離線、sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- repository 與 build artifact 的限定公開邊界檢查通過；正式部署仍必須使用已合併 `main` 的固定 SHA，並獨立核對 live routes、headers、API 與 release identity。

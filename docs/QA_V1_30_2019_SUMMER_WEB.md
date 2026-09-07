# v1.30.0｜2019 夏季 WEB 作品 QA

本記錄描述 repository source 與本機驗證。GitHub CI、正式部署及線上驗收仍須按固定 commit 獨立核對；本機通過不等於正式網站已更新。

## 資料範圍

- 增加《CANNON BUSTERS 砲彈剋星》、《聖鬥士星矢：黃道十二宮戰士》及《HERO MASK 英雄面具 PartII》，共 3 套 WEB 作品、3 筆 OP／ED 及 2 筆官方影片 metadata。
- 夏季快照累計 39 套作品（35 套 TV、4 套網絡連載）、102 筆歌曲；`coverageNote` 繼續明示尚在補充，2025 秋季仍未收錄。
- 全站累計 28 個季度、1,914 個唯一作品、4,228 筆 OP／ED 與 1,755 筆官方或正式授權影片 metadata；538 個唯一歌曲層 YouTube 直連保持不變。
- 新增歌曲保留第一方、交叉核對來源、來源語言及 2026-09-07 核對日期；新增作品使用無圖介面。

## 來源與版本核對

- [Satelight](https://www.satelight.co.jp/works/cannon-busters/) 確認《CANNON BUSTERS》於 2019-08-15 配信；[Netflix](https://www.netflix.com/tudum/articles/black-music-anime-connection-closer-look) 的片頭曲用途說明與 [SonySoundtracksVEVO](https://www.youtube.com/watch?v=Vheqm2tJcd8) 的曲名、演唱者相互核對。只收錄已核對片頭曲。
- [Universal Music](https://www.universal-music.co.jp/the-struts/news/2019-06-27/) 區分 The Struts 的英文版「PEGASUS SEIYA」與「サムバディ・ニュー」，保留原作詞、英詞、作曲及編曲 credits。2019-07-19 的首批配信與既有 2020 年 Part 2 詳情頁分開；不把專輯再版日期當作歌曲初次發行日期。
- [Studio Pierrot](https://pierrot.jp/archive/2015/tv10_37.html) 確認《HERO MASK PartII》於 2019-08-23 配信。歌曲用途證據尚待補充，頁面保留待補充狀態，不宣稱作品沒有 OP／ED。
- 作品名稱與季度先由 [YourAnimes 2019 夏季](https://youranimes.tw/bangumi/201907) 交叉核對。個別作品只保留實際支持該記錄的季度來源；沒有以其他季節、試播短片或續篇取代作品身份。
- 《聖鬥士星矢》的識別保留 [Wikidata 條目](https://www.wikidata.org/wiki/Q65052700) 與獨立歌曲交叉來源，不建立未核對的 AnimeThemes URL；Wikidata 使用範圍見 [來源條款](SOURCE_TERMS.md)。

## 本機驗收

- `npm run catalog:check`：6 個檔案、160 項通過。
- `npm run check`：完整流程通過，包含公開邊界、`npm audit --audit-level=low`、Astro check、258 項單元測試、build、Cloudflare dry-run 及 17 項 Playwright 測試；依賴安全檢查為 0 項漏洞。
- 建置產生 1,957 個 HTML 頁面，3,913 個公開產物通過邊界檢查；Wrangler 讀取 5,875 個 Static Assets，0 application bindings。
- 對照 v1.29.0 的建置，既有 1,939 個 API 檔案逐位元相同，只有 2019 夏季快照改變，另增加 3 個作品 API。歌曲來源整理未改動其他作品或既有季度。
- 搜尋索引為 2,725,851 UTF-8 bytes，低於既有 8 MiB 上限；以 BJRNCK 搜尋可到達《CANNON BUSTERS》的正確片頭曲。
- Chromium 1280px 與 390×844 核對夏季頁及 3 個新作品，沒有水平溢出、頁面程式錯誤或未經操作建立的 YouTube iframe；《HERO MASK PartII》可離線閱讀。
- 英文演唱版保留 TIM JENSEN 的英詞 credit；歌曲待補充頁面不顯示「本作不設獨立 OP／ED」。
- 影片同意流程以受控播放器回應測試，不宣稱實際 YouTube 播放可用。實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 未在本切片重新驗證。

## 發布界線

正式發布須核對固定 PR head SHA、GitHub checks、合併結果、Workers Builds 正式部署與流量，再驗證 live routes、headers、API 及產物 hash。結果記錄於對應 GitHub Release；本文件不保存來源原始回應、私人操作記錄或平台資源識別。

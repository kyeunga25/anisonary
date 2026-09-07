# v1.55.0 QA：2019 春季《閃躍吧！星夢頻道 第二季》

來源核對日期：2026-09-08。本切片收錄 TV 第二季與兩首 OP、兩首 ED。春季共 39 套作品（38 套 TV、1 套網絡連載）與 119 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。

## 資料與來源

- [YourAnimes 繁中條目](https://youranimes.tw/animes/645)交叉核對名稱與季度；[製作委員會公告](https://www.takaratomy-arts.co.jp/company/pdf/2019R_Mertic.pdf)本文確認 2019 年 4 月 7 日起、每週日 10:00 首播。公告頁首的 4 月 5 日是文件日期，沒有當作首播日。
- [avex 第二季影碟頁](https://avex.jp/prichan/discography/detail.php?id=1017048)明示本季第 1 話對應 TV 累計第 52 話，作品與既有第三季詳情維持獨立。
- [東京電視台節目資料](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201908/21577_201908181000.html)核對前期 OP〈ダイヤモンドスマイル〉、ED〈じゃんけんキラッと！プリ☆チャン〉及演唱、詞曲、編曲；[Run Girls, Run！單曲頁](https://rungirlsrun.jp/discography/detail.php?id=1016423)確認原 OP 的 2019-05-29 CD 日期。
- [藝人官方公告](https://rungirlsrun.jp/news/detail.php?id=1076608)確認後期 OP〈キラリスト・ジュエリスト〉自 2019 年 10 月使用，由只野菜摘作詞、広川恵一作曲及編曲；[收錄單曲頁](https://rungirlsrun.jp/discography/detail.php?id=1017094)確認 2019-11-27 發行。沒有把同碟〈Share the light〉的作曲署名套入。
- [BS 東京電視台節目資料](https://www.tv-tokyo.co.jp/broad_bstvtokyo/program/detail/202003/21577_202003301729.html)確認後期 ED〈Brand New Girls〉的三人角色演唱名義、林鼓子／厚木那奈美／森嶋優花，以及栗原暁與前田佑共同作詞、作曲及編曲；[UtaTen](https://utaten.com/lyric/nm20062644/)交叉核對共同詞曲與合集日期。
- [avex 第二季歌曲合集](https://avex.jp/prichan/discography/detail.php?id=1017565)明確分類兩首 OP、兩首 ED。ED 日期標示 2020-06-24 的合集 CD，與 TV Size 和 OP 原單曲分開；[アニソン・オンライン](https://anison.online/anime/5206)另交叉核對歌曲次序及版本。
- 四首歌保留第一方與交叉來源、語言及實際核對日期。角色版插曲、前季／第三季歌曲、未核對特殊單集版本、圖片、影片與外部 ID 未加入；只保存必要事實、短名稱與來源 URL，不複製歌詞或完整頁面。

## 本機驗收

- `npm run catalog:check`：259 項通過；unit suite：362 項通過。新增測試覆蓋第二季識別、API 往返、OP／ED 演唱版本、共同製作署名、發行版別與創作者搜尋。
- `npm run check` 的公開邊界、依賴稽核、lint、unit、build 與 Cloudflare dry-run 通過。首次完整 E2E 中三項舊總數斷言未同步；已按新增作品、歌曲及 TV 數量修正，重新執行 `npm run test:e2e` 後 54 項全部通過。
- 完整與正式依賴稽核均為 0 項漏洞；`fast-uri` 維持 3.1.6，既有 8 項安全回歸包含在 unit suite。
- 建置 2,000 份 HTML，3,999 份產物通過公開邊界；Cloudflare dry-run 沒有 runtime binding。
- 1,984 份既有 API 完全相同，只更新春季快照並新增第二季詳情 API；沒有移除。目錄共 1,956 個唯一作品、4,348 筆 OP／ED 與 1,812 筆官方／正式授權影片 metadata。
- 既有 Playwright 另檢查 1280、960、390、320px 及 390px 無 JavaScript 的 20 個畫面，沒有水平溢出、framework overlay、page error、console error、預先 YouTube 請求或 iframe；已目視桌面詳情及手機三人合唱卡片。
- 新增操作驗證涵蓋中文搜尋、年份／季度篩選、共同製作者連結、精確歌曲跳轉、完整署名、發行日期、來源展開及無 JavaScript 的年份 → 季度 → 作品導覽。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。

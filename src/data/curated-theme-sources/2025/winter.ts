import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

const wataruInitialThemeCrossChecks = [{
  label: "UtaTen：2025 冬季 OP／ED 曲名與演唱者交叉核對",
  url: "https://utaten.com/specialArticle/index/8978",
  language: "ja",
  role: "cross_check"
}, {
  label: "JOYSOUND：2025 冬季 OP／ED 卡拉 OK 曲目交叉核對",
  url: "https://www.joysound.com/web/s/karaoke/contents/anime/list_2501",
  language: "ja",
  role: "cross_check"
}] as const;

export const curated2025WinterThemeSources = {
  "185462:ED:1": [{
    label: "秋水社官方公告：第 2 季片尾曲名與演唱者",
    url: "https://x.com/shusuisha/status/1875376613787128118",
    language: "ja",
    role: "first_party"
  }, {
    label: "ASCII.jp：第 2 季片尾曲名與演唱者交叉核對",
    url: "https://ascii.jp/elem/000/004/243/4243811/4/",
    language: "ja",
    role: "cross_check"
  }],
  "173333:OP:1": wataruInitialThemeCrossChecks,
  "173333:ED:1": wataruInitialThemeCrossChecks,
  "173333:OP:2": [{
    label: "動畫官方新聞：後期片頭曲名、演唱者與啟用日期",
    url: "https://www.wataru-anime.net/news/detail.html?id=22249",
    language: "ja",
    role: "first_party"
  }, {
    label: "Avex 官方專題：後期片頭曲與 SANTA 演唱資料交叉核對",
    url: "https://avexnet.jp/column/1005538",
    language: "ja",
    role: "cross_check"
  }, {
    label: "繁體中文作品頁：前後期片頭與片尾分類交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%A5%9E%E5%89%B5%E9%80%A0%E5%82%B3",
    language: "zh-Hant",
    role: "cross_check"
  }]
} satisfies CuratedThemeSourceOverrideMap;

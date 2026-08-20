import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

export const curated2026SummerThemeSources = {
  "212308:ED:1": [{
    label: "動畫官方網站：電視版片尾分類、歌手及完整創作 credit",
    url: "https://www.ktv.jp/pan-aka-tv/",
    language: "ja",
    role: "first_party"
  }, {
    label: "製作公司公告：2026 電視版與 2024 短篇版的版本區分",
    url: "https://prtimes.jp/main/html/rd/p/000000542.000024007.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ORICON：電視版片尾曲分類與歌手交叉核對",
    url: "https://www.oricon.co.jp/anime/1114/",
    language: "ja",
    role: "cross_check"
  }],
  "213426:ED:1": [{
    label: "TOKYO MX 官方新聞稿",
    url: "https://s.mxtv.jp/company/press/20260426_gyzj7w8cvl0nm3q9qrap8551yrvwn1.pdf",
    language: "ja",
    role: "first_party"
  }]
} satisfies CuratedThemeSourceOverrideMap;

import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

export const curated2025SpringThemeSources = {
  "187998:OP:1": [
    {
      label: "關西電視台與製作方公告：OP 曲名、演唱者及作品資料",
      url: "https://www.atpress.ne.jp/news/429240",
      language: "ja",
      role: "first_party",
    },
    {
      label: "演唱者官方履歷：作品主題歌與角色名義",
      url: "https://riko-kohara.com/profile/",
      language: "ja",
      role: "first_party",
    },
    {
      label: "逐話主題曲表：OP 分類與使用話數交叉核對",
      url: "https://www.mau2.com/anime/oideyomahoushoujomurafuhousenkyo",
      language: "ja",
      role: "cross_check",
    },
  ],
} satisfies CuratedThemeSourceOverrideMap;

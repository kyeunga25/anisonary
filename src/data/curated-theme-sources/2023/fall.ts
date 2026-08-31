import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

const bikkurimenSources = [{
  label: "動畫官方音樂頁：OP／ED 曲名、演唱者與後期 ED",
  url: "https://anime-bikkuri-men.jp/music/",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：2023 秋季 OP／ED 分類交叉核對",
  url: "https://anison.online/season?season_id=4",
  language: "ja",
  role: "cross_check"
}] as const;

const gundamBuildMetaverseCrossCheck = {
  label: "Anison Online：2023 秋季 OP／ED 分類交叉核對",
  url: "https://anison.online/season?season_id=4",
  language: "ja",
  role: "cross_check"
} as const;

const gundamBuildMetaverseEdSources = [{
  label: "GUNDAM.INFO：ED 曲名與作品用途",
  url: "https://www.gundam.info/product/cd/01_14132.html",
  language: "ja",
  role: "first_party"
}, gundamBuildMetaverseCrossCheck] as const;

const railRomanesqueSources = [{
  label: "動畫官方網站：主題歌曲名與演唱者",
  url: "https://railromanesque.jp/anime02/",
  language: "ja",
  role: "first_party"
}, {
  label: "公開放送紀錄：各話片尾使用方式交叉核對",
  url: "https://www.mau2.com/anime/railromanesque2",
  language: "ja",
  role: "cross_check"
}] as const;

const goodNightWorldSources = [{
  label: "動畫官方音樂頁：OP／ED 曲名與演唱者",
  url: "https://gnw-anime.com/music.html",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：OP／ED 曲目交叉核對",
  url: "https://anison.online/anime/240",
  language: "ja",
  role: "cross_check"
}] as const;

export const curated2023FallThemeSources = {
  "163364:OP:1": bikkurimenSources,
  "163364:ED:1": bikkurimenSources,
  "163364:ED:2": bikkurimenSources,
  "163204:OP:1": [{
    label: "BACK-ON 官方公告：OP 曲名與作品用途",
    url: "https://back-on.com/news/detail.php?id=1111185",
    language: "ja",
    role: "first_party"
  }, gundamBuildMetaverseCrossCheck],
  "163204:ED:1": gundamBuildMetaverseEdSources,
  "127163:ED:1": railRomanesqueSources,
  "167820:OP:1": goodNightWorldSources,
  "167820:ED:1": goodNightWorldSources,
  "170206:OP:1": [{
    label: "Netflix Japan 官方 OP 主題影片",
    url: "https://www.youtube.com/watch?v=QjQym1J9Qtw",
    language: "ja",
    role: "first_party"
  }, {
    label: "UtaTen：OP 曲名與演唱者交叉核對",
    url: "https://utaten.com/lyric/mi23111535/",
    language: "ja",
    role: "cross_check"
  }],
  "162147:ED:1": [{
    label: "The Pokémon Company：主題歌曲名與演唱者",
    url: "https://corporate.pokemon.co.jp/topics/detail/t-13/",
    language: "ja",
    role: "first_party"
  }, {
    label: "UtaTen：主題歌曲名與演唱者交叉核對",
    url: "https://utaten.com/lyric/qa31179036/",
    language: "ja",
    role: "cross_check"
  }]
} satisfies CuratedThemeSourceOverrideMap;

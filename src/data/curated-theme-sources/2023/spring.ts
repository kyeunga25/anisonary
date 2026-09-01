import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

const springAnisonCrossCheck = {
  label: "Anison Online：2023 春季 OP／ED 分類交叉核對",
  url: "https://anison.online/season?season_id=2",
  language: "ja",
  role: "cross_check"
} as const;

const bakuganSources = [{
  label: "TMS 官方公告：OP／ED 曲名與演唱者",
  url: "https://www.tms-e.co.jp/release/anime/entry-25989.html",
  language: "ja",
  role: "first_party"
}, springAnisonCrossCheck] as const;

const kaguyaSources = [{
  label: "動畫官方音樂頁：OP／ED 曲名與演唱者",
  url: "https://kaguya.love/firstkiss/music/",
  language: "ja",
  role: "first_party"
}, {
  label: "繁體中文作品條目：OP／ED 用途交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E8%BC%9D%E5%A4%9C%E5%A7%AC%E6%83%B3%E8%AE%93%E4%BA%BA%E5%91%8A%E7%99%BD%EF%BC%8D%E6%B0%B8%E4%B8%8D%E7%B5%90%E6%9D%9F%E7%9A%84%E5%88%9D%E5%90%BB%EF%BC%8D",
  language: "zh-Hant",
  role: "cross_check"
}] as const;

const duelMastersSources = [{
  label: "動畫官方作品頁：決鬥學園篇作品與音樂脈絡",
  url: "https://www.shopro.co.jp/tv/duelmasters/",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：決鬥學園篇四組 OP／ED 交叉核對",
  url: "https://anison.online/anime/117",
  language: "ja",
  role: "cross_check"
}] as const;

const gunmachanSources = [{
  label: "動畫官方音樂資訊：OP／ED 曲名與演唱者",
  url: "https://gunmachan-official.jp/animation/",
  language: "ja",
  role: "first_party"
}, springAnisonCrossCheck] as const;

const dendenSources = [{
  label: "SODA KIT 官方原聲帶頁：兩首歌曲與演唱者",
  url: "https://sodakit.tokyo/discography/denden/",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：作品 OP／ED 用途交叉核對",
  url: "https://anison.online/anime/120",
  language: "ja",
  role: "cross_check"
}] as const;

const youtunyaSources = [{
  label: "動畫官方網站：ED 曲名與演唱者",
  url: "https://youtunya.com/",
  language: "ja",
  role: "first_party"
}, springAnisonCrossCheck] as const;

export const curated2023SpringThemeSources = {
  "169826:OP:1": bakuganSources,
  "169826:ED:1": bakuganSources,
  "151384:OP:1": kaguyaSources,
  "151384:ED:1": kaguyaSources,
  "163256:OP:1": duelMastersSources,
  "163256:OP:2": duelMastersSources,
  "163256:OP:3": duelMastersSources,
  "163256:OP:4": duelMastersSources,
  "163256:ED:1": duelMastersSources,
  "163256:ED:2": duelMastersSources,
  "163256:ED:3": duelMastersSources,
  "163256:ED:4": duelMastersSources,
  "160173:OP:1": gunmachanSources,
  "160173:ED:1": gunmachanSources,
  "181863:OP:1": dendenSources,
  "181863:ED:1": dendenSources,
  "162717:ED:1": youtunyaSources
} satisfies CuratedThemeSourceOverrideMap;

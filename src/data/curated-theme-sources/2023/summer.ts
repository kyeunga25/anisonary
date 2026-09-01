import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

const summerAnisonCrossCheck = {
  label: "Anison Online：2023 夏季 OP／ED 分類交叉核對",
  url: "https://anison.online/season?season_id=3",
  language: "ja",
  role: "cross_check"
} as const;

const fallAnisonCrossCheck = {
  label: "Anison Online：2023 年下半年 OP／ED 分類交叉核對",
  url: "https://anison.online/season?season_id=4",
  language: "ja",
  role: "cross_check"
} as const;

const youjoShachouSources = [{
  label: "FABTONE 官方發行頁：OP／ED 曲名與演唱者",
  url: "https://www.fabtone.co.jp/release/737/",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const hyakushouKizokuSources = [{
  label: "TOKYO MX 動畫音樂頁：ED 曲名與演唱者",
  url: "https://s.mxtv.jp/anime/hyakusho_kizoku1/music.html",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const ikimonoSanSources = [{
  label: "東映動畫官方公告：ED 曲名、演唱者與影片用途",
  url: "https://prtimes.jp/main/html/rd/p/000000240.000059287.html",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const bakiSources = [{
  label: "動畫官方音樂頁：兩篇章 OP／ED 曲名與演唱者",
  url: "https://baki-anime.jp/3rd/hb/products/music-2/",
  language: "ja",
  role: "first_party"
}, fallAnisonCrossCheck] as const;

const odekakeKozameSources = [{
  label: "動畫官方音樂頁：ED 曲名與演唱者",
  url: "https://odekake-kozame.com/music/",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const kyoukaiSenkiSources = [{
  label: "動畫官方 STAFF & CAST 頁：OP／ED 曲名與演唱者",
  url: "https://www.kyoukai-senki.net/kyokko-no-souki/staff-cast/",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const gameraSources = [{
  label: "動畫官方音樂頁：OP／ED 曲名與演唱者",
  url: "https://gamera-rebirth.com/music/",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const bastardMainThemeSources = [{
  label: "動畫官方公告：OP／ED 曲名與演唱者",
  url: "https://bastard-anime.com/news/index01250000.html",
  language: "ja",
  role: "first_party"
}, summerAnisonCrossCheck] as const;

const flclGrungeSources = [{
  label: "the pillows 官方發行頁：作品主題歌曲名與演唱者",
  url: "https://pillows.jp/s/disco/beforegoingtobed/",
  language: "ja",
  role: "first_party"
}, {
  label: "FLCL: Grunge 公開條目：ED 用途交叉核對",
  url: "https://en.wikipedia.org/wiki/FLCL%3A_Grunge",
  language: "en",
  role: "cross_check"
}] as const;

export const curated2023SummerThemeSources = {
  "154789:OP:1": youjoShachouSources,
  "154789:ED:1": youjoShachouSources,
  "155971:ED:1": hyakushouKizokuSources,
  "169364:ED:1": ikimonoSanSources,
  "165356:OP:1": [{
    label: "動畫官方音樂頁：OP 曲名與演唱者",
    url: "https://ragnarok-official.com/2nd/music/op/",
    language: "ja",
    role: "first_party"
  }, fallAnisonCrossCheck],
  "165356:ED:1": [{
    label: "動畫官方音樂頁：ED 曲名與演唱者",
    url: "https://ragnarok-official.com/2nd/music/ed/",
    language: "ja",
    role: "first_party"
  }, fallAnisonCrossCheck],
  "146646:OP:1": bakiSources,
  "146646:ED:1": bakiSources,
  "146646:OP:2": bakiSources,
  "146646:ED:2": bakiSources,
  "165426:ED:1": odekakeKozameSources,
  "161647:OP:1": kyoukaiSenkiSources,
  "161647:ED:1": kyoukaiSenkiSources,
  "160831:OP:1": gameraSources,
  "160831:ED:1": gameraSources,
  "159926:OP:1": bastardMainThemeSources,
  "159926:ED:1": bastardMainThemeSources,
  "159926:ED:2": [{
    label: "Warner Music Japan 官方公告：歌曲名、演唱者與作品用途",
    url: "https://wmg.jp/tielle/news/88924",
    language: "ja",
    role: "first_party"
  }, {
    label: "AnimeThemes：第 12 話片尾使用方式交叉核對",
    url: "https://animethemes.moe/anime/bastard_ankoku_no_hakaishin_jigoku_no_chinkonka_hen",
    language: "en",
    role: "cross_check"
  }],
  "146472:ED:1": flclGrungeSources
} satisfies CuratedThemeSourceOverrideMap;

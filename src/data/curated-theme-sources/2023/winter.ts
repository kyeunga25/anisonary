import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

const gokushufudouSources = [{
  label: "新潮社官方公告：第二季 OP／ED 曲名與演唱者",
  url: "https://prtimes.jp/main/html/rd/p/000000836.000047877.html",
  language: "ja",
  role: "first_party"
}, {
  label: "TV Guide：第二季作品與主題曲交叉核對",
  url: "https://www.tvguide.or.jp/db/anime/gokushufudo/season2/",
  language: "ja",
  role: "cross_check"
}] as const;

const itouJunjiSources = [{
  label: "日本哥倫比亞官方商品頁：OP／ED 曲名與演唱者",
  url: "https://columbia.jp/prod-info/COCX-42172-3/",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：作品 OP／ED 用途交叉核對",
  url: "https://anison.online/anime/6",
  language: "ja",
  role: "cross_check"
}] as const;

const fateSources = [{
  label: "動畫官方公告：年末特別篇 ED 曲名與演唱者",
  url: "https://anime.fate-go.jp/news/?id=64935",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：作品 ED 用途交叉核對",
  url: "https://anison.online/anime/63",
  language: "ja",
  role: "cross_check"
}] as const;

const spaceIdolSources = [{
  label: "DMM TV 官方公告：作品 ED 與演唱組合",
  url: "https://prtimes.jp/main/html/rd/p/000004180.000002581.html",
  language: "ja",
  role: "first_party"
}, {
  label: "Anichoice：ED 曲名與用途交叉核對",
  url: "https://anichoice.com/dmmtv-news20230127/",
  language: "ja",
  role: "cross_check"
}] as const;

const kuromiSources = [{
  label: "Sanrio 官方作品頁：ED 曲名與演唱者",
  url: "https://kuromi.sanrio.co.jp/prettyjourney/",
  language: "ja",
  role: "first_party"
}, {
  label: "音樂 Natalie：ED 決定資訊交叉核對",
  url: "https://natalie.mu/music/news/512776",
  language: "ja",
  role: "cross_check"
}] as const;

const pokemonSources = [{
  label: "TV Tokyo 動畫官方網站：作品與音樂脈絡",
  url: "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：全六組 OP／ED 曲目與演唱者交叉核對",
  url: "https://anison.online/anime/68",
  language: "ja",
  role: "cross_check"
}] as const;

const precureSources = [{
  label: "東映動畫官方網站：作品與主題曲脈絡",
  url: "https://www.toei-anim.co.jp/tv/hirogaru-sky_precure/",
  language: "ja",
  role: "first_party"
}, {
  label: "Anison Online：全六組 OP／ED 曲目與演唱者交叉核對",
  url: "https://anison.online/anime/62",
  language: "ja",
  role: "cross_check"
}] as const;

export const curated2023WinterThemeSources = {
  "154982:OP:1": gokushufudouSources,
  "154982:ED:1": gokushufudouSources,
  "150653:OP:1": itouJunjiSources,
  "150653:ED:1": itouJunjiSources,
  "159569:ED:1": fateSources,
  "160830:ED:1": spaceIdolSources,
  "161632:ED:1": kuromiSources,
  "158870:OP:1": pokemonSources,
  "158870:ED:1": pokemonSources,
  "158870:ED:2": pokemonSources,
  "158870:ED:3": pokemonSources,
  "158870:ED:4": pokemonSources,
  "158870:ED:5": pokemonSources,
  "157883:OP:1": precureSources,
  "157883:ED:1": precureSources,
  "157883:ED:2": precureSources,
  "157883:ED:3": precureSources,
  "157883:ED:4": precureSources,
  "157883:ED:5": precureSources
} satisfies CuratedThemeSourceOverrideMap;

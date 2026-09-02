import { curated2019FallSeeds } from "@/data/curated-seeds/2019/fall";
import type {
  CuratedThemeSourceOverrideMap,
  CuratedThemeSourceSeed,
} from "@/data/curated-theme-sources/types";

const firstPartyThemeUrlById: Readonly<Partial<Record<number, string>>> = {
  100780: "https://gineiden-anime.com/",
  112036: "https://www.lantis.jp/title/cocotama2/news_1570172340.html",
  101239: "https://ahirunosora.jp/",
  105156: "https://shincho-yusha.jp/",
  107339: "https://hataage-kemonomichi.com/",
  108040: "https://anime-radiant.com/",
  110811: "https://nbcuni-music.com/urashimasakatasen/anime/",
  104115: "https://saikoro-club.com/",
  104159: "https://azurlane-anime.jp/",
  104464: "https://ore.ski/tv/",
  108268: "https://booklove-anime.jp/",
  108388: "https://choyoyu.com/",
  109089: "https://chubyou.net/",
  110788: "https://www.takaratomy.co.jp/products/anime-zoidswild-zero/",
  110789: "https://nullpeta.com/",
  103275: "https://anime.fate-go.jp/ep7-tv/",
  107346: "https://anime.granbluefantasy.jp/",
  107693: "https://www.nhk-character.com/chara/iruma/",
  109321: "https://val-love.com/",
  111082: "https://www.tv-tokyo.co.jp/anime/aikatsuonparade/",
  105246: "https://actorsmusic.jp/",
  108554: "https://www.tokunana.jp/",
  108891: "https://www.konooto-anime.jp/",
  110229: "https://boku-ben.com/",
  101227: "https://noukin-anime.com/",
  101349: "https://babylon-anime.com/",
  104158: "https://www.standmyheroes.tv/",
  108358: "https://pso2.jp/anime_eporacle/",
  109562: "https://www.fairygone.com/",
  110867: "https://afusara.com/",
  100246: "https://www.zxtcg.com/reunion/",
  110810: "https://kjganime.com/",
  108928: "https://3rd.7-taizai.net/",
  104722: "https://assassinspride-anime.com/",
  107660: "https://bst-anime.com/",
  109616: "https://mugen-immortal.com/",
  110786: "https://gundam-bd.net/",
  104052: "https://www.tbs.co.jp/anime/hoshiai/",
  108478: "https://nogunslife.com/",
  103638: "https://pipecat-kabukicho.jp/",
  104276: "https://heroaca.com/",
  107666: "https://cookingmaster-anime.jp/",
  109963: "https://shokugekinosoma.com/4thplate/",
  104679: "https://chidori-high-school.com/",
  108759: "https://sao-alicization.net/music/",
  111400: "https://tenkahyakken.jp/special/anime/",
  107993: "https://www.shinchan-app.jp/super-shiro/",
  101215: "https://www.ntv.co.jp/chihayafuru/",
  108307: "https://psycho-pass.com/3rd/",
  108581: "https://hi-score-girl.com/",
  111048: "https://kengan.net/music/",
  112153: "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
  108598: "https://levius.net/music/",
};

const crossCheckUrlById: Readonly<Partial<Record<number, string>>> = {
  101349: "https://anison.online/season?season_id=20",
  108759: "https://anison.online/season?season_id=20",
  108891: "https://anison.online/anime/1081",
  109616: "https://anison.online/season?season_id=20",
  111048:
    "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85",
};

function sourcesFor(
  seed: (typeof curated2019FallSeeds)[number],
): readonly CuratedThemeSourceSeed[] {
  const firstPartyUrl =
    firstPartyThemeUrlById[seed.anilistId] ?? seed.officialSiteUrl;
  const crossCheckUrl =
    crossCheckUrlById[seed.anilistId] ?? seed.animeThemesUrl;

  if (!firstPartyUrl || !crossCheckUrl) {
    throw new Error(`Missing reviewed theme source: ${seed.anilistId}`);
  }

  return [
    {
      label: `《${seed.titleZhHant}》第一方歌曲資料：OP／ED 用途與演唱者`,
      url: firstPartyUrl,
      language: firstPartyUrl.includes("youtube.com") ? "multi" : "ja",
      role: "first_party",
    },
    {
      label: "公開資料：OP／ED 用途、版本與演唱者交叉核對",
      url: crossCheckUrl,
      language: crossCheckUrl.includes("zh.wikipedia.org")
        ? "zh-Hant"
        : "multi",
      role: "cross_check",
    },
  ];
}

export const curated2019FallThemeSources = Object.fromEntries(
  curated2019FallSeeds.flatMap((seed) =>
    seed.themes.map((theme) => [
      `${seed.anilistId}:${theme.type}:${theme.sequence}`,
      sourcesFor(seed),
    ]),
  ),
) satisfies CuratedThemeSourceOverrideMap;

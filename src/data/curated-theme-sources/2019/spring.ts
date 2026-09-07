import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import type { CuratedThemeSourceOverrideMap, CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

const firstPartyUrlsByTheme: Readonly<Record<string, readonly string[]>> = {
  "101922:OP:1": [
    "https://kimetsu.com/anime/risshihen/music/",
    "https://kimetsu.com/anime/risshihen/news/?id=50473"
  ],
  "101922:ED:1": ["https://kimetsu.com/anime/risshihen/music/?page=ending"],
  "101922:ED:2": [
    "https://kimetsu.com/anime/risshihen/music/?page=sounyuuka",
    "https://kimetsu.com/anime/risshihen/story/?story=19"
  ],
  "97668:OP:1": [
    "https://onepunchman-anime.net/goods/cd/op2.php",
    "https://onepunchman-anime.net/news/archives/2279"
  ],
  "97668:ED:1": ["https://onepunchman-anime.net/goods/cd/ed2.php"],
  "105914:OP:1": ["https://senkosan.com/products/music.html"],
  "105914:ED:1": ["https://senkosan.com/products/music.html"],
  "103223:OP:1": [
    "https://bungo-stray-dogs.jp/goods/?mode=music",
    "https://bungo-stray-dogs.jp/news/?news=news-3rdseason-song-info"
  ],
  "103223:ED:1": [
    "https://bungo-stray-dogs.jp/goods/?mode=music",
    "https://bungo-stray-dogs.jp/news/?news=news-3rdseason-song-info"
  ]
};

export const curated2019SpringThemeSources: CuratedThemeSourceOverrideMap = Object.fromEntries(
  curated2019SpringSeeds.flatMap((seed) => seed.themes.map((theme) => {
    const key = `${seed.anilistId}:${theme.type}:${theme.sequence}`;
    const urls = firstPartyUrlsByTheme[key];
    if (!urls?.length || !seed.animeThemesUrl) {
      throw new Error(`Missing reviewed spring 2019 theme source: ${key}`);
    }
    const sources: CuratedThemeSourceSeed[] = [
      ...urls.map((url): CuratedThemeSourceSeed => ({
        label: "動畫官方：歌曲、發行日期與製作資料",
        url,
        language: "ja",
        role: "first_party"
      })),
      ...(key === "101922:ED:2" ? [{
        label: "ABEMA 播出機構：第 19 話插入歌兼片尾曲用途",
        url: "https://times.abema.tv/articles/-/8671435",
        language: "ja" as const,
        role: "first_party" as const
      }] : []),
      {
        label: "AnimeThemes：OP／ED 次序與演唱版本交叉核對",
        url: seed.animeThemesUrl,
        language: "en",
        role: "cross_check"
      }
    ];
    return [key, sources];
  }))
);

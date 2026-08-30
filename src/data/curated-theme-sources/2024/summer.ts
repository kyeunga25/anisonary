import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";

const towerOfGodReturnOfThePrince = [{
  label: "AnimeThemes：王子的歸還篇 OP／ED 對照",
  url: "https://animethemes.moe/anime/kami_no_tou_ouji_no_kikan",
  language: "en",
  role: "cross_check"
}] as const;

const towerOfGodWorkshopBattle = [{
  label: "AnimeThemes：工房戰篇 OP／ED 對照",
  url: "https://animethemes.moe/anime/kami_no_tou_koubou_sen",
  language: "en",
  role: "cross_check"
}] as const;

export const curated2024SummerThemeSources = {
  "153406:OP:1": towerOfGodReturnOfThePrince,
  "153406:ED:1": towerOfGodReturnOfThePrince,
  "153406:OP:2": towerOfGodWorkshopBattle,
  "153406:ED:2": towerOfGodWorkshopBattle
} satisfies CuratedThemeSourceOverrideMap;

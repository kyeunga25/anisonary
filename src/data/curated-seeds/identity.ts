import type { CuratedAnimeKey, CuratedCatalogueSeed, CuratedThemeSeed } from "@/data/curated-seeds/types";

const nativeIdPattern = /^catalog-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const sourceLanguages = new Set(["ja", "zh-Hant", "zh-Hans", "en", "multi"]);
export const curatedThemeKeyPattern = /^([1-9]\d*|catalog-[a-z0-9]+(?:-[a-z0-9]+)*):(OP|ED):([1-9]\d*)$/;

export function getCuratedAnimeKey(seed: CuratedCatalogueSeed): CuratedAnimeKey {
  if (typeof seed.id !== "string") throw new Error("Invalid independent catalogue ID");
  if (seed.id.startsWith("catalog-") && (seed.anilistId !== undefined || seed.anilistUrl !== undefined)) {
    throw new Error("Independent catalogue ID must not claim an AniList identity");
  }
  if (seed.anilistId !== undefined) {
    if (!Number.isSafeInteger(seed.anilistId) || seed.anilistId <= 0) throw new Error("Invalid AniList catalogue ID");
    return seed.anilistId;
  }
  if (seed.id.length > 160 || !nativeIdPattern.test(seed.id)) throw new Error("Invalid independent catalogue ID");
  if (seed.anilistUrl !== undefined) throw new Error("Independent catalogue ID must not claim an AniList identity");

  const evidence = seed.identifierSource;
  if (typeof evidence?.label !== "string" || !evidence.label.trim() || evidence.label.trim() !== evidence.label || !sourceLanguages.has(evidence.language)) {
    throw new Error("Independent catalogue identity requires source evidence");
  }
  let url: URL;
  try { url = new URL(evidence.url); } catch { throw new Error("Invalid independent identity source URL"); }
  if (url.protocol !== "https:" || url.username || url.password) throw new Error("Invalid independent identity source URL");

  const date = seed.verifiedAt;
  const timestamp = typeof date === "string" ? Date.parse(`${date}T00:00:00Z`) : NaN;
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== date) {
    throw new Error("Independent catalogue identity requires a valid review date");
  }
  return seed.id as NativeKey;
}

type NativeKey = Exclude<CuratedAnimeKey, number>;

export function getCuratedThemeKey(seed: CuratedCatalogueSeed, theme: Pick<CuratedThemeSeed, "type" | "sequence">): string {
  return `${getCuratedAnimeKey(seed)}:${theme.type}:${theme.sequence}`;
}

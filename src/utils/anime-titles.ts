interface AnimeTitles {
  titleJa: string;
  titleZhHant?: string | undefined;
  titleRomaji?: string | undefined;
}

export function getAnimeTitleAliases(anime: AnimeTitles) {
  const seen = new Set([anime.titleJa]);
  return (["titleZhHant", "titleRomaji"] as const).flatMap((kind) => {
    const value = anime[kind];
    if (!value || seen.has(value)) return [];
    seen.add(value);
    return [{ kind, value }];
  });
}

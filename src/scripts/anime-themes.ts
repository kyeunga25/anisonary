import { normalizeCatalogSearchText } from "@/utils/catalog-search";

for (const root of document.querySelectorAll<HTMLElement>("[data-anime-themes]")) {
  const cards = [...root.querySelectorAll<HTMLElement>(".theme-card")];
  const form = root.querySelector<HTMLFormElement>("[data-theme-filter]");
  const query = root.querySelector<HTMLInputElement>("[data-theme-query]");
  const type = root.querySelector<HTMLSelectElement>("[data-theme-type-filter]");
  const count = root.querySelector<HTMLElement>("[data-theme-filter-count]");
  const empty = root.querySelector<HTMLElement>("[data-theme-filter-empty]");
  const filter = () => {
    const tokens = normalizeCatalogSearchText(query?.value ?? "").split(" ").filter(Boolean);
    for (const card of cards) {
      card.hidden = Boolean(type && type.value !== "all" && card.dataset.themeType !== type.value)
        || tokens.some((token) => !card.dataset.themeSearch?.includes(token));
    }
    const visible = cards.filter((card) => !card.hidden).length;
    if (count) count.textContent = `顯示 ${visible}／${cards.length} 筆用途`;
    if (empty) empty.hidden = visible > 0;
  };
  if (form) {
    form.hidden = false;
    form.addEventListener("submit", (event) => { event.preventDefault(); filter(); });
    form.addEventListener("reset", () => {
      if (query) query.value = "";
      if (type) type.value = "all";
      filter();
    });
    query?.addEventListener("input", filter);
    type?.addEventListener("change", filter);
  }

  // Existing song, alias, recording, release and video links remain usable
  // even when their containing disclosure was initially closed or filtered.
  const revealHash = () => {
    let id: string;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = id ? document.getElementById(id) : null;
    const card = target?.closest<HTMLElement>(".theme-card");
    if (!target || !card || !root.contains(card)) return;
    if (card.hidden) { form?.reset(); filter(); }
    const detail = card.querySelector<HTMLDetailsElement>(".theme-card__details");
    if (detail) detail.open = true;
    for (let ancestor = target.parentElement; ancestor && ancestor !== root; ancestor = ancestor.parentElement) {
      if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
    }
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  };
  window.addEventListener("hashchange", revealHash);
  revealHash();
}

import { normalizeCatalogSearchText } from "@/utils/catalog-search";

for (const root of document.querySelectorAll<HTMLElement>("[data-anime-wall]")) {
  const form = root.querySelector<HTMLFormElement>("[data-anime-wall-filter]");
  if (!form) continue;
  const query = form.querySelector<HTMLInputElement>("[data-anime-wall-query]")!;
  const weekday = form.querySelector<HTMLSelectElement>("[data-anime-wall-weekday]")!;
  const category = form.querySelector<HTMLSelectElement>("[data-anime-wall-category]")!;
  const cards = [...root.querySelectorAll<HTMLElement>("[data-anime-card]")];
  const groups = [...root.querySelectorAll<HTMLElement>("[data-anime-group]")];
  const links = [...root.querySelectorAll<HTMLAnchorElement>("[data-anime-group-link]")];
  const count = root.querySelector<HTMLElement>("[data-anime-wall-count]")!;
  const empty = root.querySelector<HTMLElement>("[data-anime-wall-empty]")!;
  const refine = form.querySelector<HTMLDetailsElement>("[data-anime-wall-refine]")!;
  const mobile = matchMedia("(max-width: 540px)");
  refine.open = !mobile.matches;
  mobile.addEventListener("change", (event) => { refine.open = !event.matches; });
  const filter = () => {
    const tokens = normalizeCatalogSearchText(query.value).split(" ").filter(Boolean);
    for (const card of cards) {
      card.hidden = tokens.some((token) => !card.dataset.animeSearch?.includes(token))
        || (weekday.value !== "all" && card.dataset.animeWeekday !== weekday.value)
        || (category.value !== "all" && card.dataset.animeCategory !== category.value);
    }
    for (const group of groups) {
      const visible = group.querySelectorAll("[data-anime-card]:not([hidden])").length;
      group.hidden = visible === 0;
      group.querySelector<HTMLElement>("[data-anime-group-count]")!.textContent = `${visible} 套動畫`;
      const link = links.find((item) => item.dataset.animeGroupLink === group.dataset.animeGroup);
      if (link) link.hidden = group.hidden;
    }
    const visible = cards.filter((card) => !card.hidden).length;
    count.textContent = `顯示 ${visible}／${cards.length} 套動畫`;
    empty.hidden = visible > 0;
  };
  form.addEventListener("submit", (event) => { event.preventDefault(); filter(); });
  form.addEventListener("reset", () => {
    query.value = "";
    weekday.value = "all";
    category.value = "all";
    filter();
  });
  query.addEventListener("input", filter);
  weekday.addEventListener("change", filter);
  category.addEventListener("change", filter);
  form.hidden = false;
}

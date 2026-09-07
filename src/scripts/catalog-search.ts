import { SEARCH_PAGE_SIZE, searchCatalog, type CatalogSearchIndex, type CatalogSearchOptions } from "@/utils/catalog-search-index";
import { getAnimeTitleAliases } from "@/utils/anime-titles";

const root = document.querySelector<HTMLElement>("[data-catalog-search]");
if (root) {
  const indexElement = root.querySelector<HTMLScriptElement>("[data-search-index]");
  const form = root.querySelector<HTMLFormElement>("[data-catalog-search-form]");
  const input = root.querySelector<HTMLInputElement>("[data-catalog-search-input]");
  const results = root.querySelector<HTMLElement>("#catalog-search-results");
  const clear = root.querySelector<HTMLButtonElement>("[data-catalog-search-clear]");
  const year = root.querySelector<HTMLSelectElement>("#catalog-year");
  const quarter = root.querySelector<HTMLSelectElement>("#catalog-quarter");
  const scope = root.querySelector<HTMLSelectElement>("#catalog-scope");
  const type = root.querySelector<HTMLSelectElement>("#catalog-type");
  const previous = root.querySelector<HTMLButtonElement>("[data-search-previous]");
  const next = root.querySelector<HTMLButtonElement>("[data-search-next]");
  const pagination = root.querySelector<HTMLElement>("[data-search-pagination]");
  const pageStatus = root.querySelector<HTMLElement>("[data-search-page]");
  const animeCount = root.querySelector<HTMLElement>("[data-catalog-anime-count]");
  const themeCount = root.querySelector<HTMLElement>("[data-catalog-theme-count]");
  const empty = root.querySelector<HTMLElement>("[data-catalog-search-empty]");

  if (indexElement && form && input && results && year && quarter && scope && type) {
    const index = JSON.parse(indexElement.textContent ?? "[]") as CatalogSearchIndex;
    let currentPage = 1;
    let matches: ReturnType<typeof searchCatalog> = [];
    let timer: ReturnType<typeof setTimeout> | undefined;

    const element = <K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string) => {
      const node = document.createElement(tag);
      node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    };
    const link = (className: string, text: string, href: string) => {
      const node = element("a", className, text);
      node.href = href;
      return node;
    };

    const renderPage = (moveFocus = false) => {
      const fragment = document.createDocumentFragment();
      matches.slice((currentPage - 1) * SEARCH_PAGE_SIZE, currentPage * SEARCH_PAGE_SIZE).forEach(({ anime, themes, season }) => {
        const article = element("article", "catalog-result");
        article.dataset.catalogResult = "";
        const heading = element("div", "catalog-result__heading");
        const identity = element("div", "catalog-result__identity");
        identity.append(link("catalog-result__season", `${season.year} ${season.titleZhHant}`, `/seasons/${season.id}/`));
        const title = element("h2", "");
        const animeLink = link("", anime.titleJa, `/anime/${encodeURIComponent(anime.slug)}/`);
        animeLink.lang = "ja";
        title.append(animeLink);
        identity.append(title);
        const secondaryTitle = getAnimeTitleAliases(anime)[0]?.value;
        if (secondaryTitle) identity.append(element("p", "", secondaryTitle));
        heading.append(identity, link("catalog-result__open", "查看詳情", `/anime/${encodeURIComponent(anime.slug)}/`));
        article.append(heading);
        if (themes.length) {
          const list = element("ol", "theme-index");
          list.setAttribute("aria-label", `${anime.titleJa} 主題曲`);
          themes.forEach((theme) => {
            const row = element("li", "");
            row.dataset.themeResult = "";
            const titleLink = link("theme-index__title", theme.titleJa, `/anime/${encodeURIComponent(anime.slug)}/#theme-${encodeURIComponent(theme.id)}`);
            titleLink.lang = "ja";
            row.append(element("span", "theme-index__type", `${theme.type}${theme.sequence}`), titleLink, element("span", "theme-index__artist", theme.artistDisplayName));
            if (theme.credits) row.append(element("small", "theme-index__credits", theme.credits));
            list.append(row);
          });
          article.append(list);
        } else {
          article.append(element("p", "catalog-result__pending", anime.availability === "not_used" ? "本作經核對不設獨立 OP／ED。" : "主題曲資料尚待補充，請到作品頁查看來源。"));
        }
        fragment.append(article);
      });
      results.replaceChildren(fragment);
      const pages = Math.max(1, Math.ceil(matches.length / SEARCH_PAGE_SIZE));
      if (previous) previous.disabled = currentPage === 1;
      if (next) next.disabled = currentPage >= pages;
      if (pagination) pagination.hidden = matches.length === 0;
      if (pageStatus) pageStatus.textContent = `第 ${currentPage}／${pages} 頁 · 每頁最多 ${SEARCH_PAGE_SIZE} 套`;
      if (moveFocus) {
        results.focus({ preventScroll: true });
        results.scrollIntoView({ block: "start" });
      }
    };

    const applySearch = () => {
      clearTimeout(timer);
      const options: CatalogSearchOptions = {
        query: input.value,
        scope: scope.value as CatalogSearchOptions["scope"],
        year: year.value,
        quarter: quarter.value,
        type: type.value as CatalogSearchOptions["type"]
      };
      matches = searchCatalog(index, options);
      currentPage = 1;
      if (animeCount) animeCount.textContent = String(matches.length);
      if (themeCount) themeCount.textContent = String(matches.reduce((count, match) => count + match.themes.length, 0));
      if (empty) empty.hidden = matches.length !== 0;
      if (clear) clear.disabled = !input.value && !year.value && !quarter.value && scope.value === "all" && type.value === "all";
      renderPage();
    };
    form.addEventListener("submit", (event) => { event.preventDefault(); applySearch(); });
    input.addEventListener("input", (event) => {
      clearTimeout(timer);
      if (!(event as InputEvent).isComposing) timer = setTimeout(applySearch, 120);
    });
    input.addEventListener("compositionend", () => { clearTimeout(timer); timer = setTimeout(applySearch, 120); });
    [year, quarter, scope, type].forEach((select) => select.addEventListener("change", applySearch));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && input.value) { input.value = ""; applySearch(); }
    });
    clear?.addEventListener("click", () => { form.reset(); applySearch(); input.focus(); });
    previous?.addEventListener("click", () => { if (currentPage > 1) { currentPage -= 1; renderPage(true); } });
    next?.addEventListener("click", () => { if (currentPage * SEARCH_PAGE_SIZE < matches.length) { currentPage += 1; renderPage(true); } });
    applySearch();
    root.dataset.searchReady = "true";
  }
}

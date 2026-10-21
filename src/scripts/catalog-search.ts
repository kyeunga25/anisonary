import { getPlaylistRows, PLAYLIST_PAGE_SIZE, playlistRowHref, playlistSeasonLabel, type PlaylistOptions, type PlaylistRow } from "@/utils/song-playlist";
import { createCatalogIndexLoader } from "@/scripts/catalog-index-loader";
import { themeTypeLabel } from "@/utils/theme";

for (const root of document.querySelectorAll<HTMLElement>("[data-catalog-search]")) {
  const indexElement = root.querySelector<HTMLScriptElement>("[data-search-manifest]");
  const form = root.querySelector<HTMLFormElement>("[data-catalog-search-form]");
  const input = root.querySelector<HTMLInputElement>("[data-catalog-search-input]");
  const results = root.querySelector<HTMLOListElement>("#catalog-search-results");
  const clear = root.querySelector<HTMLButtonElement>("[data-catalog-search-clear]");
  const year = root.querySelector<HTMLSelectElement>("#catalog-year");
  const quarter = root.querySelector<HTMLSelectElement>("#catalog-quarter");
  const scope = root.querySelector<HTMLSelectElement>("#catalog-scope");
  const sort = root.querySelector<HTMLSelectElement>("#catalog-sort");
  const weekday = root.querySelector<HTMLSelectElement>("#catalog-weekday");
  const video = root.querySelector<HTMLInputElement>("[data-filter-video]");
  const previous = root.querySelector<HTMLButtonElement>("[data-search-previous]");
  const next = root.querySelector<HTMLButtonElement>("[data-search-next]");
  const pagination = root.querySelector<HTMLElement>("[data-search-pagination]");
  const pageStatus = root.querySelector<HTMLElement>("[data-search-page]");
  const animeCount = root.querySelector<HTMLElement>("[data-catalog-anime-count]");
  const themeCount = root.querySelector<HTMLElement>("[data-catalog-theme-count]");
  const empty = root.querySelector<HTMLElement>("[data-catalog-search-empty]");
  const details = root.querySelector<HTMLDetailsElement>(".playlist-filters");
  const tabs = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-playlist-season]"));
  const seasonLink = root.querySelector<HTMLAnchorElement>("[data-playlist-season-link]");
  const loadState = root.querySelector<HTMLElement>("[data-search-load-state]");
  const loadMessage = root.querySelector<HTMLElement>("[data-search-load-message]");
  const retry = root.querySelector<HTMLButtonElement>("[data-search-retry]");
  const fallback = root.querySelector<HTMLAnchorElement>("[data-search-fallback]");
  if (!indexElement || !form || !input || !results || !sort) continue;

  let loader: ReturnType<typeof createCatalogIndexLoader>;
  try { loader = createCatalogIndexLoader(indexElement.textContent ?? ""); }
  catch {
    if (loadState) loadState.hidden = false;
    if (loadMessage) loadMessage.textContent = "搜尋資料暫時無法使用，請按季度瀏覽。";
    if (fallback) fallback.hidden = false;
    continue;
  }
  const initialRows = Array.from(results.children);
  const initialTotal = Number(root.dataset.initialTotal ?? initialRows.length);
  const initialThemeCount = themeCount?.textContent ?? "0";
  const initialAnimeCount = animeCount?.textContent ?? "0";
  const initialYear = root.dataset.initialYear ?? "";
  const initialQuarter = root.dataset.initialQuarter ?? "";
  let selectedYear = initialYear;
  let selectedQuarter = initialQuarter;
  let currentPage = 1;
  let matches: PlaylistRow[] = [];
  let hasApplied = false;
  let revision = 0;
  let requestedPage = 1;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const mobile = window.matchMedia("(max-width: 600px)");
  if (details) {
    details.open = !mobile.matches;
    mobile.addEventListener("change", () => { details.open = !mobile.matches; });
  }

  const element = <K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string) => {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const renderRow = (row: PlaylistRow, number: number) => {
    const { anime, theme } = row;
    const item = element("li", "song-list__item");
    item.dataset.catalogResult = "";
    if (theme) item.dataset.themeResult = "";
    const link = element("a", "song-row");
    link.href = playlistRowHref(row, root.dataset.playlistMode === "search");
    const count = element("span", "song-row__number", String(number).padStart(2, "0"));
    count.setAttribute("aria-hidden", "true");
    const title = element("span", "song-row__song");
    const song = element("strong", "", theme?.titleJa ?? (anime.availability === "not_used" ? "本作不設獨立 OP／ED" : "主題曲資料待補充"));
    song.lang = "ja";
    title.append(song);
    const identity = element("span", "song-row__anime");
    identity.append(element("strong", "", anime.titleZhHant ?? anime.titleJa));
    if (anime.titleZhHant) {
      const alias = element("small", "", anime.titleJa);
      alias.lang = "ja";
      identity.append(alias);
    }
    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrow.setAttribute("class", "song-row__arrow");
    arrow.setAttribute("viewBox", "0 0 24 24");
    arrow.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m9 5 7 7-7 7");
    arrow.append(path);
    link.append(count, title, element("span", "song-row__artist", theme?.artistDisplayName ?? "查看作品與核對來源"), identity,
      element("span", `song-row__type${theme?.type === "OP" ? " song-row__type--op" : ""}`, theme ? themeTypeLabel(theme) : "—"),
      element("span", "song-row__season", playlistSeasonLabel(row)), arrow);
    item.append(link);
    return item;
  };
  const renderPage = (moveFocus = false) => {
    const fragment = document.createDocumentFragment();
    const offset = (currentPage - 1) * PLAYLIST_PAGE_SIZE;
    matches.slice(offset, offset + PLAYLIST_PAGE_SIZE).forEach((row, i) => fragment.append(renderRow(row, offset + i + 1)));
    results.replaceChildren(fragment);
    const pages = Math.max(1, Math.ceil(matches.length / PLAYLIST_PAGE_SIZE));
    if (previous) previous.disabled = currentPage === 1;
    if (next) next.disabled = currentPage >= pages;
    if (pagination) pagination.hidden = matches.length <= PLAYLIST_PAGE_SIZE;
    if (pageStatus) pageStatus.textContent = `第 ${currentPage}／${pages} 頁 · 每頁 ${PLAYLIST_PAGE_SIZE} 列`;
    if (moveFocus) {
      results.focus({ preventScroll: true });
      results.scrollIntoView({ block: "start" });
    }
  };
  const setLoadState = (state: "ready" | "loading" | "error") => {
    root.dataset.searchState = state;
    results.setAttribute("aria-busy", String(state === "loading"));
    if (loadState) loadState.hidden = state === "ready";
    if (loadMessage) loadMessage.textContent = state === "loading" ? "正在載入搜尋資料…" : "搜尋資料暫時無法取得。已顯示的歌曲仍可開啟，亦可重試或按季度瀏覽。";
    if (retry) retry.hidden = state !== "error";
    if (fallback) fallback.hidden = state !== "error";
    if (state === "loading") {
      if (previous) previous.disabled = true;
      if (next) next.disabled = true;
    }
  };
  const restoreInitial = () => {
    revision += 1;
    hasApplied = false;
    currentPage = 1;
    results.replaceChildren(...initialRows.slice(0, PLAYLIST_PAGE_SIZE).map((row) => row.cloneNode(true)));
    if (animeCount) animeCount.textContent = initialAnimeCount;
    if (themeCount) themeCount.textContent = initialThemeCount;
    if (empty) empty.hidden = initialTotal !== 0;
    if (previous) previous.disabled = true;
    if (next) next.disabled = initialTotal <= PLAYLIST_PAGE_SIZE;
    if (pagination) pagination.hidden = initialTotal <= PLAYLIST_PAGE_SIZE;
    if (pageStatus) pageStatus.textContent = `第 1／${Math.max(1, Math.ceil(initialTotal / PLAYLIST_PAGE_SIZE))} 頁 · 每頁 ${PLAYLIST_PAGE_SIZE} 列`;
    if (clear) clear.disabled = true;
    setLoadState("ready");
  };
  const applySearch = async (targetPage = 1, moveFocus = false) => {
    clearTimeout(timer);
    const currentRevision = ++revision;
    requestedPage = targetPage;
    const type = form.querySelector<HTMLInputElement>('input[name="type"]:checked')?.value ?? "all";
    const options: PlaylistOptions = {
      query: input.value, scope: (scope?.value ?? "all") as PlaylistOptions["scope"],
      year: year?.value ?? selectedYear, quarter: quarter?.value ?? selectedQuarter,
      type: type as PlaylistOptions["type"], sort: sort.value as PlaylistOptions["sort"],
      weekday: weekday?.value ?? "", videoOnly: video?.checked ?? false, includeEmpty: root.dataset.playlistMode === "search"
    };
    const initial = !options.query && options.year === initialYear && options.quarter === initialQuarter
      && options.scope === "all" && options.type === "all" && !options.videoOnly && !options.weekday && options.sort === root.dataset.initialSort;
    if (initial && targetPage === 1) { restoreInitial(); return; }
    if (clear) clear.disabled = false;
    setLoadState("loading");
    let index;
    try { index = await loader.load(options.year, options.quarter, options.query); }
    catch {
      if (currentRevision === revision) setLoadState("error");
      return;
    }
    if (currentRevision !== revision) return;
    matches = getPlaylistRows(index, options);
    hasApplied = true;
    currentPage = Math.min(targetPage, Math.max(1, Math.ceil(matches.length / PLAYLIST_PAGE_SIZE)));
    if (animeCount) animeCount.textContent = String(new Set(matches.map((row) => row.anime.slug)).size);
    if (themeCount) themeCount.textContent = String(matches.filter((row) => row.theme).length);
    if (empty) empty.hidden = matches.length !== 0;
    if (clear) clear.disabled = !input.value && options.year === initialYear && options.quarter === initialQuarter
      && options.scope === "all" && options.type === "all" && !options.videoOnly && !options.weekday && options.sort === root.dataset.initialSort;
    renderPage(moveFocus);
    setLoadState("ready");
  };
  form.addEventListener("submit", (event) => { event.preventDefault(); void applySearch(); });
  input.addEventListener("input", (event) => {
    clearTimeout(timer);
    revision += 1;
    if (!(event as InputEvent).isComposing) timer = setTimeout(() => void applySearch(), 120);
  });
  input.addEventListener("compositionend", () => { clearTimeout(timer); timer = setTimeout(() => void applySearch(), 120); });
  [year, quarter, scope, sort, weekday, video, ...form.querySelectorAll<HTMLInputElement>('input[name="type"]')].forEach((control) => control?.addEventListener("change", () => void applySearch()));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && input.value) { input.value = ""; void applySearch(); }
  });
  const selectSeason = (selected: HTMLAnchorElement | undefined) => {
    tabs.forEach((tab) => {
      if (tab === selected) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
    if (seasonLink && selected) seasonLink.href = selected.href;
  };
  tabs.forEach((tab) => tab.addEventListener("click", (event) => {
    event.preventDefault();
    selectedYear = tab.dataset.year ?? "";
    selectedQuarter = tab.dataset.quarter ?? "";
    selectSeason(tab);
    void applySearch();
  }));
  clear?.addEventListener("click", () => {
    form.reset(); selectedYear = initialYear; selectedQuarter = initialQuarter;
    selectSeason(tabs.find((tab) => tab.dataset.year === initialYear && tab.dataset.quarter === initialQuarter));
    clearTimeout(timer); restoreInitial(); input.focus();
  });
  previous?.addEventListener("click", () => { if (hasApplied && currentPage > 1) { currentPage -= 1; renderPage(true); } });
  next?.addEventListener("click", () => {
    if (!hasApplied) { void applySearch(2, true); }
    else if (currentPage * PLAYLIST_PAGE_SIZE < matches.length) { currentPage += 1; renderPage(true); }
  });
  retry?.addEventListener("click", () => void applySearch(requestedPage));
  restoreInitial();
  root.dataset.searchReady = "true";
}

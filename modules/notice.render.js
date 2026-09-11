export function renderNotices(items) {
    const container = document.getElementById("church-notices");
    if (!container) return;

    container.innerHTML = items.map((item) => `
    <article class="bg-white p-4 md:p-5 rounded-xl border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-amber-400 transition shadow-sm">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">${item.category}</span>
          <span class="text-xs text-stone-400">${item.date}</span>
        </div>
        <h3 class="text-sm md:text-base font-semibold text-stone-800">${item.title}</h3>
        <p class="text-xs text-stone-600">${item.summary}</p>
      </div>
      <button type="button" class="self-start md:self-center text-xs font-semibold text-amber-800 hover:text-amber-900 whitespace-nowrap">
        Xem chi tiết →
      </button>
    </article>
  `).join("");
}
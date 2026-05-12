(function () {
	const root = document.getElementById('video-listing-root');
	const searchWrap = document.querySelector('.video-search[data-search-json]');
	const searchInput = document.getElementById('video-search-input');
	const searchClear = document.getElementById('video-search-clear');
	const searchMeta = document.getElementById('video-search-meta');
	const resultsEl = document.getElementById('video-search-results');

	const lang = (document.documentElement.lang || '').toLowerCase();
	const isEn = lang === 'en' || lang.startsWith('en');

	const jsonPath = searchWrap?.dataset.searchJson;
	const listHome = searchWrap?.dataset.listHome || '/videos/';

	let cache = null;

	function escapeHtml(s) {
		return String(s)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	async function loadData() {
		if (cache) return cache;
		if (!jsonPath) return [];
		let res = await fetch(jsonPath, { credentials: 'same-origin' });
		if (!res.ok) {
			const withSlash = jsonPath.endsWith('/') ? jsonPath : `${jsonPath}/`;
			res = await fetch(withSlash, { credentials: 'same-origin' });
		}
		if (!res.ok) return [];
		cache = await res.json();
		return cache;
	}

	function renderResults(matches) {
		if (!resultsEl) return;
		if (!matches.length) {
			resultsEl.innerHTML = isEn
				? `<p class="video-search-empty"><a href="${listHome}">Browse all videos</a></p>`
				: `<p class="video-search-empty"><a href="${listHome}">查看全部视频</a></p>`;
			resultsEl.hidden = false;
			return;
		}
		const cards = matches.slice(0, 40).map((m) => {
			const href = m.url || listHome;
			const thumb = `https://img.youtube.com/vi/${encodeURIComponent(m.youtubeId)}/mqdefault.jpg`;
			return `<a class="video-search-card" href="${href}">
<div class="video-search-card__thumb">
<img src="${thumb}" alt="" loading="lazy" width="320" height="180" />
<span class="video-search-card__play" aria-hidden="true">▶</span>
</div>
<div class="video-search-card__body">
<span class="video-search-card__topic">${escapeHtml(m.topic)}</span>
<span class="video-search-card__title">${escapeHtml(m.title)}</span>
</div>
</a>`;
		});
		resultsEl.innerHTML = `<div class="video-search-results-grid">${cards.join('')}</div>`;
		resultsEl.hidden = false;
	}

	async function applySearch() {
		const q = String(searchInput?.value ?? '').trim().toLowerCase();
		if (!q) {
			root?.classList.remove('video-listing--searching');
			if (resultsEl) {
				resultsEl.innerHTML = '';
				resultsEl.hidden = true;
			}
			if (searchMeta) searchMeta.textContent = '';
			return;
		}
		root?.classList.add('video-listing--searching');
		const data = await loadData();
		const matches = Array.isArray(data) ? data.filter((row) => (row.searchText || '').includes(q)) : [];
		if (searchMeta) {
			searchMeta.textContent = isEn
				? `Searching “${q}”: ${matches.length} matching video${matches.length === 1 ? '' : 's'} (site-wide)`
				: `搜索“${q}”：全站共 ${matches.length} 个相关视频`;
		}
		renderResults(matches);
	}

	if (searchInput && searchClear) {
		searchInput.addEventListener('input', () => {
			void applySearch();
		});
		searchClear.addEventListener('click', () => {
			searchInput.value = '';
			void applySearch();
			searchInput.focus();
		});
	}
})();

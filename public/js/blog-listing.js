(function () {
	const root = document.getElementById('blog-listing-root');
	const searchWrap = document.querySelector('.blog-search[data-search-json]');
	const searchInput = document.getElementById('blog-search-input');
	const searchClear = document.getElementById('blog-search-clear');
	const searchMeta = document.getElementById('blog-search-meta');
	const resultsEl = document.getElementById('blog-search-results');

	const lang = (document.documentElement.lang || '').toLowerCase();
	const isEn = lang === 'en' || lang.startsWith('en');

	const jsonPath = searchWrap?.dataset.searchJson;
	const listHome = searchWrap?.dataset.listHome || '/blog/';

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
				? `<p class="blog-search-empty"><a href="${listHome}">Browse all articles</a></p>`
				: `<p class="blog-search-empty"><a href="${listHome}">查看全部博客文章</a></p>`;
			resultsEl.hidden = false;
			return;
		}
		const lis = matches
			.slice(0, 40)
			.map((m) => {
				const href = m.url || listHome;
				return `<li><a href="${href}">${escapeHtml(m.title)}</a></li>`;
			})
			.join('');
		resultsEl.innerHTML = `<ul>${lis}</ul>`;
		resultsEl.hidden = false;
	}

	async function applySearch() {
		const q = String(searchInput?.value ?? '').trim().toLowerCase();
		if (!q) {
			root?.classList.remove('blog-listing--searching');
			if (resultsEl) {
				resultsEl.innerHTML = '';
				resultsEl.hidden = true;
			}
			if (searchMeta) searchMeta.textContent = '';
			return;
		}
		root?.classList.add('blog-listing--searching');
		const data = await loadData();
		const matches = Array.isArray(data) ? data.filter((row) => (row.searchText || '').includes(q)) : [];
		if (searchMeta) {
			searchMeta.textContent = isEn
				? `Searching “${q}”: ${matches.length} match${matches.length === 1 ? '' : 'es'} (site-wide)`
				: `搜索“${q}”：全站共 ${matches.length} 篇匹配`;
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

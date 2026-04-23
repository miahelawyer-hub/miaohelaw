(function () {
	const root = document.getElementById('faq-listing-root');
	const searchWrap = document.querySelector('.faq-search[data-search-json]');
	const searchInput = document.getElementById('faq-search-input');
	const clearBtn = document.getElementById('faq-search-clear');
	const meta = document.getElementById('faq-search-meta');
	const resultsEl = document.getElementById('faq-search-results');

	const lang = (document.documentElement.lang || '').toLowerCase();
	const isEn = lang === 'en' || lang.startsWith('en');

	const jsonPath = searchWrap?.dataset.searchJson;
	const listHome = searchWrap?.dataset.listHome || '/faq/';

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
				? `<p class="faq-search-empty"><a href="${listHome}">Browse all questions</a></p>`
				: `<p class="faq-search-empty"><a href="${listHome}">查看全部常见问题</a></p>`;
			resultsEl.hidden = false;
			return;
		}
		const lis = matches
			.slice(0, 40)
			.map((m) => {
				const href = m.url || listHome;
				return `<li><a href="${href}" class="faq-link"><span>${escapeHtml(m.question)}</span><span class="faq-arrow">→</span></a></li>`;
			})
			.join('');
		resultsEl.innerHTML = `<ul>${lis}</ul>`;
		resultsEl.hidden = false;
	}

	async function filterItems(rawQuery) {
		const q = String(rawQuery || '').trim().toLowerCase();
		if (!q) {
			root?.classList.remove('faq-listing--searching');
			if (resultsEl) {
				resultsEl.innerHTML = '';
				resultsEl.hidden = true;
			}
			if (meta) meta.textContent = '';
			return;
		}
		root?.classList.add('faq-listing--searching');
		const data = await loadData();
		const matches = Array.isArray(data) ? data.filter((row) => (row.searchText || '').includes(q)) : [];
		if (meta) {
			meta.textContent = isEn
				? `${matches.length} match${matches.length === 1 ? '' : 'es'} (site-wide)`
				: `全站共 ${matches.length} 个相关问题`;
		}
		renderResults(matches);
	}

	if (searchInput) {
		searchInput.addEventListener('input', (e) => {
			void filterItems(e.target.value);
		});
	}
	if (clearBtn) {
		clearBtn.addEventListener('click', () => {
			if (searchInput) searchInput.value = '';
			void filterItems('');
			searchInput?.focus();
		});
	}
})();

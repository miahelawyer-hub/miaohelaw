(function () {
	const grid = document.getElementById('post-grid');
	const btn = document.getElementById('load-more-btn');
	const featured = document.querySelector('.featured-card');

	const searchInput = document.getElementById('blog-search-input');
	const searchClear = document.getElementById('blog-search-clear');
	const searchMeta = document.getElementById('blog-search-meta');

	const lang = (document.documentElement.lang || '').toLowerCase();
	const isEn = lang === 'en' || lang.startsWith('en');

	const allCards = () => [
		...(featured ? [featured] : []),
		...(grid ? Array.from(grid.querySelectorAll('.card')) : []),
	];

	const resetLoadMore = () => {
		if (!grid) return;
		const cards = Array.from(grid.querySelectorAll('.card'));
		cards.forEach((card, idx) => {
			if (idx >= 6) card.classList.add('hidden');
			else card.classList.remove('hidden');
		});
		if (btn) btn.style.display = cards.length > 6 ? '' : 'none';
	};

	const applySearch = () => {
		const q = String(searchInput?.value ?? '').trim().toLowerCase();
		const cards = allCards();

		if (!q) {
			cards.forEach((card) => (card.style.display = ''));
			if (searchMeta) searchMeta.textContent = '';
			resetLoadMore();
			return;
		}

		let shown = 0;
		cards.forEach((card) => {
			const hay = (card.getAttribute('data-search') || '').toLowerCase();
			const ok = hay.includes(q);
			card.style.display = ok ? '' : 'none';
			if (ok) {
				shown += 1;
				card.classList.remove('hidden');
			}
		});
		if (btn) btn.style.display = 'none';
		if (searchMeta) {
			searchMeta.textContent = isEn
				? `Searching “${q}”: ${shown} match${shown === 1 ? '' : 'es'}`
				: `搜索“${q}”：匹配 ${shown} 篇文章`;
		}
	};

	if (searchInput && searchClear) {
		searchInput.addEventListener('input', applySearch);
		searchClear.addEventListener('click', () => {
			searchInput.value = '';
			applySearch();
			searchInput.focus();
		});
	}

	if (btn && grid) {
		const getHidden = () => Array.from(grid.querySelectorAll('.card.hidden'));

		if (getHidden().length === 0) btn.style.display = 'none';

		btn.addEventListener('click', () => {
			const q = String(searchInput?.value ?? '').trim();
			if (q) return;
			getHidden().slice(0, 6).forEach((card) => card.classList.remove('hidden'));
			if (getHidden().length === 0) btn.style.display = 'none';
		});
	}
})();

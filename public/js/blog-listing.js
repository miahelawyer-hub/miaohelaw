(function () {
	const grid = document.getElementById('post-grid');
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

	/** Clear search UI: all cards visible again (listing is fully static in HTML for crawlers). */
	const resetSearchDisplay = () => {
		const cards = allCards();
		cards.forEach((card) => {
			card.style.display = '';
			card.classList.remove('hidden');
		});
	};

	const applySearch = () => {
		const q = String(searchInput?.value ?? '').trim().toLowerCase();
		const cards = allCards();

		if (!q) {
			resetSearchDisplay();
			if (searchMeta) searchMeta.textContent = '';
			return;
		}

		let shown = 0;
		cards.forEach((card) => {
			const hay = (card.getAttribute('data-search') || '').toLowerCase();
			const ok = hay.includes(q);
			card.style.display = ok ? '' : 'none';
			if (ok) shown += 1;
		});
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
})();

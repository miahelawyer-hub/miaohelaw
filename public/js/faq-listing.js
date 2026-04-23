(function () {
	const searchInput = document.getElementById('faq-search-input');
	const clearBtn = document.getElementById('faq-search-clear');
	const meta = document.getElementById('faq-search-meta');

	const items = Array.from(document.querySelectorAll('.faq-item'));

	const lang = (document.documentElement.lang || '').toLowerCase();
	const isEn = lang === 'en' || lang.startsWith('en');

	/** All FAQ links are in static HTML for crawlers; search only toggles visibility. */
	const filterItems = (rawQuery) => {
		const q = (rawQuery || '').trim().toLowerCase();
		if (!q) {
			items.forEach((el) => {
				el.classList.remove('faq-filter-hidden');
				el.classList.remove('faq-hidden');
			});
			if (meta) meta.textContent = '';
			return;
		}

		let matches = 0;
		items.forEach((el) => {
			const hay = el.getAttribute('data-search') || '';
			const ok = hay.includes(q);
			el.classList.toggle('faq-filter-hidden', !ok);
			if (ok) matches += 1;
		});
		if (meta) {
			meta.textContent = isEn
				? `${matches} match${matches === 1 ? '' : 'es'}`
				: `已找到 ${matches} 个相关问题`;
		}
	};

	if (searchInput) {
		searchInput.addEventListener('input', (e) => filterItems(e.target.value));
	}
	if (clearBtn) {
		clearBtn.addEventListener('click', () => {
			if (searchInput) searchInput.value = '';
			filterItems('');
			searchInput?.focus();
		});
	}
})();

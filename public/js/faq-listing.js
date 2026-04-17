(function () {
	const loadMoreBtn = document.getElementById('faq-load-more');
	const searchInput = document.getElementById('faq-search-input');
	const clearBtn = document.getElementById('faq-search-clear');
	const meta = document.getElementById('faq-search-meta');

	const items = Array.from(document.querySelectorAll('.faq-item'));
	const pageSize = 10;

	const lang = (document.documentElement.lang || '').toLowerCase();
	const isEn = lang === 'en' || lang.startsWith('en');

	const getLoadMoreWrap = () => loadMoreBtn?.closest('.load-more-wrap');
	const setLoadMoreVisible = (visible) => {
		const wrap = getLoadMoreWrap();
		if (wrap) wrap.style.display = visible ? '' : 'none';
		if (loadMoreBtn) loadMoreBtn.style.display = visible ? '' : 'none';
	};

	const applyPagination = () => {
		items.forEach((el, idx) => {
			if (idx < pageSize) el.classList.remove('faq-hidden');
			else el.classList.add('faq-hidden');
		});
		const remaining = items.filter(
			(el) => el.classList.contains('faq-hidden') && !el.classList.contains('faq-filter-hidden'),
		).length;
		setLoadMoreVisible(remaining > 0);
	};

	const filterItems = (rawQuery) => {
		const q = (rawQuery || '').trim().toLowerCase();
		if (!q) {
			items.forEach((el) => el.classList.remove('faq-filter-hidden'));
			if (meta) meta.textContent = '';
			applyPagination();
			return;
		}

		let matches = 0;
		items.forEach((el) => {
			const hay = el.getAttribute('data-search') || '';
			const ok = hay.includes(q);
			el.classList.toggle('faq-filter-hidden', !ok);
			el.classList.remove('faq-hidden');
			if (ok) matches += 1;
		});
		setLoadMoreVisible(false);
		if (meta) {
			meta.textContent = isEn
				? `${matches} match${matches === 1 ? '' : 'es'}`
				: `已找到 ${matches} 个相关问题`;
		}
	};

	if (loadMoreBtn) {
		loadMoreBtn.addEventListener('click', () => {
			const hidden = items.filter(
				(el) => el.classList.contains('faq-hidden') && !el.classList.contains('faq-filter-hidden'),
			);
			hidden.slice(0, pageSize).forEach((el) => el.classList.remove('faq-hidden'));
			const remaining = items.filter(
				(el) => el.classList.contains('faq-hidden') && !el.classList.contains('faq-filter-hidden'),
			).length;
			if (remaining === 0) setLoadMoreVisible(false);
		});
	}

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

	applyPagination();
})();

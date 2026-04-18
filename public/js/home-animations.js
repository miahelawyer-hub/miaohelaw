(function () {
	const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
	const statsSection = document.querySelector('.stats');
	const counters = Array.from(document.querySelectorAll('.stat-number[data-count]'));

	const setFinal = () => {
		for (const el of counters) {
			const target = Number(el.dataset.count ?? '0');
			const suffix = el.dataset.suffix ?? '';
			el.textContent = `${target}${suffix}`;
		}
	};

	const animateCounters = () => {
		const duration = 900;
		const targets = counters.map((el) => ({
			el,
			target: Number(el.dataset.count ?? '0'),
			suffix: el.dataset.suffix ?? '',
		}));

		for (const item of targets) {
			item.el.textContent = `0${item.suffix}`;
		}

		const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
		const start = performance.now();

		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = easeOutCubic(t);
			for (const item of targets) {
				const value = Math.round(item.target * eased);
				item.el.textContent = `${value}${item.suffix}`;
			}
			if (t < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	};

	if (!statsSection || counters.length === 0) {
		/* no stats */
	} else if (prefersReducedMotion) {
		setFinal();
	} else if ('IntersectionObserver' in window) {
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						animateCounters();
						io.disconnect();
						break;
					}
				}
			},
			{ threshold: 0.35 },
		);
		io.observe(statsSection);
	} else {
		animateCounters();
	}

	const resultsSection = document.querySelector('.results-section');
	const resultNumbers = Array.from(document.querySelectorAll('.results-grid .result-number'));
	const splitDigits = () => {
		const fronts = Array.from(document.querySelectorAll('.results-grid .result-front'));
		for (const front of fronts) {
			const full = (front.textContent ?? '').trim();
			front.setAttribute('aria-label', full);
			front.textContent = '';
			let di = 0;
			for (const ch of full) {
				const span = document.createElement('span');
				span.textContent = ch;
				if (/[0-9]/.test(ch)) {
					span.className = 'd';
					span.style.setProperty('--i', String(di));
					di += 1;
				} else {
					span.className = 'p';
				}
				front.appendChild(span);
			}
		}
	};
	const runResultsPop = () => {
		splitDigits();
		resultNumbers.forEach((el, idx) => {
			window.setTimeout(() => {
				el.classList.remove('is-pop');
				const front = el.querySelector('.result-front');
				if (front) {
					front.classList.remove('digits-pop');
					void front.offsetWidth;
					front.classList.add('digits-pop');
				}
				void el.offsetWidth;
				el.classList.add('is-pop');
			}, idx * 140);
		});
	};

	if (!prefersReducedMotion && resultsSection && resultNumbers.length > 0) {
		if ('IntersectionObserver' in window) {
			const io2 = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							runResultsPop();
							io2.disconnect();
							break;
						}
					}
				},
				{ threshold: 0.35 },
			);
			io2.observe(resultsSection);
		} else {
			runResultsPop();
		}
	}
})();

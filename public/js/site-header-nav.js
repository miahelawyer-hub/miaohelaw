(function () {
	const hamburger = document.getElementById('zh-hamburger') || document.getElementById('en-hamburger');
	const navLinks = document.getElementById('zh-nav-links') || document.getElementById('en-nav-links');
	if (!hamburger || !navLinks) return;

	hamburger.addEventListener('click', (e) => {
		e.stopPropagation();
		const open = navLinks.classList.toggle('open');
		hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
	});
	navLinks.addEventListener('click', (e) => e.stopPropagation());

	document.querySelectorAll('.dropdown').forEach((dropdown) => {
		const trigger = dropdown.querySelector('.dropdown-trigger');
		if (!trigger) return;
		trigger.addEventListener('click', (e) => {
			e.stopPropagation();
			dropdown.classList.toggle('open');
		});
	});

	const closeMenus = () => {
		navLinks.classList.remove('open');
		hamburger.setAttribute('aria-expanded', 'false');
		document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
	};
	document.addEventListener('click', closeMenus);
	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Escape') return;
		closeMenus();
	});
})();

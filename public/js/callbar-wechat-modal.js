(function () {
	const wechatBtn = document.getElementById('wechat-btn');
	const modal = document.getElementById('wechat-modal');
	const closeBtn = document.getElementById('modal-close');

	wechatBtn?.addEventListener('click', () => {
		modal?.classList.add('open');
	});

	closeBtn?.addEventListener('click', () => {
		modal?.classList.remove('open');
	});

	modal?.addEventListener('click', (e) => {
		if (e.target === modal) modal.classList.remove('open');
	});
})();

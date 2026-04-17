(function () {
	function setupFooterWechatQr() {
		const dialog = document.getElementById('footer-wechat-qr-dialog');
		const openBtn = document.getElementById('footer-wechat-qr-open');
		if (!(dialog instanceof HTMLDialogElement) || !openBtn) return;

		const close = () => dialog.close();
		openBtn.addEventListener('click', () => dialog.showModal());
		dialog.querySelectorAll('[data-wechat-qr-close]').forEach((el) => {
			el.addEventListener('click', close);
		});
		dialog.addEventListener('click', (e) => {
			if (e.target === dialog) close();
		});
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', setupFooterWechatQr);
	} else {
		setupFooterWechatQr();
	}
})();

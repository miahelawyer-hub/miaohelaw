(function () {
	var form = document.querySelector('.intake-form');
	if (!form) return;

	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-success]');
	var button = form.querySelector('.intake-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		if (!form.reportValidity()) return;

		var keyInput = form.querySelector('[name="access_key"]');
		var key = keyInput && keyInput.value ? keyInput.value.trim() : '';
		if (!key) {
			status.textContent = '在线提交尚未开通。请稍后再试，或致电 647-930-6688。';
			return;
		}

		var nameInput = form.querySelector('[data-client-name]');
		var clientName = nameInput && nameInput.value ? nameInput.value.trim() : '';
		if (subject) {
			var base = subject.getAttribute('data-base') || subject.value;
			subject.value = clientName ? base + ' | ' + clientName : base;
		}
		if (fromName && clientName) fromName.value = clientName;

		button.disabled = true;
		status.textContent = '正在提交…';

		fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: new FormData(form),
			headers: { Accept: 'application/json' },
		})
			.then(function (res) {
				return res.json().catch(function () {
					return {};
				}).then(function (data) {
					if (!res.ok || !data.success) {
						var message = data && data.message ? String(data.message) : 'submit failed';
						throw new Error(message);
					}
				});
			})
			.then(function () {
				form.hidden = true;
				var config = document.querySelector('.intake-config');
				if (config) config.hidden = true;
				if (success) success.hidden = false;
				if (success) success.scrollIntoView({ behavior: 'smooth', block: 'start' });
			})
			.catch(function () {
				status.textContent = '提交没有成功，请稍后再试。身份证件仍请发到 Lawyer@HLawFirmOntario.com。';
				button.disabled = false;
			});
	});
})();

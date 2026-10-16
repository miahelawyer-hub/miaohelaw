(function () {
	var form = document.querySelector('.inquiry-form');
	if (!form) return;

	var entry = document.querySelector('[data-inquiry-entry]');
	var pending = document.querySelector('[data-inquiry-pending]');
	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-inquiry-success]');
	var button = form.querySelector('.inquiry-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		if (!form.reportValidity()) return;

		var keyInput = form.querySelector('[name="access_key"]');
		var key = keyInput && keyInput.value ? keyInput.value.trim() : '';
		if (!key) {
			status.textContent = form.getAttribute('data-missing-key') || '';
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
		status.textContent = '';
		if (entry) entry.hidden = true;
		if (pending) pending.hidden = false;

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
				if (pending) pending.hidden = true;
				if (success) success.hidden = false;
			})
			.catch(function () {
				if (pending) pending.hidden = true;
				if (entry) entry.hidden = false;
				status.textContent = form.getAttribute('data-failure') || '';
				button.disabled = false;
			});
	});
})();

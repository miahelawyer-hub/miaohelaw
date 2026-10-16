(function () {
	var form = document.querySelector('.intake-form');
	if (!form) return;

	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-success]');
	var button = form.querySelector('.intake-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');

	function daysInMonth(year, month) {
		var y = Number(year || '2000');
		return new Date(y, Number(month), 0).getDate();
	}

	function syncDate(group) {
		var hidden = group.querySelector('[data-date-value]');
		var year = group.querySelector('[data-date-part="year"]');
		var month = group.querySelector('[data-date-part="month"]');
		var day = group.querySelector('[data-date-part="day"]');
		var selected = day.value;
		var max = month.value ? daysInMonth(year.value, month.value) : 31;
		if (day.options.length - 1 !== max) {
			day.innerHTML = '';
			var empty = document.createElement('option');
			empty.value = '';
			empty.textContent = '日';
			day.appendChild(empty);
			for (var d = 1; d <= max; d++) {
				var opt = document.createElement('option');
				var value = String(d).padStart(2, '0');
				opt.value = value;
				opt.textContent = value;
				day.appendChild(opt);
			}
		}
		day.value = selected && Number(selected) <= max ? selected : '';
		var complete = year.value && month.value && day.value;
		hidden.value = complete ? year.value + '-' + month.value + '-' + day.value : '';
		[year, month, day].forEach(function (part) {
			part.setCustomValidity('');
		});
		if ((year.value || month.value || day.value) && !complete) {
			var missing = !year.value ? year : !month.value ? month : day;
			missing.setCustomValidity('请选择完整日期。Please select the full date.');
		}
	}

	form.querySelectorAll('[data-date]').forEach(function (group) {
		group.querySelectorAll('select').forEach(function (part) {
			part.addEventListener('change', function () {
				syncDate(group);
			});
		});
	});

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.querySelectorAll('[data-date]').forEach(syncDate);
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

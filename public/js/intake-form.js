(function () {
	var form = document.querySelector('.intake-form');
	if (!form) return;

	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-success]');
	var button = form.querySelector('.intake-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');
	var BLANK = '(blank)';

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

	function prettyLabel(name) {
		if (!name) return '';
		if (name === 'email') return 'Email';
		return name.replace(/^\S+ \d+ /, '');
	}

	function filled(value) {
		var text = String(value || '').trim();
		return text ? text : BLANK;
	}

	function isNameLabel(label) {
		return /(full legal name|full name|^name$)/i.test(label);
	}

	function isPhoneLabel(label) {
		return /phone/i.test(label) && !/email/i.test(label);
	}

	function cell(item) {
		return item.label + ': ' + item.value;
	}

	function layoutItems(items) {
		var used = {};
		var partner = {};
		var shorts = [];
		items.forEach(function (item, index) {
			if (item.kind === 'short') shorts.push(index);
		});

		function pairIndexes(left, right) {
			partner[left] = right;
			partner[right] = left;
			used[left] = true;
			used[right] = true;
		}

		var nameIndex = -1;
		var phoneIndex = -1;
		shorts.forEach(function (index) {
			if (nameIndex < 0 && isNameLabel(items[index].label)) nameIndex = index;
			if (phoneIndex < 0 && isPhoneLabel(items[index].label)) phoneIndex = index;
		});
		if (nameIndex >= 0 && phoneIndex >= 0 && nameIndex !== phoneIndex) {
			pairIndexes(nameIndex, phoneIndex);
		}

		var leftover = shorts.filter(function (index) {
			return !used[index];
		});
		for (var i = 0; i + 1 < leftover.length; i += 2) {
			pairIndexes(leftover[i], leftover[i + 1]);
		}

		var lines = [];
		var emitted = {};
		items.forEach(function (item, index) {
			if (emitted[index]) return;
			if (item.kind === 'short') {
				var other = partner[index];
				if (other != null) {
					lines.push(cell(item) + '    |    ' + cell(items[other]));
					emitted[index] = true;
					emitted[other] = true;
					return;
				}
				lines.push(cell(item));
				emitted[index] = true;
				return;
			}
			lines.push(item.line);
			emitted[index] = true;
		});
		return lines;
	}

	function readInputField(el) {
		var input = el.querySelector('[data-date-value], input[name], textarea[name], select[name]');
		if (!input || !input.name) return null;
		var label = prettyLabel(input.name);
		var value = filled(input.value);
		var wide = el.classList.contains('wide') || /address/i.test(input.name);
		if (wide) {
			return { kind: 'line', line: label + ': ' + value };
		}
		return { kind: 'short', label: label, value: value };
	}

	function namedInputs(root) {
		return Array.prototype.filter.call(root.querySelectorAll('input[name], textarea[name], select[name]'), function (el) {
			return el.name && el.name !== 'botcheck' && !el.hasAttribute('data-date-part');
		});
	}

	function valuesByName(root) {
		var map = {};
		namedInputs(root).forEach(function (el) {
			if (el.type === 'radio') {
				if (!Object.prototype.hasOwnProperty.call(map, el.name)) map[el.name] = '';
				if (el.checked) map[el.name] = el.value;
				return;
			}
			if (el.type === 'checkbox') {
				map[el.name] = el.checked ? el.value : '';
				return;
			}
			map[el.name] = el.value;
		});
		return map;
	}

	function formatChoices(fieldset) {
		var radios = fieldset.querySelectorAll('input[type="radio"]');
		if (radios.length) {
			var name = radios[0].name;
			var checked = fieldset.querySelector('input[type="radio"]:checked');
			return prettyLabel(name) + ': ' + (checked ? checked.value : BLANK);
		}
		var checks = fieldset.querySelectorAll('input[type="checkbox"]');
		if (!checks.length) return '';
		var group = checks[0].name.split(' — ')[0];
		var parts = Array.prototype.map.call(checks, function (box) {
			var option = box.name.split(' — ')[1] || box.value;
			return option + ': ' + (box.checked ? box.value : BLANK);
		});
		return prettyLabel(group) + ': ' + parts.join(' | ');
	}

	function collectGrid(grid) {
		var lines = [];
		var caption = grid.querySelector('.intake-grid-caption');
		if (caption) lines.push(caption.textContent.replace(/\s+/g, ' ').trim());
		Array.prototype.forEach.call(grid.querySelectorAll('.intake-row'), function (row) {
			var legend = row.querySelector('legend');
			var title = legend ? legend.textContent.replace(/\s+/g, ' ').trim() : '';
			var values = valuesByName(row);
			var items = Object.keys(values).map(function (name) {
				var label = prettyLabel(name);
				var value = filled(values[name]);
				if (/address/i.test(label)) {
					return { kind: 'line', line: label + ': ' + value };
				}
				return { kind: 'short', label: label, value: value };
			});
			if (title) lines.push(title);
			lines.push.apply(lines, layoutItems(items));
		});
		return lines;
	}

	function collectSection(section) {
		var heading = section.querySelector('h2');
		var lines = ['', '—— ' + (heading ? heading.textContent.replace(/\s+/g, ' ').trim() : '') + ' ——'];
		var fields = section.querySelector('.intake-fields');
		if (!fields) return lines;
		var items = [];
		Array.prototype.forEach.call(fields.children, function (child) {
			if (child.classList.contains('intake-note')) return;
			if (child.classList.contains('intake-grid')) {
				if (items.length) {
					lines.push.apply(lines, layoutItems(items));
					items = [];
				}
				lines.push.apply(lines, collectGrid(child));
				return;
			}
			if (child.classList.contains('intake-choices')) {
				if (items.length) {
					lines.push.apply(lines, layoutItems(items));
					items = [];
				}
				var choiceLine = formatChoices(child);
				if (choiceLine) lines.push(choiceLine);
				return;
			}
			if (child.classList.contains('intake-field')) {
				var item = readInputField(child);
				if (item) items.push(item);
			}
		});
		if (items.length) lines.push.apply(lines, layoutItems(items));
		return lines;
	}

	function buildMessage() {
		var formName = '';
		var formNameInput = form.querySelector('[name="form_name"]');
		if (formNameInput) formName = formNameInput.value;
		var lines = [
			'H. LAW FIRM 恒. 律师事务所',
			formName,
			'Empty answers are recorded as (blank).',
		];
		form.querySelectorAll('.intake-section').forEach(function (section) {
			lines.push.apply(lines, collectSection(section));
		});
		return lines.join('\n');
	}

	function submissionPayload(key) {
		var payload = new FormData();
		payload.append('access_key', key);
		if (subject) payload.append('subject', subject.value);
		if (fromName && fromName.value) payload.append('from_name', fromName.value);
		var emailInput = form.querySelector('[name="email"]');
		if (emailInput && emailInput.value) payload.append('email', emailInput.value);
		var bot = form.querySelector('[name="botcheck"]');
		if (bot && bot.checked) payload.append('botcheck', '1');
		payload.append('Client intake', buildMessage());
		return payload;
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
			body: submissionPayload(key),
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

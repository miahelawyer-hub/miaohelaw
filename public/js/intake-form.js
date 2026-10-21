(function () {
	var form = document.querySelector('.intake-form');
	if (!form) return;

	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-success]');
	var button = form.querySelector('.intake-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');
	var BLANK = '（未填）';
	var RESERVED = {
		access_key: true,
		apikey: true,
		attachment: true,
		botcheck: true,
		ccemail: true,
		email: true,
		from_name: true,
		html: true,
		redirect: true,
		replyto: true,
		subject: true,
		webhook: true,
	};

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

	function cleanLabel(text) {
		return String(text || '')
			.replace(/\s+/g, ' ')
			.replace(/\s*\*\s*$/, '')
			.trim();
	}

	function filled(value) {
		var text = String(value || '').trim();
		return text ? text : BLANK;
	}

	function firstChildByTag(el, tag) {
		if (!el) return null;
		tag = tag.toUpperCase();
		for (var i = 0; i < el.children.length; i++) {
			if (el.children[i].tagName === tag) return el.children[i];
		}
		return null;
	}

	function childrenByClass(el, className) {
		return Array.prototype.filter.call(el.children, function (child) {
			return child.classList.contains(className);
		});
	}

	function visibleLabel(el, fallback) {
		if (!el) return cleanLabel(fallback);
		var labelled = firstChildByTag(el, 'LEGEND') || firstChildByTag(el, 'SPAN');
		if (labelled) return cleanLabel(labelled.textContent);
		return cleanLabel(fallback);
	}

	function optionLabel(input) {
		var wrap = input.closest ? input.closest('label') : input.parentNode;
		if (wrap) {
			var span = wrap.querySelector('span');
			if (span) return cleanLabel(span.textContent);
		}
		return cleanLabel(input.value);
	}

	function uniqueKey(label, seen) {
		var key = label || 'Field';
		if (RESERVED[key.toLowerCase().replace(/\s+/g, '_')]) key = key + ' 填写';
		if (RESERVED[key.toLowerCase()]) key = key + ' 填写';
		var base = key;
		var n = 2;
		while (seen[key]) {
			key = base + ' · ' + n;
			n += 1;
		}
		seen[key] = true;
		return key;
	}

	function readInputField(el) {
		var input = el.querySelector('[data-date-value], input[name], textarea[name], select[name]');
		if (!input || !input.name) return null;
		return {
			label: visibleLabel(el, input.name === 'email' ? 'Email 邮箱' : input.name),
			value: filled(input.value),
		};
	}

	function formatChoices(fieldset) {
		var legend = fieldset.querySelector('legend');
		var label = cleanLabel(legend && legend.textContent);
		var radios = fieldset.querySelectorAll('input[type="radio"]');
		if (radios.length) {
			var checked = fieldset.querySelector('input[type="radio"]:checked');
			return { label: label, value: checked ? checked.value : BLANK };
		}
		var checks = fieldset.querySelectorAll('input[type="checkbox"]');
		if (!checks.length) return null;
		var parts = Array.prototype.map.call(checks, function (box) {
			return (box.checked ? '☑ ' : '☐ ') + optionLabel(box);
		});
		return { label: label, value: parts.join('\n') };
	}

	function collectGrid(grid, section, items) {
		var rows = grid.querySelectorAll('.intake-row');
		if (!rows.length) return;
		var first = rows[0];
		var headers = [];
		childrenByClass(first, 'intake-field').forEach(function (field) {
			headers.push(visibleLabel(field, ''));
		});
		var choiceHeader = childrenByClass(first, 'intake-row-choice')[0];
		if (choiceHeader) headers.push(visibleLabel(choiceHeader, ''));
		Array.prototype.forEach.call(rows, function (row) {
			var legend = firstChildByTag(row, 'LEGEND');
			var rowName = cleanLabel(legend && legend.textContent);
			childrenByClass(row, 'intake-field').forEach(function (field, index) {
				var input = field.querySelector('[data-date-value], input[name], textarea[name], select[name]');
				items.push({
					section: section,
					label: rowName + ' · ' + (headers[index] || '栏'),
					value: filled(input && input.value),
				});
			});
			var rowChoice = childrenByClass(row, 'intake-row-choice')[0];
			if (rowChoice) {
				var checked = rowChoice.querySelector('input[type="radio"]:checked');
				items.push({
					section: section,
					label: rowName + ' · ' + (headers[headers.length - 1] || '选择'),
					value: checked ? checked.value : BLANK,
				});
			}
		});
	}

	function collectFields() {
		var items = [];
		form.querySelectorAll('.intake-section').forEach(function (section) {
			var heading = section.querySelector('h2');
			var title = heading ? cleanLabel(heading.textContent) : '';
			var fields = section.querySelector('.intake-fields');
			if (!fields) return;
			Array.prototype.forEach.call(fields.children, function (child) {
				if (child.classList.contains('intake-note')) return;
				if (child.classList.contains('intake-grid')) {
					collectGrid(child, title, items);
					return;
				}
				if (child.classList.contains('intake-choices')) {
					var choice = formatChoices(child);
					if (choice) items.push({ section: title, label: choice.label, value: choice.value });
					return;
				}
				if (child.classList.contains('intake-field')) {
					var item = readInputField(child);
					if (item) items.push({ section: title, label: item.label, value: item.value });
				}
			});
		});
		return items;
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
		var formNameInput = form.querySelector('[name="form_name"]');
		if (formNameInput && formNameInput.value) payload.append('表格', formNameInput.value);
		var seen = { 表格: true };
		collectFields().forEach(function (item) {
			var label = item.section ? item.section + ' · ' + item.label : item.label;
			payload.append(uniqueKey(label, seen), item.value);
		});
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

(function () {
	var form = document.querySelector('.intake-form');
	if (!form) return;

	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-success]');
	var button = form.querySelector('.intake-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');
	var BLANK = '（未填）';

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

	function line(label, value) {
		return label + '：' + value;
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

	function readInputField(el) {
		var input = el.querySelector('[data-date-value], input[name], textarea[name], select[name]');
		if (!input || !input.name) return null;
		return line(visibleLabel(el, input.name === 'email' ? 'Email 邮箱' : input.name), filled(input.value));
	}

	function formatChoices(fieldset) {
		var label = visibleLabel(fieldset, '');
		var radios = fieldset.querySelectorAll('input[type="radio"]');
		if (radios.length) {
			var checked = fieldset.querySelector('input[type="radio"]:checked');
			return line(label, checked ? checked.value : BLANK);
		}
		var checks = fieldset.querySelectorAll('input[type="checkbox"]');
		if (!checks.length) return '';
		var parts = Array.prototype.map.call(checks, function (box) {
			return (box.checked ? '☑ ' : '☐ ') + optionLabel(box);
		});
		return line(label, parts.join('  '));
	}

	function collectGrid(grid) {
		var lines = [];
		var caption = grid.querySelector('.intake-grid-caption');
		if (caption) lines.push(cleanLabel(caption.textContent));
		Array.prototype.forEach.call(grid.querySelectorAll('.intake-row'), function (row) {
			var legend = firstChildByTag(row, 'LEGEND');
			var rowName = cleanLabel(legend && legend.textContent);
			childrenByClass(row, 'intake-field').forEach(function (field) {
				var input = field.querySelector('[data-date-value], input[name], textarea[name], select[name]');
				var fieldLabel = visibleLabel(field, '');
				lines.push(line(rowName + ' · ' + fieldLabel, filled(input && input.value)));
			});
			var rowChoice = childrenByClass(row, 'intake-row-choice')[0];
			if (rowChoice) {
				var checked = rowChoice.querySelector('input[type="radio"]:checked');
				lines.push(
					line(rowName + ' · ' + visibleLabel(rowChoice, '选择'), checked ? checked.value : BLANK)
				);
			}
		});
		return lines;
	}

	function collectSection(section) {
		var heading = section.querySelector('h2');
		var title = heading ? cleanLabel(heading.textContent) : '';
		var lines = ['========== ' + title + ' =========='];
		var fields = section.querySelector('.intake-fields');
		if (!fields) return lines;
		Array.prototype.forEach.call(fields.children, function (child) {
			if (child.classList.contains('intake-note')) return;
			if (child.classList.contains('intake-grid')) {
				lines.push.apply(lines, collectGrid(child));
				return;
			}
			if (child.classList.contains('intake-choices')) {
				var choiceLine = formatChoices(child);
				if (choiceLine) lines.push(choiceLine);
				return;
			}
			if (child.classList.contains('intake-field')) {
				var item = readInputField(child);
				if (item) lines.push(item);
			}
		});
		return lines;
	}

	function buildMessage() {
		var formName = '';
		var formNameInput = form.querySelector('[name="form_name"]');
		if (formNameInput) formName = formNameInput.value;
		var lines = ['H. LAW FIRM 恒. 律师事务所', formName];
		form.querySelectorAll('.intake-section').forEach(function (section) {
			lines.push('');
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

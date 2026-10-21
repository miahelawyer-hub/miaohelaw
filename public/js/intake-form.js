(function () {
	var form = document.querySelector('.intake-form');
	if (!form) return;

	var status = form.querySelector('[data-status]');
	var success = document.querySelector('[data-success]');
	var button = form.querySelector('.intake-submit');
	var subject = form.querySelector('[name="subject"]');
	var fromName = form.querySelector('[name="from_name"]');
	var BLANK = '（未填）';
	var LAB =
		'width:18%;background:#f3efe6;padding:4px 6px;border:1px solid #cfc6b4;font-size:10px;line-height:1.35;vertical-align:top;font-family:Arial,Helvetica,sans-serif';
	var VAL =
		'width:32%;padding:4px 6px;border:1px solid #cfc6b4;font-size:10px;line-height:1.35;vertical-align:top;font-family:Arial,Helvetica,sans-serif';

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

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
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

	function cellValue(item) {
		if (item.raw) return item.value;
		if (!item.value || item.value === BLANK) {
			return '<span style="color:#888888">' + BLANK + '</span>';
		}
		return '<strong style="color:#1557c0">' + escapeHtml(item.value) + '</strong>';
	}

	function pairRows(items) {
		var html = '';
		var i = 0;
		while (i < items.length) {
			var a = items[i];
			if (a.html) {
				html +=
					'<tr><td colspan="4" style="padding:6px;border:1px solid #cfc6b4;font-family:Arial,Helvetica,sans-serif">' +
					a.html +
					'</td></tr>';
				i += 1;
				continue;
			}
			var next = items[i + 1];
			if (a.wide || !next || next.wide || next.html) {
				html +=
					'<tr><td style="' +
					LAB +
					'">' +
					escapeHtml(a.label) +
					'</td><td colspan="3" style="' +
					VAL +
					'">' +
					cellValue(a) +
					'</td></tr>';
				i += 1;
				continue;
			}
			html +=
				'<tr><td style="' +
				LAB +
				'">' +
				escapeHtml(a.label) +
				'</td><td style="' +
				VAL +
				'">' +
				cellValue(a) +
				'</td><td style="' +
				LAB +
				'">' +
				escapeHtml(next.label) +
				'</td><td style="' +
				VAL +
				'">' +
				cellValue(next) +
				'</td></tr>';
			i += 2;
		}
		return html;
	}

	function readInputField(el) {
		var input = el.querySelector('[data-date-value], input[name], textarea[name], select[name]');
		if (!input || !input.name) return null;
		return {
			label: visibleLabel(el, input.name === 'email' ? 'Email 邮箱' : input.name),
			value: filled(input.value),
			wide: el.classList.contains('wide') || /address/i.test(input.name),
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
			var mark = box.checked ? '☑' : '☐';
			var text = mark + '&nbsp;' + escapeHtml(optionLabel(box));
			return box.checked
				? '<strong style="color:#1557c0">' + text + '</strong>'
				: '<span style="color:#888888">' + text + '</span>';
		});
		return { label: label, value: parts.join('&nbsp;&nbsp;'), raw: true, wide: true };
	}

	function collectGrid(grid) {
		var caption = grid.querySelector('.intake-grid-caption');
		var rows = grid.querySelectorAll('.intake-row');
		if (!rows.length) return null;
		var first = rows[0];
		var headers = [''];
		childrenByClass(first, 'intake-field').forEach(function (field) {
			headers.push(visibleLabel(field, ''));
		});
		var choice = childrenByClass(first, 'intake-row-choice')[0];
		if (choice) headers.push(visibleLabel(choice, ''));

		var th =
			'background:#ece6d8;padding:3px 5px;border:1px solid #cfc6b4;font-size:9px;text-align:left;font-family:Arial,Helvetica,sans-serif';
		var td =
			'padding:3px 5px;border:1px solid #cfc6b4;font-size:9px;vertical-align:top;font-family:Arial,Helvetica,sans-serif';
		var html = '';
		if (caption) {
			html +=
				'<div style="font-size:10px;font-weight:bold;margin:0 0 4px 0">' +
				escapeHtml(cleanLabel(caption.textContent)) +
				'</div>';
		}
		html += '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">';
		html += '<tr>';
		headers.forEach(function (header) {
			html += '<th style="' + th + '">' + escapeHtml(header) + '</th>';
		});
		html += '</tr>';
		Array.prototype.forEach.call(rows, function (row) {
			html += '<tr>';
			var legend = firstChildByTag(row, 'LEGEND');
			html += '<td style="' + td + '">' + escapeHtml(cleanLabel(legend && legend.textContent)) + '</td>';
			childrenByClass(row, 'intake-field').forEach(function (field) {
				var input = field.querySelector('[data-date-value], input[name], textarea[name], select[name]');
				var value = filled(input && input.value);
				html += '<td style="' + td + '">' + cellValue({ value: value }) + '</td>';
			});
			var rowChoice = childrenByClass(row, 'intake-row-choice')[0];
			if (rowChoice) {
				var checked = rowChoice.querySelector('input[type="radio"]:checked');
				html += '<td style="' + td + '">' + cellValue({ value: checked ? checked.value : BLANK }) + '</td>';
			}
			html += '</tr>';
		});
		html += '</table>';
		return { html: html };
	}

	function collectSection(section) {
		var heading = section.querySelector('h2');
		var title = heading ? cleanLabel(heading.textContent) : '';
		var fields = section.querySelector('.intake-fields');
		var items = [];
		if (fields) {
			Array.prototype.forEach.call(fields.children, function (child) {
				if (child.classList.contains('intake-note')) return;
				if (child.classList.contains('intake-grid')) {
					var grid = collectGrid(child);
					if (grid) items.push(grid);
					return;
				}
				if (child.classList.contains('intake-choices')) {
					var choice = formatChoices(child);
					if (choice) items.push(choice);
					return;
				}
				if (child.classList.contains('intake-field')) {
					var item = readInputField(child);
					if (item) items.push(item);
				}
			});
		}
		return (
			'<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 8px 0">' +
			'<tr><td colspan="4" style="background:#1e3a5f;color:#fff;font-weight:bold;padding:5px 8px;font-size:11px;font-family:Arial,Helvetica,sans-serif">' +
			escapeHtml(title) +
			'</td></tr>' +
			pairRows(items) +
			'</table>'
		);
	}

	function buildMessage() {
		var formName = '';
		var formNameInput = form.querySelector('[name="form_name"]');
		if (formNameInput) formName = formNameInput.value;
		var parts = [
			'<div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#111;line-height:1.35">',
			'<div style="font-size:13px;font-weight:bold;margin:0 0 2px 0">H. LAW FIRM 恒. 律师事务所</div>',
			'<div style="margin:0 0 8px 0">' + escapeHtml(formName) + '</div>',
		];
		form.querySelectorAll('.intake-section').forEach(function (section) {
			parts.push(collectSection(section));
		});
		parts.push('</div>');
		return parts.join('');
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
		var html = buildMessage();
		payload.append('html', html);
		payload.append('Client intake', html);
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

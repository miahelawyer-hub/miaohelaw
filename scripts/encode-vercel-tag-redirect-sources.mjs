/**
 * URL-encode path segments for Vercel redirect `source` matching:
 * - ASCII (except space) unchanged, hyphen unchanged
 * - space → %20
 * - non-ASCII (incl. en dash U+2013) → UTF-8 percent-encoding
 * Path slashes are never encoded.
 */
import fs from 'node:fs';

function encodePathSegment(segment) {
	let out = '';
	for (let i = 0; i < segment.length; ) {
		const cp = segment.codePointAt(i);
		i += cp > 0xffff ? 2 : 1;
		if (cp === 0x20) {
			out += '%20';
			continue;
		}
		if (cp <= 0x7f) {
			out += String.fromCodePoint(cp);
			continue;
		}
		const ch = String.fromCodePoint(cp);
		for (const b of new TextEncoder().encode(ch)) {
			out += `%${b.toString(16).toUpperCase().padStart(2, '0')}`;
		}
	}
	return out;
}

function encodeTagRedirectSource(source) {
	const parts = source.split('/');
	return parts.map(encodePathSegment).join('/');
}

function isLegacyTagRedirectSource(source) {
	return source.startsWith('/tag/') || source.startsWith('/en/tag/');
}

const path = new URL('../vercel.json', import.meta.url);
const raw = fs.readFileSync(path, 'utf8');
const config = JSON.parse(raw);

let changed = 0;
for (const r of config.redirects) {
	if (!isLegacyTagRedirectSource(r.source)) continue;
	const next = encodeTagRedirectSource(r.source);
	if (next !== r.source) {
		r.source = next;
		changed++;
	}
}

fs.writeFileSync(path, `${JSON.stringify(config, null, '\t')}\n`);
console.log(`Updated ${changed} tag redirect source(s).`);

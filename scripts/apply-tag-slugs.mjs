/**
 * Rewrites blog frontmatter tags + replaces /tag/... links in markdown & TS content.
 * Run: node scripts/apply-tag-slugs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { oldToNew } from './tag-old-to-new.mjs';

function parseTagValue(line) {
	let v = line.slice(4).trim();
	if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
		v = v.slice(1, -1);
	}
	return v;
}

function rewriteTagsInFile(filePath) {
	let text = fs.readFileSync(filePath, 'utf8');
	if (!text.startsWith('---')) return false;
	const end = text.indexOf('\n---\n', 3);
	if (end === -1) return false;
	const fm = text.slice(3, end);
	const rest = text.slice(end);
	const lines = fm.split('\n');
	const tagStart = lines.findIndex((l) => l.trim() === 'tags:' || l.trim().startsWith('tags:'));
	if (tagStart === -1) return false;
	let i = tagStart + 1;
	const oldTagLines = [];
	while (i < lines.length && lines[i].startsWith('  - ')) {
		oldTagLines.push(i);
		i++;
	}
	if (oldTagLines.length === 0) return false;

	const newTags = [];
	for (const li of oldTagLines) {
		const v = parseTagValue(lines[li]);
		const mapped = oldToNew[v];
		if (!mapped) throw new Error(`No map for tag ${JSON.stringify(v)} in ${filePath}`);
		newTags.push(mapped);
	}
	const unique = [...new Set(newTags)].sort((a, b) => a.localeCompare(b));

	const outLines = [...lines.slice(0, tagStart), 'tags:'];
	for (const t of unique) {
		outLines.push(`  - "${t}"`);
	}
	const lastTagLine = oldTagLines[oldTagLines.length - 1];
	outLines.push(...lines.slice(lastTagLine + 1));

	const newText = '---\n' + outLines.join('\n') + rest;
	fs.writeFileSync(filePath, newText, 'utf8');
	return true;
}

function replaceTagLinksInText(text) {
	let out = text;
	for (const [oldTag, slug] of Object.entries(oldToNew)) {
		const enc = encodeURIComponent(oldTag);
		out = out.split(`/tag/${enc}/`).join(`/tag/${slug}/`);
		out = out.split(`/en/tag/${enc}/`).join(`/en/tag/${slug}/`);
		out = out.split(`/tag/${oldTag}/`).join(`/tag/${slug}/`);
		out = out.split(`/en/tag/${oldTag}/`).join(`/en/tag/${slug}/`);
	}
	return out;
}

function walkDir(dir, ext, fn) {
	if (!fs.existsSync(dir)) return;
	for (const f of fs.readdirSync(dir)) {
		const p = path.join(dir, f);
		const st = fs.statSync(p);
		if (st.isDirectory()) walkDir(p, ext, fn);
		else if (f.endsWith(ext)) fn(p);
	}
}

console.log('Rewriting blog frontmatter tags...');
for (const d of ['src/content/blog', 'src/content/blog-en']) {
	for (const f of fs.readdirSync(d)) {
		if (!f.endsWith('.md')) continue;
		rewriteTagsInFile(path.join(d, f));
	}
}

console.log('Replacing /tag/ links in markdown bodies...');
walkDir('src/content', '.md', (p) => {
	let t = fs.readFileSync(p, 'utf8');
	const n = replaceTagLinksInText(t);
	if (n !== t) fs.writeFileSync(p, n, 'utf8');
});

console.log('Replacing /tag/ links in TS data...');
for (const f of ['src/data/faq.ts', 'src/data/faq-en.ts']) {
	let t = fs.readFileSync(f, 'utf8');
	const n = replaceTagLinksInText(t);
	if (n !== t) fs.writeFileSync(f, n, 'utf8');
}

console.log('Done.');

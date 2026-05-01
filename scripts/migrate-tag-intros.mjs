/**
 * Renames tag-intros/*.md and tag-intros-en/*.md to kebab slug filenames;
 * prepends slug + displayName to frontmatter.
 */
import fs from 'node:fs';
import path from 'node:path';
import { oldToNew } from './tag-old-to-new.mjs';

const displays = JSON.parse(fs.readFileSync('scripts/tag-display-names.json', 'utf8'));

function migrateDir(dir, lang) {
	const displayMap = lang === 'zh' ? displays.zh : displays.en;
	const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
	for (const f of files) {
		const oldTag = f.replace(/\.md$/, '');
		const slug = oldToNew[oldTag];
		if (!slug) {
			console.warn(`No oldToNew for intro file ${f} — skip or add map`);
			continue;
		}
		const raw = fs.readFileSync(path.join(dir, f), 'utf8');
		if (!raw.startsWith('---')) continue;
		const end = raw.indexOf('\n---\n', 3);
		if (end === -1) continue;
		let fm = raw.slice(3, end);
		const body = raw.slice(end);
		// Remove legacy keys if re-run
		fm = fm.replace(/^slug:.*\n/m, '');
		fm = fm.replace(/^displayName:.*\n/m, '');
		const displayName = displayMap[slug] ?? slug;
		const inject = `slug: "${slug}"\ndisplayName: "${displayName.replace(/"/g, '\\"')}"\n`;
		const newFm = inject + fm;
		const outPath = path.join(dir, `${slug}.md`);
		fs.writeFileSync(outPath, '---\n' + newFm + body, 'utf8');
		if (f !== `${slug}.md`) {
			fs.unlinkSync(path.join(dir, f));
			console.log('Migrated', dir, f, '->', slug + '.md');
		}
	}
}

migrateDir('src/data/tag-intros', 'zh');
migrateDir('src/data/tag-intros-en', 'en');
console.log('Intro migration done.');

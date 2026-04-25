// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

function listIntroTags(introDir) {
	try {
		return new Set(
			fs
				.readdirSync(introDir, { withFileTypes: true })
				.filter((d) => d.isFile() && d.name.endsWith('.md'))
				.map((d) => d.name.replace(/\.md$/, ''))
		);
	} catch {
		return new Set();
	}
}

function extractTagsFromMarkdownFrontmatter(filePath) {
	const text = fs.readFileSync(filePath, 'utf8');
	if (!text.startsWith('---')) return [];
	const end = text.indexOf('\n---\n', 3);
	if (end === -1) return [];
	const fm = text.slice(3, end);
	const tags = [];
	let inTags = false;
	for (const line of fm.split('\n')) {
		if (!inTags && line.trim().startsWith('tags:')) {
			inTags = true;
			continue;
		}
		if (inTags) {
			if (line.startsWith('  - ')) {
				let v = line.slice(4).trim();
				if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
					v = v.slice(1, -1);
				}
				tags.push(v);
				continue;
			}
			// stop at next top-level key
			if (line.trim() && !line.startsWith(' ') && !line.startsWith('\t')) break;
		}
	}
	return tags;
}

function computeTagCounts(contentDir) {
	const counts = new Map();
	for (const entry of fs.readdirSync(contentDir, { withFileTypes: true })) {
		if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
		const filePath = path.join(contentDir, entry.name);
		for (const tag of extractTagsFromMarkdownFrontmatter(filePath)) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}
	return counts;
}

function computeRescuedTagPaths({ prefix, contentDir, introDir }) {
	const introTags = listIntroTags(introDir);
	const counts = computeTagCounts(contentDir);
	const rescued = new Set();
	for (const [tag, c] of counts.entries()) {
		if (c >= 2 && introTags.has(tag)) {
			rescued.add(`${prefix}${encodeURIComponent(tag)}/`);
		}
	}
	return rescued;
}

const rescuedZhTagPaths = computeRescuedTagPaths({
	prefix: '/tag/',
	contentDir: path.join(process.cwd(), 'src/content/blog'),
	introDir: path.join(process.cwd(), 'src/data/tag-intros'),
});

const rescuedEnTagPaths = computeRescuedTagPaths({
	prefix: '/en/tag/',
	contentDir: path.join(process.cwd(), 'src/content/blog-en'),
	introDir: path.join(process.cwd(), 'src/data/tag-intros-en'),
});

const rescuedTagPaths = new Set([...rescuedZhTagPaths, ...rescuedEnTagPaths]);

// https://astro.build/config
export default defineConfig({
	site: 'https://www.miaohelaw.ca',
	trailingSlash: 'always',
	integrations: [
		mdx(),
		sitemap({
			// NOTE: @astrojs/sitemap `filter` receives a full URL string (href),
			// not a route object. We filter by URL pathname.
			filter: (href) => {
				let p;
				try {
					p = new URL(href).pathname;
				} catch {
					return true;
				}
				if (p.startsWith('/tag/') || p.startsWith('/en/tag/')) {
					// Only include “rescued” tag pages in sitemap:
					// - tag has an intro file
					// - tag appears in 2+ posts
					return rescuedTagPaths.has(p);
				}
				return true;
			},
		}),
	],
	// Dev: explicit IPv4 avoids some browsers/OS resolving localhost to ::1
	server: {
		port: 4321,
		host: '127.0.0.1',
	},
});

#!/usr/bin/env node
/**
 * Render a markdown draft (with YAML frontmatter) to a standalone HTML preview.
 * Usage: node scripts/render-blog-draft.mjs drafts/your-draft.md
 * Requires network once for `npx marked` unless cached.
 */
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { basename, join } from 'node:path';

function escapeHtml(s) {
	return String(s)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function parseFrontmatter(raw) {
	if (!raw.startsWith('---')) {
		throw new Error('Expected YAML frontmatter starting with ---');
	}
	const end = raw.indexOf('\n---\n', 3);
	if (end === -1) throw new Error('Missing closing --- after frontmatter');
	const fmBlock = raw.slice(3, end).trim();
	const body = raw.slice(end + 5);
	const title =
		fmBlock.match(/^title:\s*"(.+)"\s*$/m)?.[1] ??
		fmBlock.match(/^title:\s*'(.+)'\s*$/m)?.[1] ??
		fmBlock.match(/^title:\s*(.+)\s*$/m)?.[1] ??
		'Draft';
	const description =
		fmBlock.match(/^description:\s*"(.+)"\s*$/m)?.[1] ??
		fmBlock.match(/^description:\s*'(.+)'\s*$/m)?.[1] ??
		fmBlock.match(/^description:\s*(.+)\s*$/m)?.[1] ??
		'';
	return { title, description, body };
}

const mdPath = process.argv[2];
if (!mdPath) {
	console.error('Usage: node scripts/render-blog-draft.mjs <path-to-draft.md>');
	process.exit(1);
}

const raw = readFileSync(mdPath, 'utf8');
const { title, description, body } = parseFrontmatter(raw);

const tmp = join(process.cwd(), '.draft-render-body.md');
writeFileSync(tmp, body.trimStart(), 'utf8');
const htmlBody = execFileSync('npx', ['-y', 'marked', tmp], {
	encoding: 'utf8',
	cwd: process.cwd(),
});
try {
	unlinkSync(tmp);
} catch {
	// ignore
}

const outPath = mdPath.replace(/\.md$/i, '.preview.html');
const page = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      max-width: 720px;
      margin: 40px auto;
      padding: 0 20px 60px;
      line-height: 1.75;
      color: #1a1a1a;
    }
    h1 { font-size: 1.65rem; margin: 0 0 0.5rem; line-height: 1.3; }
    .banner {
      background: #f6f7f9;
      border: 1px solid #e2e5ea;
      padding: 12px 14px;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      color: #333;
    }
    .meta { color: #555; font-size: 0.9rem; margin-bottom: 2rem; }
    .prose :where(h2) { font-size: 1.2rem; margin-top: 2rem; }
    .prose :where(h3) { font-size: 1.05rem; margin-top: 1.25rem; }
    .prose :where(hr) { border: none; border-top: 1px solid #e5e5e5; margin: 2rem 0; }
    .prose :where(blockquote) {
      border-left: 4px solid #333;
      margin: 1rem 0;
      padding-left: 1rem;
      color: #333;
    }
    .prose :where(a) { color: #0b5fff; }
    .prose :where(ul) { padding-left: 1.25rem; }
    code { font-size: 0.9em; }
  </style>
</head>
<body>
  <div class="banner">
    <strong>本地预览（草稿）</strong>：此文件由脚本从 Markdown 生成，<strong>不会</strong>进入 Astro 站点构建。
    确认内容后，再将同名 <code>.md</code> 移入 <code>src/content/blog/</code> 并设置正式 <code>pubDate</code> 后发布。
  </div>
  <p class="meta">源稿：<code>${escapeHtml(basename(mdPath))}</code></p>
  <h1>${escapeHtml(title)}</h1>
  <div class="prose">${htmlBody}</div>
</body>
</html>`;

writeFileSync(outPath, page, 'utf8');
console.log(`Wrote ${outPath}`);

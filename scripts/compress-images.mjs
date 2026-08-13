/**
 * One-off image compression for P1 (service icons) and P2 (hero webp).
 * Run: node scripts/compress-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const iconsDir = path.join(root, 'public/images/service-icons');
const tmpDir = path.join(root, 'tmp-images');

async function compressIcon(pngName, quality = 80) {
	const src = path.join(iconsDir, pngName);
	const base = pngName.replace(/\.png$/i, '');
	const out = path.join(iconsDir, `${base}.webp`);
	const meta = await sharp(src).metadata();
	let q = quality;
	let buf;
	for (;;) {
		buf = await sharp(src).webp({ quality: q, effort: 6 }).toBuffer();
		if (buf.length <= 3072 || q >= 95) break;
		q += 5;
	}
	await sharp(buf).toFile(out);
	const srcSize = (await stat(src)).size;
	return {
		name: base,
		dims: `${meta.width}x${meta.height}`,
		png: srcSize,
		webp: buf.length,
		quality: q,
	};
}

async function compressHero(srcName, maxBytes, startQ = 72) {
	const src = path.join(root, 'public/images', srcName);
	const tmpOut = path.join(tmpDir, srcName);
	const origSize = (await stat(src)).size;
	let q = startQ;
	let buf;
	let lastGood = null;
	for (; q <= 92; q += 2) {
		buf = await sharp(src).webp({ quality: q, effort: 6 }).toBuffer();
		lastGood = { q, size: buf.length, buf };
		if (buf.length <= maxBytes) break;
	}
	if (!lastGood) throw new Error(`Failed to compress ${srcName}`);
	await sharp(lastGood.buf).toFile(tmpOut);
	return {
		name: srcName,
		orig: origSize,
		newSize: lastGood.size,
		quality: lastGood.q,
		tmp: tmpOut,
	};
}

await mkdir(tmpDir, { recursive: true });

const icons = (await readdir(iconsDir)).filter((f) => f.endsWith('.png'));
console.log('\n=== P1 Service icons ===');
const iconResults = [];
for (const png of icons.sort()) {
	iconResults.push(await compressIcon(png));
}
for (const r of iconResults) {
	const ok = r.webp <= 3072 ? '✓' : '↑q';
	console.log(
		`${ok} ${r.name}: ${r.dims} PNG ${r.png}B → WebP ${r.webp}B (q${r.quality})`,
	);
}

console.log('\n=== P2 Hero images ===');
const mobile = await compressHero('hero-home-court-interior-mobile.webp', 25 * 1024, 68);
const desktop = await compressHero('hero-home-court-interior.webp', 70 * 1024, 72);
for (const r of [mobile, desktop]) {
	const ok = r.newSize <= (r.name.includes('mobile') ? 25 * 1024 : 70 * 1024) ? '✓' : '~';
	console.log(
		`${ok} ${r.name}: ${r.orig}B → ${r.newSize}B (q${r.quality}) [tmp: ${r.tmp}]`,
	);
}

const iconTotalPng = iconResults.reduce((s, r) => s + r.png, 0);
const iconTotalWebp = iconResults.reduce((s, r) => s + r.webp, 0);
console.log(`\nIcons total: PNG ${iconTotalPng}B → WebP ${iconTotalWebp}B (saved ${iconTotalPng - iconTotalWebp}B)`);

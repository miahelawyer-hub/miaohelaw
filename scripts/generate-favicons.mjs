/**
 * Build favicon + touch icons from public/h-law-firm-logo.png (square white canvas, contain).
 * Run: npm run generate-favicons
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const src = path.join(publicDir, 'h-law-firm-logo.png');

const bg = { r: 255, g: 255, b: 255, alpha: 1 };

async function toSquarePng(size, destName) {
	const buf = await sharp(src)
		.resize(size, size, { fit: 'contain', background: bg, position: 'centre' })
		.png({ compressionLevel: 9 })
		.toBuffer();
	await fs.writeFile(path.join(publicDir, destName), buf);
	console.log('wrote', destName);
}

await fs.access(src);
await toSquarePng(16, 'favicon-16.png');
await toSquarePng(32, 'favicon-32.png');
await toSquarePng(192, 'favicon-192.png');
await toSquarePng(180, 'apple-touch-icon.png');

const icoBuf = await pngToIco([
	path.join(publicDir, 'favicon-16.png'),
	path.join(publicDir, 'favicon-32.png'),
]);
await fs.writeFile(path.join(publicDir, 'favicon.ico'), icoBuf);
console.log('wrote favicon.ico');

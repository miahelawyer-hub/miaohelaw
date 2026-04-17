// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.miaohelaw.ca',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	// Dev: explicit IPv4 avoids some browsers/OS resolving localhost to ::1
	server: {
		port: 4321,
		host: '127.0.0.1',
	},
});

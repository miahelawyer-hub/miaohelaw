// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

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
				// Tag listing hubs use noindex,follow — omit from sitemap to avoid conflicting signals.
				if (p.startsWith('/tag/') || p.startsWith('/en/tag/')) {
					return false;
				}
				return true;
			},
		}),
	],
	// Dev: listen on all local addresses so both http://127.0.0.1:4321/ and
	// http://localhost:4321/ work (some OSes resolve localhost to IPv6 ::1 only).
	server: {
		port: 4321,
		host: true,
	},
});

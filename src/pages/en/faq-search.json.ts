import type { APIRoute } from 'astro';
import { SITE_URL } from '../../consts';
import { getFaqItemsEnForListing } from '../../data/faq-en';
import { stripHtml } from '../../utils/stripHtml';

export const prerender = true;

export const GET: APIRoute = async () => {
	const items = getFaqItemsEnForListing();
	const body = items.map((item) => ({
		slug: item.slug,
		question: stripHtml(item.question),
		searchText: `${stripHtml(item.question)} ${stripHtml(item.summary)} ${item.answers.map(stripHtml).join(' ')} ${item.keywords}`.toLowerCase(),
		url: `${SITE_URL}/en/faq/${item.slug}/`,
	}));
	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};

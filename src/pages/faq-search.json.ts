import type { APIRoute } from 'astro';
import { getFaqDetailAbsoluteUrl, getFaqItemsForListing } from '../data/faq';
import { stripHtml } from '../utils/stripHtml';

export const prerender = true;

export const GET: APIRoute = async () => {
	const items = getFaqItemsForListing();
	const body = items.map((item) => ({
		slug: item.slug,
		question: stripHtml(item.question),
		searchText: `${stripHtml(item.question)} ${stripHtml(item.capsule)} ${stripHtml(item.summary)} ${item.answers.map(stripHtml).join(' ')} ${item.keywords}`.toLowerCase(),
		url: getFaqDetailAbsoluteUrl(item),
	}));
	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};

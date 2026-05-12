import type { APIRoute } from 'astro';
import { SITE_URL } from '../consts';
import { videoItems } from '../data/videos';
import { stripHtml } from '../utils/stripHtml';

export const prerender = true;

export const GET: APIRoute = async () => {
	const body = videoItems.map((v) => {
		const keyPointsPlain = v.keyPoints.map(stripHtml).join(' ');
		const searchText = [
			v.title,
			v.topic,
			v.summary,
			stripHtml(v.description),
			v.keywords,
			keyPointsPlain,
		]
			.join(' ')
			.toLowerCase();
		return {
			slug: v.slug,
			title: v.title,
			topic: v.topic,
			youtubeId: v.youtubeId,
			searchText,
			url: `${SITE_URL}/videos/${v.slug}/`,
		};
	});
	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};

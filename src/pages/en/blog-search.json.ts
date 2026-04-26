import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../../consts';
import { isPublishedBlogEnPost } from '../../lib/blogPublished';

export const prerender = true;

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog-en'))
		.filter(isPublishedBlogEnPost)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const body = posts.map((post) => ({
		slug: post.id,
		title: post.data.title,
		description: post.data.description,
		tags: post.data.tags ?? [],
		searchText: `${post.data.title} ${post.data.description} ${(post.data.tags ?? []).join(' ')}`.toLowerCase(),
		url: `${SITE_URL}/en/blog/${post.id}/`,
	}));
	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};

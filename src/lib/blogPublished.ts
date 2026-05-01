import type { CollectionEntry } from 'astro:content';

/**
 * Blog posts with `draft: true` are excluded from production builds and feeds.
 * In `astro dev`, drafts remain routable for UI preview (see blog [...slug] getStaticPaths).
 */
export function isPublishedBlogPost(entry: CollectionEntry<'blog'>): boolean {
	return entry.data.draft !== true;
}

/** Published posts, plus drafts when `astro dev` (so lists/search/tag pages match single-post preview). */
export function isBlogPostRoutable(entry: CollectionEntry<'blog'>): boolean {
	return isPublishedBlogPost(entry) || import.meta.env.DEV;
}

export function isPublishedBlogEnPost(entry: CollectionEntry<'blog-en'>): boolean {
	return entry.data.draft !== true;
}

/** Published EN posts, plus drafts in dev (same rationale as `isBlogPostRoutable`). */
export function isBlogEnPostRoutable(entry: CollectionEntry<'blog-en'>): boolean {
	return isPublishedBlogEnPost(entry) || import.meta.env.DEV;
}

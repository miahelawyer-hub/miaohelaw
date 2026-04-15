/**
 * Strip HTML tags for meta tags, JSON-LD, and search indexing.
 * FAQ copy is trusted site-authored content.
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

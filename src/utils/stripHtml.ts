/**
 * Strip HTML tags for meta tags, JSON-LD, and search indexing.
 * FAQ copy is trusted site-authored content. Use for `question` / `capsule`
 * anywhere machine-readable plain text is required (title, og:, schema `name`).
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

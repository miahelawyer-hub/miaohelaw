import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.optional(image()),
    keywords: z.string().optional(),
    tags: z.array(z.string()).optional(),
    /** Optional sidebar blurb above curated internal links */
    relatedIntro: z.string().optional(),
    /** Curated internal links with one-line context: either blog `slug` (→ /blog/{slug}/) or `href`+`title` (e.g. FAQ / service pages). */
    relatedReading: z
      .array(
        z
          .object({
            slug: z.string().optional(),
            href: z.string().optional(),
            title: z.string().optional(),
            line: z.string(),
          })
          .superRefine((data, ctx) => {
            const hasSlug = Boolean(data.slug?.trim());
            const hasHref = Boolean(data.href?.trim());
            if (!hasSlug && !hasHref) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'relatedReading: set slug (blog post id) or href (internal URL)',
              });
            }
            if (hasSlug && hasHref) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'relatedReading: use either slug or href, not both',
              });
            }
            if (hasHref && !data.title?.trim()) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'relatedReading: href entries need title (link text)',
              });
            }
          })
      )
      .optional(),
    /**
     * Other-language URL (trailing slash) for hreflang + og:locale:alternate.
     * For bilingual posts with the same slug: ZH uses `/en/blog/{slug}/`, EN uses `/blog/{slug}/`.
     */
    pairedArticlePath: z.string().optional(),
    /** Optional FAQPage mainEntity; when set, replaces default single Q&A from title/description */
    faqStructured: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    /** When true: omitted from prod RSS/listings/tag counts; still viewable under `astro dev`. */
    draft: z.boolean().optional(),
  });

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: blogSchema,
});

const blogEn = defineCollection({
  loader: glob({ base: './src/content/blog-en', pattern: '**/*.{md,mdx}' }),
  schema: blogSchema,
});

export const collections = { blog, 'blog-en': blogEn };

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
    /** Curated same-site blog links with one-line context (slug = blog post `id`) */
    relatedReading: z
      .array(
        z.object({
          slug: z.string(),
          line: z.string(),
        })
      )
      .optional(),
    /**
     * Other-language URL (trailing slash) for hreflang + og:locale:alternate.
     * For bilingual posts with the same slug: ZH uses `/en/blog/{slug}/`, EN uses `/blog/{slug}/`.
     */
    pairedArticlePath: z.string().optional(),
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

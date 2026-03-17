import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    visible: z.boolean().default(true),
    date: z.coerce.date(),
    description: z.string(),
    cover_image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    site_title: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    show_contact: z.boolean().default(true),
    show_about: z.boolean().default(true),
  }),
});

export const collections = { projects, settings };

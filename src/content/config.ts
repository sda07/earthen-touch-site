import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Pottery', 'Jewellery']),
    price: z.number(),
    image: z.string(), // URL for stock images
    inventoryStatus: z.enum(['live', 'sold_out', 'discontinued']),
    featured: z.boolean().default(false),
  }),
});

export const collections = { products };

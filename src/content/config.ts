import { z, defineCollection } from 'astro:content';

const centerPageSchema = z.object({
  principalName: z.string().optional(),
}).optional();

const centresCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    centers: z.array(
      z.object({
        state: z.string().optional(),
        page: centerPageSchema,
        districts: z.array(
          z.object({
            district: z.string().optional(),
            page: centerPageSchema,
            centres: z.array(
              z.object({
                centre: z.string().optional(),
                page: centerPageSchema,
              }).optional()
            ).optional(),
          }).optional()
        ).optional(),
      })
    ).optional(),
  }),
});

export const collections = {
  'centres': centresCollection,
};
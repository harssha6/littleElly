import { z, defineCollection } from 'astro:content';

const centerHeadSchema = z.object({
  title: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  img: z.string().optional().nullable(),
  experience: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

const centerCoordinatorSchema = z.object({
  title: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  img: z.string().optional().nullable(),
  experience: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

const aboutUsSchema = z.object({
  text: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

const centerPageSchema = z.object({
  subtitle: z.string().optional().nullable(),
  centreHead: centerHeadSchema.optional().nullable(),
  centreCoordinator: centerCoordinatorSchema.optional().nullable(),
  aboutUs: aboutUsSchema.optional().nullable(),
  address: z.string().optional().nullable(),
  addressTitle: z.string().optional().nullable(),
  telephone: z.string().optional().nullable(),
  telephone_1: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
}).optional();


const centresCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    centers: z.array(
      z.object({
        state: z.string().optional(),
        page: centerPageSchema,
        poweredBy: z.boolean().optional(),
        districts: z.array(
          z.object({
            district: z.string().optional(),
            page: centerPageSchema,
            poweredBy: z.boolean().optional(),
            centres: z.array(
              z.object({
                centre: z.string().optional(),
                poweredBy: z.boolean().optional(),
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
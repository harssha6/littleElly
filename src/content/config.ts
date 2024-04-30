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

const admissionsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    centers: z.array(
      z.object({
        pageTitle: z.any().optional(),
        pageDescription: z.any().optional(),
        admissionProcess: z.any().optional(),
        testimonials: z.any().optional(),
      })
    ).optional(),
  }),
});

const franchiseCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    pageTitle1: z.any().optional(),
    pageDescription1: z.any().optional(),
  }),
});

// const homeCollection = defineCollection({
//   type: 'content',
//   schema: () => z.object({
//     home: z.array(
//       z.object({
//         heading: z.string().optional(),
//         description: z.string().optional(),
//         buttonText: z.string().optional(),
//         buttonLink: z.string().optional(),
//         quote: z.string().optional(),
//         quoteImage: z.string().optional().nullable(),
//         quoteImageAlt: z.string().optional(),
//         quotePersonName: z.string().optional(),
//         cloudData: z.array(
//           z.object({
//             title: z.string().optional(),
//             description: z.string().optional(),
//           })),
//         whyChooseLittileElly: z.array(
//           z.object({
//             image: z.any().optional(),
//             imageAlt: z.string().optional(),
//             description: z.string().optional(),
//           })),
//         ellyUniverseSection: z.array(
//           z.object({
//             title: z.string().optional(),
//             subtitle: z.string().optional(),
//             description: z.string().optional(),
//           })),
//         happyCurriculumSection: z.array(
//           z.object({
//             heading: z.string().optional(),
//             subtitle: z.string().optional(),
//             descriptionTop: z.string().optional(),
//             descriptionLeft: z.string().optional(),
//             animationArea: z.object({
//               title: z.string().optional(),
//               description: z.string().optional(),
//             })
//           })),
//         ourPrograms: z.array(
//           z.object({
//             heading: z.string().optional(),
//             buttonText: z.string().optional(),
//             buttonLink: z.string().optional(),
//             ourPrograms: z.object({
//               image: z.any().optional(),
//               imageAltTag: z.string().optional(),
//               title: z.string().optional(),
//               subtitle: z.string().optional(),
//             })
//           })),
//         dayCaresSection: z.array(
//           z.object({
//             title: z.string().optional(),
//             description: z.string().optional(),
//             image: z.any().optional(),
//             imageAlt: z.string().optional(),
//             list: z.object({
//               listText: z.string().optional(),
//             })
//           })),
//         newsAndEvent: z.array(
//           z.object({
//             title: z.string().optional(),
//             description: z.string().optional(),
//             instagramText: z.string().optional(),
//             instagramUrl: z.string().optional(),
//             newsAndEventCardDetail: z.object({
//               image: z.any().optional(),
//               imageAltTag: z.string().optional(),
//               title: z.string().optional(),
//               description: z.string().optional(),
//             })
//           })),
//         testimonials: z.array(
//           z.object({
//             title: z.string().optional(),
//             subTitle: z.string().optional(),
//             testimonialsCardDetail: z.object({
//               image: z.any().optional(),
//               imageAltTag: z.string().optional(),
//               title: z.string().optional(),
//               description: z.string().optional(),
//               personName: z.string().optional(),
//               personTitle: z.string().optional(),
//               group: z.string().optional(),
//             })
//           })),
//         ctaCardTitle: z.string().optional(),

//       })
//     ).optional(),
//   }),
// });

const homeCollection = defineCollection({
  type: 'content',
  schema: () => z.object({

    heading: z.string().optional(),
    description: z.string().optional(),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    quote: z.string().optional(),
    quoteImage: z.any().optional().nullable(),
    quoteImageAlt: z.string().optional(),
    quotePersonName: z.string().optional(),
    cloudData: z.any().optional(),
    whyChooseLittileElly: z.any().optional(),
    ellyUniverseSection: z.any().optional(),
    happyCurriculumSection: z.any().optional(),
    ourPrograms: z.any().optional(),
    dayCaresSection: z.any().optional(),
    newsAndEvent: z.any().optional(),
    testimonials: z.any().optional(),
    ctaCardTitle: z.string().optional(),

  }),
});

const aboutUsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    heroImages: z.any().optional(),
    herotitle: z.any().optional(),
    visionAndMissionSection: z.any().optional(),
    ourPhilosophySection: z.any().optional(),
    ourTeamSection: z.any().optional(),
    awardsSection: z.any().optional(),
    ctaCardTitleAbout: z.any().optional(),
  }),
});

export const collections = {
  'centres': centresCollection,
  'home': homeCollection,
  'aboutUs': aboutUsCollection,
  // 'admissions': admissionsCollection,

};
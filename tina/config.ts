import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const centerPage = {
  type: "object",
  label: "Add Page",
  name: "page",
  fields: [
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "object",
      label: "Centre Head",
      name: "centreHead",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "image",
          label: "Image URL",
          name: "img",
        },
        {
          type: "string",
          label: "Experience",
          name: "experience",
        },
        {
          type: "rich-text",
          label: "Description",
          name: "description",
        },
      ],
    },
    {
      type: "object",
      label: "Centre Coordinator",
      name: "centreCoordinator",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "image",
          label: "Image URL",
          name: "img",
        },
        {
          type: "string",
          label: "Experience",
          name: "experience",
        },
        {
          type: "rich-text",
          label: "Description",
          name: "description",
        },
      ],
    },
    {
      type: "object",
      label: "About Us",
      name: "aboutUs",
      fields: [
        {
          type: "string",
          label: "Text",
          name: "text",
        },
        {
          type: "rich-text",
          label: "Description",
          name: "description",
        },
      ],
    },
    {
      type: "string",
      label: "Address Title",
      name: "addressTitle",
    },
    {
      type: "string",
      label: "Address",
      name: "address",
    },
    {
      type: "string",
      label: "Telephone",
      name: "telephone",
    },
    {
      type: "string",
      label: "Additional Telephone",
      name: "telephone_1",
    },
    {
      type: "string",
      label: "Email",
      name: "email",
    },
  ],
};



export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: "ff3fc3c1-9a61-4add-99b3-21daac12f6c5", // Get this from tina.io
  token: "1081257f565400924c7b54cc51ae00f47142eb39", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        path: "src/content/home",
        fields: [
          {
            type: 'string',
            label: 'Heading',
            name: 'heading'
          },
          {
            type: 'string',
            label: 'Description',
            name: 'description'
          },
          {
            type: 'string',
            label: 'Button Text',
            name: 'buttonText'
          },
          {
            type: 'string',
            label: 'Button Link',
            name: 'buttonLink'
          },
          {
            type: 'string',
            label: 'Quote',
            name: 'quote'
          },
          {
            type: 'image',
            label: 'Quote Profile Image',
            name: 'quoteImage'
          },
          {
            type: 'string',
            label: 'Quote Profile Image Alt Description',
            name: 'quoteImageAlt'
          },
          {
            type: 'string',
            label: 'Quote person Name',
            name: 'quotePersonName'
          },
          {
            type: 'object',
            list: true,
            label: 'Overview Section',
            name: 'cloudData',
            ui: {
              itemProps: (item) => ({
                label: item?.title
              }),
            },
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Description',
                name: 'description'
              },
            ]
          },
          {
            type: 'object',
            list: true,
            label: 'Why Choose Little Elly Section',
            name: 'whyChooseLittileElly',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Subtitle',
                name: 'subtitle'
              },
              {
                type: 'object',
                list: true,
                label: 'Why Choose littleElly section',
                name: 'whyChooseLittileElly',
                fields: [{
                  type: 'image',
                  label: 'Image',
                  name: 'image'
                },
                {
                  type: 'string',
                  label: 'Image Alt Description',
                  name: 'imageAlt'
                },
                {
                  type: 'string',
                  label: 'Description',
                  name: 'description'
                }]
              },

            ]
          },
          {
            type: 'object',
            list: true,
            label: 'Elly Universe Section',
            name: 'ellyUniverseSection',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Subtitle',
                name: 'subtitle'
              },
              {
                type: 'rich-text',
                label: 'Description',
                name: 'description'
              }
            ]
          },
          {
            type: 'object',
            list: true,
            label: 'Happy Curriculum Section',
            name: 'happyCurriculumSection',

            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading'
              },
              {
                type: 'rich-text',
                label: 'Description Top',
                name: 'descriptionTop'
              },
              {
                type: 'rich-text',
                label: 'Description Left',
                name: 'descriptionLeft'
              },
              {
                type: 'object',
                list: true,
                label: 'Happy Curriculum Animation',
                name: 'animationArea',
                ui: {
                  itemProps: (item) => ({
                    label: item?.title
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    label: 'Title',
                    name: 'title'
                  },
                  {
                    type: 'string',
                    label: 'Description',
                    name: 'description'
                  },
                ]
              }

            ]
          },
          {
            type: 'object',
            list: true,
            label: 'Our Programs Section',
            name: 'ourPrograms',
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading'
              },
              {
                type: 'string',
                label: 'Button Text',
                name: 'buttonText'
              },
              {
                type: 'string',
                label: 'Button Link',
                name: 'buttonLink'
              },
              {
                type: 'object',
                list: true,
                label: 'Our Programs Section',
                name: 'ourPrograms',
                ui: {
                  itemProps: (item) => ({
                    label: item?.title
                  }),
                },
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'Image Alt Tag',
                    name: 'imageAltTag'
                  },
                  {
                    type: 'string',
                    label: 'Title',
                    name: 'title'
                  },
                  {
                    type: 'string',
                    label: 'Sub-Title',
                    name: 'subTitle'
                  },
                ]
              },

            ]
          },
          {
            type: 'object',
            list: true,
            label: 'Day Care Facility Section',
            name: 'dayCaresSection',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Description',
                name: 'description'
              },
              {
                type: 'image',
                label: 'Image',
                name: 'image'
              },
              {
                type: 'string',
                label: 'Image Alt Tag',
                name: 'imageAltTag'
              },
              {
                type: 'object',
                list: true,
                label: 'List',
                name: 'list',
                ui: {
                  itemProps: (item) => ({
                    label: item?.listText
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    label: 'list text',
                    name: 'listText'
                  }
                ]
              }
            ]
          },
          {
            type: 'object',
            list: true,
            label: 'News and Event Section',
            name: 'newsAndEvent',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Description',
                name: 'description'
              },
              {
                type: 'string',
                label: 'Instagram Hyperlink UI text',
                name: 'instagramText'
              },
              {
                type: 'string',
                label: 'Instagram Url',
                name: 'instagramUrl'
              },
              {
                type: 'object',
                list: true,
                label: 'News and Event Section Card Details',
                name: 'newsAndEventCardDetail',
                ui: {
                  itemProps: (item) => ({
                    label: item?.title
                  }),
                },
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'Image Alt Tag',
                    name: 'imageAltTag'
                  },
                  {
                    type: 'string',
                    label: 'Title',
                    name: 'title'
                  },
                  {
                    type: 'string',
                    label: 'Description',
                    name: 'description'
                  },
                ]
              },
            ]
          },

          {
            type: 'object',
            list: true,
            label: 'Testimonials Section',
            name: 'testimonials',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Sub-Title',
                name: 'subTitle'
              },
              {
                type: 'object',
                list: true,
                label: 'Testimonials Section Card Details',
                name: 'testimonialsCardDetail',
                ui: {
                  itemProps: (item) => ({
                    label: `Testimonial of ${item?.personName}`
                  }),
                },
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'Image Alt Tag',
                    name: 'imageAltTag'
                  },
                  {
                    type: 'string',
                    label: 'Title',
                    name: 'title'
                  },
                  {
                    type: 'string',
                    label: 'Quote',
                    name: 'quote'
                  },
                  {
                    type: 'string',
                    label: 'Description',
                    name: 'description'
                  },
                  {
                    type: 'string',
                    label: 'Person Name',
                    name: 'personName'
                  },
                  {
                    type: 'string',
                    label: 'Person Title',
                    name: 'personTitle'
                  },
                  {
                    type: 'string',
                    label: 'Group/Class',
                    name: 'group'
                  },
                ]
              },

            ]
          },

          {
            type: "string",
            label: "CTA Card Title",
            name: "ctaCardTitle",
          },
        ]
      },

      {
        name: "aboutUs",
        label: "About Us",
        path: "src/content/aboutUs",
        fields: [
          {

            type: 'object',
            label: 'Hero Images',
            name: 'heroImages',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.imageAlt
              }),
            },
            fields: [
              {
                type: 'image',
                label: 'Image',
                name: 'slide'
              },
              {
                type: 'string',
                label: 'Position',
                name: 'position'
              },
            ]
          },
          {
            type: 'string',
            label: 'Hero Section Title',
            name: 'herotitle'
          },
          {
            type: 'object',
            label: 'Vision And Mission Section',
            name: 'visionAndMissionSection',
            list: true,
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Description',
                name: 'description'
              },
              {
                type: 'object',
                label: 'Slide Images',
                name: 'slideImages',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.imageAlt
                  }),
                },
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'ImageAlt',
                    name: 'imageAlt'
                  },
                ]
              },
            ]
          },
          {
            type: 'object',
            label: 'Our Philosophy Section',
            name: 'ourPhilosophySection',
            list: true,
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Description',
                name: 'description'
              },
              {
                type: 'image',
                label: 'Image',
                name: 'image'
              },
              {
                type: 'string',
                label: 'ImageAlt',
                name: 'imageAlt'
              },
            ]
          },
          {
            type: 'object',
            label: 'Our Team Section',
            name: 'ourTeamSection',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.imageAlt
              }),
            },
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading'
              },
              {
                type: 'object',
                label: 'Team Members',
                name: 'teamMembers',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.personRole
                  }),
                },
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'ImageAlt',
                    name: 'imageAlt'
                  },
                  {
                    type: 'string',
                    label: 'Person Name',
                    name: 'personName'
                  },
                  {
                    type: 'string',
                    label: 'Person Role / Team Name',
                    name: 'personRole'
                  },

                ]
              },

            ]
          },
          {
            type: 'object',
            label: 'Awards Section',
            name: 'awardsSection',
            list: true,
            fields: [
              {
                type: 'string',
                label: 'Heading',
                name: 'heading'
              },
              {
                type: 'string',
                label: 'Description',
                name: 'descrption'
              },
              {
                type: 'object',
                label: 'Award Images',
                name: 'awardImages',
                list: true,
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'ImageAlt',
                    name: 'imageAlt'
                  },
                ]
              }
            ]
          },
          {
            type: "string",
            label: "CTA Card Title",
            name: "ctaCardTitleAbout",
          },
        ]
      },

      {
        name: "centres",
        label: "Centres Management",
        path: "src/content/centres",
        fields: [
          {
            type: 'object',
            list: true,
            required: false,
            label: 'Centers',
            name: 'centers',
            ui: {
              itemProps: (item) => ({
                label: item?.state
              }),
            },
            fields: [
              {
                type: 'string',
                label: 'State (Name)',
                name: 'state'
              },
              {
                type: 'boolean',
                name: 'poweredBy',
                label: 'Powered By Little Elly',
              },
              centerPage,
              {
                type: 'object',
                label: 'Add Districts',
                name: 'districts',
                list: true,
                required: false,
                ui: {
                  itemProps: (item) => ({
                    label: item?.district
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    label: 'District (Name)',
                    name: 'district'
                  },
                  {
                    type: 'boolean',
                    name: 'poweredBy',
                    label: 'Powered By Little Elly',
                  },
                  centerPage,
                  {
                    type: 'object',
                    label: 'Add Centres',
                    name: 'centres',
                    list: true,
                    required: false,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.centre
                      }),
                    },
                    fields: [
                      {
                        type: 'string',
                        label: 'Centre (Name)',
                        name: 'centre'
                      },
                      {
                        type: 'boolean',
                        name: 'poweredBy',
                        label: 'Powered By Little Elly',
                      },
                      centerPage,
                    ]
                  },
                ]
              }
            ]
          },
        ]
      },

      {
        name: "admissions",
        label: "Admissions",
        path: "src/content/admissions",
        fields: [
          { type: "string", name: "pageTitle", label: "Page Title" },
          { type: "string", name: "pageDescription", label: "Page Description" },

          { 
            type: "object",
            name: "admissionProcess",
            label: "Admission Process",
            fields: [
              { type: "string", name: "sectionHeading", label: "Section Heading" },

              {
                type: "object",
                list: true,
                name: "admissionProcessSteps",
                label: "Admission Process Steps",
                fields: [
                 {
                  type: "object",
                  name: "item1",
                  label: "Admission Process Step 1",
                  fields: [
                    { type: "string", name: "listHeadingNum1", label: "List Heading No." },
                    { type: "string", name: "listHeading1", label: "List Heading 1" },
                    { type: "rich-text", name: "listDescription1", label: "List Description 1" },
                    {
                      type: "object",
                      list: true,
                      name: "gradeAge",
                      label: "Table",
                      fields: [
                        { type: "string", name: "grade", label: "Grade" },
                        { type: "string", name: "age", label: "Age" },
                      ]
                    }
                  ]
                 },

                 {
                  type: "object",
                  name: "item2",
                  label: "Admission Process Step 2",
                  fields: [
                    { type: "string", name: "listHeadingNum2", label: "List Heading No." },
                    { type: "string", name: "listHeading2", label: "List Heading 2" },
                    { type: "rich-text", name: "listDescription2", label: "List Description 2" },
                  ]
                 },

                 {
                  type: "object",
                  name: "item3",
                  label: "Admission Process Step 3",
                  fields: [
                    { type: "string", name: "listHeadingNum3", label: "List Heading No." },
                    { type: "string", name: "listHeading3", label: "List Heading 3" },
                    { type: "rich-text", name: "listDescription3", label: "List Description 3" },
                  ]
                 },
                ]
              },

              
            ]
          },

          {
            type: 'object',
            list: true,
            label: 'Testimonials Section',
            name: 'testimonials',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title'
              },
              {
                type: 'string',
                label: 'Sub-Title',
                name: 'subTitle'
              },
              {
                type: 'object',
                list: true,
                label: 'Testimonials Section Card Details',
                name: 'testimonialsCardDetail',
                ui: {
                  itemProps: (item) => ({
                    label: `Testimonial of ${item?.personName}`
                  }),
                },
                fields: [
                  {
                    type: 'image',
                    label: 'Image',
                    name: 'image'
                  },
                  {
                    type: 'string',
                    label: 'Image Alt Tag',
                    name: 'imageAltTag'
                  },
                  {
                    type: 'string',
                    label: 'Title',
                    name: 'title'
                  },
                  {
                    type: 'string',
                    label: 'Quote',
                    name: 'quote'
                  },
                  {
                    type: 'string',
                    label: 'Description',
                    name: 'description'
                  },
                  {
                    type: 'string',
                    label: 'Person Name',
                    name: 'personName'
                  },
                  {
                    type: 'string',
                    label: 'Person Title',
                    name: 'personTitle'
                  },
                  {
                    type: 'string',
                    label: 'Group/Class',
                    name: 'group'
                  },
                ]
              },

            ]
          },
        ],
      },

      {
        name: "franchise",
        label: "Franchise",
        path: "src/content/franchise",
        fields: [
          { type: "string", name: "pageTitle1", label: "Page Title" },
          { type: "string", name: "pageDescription1", label: "Page Description" },
        ]
      },

      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          { type: "string", name: "category", label: "Category" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "titleTag", label: "Title tag" },
          { type: "rich-text", name: "caption", label: "Caption" },
          { type: "string", name: "metaDescription", label: "Meta Description" },
          { type: "datetime", name: "publishedDate", label: "Published Date" },
          { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
          { type: "rich-text", name: "blog", label: "Blog" },
        ]
      },
    ],
  },
});

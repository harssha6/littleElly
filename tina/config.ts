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
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

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
                      centerPage,
                    ]
                  },
                ]
              }
            ]
          },
        ]
      },
    ],
  },
});

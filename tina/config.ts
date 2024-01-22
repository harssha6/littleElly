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
      label: "Principal Name",
      name: "principalName",
    }
  ],
}

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

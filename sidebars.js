/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "category",
      label: "Beginner guides",
      items: ["Installation", "Configuration"],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        "reference/Overview",

        {
          type: "category",

          label: "Components",
          collapsed: false,

          items: [
            "reference/components/WFComponent",
            "reference/components/WFDynamicList",
            "reference/components/WFFormComponent",
            "reference/components/WFInvisibleForm",
            "reference/components/WFCMSList",
            "reference/components/WFImage",
            "reference/components/WFNav",
            "reference/components/WFSlider",
            "reference/components/WFTabs",
          ],
        },
        {
          type: "category",
          label: "Routing",
          collapsed: false,

          items: ["reference/routing/WFRoute"],
        },
        {
          type: "category",
          label: "Authentication",
          collapsed: false,

          items: [
            "reference/auth/WFAuth",
            "reference/auth/WFAuthMiddleware",
          ],
        },

        {
          type: "category",
          label: "Utilities",
          collapsed: false,

          items: [
            "reference/utils/onReady",
            "reference/utils/navigate",
            "reference/utils/createComponent",
          ],
        },
        {
          type: "category",
          label: "Data Services",
          collapsed: false,

          items: [
            "reference/services/RESTAPIClient",
            // "reference/services/GraphQLClient",
            // "reference/services/FireStoreClient",
            // "reference/services/SupabaseClient",
          ],
        },
      ],
    },
    // {
    //   type: "autogenerated",
    //   dirName: ".", // '.' means the current docs folder
    // },
  ],
};

module.exports = sidebars;

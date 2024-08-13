// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arab Apps Documentation",
  tagline:
    "Explore technical documentation for Arab Apps APIs. Find guides, tutorials, code samples, API references, and more to enhance your development experience.",
  favicon: "img/favicon.ico",

  url: "https://arabapps.example.com",
  baseUrl: "/",

  organizationName: "Arab Apps",
  projectName: "arab-apps-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/arab-apps",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/arab-apps",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/arabapps-social-card.jpg",
    navbar: {
      title: "Arab Apps",
      logo: {
        alt: "Arab Apps Logo",
        src: "img/arabapps.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/arab-apps",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/arab-apps",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arab Apps. Built with ❤️ by Arab Apps team.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

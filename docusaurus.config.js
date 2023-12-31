// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SDK Documentation",
  tagline: "Learn how to use Deezer SDK to develop your own music app",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://developers.deezer.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  // onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Developers",
        logo: {
          alt: "Deezer Developers Logo",
          src: "img/logo.svg",
          width: 30,
          height: 30,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "left",
            label: "Documentation",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Demo app",
                to: "/docs/introduction",
              },
              {
                label: "Preview",
                href: "https://dev-sample-player.deez.re/",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/deezer/sdk-sample-app-web",
              },
              {
                label: "Release Notes",
                href: "https://deezer.jira.com/wiki/spaces/RTLDZR/pages/2842755107/Release+Candidate+deliveries+RCs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deezer. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    // Support for search.
    // Does not work in dev mode (to preview in dev mode, run "npm run build" then "npm run serve")
    [require.resolve("@cmfcmf/docusaurus-search-local"), {}],
  ],
};

module.exports = config;

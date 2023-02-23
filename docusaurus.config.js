// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jay Khan",
  tagline: "I create User Interfaces and Digital Assets",
  url: "https://www.jaykhan.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/jk-favicon-transparent.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Jay Khan", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
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
      navbar: {
        title: "Jay Khan",
        logo: {
          alt: "Jay Khan logo",
          src: "img/jk-logo-blue.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "tech-stack",
          //   position: "left",
          //   label: "Docs",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://jaykhan.xyz",
            label: "Home",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/jkhanprofile",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://github.com/jaykhan-dev",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `jaykhan.sound@gmail.com | ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

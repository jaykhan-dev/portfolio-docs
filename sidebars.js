/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  Sidebar: [
    "tech-stack",
    "resume",
    {
      type: "category",
      label: "Web Dev",
      items: [
        "web-dev/shaybeas",
        "web-dev/appreci",
        "web-dev/pitbull-community",
        "web-dev/scribendi",
        "web-dev/budgetmore",
      ],
    },
    {
      type: "category",
      label: "Graphics",
      items: [
        "graphics/logos",
        "graphics/posters",
        "graphics/marketing",
        "graphics/motion-graphics",
        "graphics/social-media",
      ],
    },
    "design-philosophy",
    "content-strategy",
  ],
};

module.exports = sidebars;

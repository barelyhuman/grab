import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "grab",
  base: "/grab/",
  description: "build and deploy universal javascript servers",
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/barelyhuman/grab" },
    ],
    editLink: {
      repo: "barelyhuman/grab",
    },
    nav: [
      { text: "guide", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "download",
        link: "https://github.com/barelyhuman/grab/releases",
      },
    ],
    sidebar: {},
  },
});

function getGuideSidebar() {
  return [
    {
      text: "Introduction",
      children: [
        ["/guide/", "Getting Started"],
        ["/guide/configuration", "Configuration"],
        ["/guide/auto-imports", "Auto Imports"],
        ["/guide/routing", "Route Handling"],
        ["/guide/storage", "Storage Layer"],
        ["/guide/cache", "Cache API"],
        ["/guide/assets", "Assets Handling"],
        ["/guide/typescript", "Typescript Support"],
      ].map((i) => toItem(i)),
    },
    {
      text: "Advanced",
      children: [
        ["/guide/plugins", "Plugins"],
        ["/guide/custom-presets", "Custom Presets"],
      ].map(toItem),
    },
    {
      text: "Community",
      children: [["/guide/contribution", "Contribution"]].map((i) => toItem(i)),
    },
  ];
}

function getDeploymentSidebar() {
  return [
    {
      text: "General",
      children: [
        ["/deploy/", "Overview"],
        ["/deploy/node", "Node.js"],
      ].map(toItem),
    },
    {
      text: "Providers",
      children: [
        ["/deploy/providers/aws", "AWS"],
        ["/deploy/providers/azure", "Azure"],
        ["/deploy/providers/cloudflare", "Cloudflare"],
        ["/deploy/providers/digitalocean", "DigitalOcean"],
        ["/deploy/providers/firebase", "Firebase"],
        ["/deploy/providers/heroku", "Heroku"],
        ["/deploy/providers/layer0", "Layer0"],
        ["/deploy/providers/netlify", "Netlify"],
        ["/deploy/providers/render", "Render.com"],
        ["/deploy/providers/stormkit", "Stormkit"],
        ["/deploy/providers/vercel", "Vercel"],
      ].map(toItem),
    },
  ];
}

function toItem(args: string[]) {
  return { link: args[0], text: args[1] };
}

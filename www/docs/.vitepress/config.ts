import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "grab",
  base: "/grab/",
  description: "build and deploy universal javascript servers",
  lastUpdated: true,

  themeConfig: {
    repo: "barelyhuman/grab",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "edit this page on github",
    lastUpdated: "last updated",

    nav: [
      { text: "guide", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "reference",
        link: "/reference/cli",
        activeMatch: "^/reference/",
      },
      {
        text: "download",
        link: "https://github.com/barelyhuman/grab/releases",
      },
    ],
    sidebar: [...getGuideSidebar()],
  },
});

function getGuideSidebar() {
  return [
    {
      text: "introduction",
      children: [
        ["/guide/", "getting started"],
        ["/guide/installation", "installation"],
      ].map((i) => toItem(i)),
    },
    {
      text: "reference",
      children: [["/reference/cli", "cli"]].map((i) => toItem(i)),
    },
  ];
}

function toItem(args: string[]) {
  return { link: args[0], text: args[1] };
}

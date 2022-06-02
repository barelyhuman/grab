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
      { text: "reference", link: "/reference/cli", activeMatch: "^/reference/" },
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
      items: [
        ["/guide/", "getting started"],
        ["/guide/installation", "installation"],
      ].map((i) => toItem(i)),
    },
    {
      text:"reference",
      items:[
        ["/reference/cli","cli"]
      ].map((i)=>toItem(i))
    },
  ];
}

function toItem(args: string[]) {
  return { link: args[0], text: args[1] };
}

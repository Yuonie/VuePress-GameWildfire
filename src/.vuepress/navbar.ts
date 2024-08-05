import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/portfolio",
  {
    text: "同盟文档", 
    icon: "file",
    link: "apidoc/",
  },
  {
    text: "游戏攻略",
    icon: "gamepad",
    prefix: "/apidoc/game/",
    children: ["file2.md","file1.md","ReadME.md"],
  },
]);

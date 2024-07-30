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
    link: "/apidoc/game/",
  },
]);

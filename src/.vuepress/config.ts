import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  lang: "zh-CN",
  title: "燎原火🔥",
  description: "三国谋谋定天下：燎原火帮会专用",

  theme,
});

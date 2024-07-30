import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});

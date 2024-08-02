import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/@vueuse+core@10.11.0_vue@3.4.34/node_modules/@vueuse/core/index.mjs";
import FontIcon from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import PDF from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import BiliBili from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";

import "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});

import { defineClientConfig } from "vuepress/client";
import MyComponent from "./components/api.vue";
import MyComponentRes from "./components/api-response.vue";
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("api", MyComponent);
    app.component("apiRes", MyComponentRes);
  },
});
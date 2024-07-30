import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/demo/layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/layout.html\",\"title\":\"布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"布局\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"指南\"],\"tag\":[\"布局\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.53,\"words\":159},\"filePathRelative\":\"demo/layout.md\",\"excerpt\":\"<p>布局包括:</p>\\n<ul>\\n<li><a href=\\\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">导航栏</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">侧边栏</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">页脚</a></li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

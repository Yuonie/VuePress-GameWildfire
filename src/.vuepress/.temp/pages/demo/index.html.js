import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"文档学习\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文档学习\",\"index\":true,\"icon\":\"laptop-code\",\"comment\":false,\"category\":[\"使用指南\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":19},\"filePathRelative\":\"demo/README.md\",\"excerpt\":\"\"}")
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

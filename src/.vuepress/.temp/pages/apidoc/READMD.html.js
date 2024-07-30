import comp from "C:/Work/Github/VuePressThemeHope/my-docs/src/.vuepress/.temp/pages/apidoc/READMD.html.vue"
const data = JSON.parse("{\"path\":\"/apidoc/READMD.html\",\"title\":\"供应商API文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"供应商API文档\",\"index\":false,\"icon\":\"laptop-code\",\"comment\":false,\"category\":[\"云平台下游服务商接口\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"apidoc/READMD.md\"}")
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

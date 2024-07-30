import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/guide/foo/ray.html.vue"
const data = JSON.parse("{\"path\":\"/guide/foo/ray.html\",\"title\":\"Ray\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Ray\",\"icon\":\"circle-info\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":10},\"filePathRelative\":\"guide/foo/ray.md\",\"excerpt\":\"<p>功能详情...</p>\\n\"}")
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

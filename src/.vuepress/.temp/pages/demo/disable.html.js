import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/demo/disable.html.vue"
const data = JSON.parse("{\"path\":\"/demo/disable.html\",\"title\":\"布局与功能禁用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"布局与功能禁用\",\"icon\":\"gears\",\"order\":4,\"category\":[\"使用指南\"],\"tag\":[\"禁用\"],\"navbar\":false,\"sidebar\":false,\"breadcrumb\":false,\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"prev\":false,\"next\":false,\"comment\":false,\"footer\":false,\"backtotop\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.43,\"words\":128},\"filePathRelative\":\"demo/disable.md\",\"excerpt\":\"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\\n\"}")
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

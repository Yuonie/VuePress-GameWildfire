import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/guide/foo/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/foo/\",\"title\":\"Foo 功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Foo 功能\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"详情\",\"slug\":\"详情\",\"link\":\"#详情\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"guide/foo/README.md\",\"excerpt\":\"<h2>介绍</h2>\\n<p>我们支持 foo 功能，...</p>\\n<h2>详情</h2>\\n<ul>\\n<li><a href=\\\"/guide/foo/ray.html\\\" target=\\\"_blank\\\">ray</a></li>\\n<li>...</li>\\n</ul>\\n\"}")
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

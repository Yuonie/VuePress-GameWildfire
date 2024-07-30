import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指南\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"功能亮点\",\"slug\":\"功能亮点\",\"link\":\"#功能亮点\",\"children\":[{\"level\":3,\"title\":\"Bar\",\"slug\":\"bar\",\"link\":\"#bar\",\"children\":[]},{\"level\":3,\"title\":\"Foo\",\"slug\":\"foo\",\"link\":\"#foo\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"guide/README.md\",\"excerpt\":\"<h2>功能亮点</h2>\\n<h3>Bar</h3>\\n<ul>\\n<li><a href=\\\"/guide/bar/baz.html\\\" target=\\\"_blank\\\">baz</a></li>\\n<li>...</li>\\n</ul>\\n<h3>Foo</h3>\\n<ul>\\n<li><a href=\\\"/guide/foo/ray.html\\\" target=\\\"_blank\\\">ray</a></li>\\n<li>...</li>\\n</ul>\\n\"}")
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

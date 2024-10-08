import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/demo/markdown.html.vue"
const data = JSON.parse("{\"path\":\"/demo/markdown.html\",\"title\":\"Markdown 展示\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Markdown 展示\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"使用指南\"],\"tag\":[\"Markdown\"],\"gitInclude\":[\"README.md\"]},\"headers\":[{\"level\":2,\"title\":\"Markdown 介绍\",\"slug\":\"markdown-介绍\",\"link\":\"#markdown-介绍\",\"children\":[]},{\"level\":2,\"title\":\"Markdown 配置\",\"slug\":\"markdown-配置\",\"link\":\"#markdown-配置\",\"children\":[]},{\"level\":2,\"title\":\"Markdown 扩展\",\"slug\":\"markdown-扩展\",\"link\":\"#markdown-扩展\",\"children\":[{\"level\":3,\"title\":\"VuePress 扩展\",\"slug\":\"vuepress-扩展\",\"link\":\"#vuepress-扩展\",\"children\":[]},{\"level\":3,\"title\":\"主题扩展\",\"slug\":\"主题扩展\",\"link\":\"#主题扩展\",\"children\":[]},{\"level\":3,\"title\":\"图片增强\",\"slug\":\"图片增强\",\"link\":\"#图片增强\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.51,\"words\":1053},\"filePathRelative\":\"demo/markdown.md\",\"excerpt\":\"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n\"}")
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

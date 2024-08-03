import comp from "C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/index.html.vue"
const data = JSON.parse("{\"path\":\"/apidoc/\",\"title\":\"免责声明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"免责声明\",\"index\":false,\"comment\":false,\"icon\":\"circle-info\",\"tags\":[\"免责声明\",\"目录\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.39,\"words\":116},\"filePathRelative\":\"apidoc/README.md\",\"excerpt\":\"<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">免责声明</p>\\n<ul>\\n<li>本站旨在为同盟部成员提供便利，所有文章中所涉及的工具、资源等均来自互联网，仅供学习和研究使用。本网站及其内容不参与任何形式的商业用途。</li>\\n<li>本站所提供的信息和资源仅供参考，用户应根据自身情况审慎使用。</li>\\n</ul>\\n</div>\\n\"}")
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

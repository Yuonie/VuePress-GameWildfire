import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/index.html.vue"
const data = JSON.parse("{\"path\":\"/apidoc/\",\"title\":\"免责声明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"免责声明\",\"index\":false,\"comment\":false,\"icon\":\"circle-info\",\"tags\":[\"免责声明\",\"目录\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.52,\"words\":155},\"filePathRelative\":\"apidoc/README.md\",\"excerpt\":\"<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">免责声明</p>\\n<p>本站以游戏内部帮会成员方便为目的，所有文章所涉及使用的工具、资源等均来自互联网， 仅供学习和研究使用，不参与商业用途。\\n遵守相关法律法规，由于本站资源部分来源于网络，开发也是使用开源模板，故无法核实资源侵权的真实性，无论出于何种目的要求本站删除内容，“您”均需要提供相关证明，否则不予处理。</p>\\n</div>\\n\"}")
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

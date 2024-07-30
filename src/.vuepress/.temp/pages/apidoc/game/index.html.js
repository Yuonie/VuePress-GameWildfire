import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/game/index.html.vue"
const data = JSON.parse("{\"path\":\"/apidoc/game/\",\"title\":\"游戏攻略\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"游戏攻略\",\"index\":false,\"order\":2,\"comment\":false,\"icon\":\"gamepad\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"apidoc/game/README.md\",\"excerpt\":\"<p><a href=\\\"/apidoc/game/\\\" target=\\\"_blank\\\">免责声明</a></p>\\n<div class=\\\"hint-container warning\\\">\\n<p class=\\\"hint-container-title\\\">暂无</p>\\n</div>\\n\"}")
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

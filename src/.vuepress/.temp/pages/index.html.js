import comp from "C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"三谋：燎原火\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"三谋：燎原火\",\"bgImage\":\"/assets/image/bg.jpg\",\"bgImageDark\":\"/assets/image/bg.jpg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\",\"opacity\":0.4},\"heroFullScreen\":true,\"heroText\":\"燎原火文档✨\",\"tagline\":\"三国：谋定天下146区帮会\",\"actions\":[{\"text\":\"同盟规则\",\"icon\":\"gear\",\"link\":\"./apidoc/rule1\",\"type\":\"primary\"},{\"text\":\"内部开荒攻略\",\"icon\":\"gamepad\",\"link\":\"./apidoc/game/file1\"}],\"copyright\":false,\"footer\":\"MIT Licensed, Copyright © 2019-present Mr.Hope\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.26,\"words\":77},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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

import comp from "C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"档案主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"档案主页\",\"icon\":\"home\",\"welcome\":\"👋 你好，我是\",\"name\":\"江户川柯南\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"天才少年侦探\",\"小兰的青梅竹马\",\"wwww\"],\"footer\":false,\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]}],\"readingTime\":{\"minutes\":0.33,\"words\":99},\"filePathRelative\":\"portfolio.md\",\"excerpt\":\"<h2>介绍</h2>\\n<p>这是一个档案主页的案例。</p>\\n<p>要使用此布局，你应该在页面 Frontmatter 中设置 <code>home: true</code> 和 <code>portfolio: true</code>。</p>\\n<p>相关配置文档请见 <a href=\\\"https://theme-hope.vuejs.press/zh/guide/blog/home.html#%E6%A1%A3%E6%A1%88%E7%B1%BB%E5%9E%8B%E4%B8%BB%E9%A1%B5\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">档案主页</a>。</p>\"}")
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

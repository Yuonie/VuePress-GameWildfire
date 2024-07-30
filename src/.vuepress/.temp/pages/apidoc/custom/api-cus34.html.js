import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/custom/api-cus34.html.vue"
const data = JSON.parse("{\"path\":\"/apidoc/custom/api-cus34.html\",\"title\":\"订单数据回写\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"订单数据回写\",\"index\":true,\"icon\":\"laptop-file\",\"order\":6,\"comment\":false,\"category\":[\"平台提供接口\"],\"tags\":[\"平台\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"接口描述\",\"slug\":\"接口描述\",\"link\":\"#接口描述\",\"children\":[]},{\"level\":2,\"title\":\"接口名称\",\"slug\":\"接口名称\",\"link\":\"#接口名称\",\"children\":[]},{\"level\":2,\"title\":\"参数设计\",\"slug\":\"参数设计\",\"link\":\"#参数设计\",\"children\":[]},{\"level\":2,\"title\":\"返回结果\",\"slug\":\"返回结果\",\"link\":\"#返回结果\",\"children\":[]},{\"level\":2,\"title\":\"请求示例\",\"slug\":\"请求示例\",\"link\":\"#请求示例\",\"children\":[]}],\"readingTime\":{\"minutes\":0.4,\"words\":120},\"filePathRelative\":\"apidoc/custom/api-cus34.md\",\"excerpt\":\"<h2>接口描述</h2>\\n<p>在救援过程中支持回传订单数据，可回传多次。注意金额、里程要在订单审核前回传。</p>\\n<h2>接口名称</h2>\\n<ul>\\n<li>接口名称：<code>/UpdateOrderData</code></li>\\n<li>请求方式：<code>HTTP-POST/application/json</code></li>\\n<li>接口提供方：云平台</li>\\n<li>接口消费方：服务商</li>\\n</ul>\\n<h2>参数设计</h2>\\n\"}")
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

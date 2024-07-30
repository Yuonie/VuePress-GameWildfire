import comp from "C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/provider/api-pro1.html.vue"
const data = JSON.parse("{\"path\":\"/apidoc/provider/api-pro1.html\",\"title\":\"订单下发接口\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"订单下发接口\",\"index\":true,\"icon\":\"arrow-down\",\"order\":3,\"comment\":false,\"category\":[\"供应商根据文档提供接口\"],\"tags\":[\"供应商\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"接口描述\",\"slug\":\"接口描述\",\"link\":\"#接口描述\",\"children\":[]},{\"level\":2,\"title\":\"接口名称\",\"slug\":\"接口名称\",\"link\":\"#接口名称\",\"children\":[]},{\"level\":2,\"title\":\"参数设计\",\"slug\":\"参数设计\",\"link\":\"#参数设计\",\"children\":[]},{\"level\":2,\"title\":\"返回结果\",\"slug\":\"返回结果\",\"link\":\"#返回结果\",\"children\":[]},{\"level\":2,\"title\":\"请求示例\",\"slug\":\"请求示例\",\"link\":\"#请求示例\",\"children\":[]}],\"readingTime\":{\"minutes\":0.59,\"words\":177},\"filePathRelative\":\"apidoc/provider/api-pro1.md\",\"excerpt\":\"<h2>接口描述</h2>\\n<p>将订单下发给服务商，服务商接到订单后，需要回写接收状态，确认订单是否接收。如果平台在20秒内没有收到服务商反馈的状态，则判定为订单下发失败，订单需要重新下发或者改派到其他服务商。</p>\\n<h2>接口名称</h2>\\n<ul>\\n<li>接口名称：服务商定义</li>\\n<li>请求方式：<code>HTTP-POST/application/json</code></li>\\n<li>接口提供方：供应商</li>\\n<li>接口消费方：云平台</li>\\n</ul>\\n<h2>参数设计</h2>\\n\"}")
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

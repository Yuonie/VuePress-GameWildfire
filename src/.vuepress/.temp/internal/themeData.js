export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/apidoc/rule2\":[\"$2a$10$aOoZYLnfnjn6XJ6K4fZlsuXwkhnIad.EEmgd0LPJkKhaDqS6jGexy\"],\"/apidoc/game/file1\":[\"$2a$10$tlv6F0CGV0H3aqLFrotIoOGzlfIMcE1uz18DNfMAKGQ0XpCdt4C/6\"]}},\"author\":{\"name\":\"燎原火🔥\"},\"darkmode\":\"toggle\",\"print\":false,\"fullscreen\":true,\"docsDir\":\"src\",\"navbarLayout\":{\"start\":[\"Brand\"],\"end\":[\"Outlook\",\"Search\",\"Links\"]},\"footer\":\"三国谋定天下\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"同盟文档\",\"icon\":\"file\",\"link\":\"apidoc/\"},{\"text\":\"游戏攻略\",\"icon\":\"gamepad\",\"prefix\":\"/apidoc/game/\",\"children\":[\"file1.md\",\"ReadME.md\"]}],\"sidebar\":{\"/\":[{\"text\":\"🔥燎原火🔥\",\"link\":\"apidoc/\",\"prefix\":\"apidoc/\",\"collapsible\":true,\"expanded\":true,\"children\":[\"README.md\",\"rule1.md\",\"rule2.md\",{\"text\":\"游戏攻略\",\"icon\":\"laptop-code\",\"prefix\":\"game/\",\"children\":[\"README.md\",\"file1.md\"]}]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"三谋：燎原火"} }],
  ["/apidoc/", { loader: () => import(/* webpackChunkName: "apidoc_index.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/index.html.js"), meta: {"t":"免责声明","i":"circle-info"} }],
  ["/apidoc/rule1.html", { loader: () => import(/* webpackChunkName: "apidoc_rule1.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/rule1.html.js"), meta: {"t":"燎原火同盟盟规V1.0","i":"file"} }],
  ["/apidoc/rule2.html", { loader: () => import(/* webpackChunkName: "apidoc_rule2.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/rule2.html.js"), meta: {"t":"燎原火官员职能公示","i":"gear","O":2} }],
  ["/apidoc/game/file1.html", { loader: () => import(/* webpackChunkName: "apidoc_game_file1.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/game/file1.html.js"), meta: {"t":"S2开荒节奏-内部攻略","i":"gamepad","O":2} }],
  ["/apidoc/game/", { loader: () => import(/* webpackChunkName: "apidoc_game_index.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/game/index.html.js"), meta: {"t":"S2开荒节奏-网上攻略","i":"gamepad"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/MyWork/Github/VuePress-GameWildfire/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

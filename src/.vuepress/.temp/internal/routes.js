export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案主页","i":"home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"三谋：燎原火"} }],
  ["/apidoc/", { loader: () => import(/* webpackChunkName: "apidoc_index.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/index.html.js"), meta: {"t":"免责声明","i":"circle-info"} }],
  ["/apidoc/rule1.html", { loader: () => import(/* webpackChunkName: "apidoc_rule1.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/rule1.html.js"), meta: {"t":"燎原火同盟盟规V1.0","i":"file"} }],
  ["/apidoc/rule2.html", { loader: () => import(/* webpackChunkName: "apidoc_rule2.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/rule2.html.js"), meta: {"t":"燎原火官员职能公式","i":"gear","O":2} }],
  ["/apidoc/game/", { loader: () => import(/* webpackChunkName: "apidoc_game_index.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/apidoc/game/index.html.js"), meta: {"t":"三谋S2开荒节奏-及注意事项","i":"gamepad"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Work/Github/三国：谋定天下/VuePress-GameWildfire/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

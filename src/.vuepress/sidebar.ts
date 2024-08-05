import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",
    {
      text: "🔥燎原火🔥",
      link: "apidoc/",
      prefix: "apidoc/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      children: [
        "README.md",
        "rule1.md",
        "rule2.md",
        {
          text: "游戏攻略",
          icon: "laptop-code",
          prefix: "game/",
          expanded:true,
          collapsible:true,
          children: [
            {
             text:"S2开荒指南",
             icon:"gamepad",
             expanded:true,
             collapsible:true,
             children:[
              "README.md",
              "file1.md",
             ]
            },
            {
              text:"S2阵容推荐",
              icon:"cloud",
              expanded:true,
              collapsible:true,
              children:[
                "file2.md",
               ]
            }
          ],
        },
        // {
        //   text: "接口提供方-供应商",
        //   icon: "book",
        //   // 可选的, 设置分组是否可以折叠，默认值是 false,
        //   collapsible: true,
        //   // 可选的。设置分组是否默认展开，默认值是 false
        //   expanded: true,
        //   prefix: "provider/",
        //   children: "structure",
        // },
      ],
    },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});

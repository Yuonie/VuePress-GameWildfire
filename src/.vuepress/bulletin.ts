export const notice = [
  {
    path: "/",
    title: "同盟公告",
    fullscreen: true,
    confirm: true ,
    showOnce: false,
    content: `
<div class="hint-container"><p class="hint-container-title">请盟友认真阅读</p>
     <ul>
      <li><strong>盟规以及S2成员名称文档</strong> <span style="color:red">请盟友优先阅读并及时操作</span>
      <ul>
     <li><a href="https://docs.qq.com/doc/DZUZJSlRlaFlLUXJC">【腾讯文档】盟规</a></li>
     <li><a href="https://docs.qq.com/sheet/DZXFVblhKeEh2bXB1?tab=BB08J2">【腾讯文档】燎原火成员 S2 名称，点击编辑S2名称</a></li>
      </ul>
      </li>
    </ul>
    <li><a href="/apidoc/game/file2"><strong>S2黑马阵容推荐</strong></a></li>
    </ul>
</div>
`,
    actions: [
      // {
      //   text: "Primary Action",
      //   link: "https://theme-hope.vuejs.press/",
      //   type: "primary" as const, // Use 'as const' to ensure the type is a literal
      // },
      {
        text: "已了解",
        link:"/apidoc/rule1",
        type: "primary" as const, // Ensure type matches the expected literal
      },
    ],
  },
  {
    path: "/apidoc/",
    title: "同盟公告",
    fullscreen: false,
    confirm: true ,
    showOnce: false,
    content: `
<div class="hint-container"><p class="hint-container-title">请盟友认真阅读</p>
     <ul>
      <li><strong>盟规以及S2成员名称文档</strong> <span style="color:red">请盟友优先阅读并及时操作</span>
      <ul>
     <li><a href="https://docs.qq.com/doc/DZUZJSlRlaFlLUXJC">【腾讯文档】盟规</a></li>
     <li><a href="https://docs.qq.com/sheet/DZXFVblhKeEh2bXB1?tab=BB08J2">【腾讯文档】燎原火成员 S2 名称，点击编辑S2名称</a></li>
      </ul>
      </li>
    </ul>
    <li><a href="/apidoc/game/file2"><strong>S2黑马阵容推荐</strong></a></li>
    </ul>
</div>
`,
    actions: [
      // {
      //   text: "Primary Action",
      //   link: "https://theme-hope.vuejs.press/",
      //   type: "primary" as const, // Use 'as const' to ensure the type is a literal
      // },
      {
        text: "查看盟规",
        link:"/apidoc/rule1",
        type: "primary" as const, // Ensure type matches the expected literal
      },
    ],
  },
];

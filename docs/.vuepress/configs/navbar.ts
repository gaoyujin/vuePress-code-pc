import { NavbarConfig } from 'vuepress'

export const navbar: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '参考',
    children: [
      {
        text: '组件',
        children: [
          '/reference/components/cli.md',
          '/reference/components/config.md',
        ],
      },
    ],
  },
  {
    text: '插件',
    children: [
      {
        text: '常用功能',
        children: [
          '/reference/plugins/one.md',
          '/reference/plugins/two.md',
          '/reference/plugins/three.md',
        ],
      },
    ],
  },
  {
    text: '生态系统',
    children: [
      { text: 'Vue3.x', link: 'https://v3.cn.vuejs.org/' },
      {
        text: 'Element Plus',
        link: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
      },
    ],
  },
]

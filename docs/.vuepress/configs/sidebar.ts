import { SidebarConfig } from 'vuepress'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: ['/guide/README.md', '/guide/page.md'],
    },
  ],
  '/reference/': [
    {
      text: 'VuePress 参考',
      collapsible: true,
      children: [
        '/reference/components/cli.md',
        '/reference/components/config.md',
      ],
    },
  ],
}

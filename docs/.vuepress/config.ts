import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { head } from './configs/head'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '你好， VuePress ！',
      description: '这是我的第一个 VuePress 站点',
    },
  },

  // specify bundler via environment variable
  bundler: viteBundler(),

  theme: defaultTheme({
    // 主题设置
    logo: '/images/hero.png',
    repo: 'https://www.baidu.com/',
    repoLabel: 'GitHub',

    // theme-level locales config
    locales: {
      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        navbar: navbar,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebar,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  }),
})

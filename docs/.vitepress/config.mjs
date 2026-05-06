import { defineConfig } from 'vitepress'
import enConfig from './config/en.mjs'
import zhConfig from './config/zh.mjs'

export default defineConfig({
  title: 'GoPaste',
  description: 'GoPaste - A lightweight, fast, and secure cross-platform clipboard manager',
  //outDir: './.vitepress/dist/',  // 相对于 docsDir，即 GoPaste-Doc/dist/
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/icon.png' }],
  ],

  themeConfig: {
    logo: '/images/icon.png',
    siteTitle: 'GoPaste',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoPaste/GoPaste' },
    ],

    search: {
      provider: 'local',
    },
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      ...zhConfig,
    },
    en: {
      label: 'English',
      lang: 'en',
      ...enConfig,
    },
  },
})

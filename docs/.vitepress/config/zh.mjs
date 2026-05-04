export default {
  title: 'GoPaste',
  description: '轻量、快速、安全的跨平台剪贴板管理工具',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '下载', link: 'https://github.com/GoPaste/GoPaste/releases' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '下载安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/quick-start' },
          ],
        },
        {
          text: '功能特性',
          items: [
            { text: '剪贴板历史', link: '/guide/clipboard-history' },
            { text: '搜索与筛选', link: '/guide/search' },
            { text: '收藏与置顶', link: '/guide/favorites' },
            { text: '快捷键', link: '/guide/hotkeys' },
            { text: '主题切换', link: '/guide/themes' },
            { text: '安全与加密', link: '/guide/security' },
            { text: '数据导出', link: '/guide/export' },
          ],
        },
        {
          text: '平台说明',
          items: [
            { text: 'macOS', link: '/guide/macos' },
            { text: 'Windows', link: '/guide/windows' },
            { text: 'Linux', link: '/guide/linux' },
          ],
        },
        // 贡献部分已隐藏
        // {
        //   text: '参与贡献',
        //   items: [
        //     { text: '路线图', link: '/guide/roadmap' },
        //     { text: '贡献指南', link: '/guide/contributing' },
        //   ],
        // },
      ],
    },

    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2026 larkwins',
    },

    editLink: {
      pattern: 'https://github.com/GoPaste/GoPaste/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
}

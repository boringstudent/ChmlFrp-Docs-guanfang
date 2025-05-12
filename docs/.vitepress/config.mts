import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChmlFrp | 使用文档 - Docs",
  description: "这里是ChmlFrp的官方使用文档，包含多平台映射创建、启动教程。除此之外，这里还有更多额外配置教程，例如通过ChmlFrp进行MC开服、TS语音、Web搭建、远程服务教程。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: 'ChmlFrpDocs',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2025'
    }
  },
  sitemap: {
    hostname: 'https://docs.chmlfrp.cn'
  }
})

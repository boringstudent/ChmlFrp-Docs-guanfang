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
      { 
        text: 'API文档', 
        items: [
          { text: 'v1 版本', link: '/API/v1/' },
          { text: 'v2 版本', link: '/API/v2/' }
        ]
      }
    ],

    // 添加侧边栏配置
    sidebar: {
      '/API/v1/': [
        {
          text: 'API v1 文档',
          items: [
            { text: 'v1 介绍', link: '/API/v1/' },
            { 
              text: '用户认证', 
              items: [
                { text: '登录', link: '/API/v1/auth/login' },
                { text: '注册', link: '/API/v1/auth/register' },
                { text: '令牌刷新', link: '/API/v1/auth/refresh' }
              ]
            },
            { 
              text: '隧道管理', 
              items: [
                { text: '创建隧道', link: '/API/v1/tunnel/create' },
                { text: '删除隧道', link: '/API/v1/tunnel/delete' },
                { text: '列表查询', link: '/API/v1/tunnel/list' }
              ]
            },
            { 
              text: '节点信息', 
              items: [
                { text: '节点状态', link: '/API/v1/node/status' },
                { text: '节点列表', link: '/API/v1/node/list' }
              ]
            }
          ]
        }
      ],
      '/API/v2/': [
        {
          text: 'API v2 文档',
          items: [
            { text: 'v2 介绍', link: '/API/v2/' },
            { 
              text: '用户认证', 
              items: [
                { text: 'OAuth2 登录', link: '/API/v2/auth/oauth' },
                { text: '双因素认证', link: '/API/v2/auth/2fa' },
                { text: '令牌管理', link: '/API/v2/auth/tokens' }
              ]
            },
            { 
              text: '高级隧道', 
              items: [
                { text: '批量操作', link: '/API/v2/tunnel/batch' },
                { text: '高级配置', link: '/API/v2/tunnel/advanced' },
                { text: '实时统计', link: '/API/v2/tunnel/stats' }
              ]
            },
            { 
              text: '集群节点', 
              items: [
                { text: '负载均衡', link: '/API/v2/node/loadbalance' },
                { text: '健康检查', link: '/API/v2/node/health' }
              ]
            },
            { 
              text: 'Webhook', 
              items: [
                { text: '事件订阅', link: '/API/v2/webhook/events' },
                { text: '安全验证', link: '/API/v2/webhook/security' }
              ]
            }
          ]
        }
      ]
    },

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
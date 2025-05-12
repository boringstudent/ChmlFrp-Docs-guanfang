// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      NProgress.configure({ showSpinner: false })
      
      // 添加路由钩子
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      
      router.onAfterRouteChanged = () => {
        NProgress.done() // 停止进度条
      }
    }
  }
} satisfies Theme
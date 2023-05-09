import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    "@/assets/app.css"
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  nitro: {
    preset: 'service-worker',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  target: 'static',
  router: {
    base: '/obsidian-wiki/'
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
    navigation: {
      fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer']
    }
  },
});
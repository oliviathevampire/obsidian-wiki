import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: {
    preset: 'service-worker'
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
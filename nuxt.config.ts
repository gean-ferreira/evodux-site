import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "scss/base/variable.scss";',
        },
      },
    },
  },
  css: ['scss/main.scss'],
  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#383838' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#383838' },
        { name: 'theme-color', content: '#383838' },
      ],
    },
  },
  alias: {
    scss: fileURLToPath(new URL('./assets/scss', import.meta.url)),
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    elements: fileURLToPath(new URL('./components/elements', import.meta.url)),
    sections: fileURLToPath(new URL('./components/sections', import.meta.url)),
  },
})

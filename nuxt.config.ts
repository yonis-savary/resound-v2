import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  //devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  srcDir: "app",
  alias: {
    '~': fileURLToPath(new URL('.', import.meta.url)),
    '@': fileURLToPath(new URL('.', import.meta.url)),
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/resound.svg' }
      ]
    }
  },

  nitro: {
    logLevel: 'debug',
    storage: {
      cache: {
        driver: 'fs',
        base: './.cache'
      },
      memory: {
        driver: 'memory'
      }
    }
  },

  image: {
    alias: {
      artist: '/api/artist'
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'nuxt-auth-utils',
    'nuxt-socket-io',
    '@pinia/nuxt',
  ],

  css: ['public/assets/style.css']
})
/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { configDefaults } from 'vitest/config'
import { VitePWA } from 'vite-plugin-pwa'

const __filename = import.meta.url.substring(
  import.meta.url.lastIndexOf('/') + 1,
)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Jukebox Frontend',
        short_name: 'Jukebox',
        description: 'Collaborate in real-time on a shared playlist',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android/android-launchericon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'android/android-launchericon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'ios/16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'ios/20.png',
            sizes: '20x20',
            type: 'image/png',
          },
          {
            src: 'ios/29.png',
            sizes: '29x29',
            type: 'image/png',
          },
          {
            src: 'ios/32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'ios/40.png',
            sizes: '40x40',
            type: 'image/png',
          },
          {
            src: 'ios/50.png',
            sizes: '50x50',
            type: 'image/png',
          },
          {
            src: 'ios/57.png',
            sizes: '57x57',
            type: 'image/png',
          },
          {
            src: 'ios/58.png',
            sizes: '58x58',
            type: 'image/png',
          },
          {
            src: 'ios/60.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: 'ios/64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'ios/72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'ios/76.png',
            sizes: '76x76',
            type: 'image/png',
          },
          {
            src: 'ios/80.png',
            sizes: '80x80',
            type: 'image/png',
          },
          {
            src: 'ios/87.png',
            sizes: '87x87',
            type: 'image/png',
          },
          {
            src: 'ios/100.png',
            sizes: '100x100',
            type: 'image/png',
          },
          {
            src: 'ios/114.png',
            sizes: '114x114',
            type: 'image/png',
          },
          {
            src: 'ios/120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: 'ios/128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'ios/144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'ios/152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'ios/167.png',
            sizes: '167x167',
            type: 'image/png',
          },
          {
            src: 'ios/180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'ios/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'ios/256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'ios/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'ios/1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 3000,
    open: true,
    host: true, // needed for the Docker Container port mapping to work
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/main";',
      },
    },
  },
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 8000,
    setupFiles: ['./src/config/vitest.setup.ts'],
    reporters: ['default'],
    coverage: {
      provider: 'v8',
      exclude: [
        './src/config/**',
        '**/_deprecated/**',
        'node_modules/**',
        '**/*.test.ts',
        '**/index.ts',
        '**/*.d.ts',
        '**/types.ts',
        '**/*.types.ts',
        'dist/**',
        'html/**',
        '**/docs/**',
        '**.cjs',
        'vite.config.ts',
      ],
      reportsDirectory: 'coverage/',
    },
    exclude: [
      ...configDefaults.exclude,
      './src/config/**',
      '**/_deprecated/**',
      'node_modules/**',
    ],
  },
})

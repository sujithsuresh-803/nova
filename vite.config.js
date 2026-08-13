import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'star.svg'],
      manifest: {
        name: 'Nova — Your Pop-Star Era',
        short_name: 'Nova',
        description: 'Turn inspiration into measurable goals. A vision board + goal tracker.',
        theme_color: '#7c3aed',
        background_color: '#140d1f',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: 'icon-maskable.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
      },
    }),
  ],
  // Relative base so the built site works on any host (Vercel, Netlify,
  // GitHub Pages project subpaths) and even when opened as a local file.
  base: './',
  server: {
    port: 5173,
    open: true,
  },
})

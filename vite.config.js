import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { VitePWA } from '@vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
  /*VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico','robot.txt','apple-touch-icon.png'],
    manifest:{
      name: 'Kizingwe River Light Bar',
      short_name: 'KRL',
      description: 'Application de gestion d\'un bar',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          types: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          types: 'image/png'
        },
      ]
    }
  })*/
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hmr: {
      protocol: 'ws',
    }
  },
})

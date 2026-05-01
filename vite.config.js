import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css'))
            return 'assets/[name]-[hash][extname]'
          else if (assetInfo.name.match(/\.(png|jpg|jpeg|gif|svg)$/))
            return '[name]-[hash][extname]'
          else
            return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})

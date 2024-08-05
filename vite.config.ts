import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSass from 'vite-plugin-sass-glob-import'
import sassDts from 'vite-plugin-sass-dts'
import path from 'path'

console.log('PostCSS config file has been imported');

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as common;`,
        importer(...args: [string, string]) {
          if (args[0] !== '@/styles') {
            return
          }

          return {
            file: `${path.resolve(__dirname, './src/assets/styles')}`,
          }
        },
      },
    },
  },
  plugins: [react(), vitePluginSass(), 
    sassDts({
      enabledMode: ['development', 'production'],
      global: {
        generate: true,
        outputFilePath: path.resolve(__dirname, './src/style.d.ts'),
      },
      sourceDir: path.resolve(__dirname, './src'),
      outputDir: path.resolve(__dirname, './dist'),
    })],
})

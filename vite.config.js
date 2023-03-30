import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import macro from 'vite-plugin-babel-macros';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    macro(),
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  base: '',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/styles/base/_reset.scss';
          @import '@/styles/base/_base.scss';
          @import '@/styles/base/_variable.scss';
        `,
      },
    },
  },
});

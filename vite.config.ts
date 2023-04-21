import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      types: '/src/types',
      mock: '/src/mock',
      utils: '/src/utils',
    },
  },
});

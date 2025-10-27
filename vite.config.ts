import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      assetsDir: 'assets',
    },
    resolve: {
      alias: {
        '@': resolve(process.cwd(), './src'),
      },
    },
    assetsInclude: ['**/*.ttf'],
    base: '/business-card/',
  }
);
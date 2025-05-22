import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/frontend_assets/', // Serve assets from this path in production
  build: {
    outDir: '../backend/static/frontend_assets',
    assetsDir: 'assets', // Assets will be in 'dist/assets'
    manifest: true, // Generate manifest.json
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
    emptyOutDir: true, // Clean the output directory before build
  },
  server: {
    host: true, // Listen on all addresses
    port: 5175, // Set explicit port
    strictPort: true, // Don't try other ports if 5175 is taken
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- ADD THIS SERVER PROXY CONFIGURATION ---
  server: {
    proxy: {
      // Any request starting with /googleplay will be proxied
      '/googleplay': {
        target: 'https://play.google.com', // The real server we want to talk to
        changeOrigin: true, // This is essential for the proxy to work
        secure: false, // In case of certificate issues
        // We rewrite the path to remove '/googleplay' before sending it to Google
        rewrite: (path) => path.replace(/^\/googleplay/, ''),
      },
    },
  },
});
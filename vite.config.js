import { defineConfig } from 'vite';

export default defineConfig({
  // ⚙️  GitHub Pages → https://unblockgamegplus.github.io/unblockgame
  base: '/unblockgame/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 0,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});

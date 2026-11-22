import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function purgeCssPlugin() {
  return {
    name: 'vite-plugin-purgecss-build',
    enforce: 'post',
    apply: 'build',
    async writeBundle(options) {
      const outDir = options.dir || 'dist';
      const assetsDir = path.join(outDir, 'assets');
      if (!fs.existsSync(assetsDir)) return;
      const cssFiles = fs.readdirSync(assetsDir)
        .filter((f) => f.endsWith('.css'))
        .map((f) => path.join(assetsDir, f).replace(/\\/g, '/'));

      if (!cssFiles.length) return;

      const { PurgeCSS } = await import('purgecss');
      const results = await new PurgeCSS().purge({
        content: ['index.html', 'src/**/*.{js,jsx,html}'],
        css: cssFiles,
        safelist: {
          standard: [
            /^col/,
            /^row/,
            /^g-/,
            /^gx-/,
            /^gy-/,
            /^order-/,
            /^offset-/,
            /^container/,
            /^fade/,
            /^show/,
            /^collapse/,
            /^collapsing/,
            /^active/,
            /^offcanvas/,
            /^carousel/,
            /^dropdown/,
            /^modal/,
            /^btn/,
            /^badge/,
            /^card/,
            /^navbar/,
            /^nav/,
            /^spinner/,
            'sticky-top',
            'was-validated',
            'is-invalid',
            'is-valid',
            '[dir="rtl"]',
            '[dir="ltr"]',
          ],
          deep: [/carousel/, /offcanvas/, /dropdown/, /navbar/, /nav/, /modal/, /spinner/, /col/, /row/],
          greedy: [/carousel/, /offcanvas/, /dropdown/, /navbar/, /nav/, /modal/, /spinner/, /col/, /row/],
        },
      });

      for (const res of results) {
        if (res.file && res.css) {
          fs.writeFileSync(res.file, res.css, 'utf8');
          console.log(`[PurgeCSS] Purged ${res.file} -> ${(res.css.length / 1024).toFixed(1)} kB`);
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), purgeCssPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

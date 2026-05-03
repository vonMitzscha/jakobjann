import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vonmitzscha.github.io',
  base: process.env.GITHUB_ACTIONS ? '/jakobjann/' : '/',
  integrations: [tailwind()],
  output: 'static',
  outDir: './dist',
  vite: {
    plugins: [{
      name: 'public-directory-index',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/admin/' || req.url === '/admin') {
            req.url = '/admin/index.html';
          }
          next();
        });
      }
    }]
  }
});

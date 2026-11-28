import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeLegalLinks } from './src/lib/legal-links.mjs';

// SITE_URL e BASE_PATH vêm do ambiente: o domínio e a publicação são do card #25.
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      weights: ['400 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  markdown: { rehypePlugins: [rehypeLegalLinks({ base })] },
  // As páginas legais importam os .md de ../docs (fonte única com o repositório).
  vite: { build: { cssCodeSplit: false }, server: { fs: { allow: ['..'] } } },
});

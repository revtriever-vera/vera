# LP em Astro (rascunho para o dono validar)

Nova landing page da Vera, ao lado da atual (`landing/`, que continua como está até o dono aprovar). Astro gera HTML estático; só os componentes animados levam JS (ilhas React com `client:idle`, `client:visible` ou `client:media`).

## Rodar

```
cd lp
npm ci
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview
```

Variáveis de ambiente (todas opcionais):

- `SITE_URL`: URL pública, usada em canonical, hreflang, Open Graph, sitemap e robots. O domínio é do card #25.
- `BASE_PATH`: prefixo, se a página for servida numa subpasta.
- `PUBLIC_APP_URL`: destino do botão "Criar conta". Sem ela, o botão leva para a seção de planos.

## Estrutura

- `src/i18n/pt.ts` e `en.ts`: todo o texto. `en.ts` é tipado pelo `pt.ts`, então uma chave que falta quebra o build.
- `src/components/Page.astro`: a página, nos 11 blocos do card #378.
- `src/islands/`: `RotatingWord`, `DotGrid` (WebGL puro), `TiltFrame`, `Odometer`, `ChatDemo`. O HTML de cada um já sai com o estado final; o JS só anima.
- `src/styles/global.css`: reveals ao rolar com `animation-timeline: view()`, marquee, brilho do Premium.
- `public/og.png`, `og-en.png`: prévia do WhatsApp.
- `screenshots/`: capturas da página (desktop e mobile), com movimento reduzido para mostrar tudo.

## Licença dos efeitos

Os efeitos foram escritos aqui com `motion` (MIT) e CSS. Nenhum código do React Bits foi copiado (MIT + Commons Clause conflita com a §10 da AGPL) e não há GSAP.

## Medições (Lighthouse mobile, `npx lighthouse`, 1 rodada por versão)

| | Performance | Acessibilidade | SEO |
|---|---|---|---|
| `landing/` (atual) | 100 | 96 | 91 |
| `lp/` (nova) | 100 | 100 | 100 |

JS das ilhas: ~101 KB gz no total (React 67, motion 26).

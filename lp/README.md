# LP em Astro (rascunho para o dono validar)

Nova landing page da Vera, ao lado da atual (`landing/`, que continua como está até o dono aprovar). Astro gera HTML estático. O único JS da página é um script pequeno do exemplo de conversa, que só anima com movimento liberado.

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

- `src/i18n/pt.ts` e `en.ts`: todo o texto. `en.ts` é tipado pelo `pt.ts`, então uma chave que falta quebra o build. O texto segue `docs/tom-de-voz.md`, e cada afirmação precisa existir no app.
- `src/components/Page.astro`: a página. `Header.astro` e `Footer.astro` são usados também pelas páginas legais.
- `src/components/Revtriever.astro`: a marca da Revtriever como no cabeçalho de revtriever.com. O ícone vem de `public/revtriever-mark.svg` (o arquivo do site, otimizado com svgo sem mudar o desenho); o nome está em curvas de Inter Bold (OFL), com "triever" em #1a56db.
- `src/components/ChatDemo.astro`: o exemplo de conversa. O HTML já traz o texto completo; o script só digita a pergunta quando o bloco entra na tela.
- `src/styles/global.css`: escalas de espaço (4/8 px) e de tipo, cores da Vera e as da Revtriever (`--rt*`).
- `public/og.png`, `og-en.png`: prévia do WhatsApp.
- `screenshots/`: capturas da página (desktop e mobile), com movimento reduzido.

## Medições (Lighthouse mobile, `npx lighthouse`, 1 rodada por versão)

| | Performance | Acessibilidade | SEO |
|---|---|---|---|
| `landing/` (atual) | 100 | 96 | 91 |
| `lp/` (primeira versão, com ilhas React) | 100 | 100 | 100 |
| `lp/` (revisão, sem React) | 100 | 100 | 100 |

Na revisão, a página inteira pesa 137 KiB na primeira visita (Lighthouse mobile), com CLS 0; o único JS é o script do exemplo de conversa, inline.

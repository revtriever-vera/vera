// Os textos legais vivem em docs/ (fonte única, legíveis no GitHub) e linkam uns aos outros pelo nome do .md.
// Na landing, esses links viram as rotas públicas.
const ROUTES = {
  'politica-de-privacidade.md': 'privacidade/',
  'termos-de-uso.md': 'termos/',
  'exclusao-de-dados.md': 'exclusao-de-dados/',
};

export function rehypeLegalLinks({ base = '/' } = {}) {
  const prefix = base.endsWith('/') ? base : `${base}/`;
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
      const [file, hash] = node.properties.href.split('#');
      if (ROUTES[file]) node.properties.href = `${prefix}${ROUTES[file]}${hash ? `#${hash}` : ''}`;
    }
    node.children?.forEach(visit);
  };
  return () => visit;
}

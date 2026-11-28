export const pt = {
  lang: 'pt-BR',
  ogLocale: 'pt_BR',
  path: '/',
  title: 'Vera: investimentos e gastos do mês num lugar só',
  description:
    'Some seus investimentos do Brasil, dos EUA e de cripto e acompanhe os gastos do mês. Plano Free sem custo, código aberto, hospedada pela Revtriever.',
  skip: 'Ir para o conteúdo',
  nav: {
    wealth: 'Patrimônio',
    spending: 'Gastos',
    plans: 'Planos',
    operator: 'Quem opera',
    otherLang: 'English',
    label: 'Principal',
    by: 'por',
  },
  hero: {
    h1: 'Some seus investimentos e acompanhe os gastos do mês',
    lead: 'Ações, FIIs, renda fixa, ativos dos EUA e cripto somados em reais ou em dólar e comparados com a carteira-alvo que você definiu. Cartão e conta entram pelo Open Finance.',
    primary: 'Criar conta',
    secondary: 'Ver o código no GitHub',
    facts: 'Plano Free sem custo. Premium por R$ 14,90 por mês. Entrada com Google ou Facebook.',
  },
  mock: {
    alt: 'Tela Visão geral da Vera',
    caption: 'Visão geral: patrimônio, exposição ao dólar e distribuição atual contra a carteira-alvo. Tela do protótipo, com dados de exemplo.',
  },
  wealth: {
    id: 'patrimonio',
    title: 'Patrimônio',
    text: 'Cadastre cada ativo com a quantidade. A Vera calcula o valor pela cotação, soma em reais ou em dólar e mostra cada classe contra a meta.',
    bullets: [
      ['Carteira-alvo', 'meta por classe e peso de cada ativo dentro dela, com faixa de tolerância.'],
      ['Onde aportar', 'você diz quanto vai aportar e a Vera divide o valor entre as classes abaixo da meta, sem vender nada.'],
      ['Renda fixa', 'taxa real descontado o IPCA de 12 meses, próximos vencimentos e cobertura do FGC por conglomerado.'],
      ['Objetivos', 'diga quanto e até quando. A Vera calcula quanto guardar por mês.'],
    ],
    alt: 'Tela Onde aportar da Vera',
    caption: 'Onde aportar: R$ 10.000 divididos entre as classes abaixo da meta. Dados de exemplo.',
  },
  spending: {
    id: 'gastos',
    title: 'Gastos',
    text: 'Cartão e conta entram pelo Open Finance, com a sua conta gratuita do Meu Pluggy. As transações são categorizadas por regras que você ajusta.',
    bullets: [
      ['Onde cortar', 'defina quanto da renda quer guardar. A Vera calcula quanto falta e sugere um limite por categoria, começando pelo que subiu acima da sua média.'],
      ['Assinaturas e contas', 'cobranças recorrentes reconhecidas, com aviso por e‑mail na véspera do débito.'],
      ['Sem conectar o banco', 'importe o extrato em OFX ou CSV.'],
    ],
    alt: 'Tela Onde cortar da Vera',
    caption: 'Onde cortar: faltam R$ 2.240 por mês para a meta, distribuídos em 6 categorias. Dados de exemplo.',
  },
  ask: {
    id: 'perguntar',
    title: 'Perguntar à Vera',
    text: 'Um painel aberto de qualquer tela. A Vera responde com os seus números e não recomenda compra ou venda.',
    bullets: [
      ['Free', 'ajuda sobre como usar a Vera.'],
      ['Premium', 'gastos, carteira, CDI, IPCA, Selic, Ibovespa, ativos e fundos, depois que você permite o envio dos dados.'],
      ['Ações', 'criar um objetivo ou categorizar uma transação só acontece depois que você confirma.'],
    ],
    chatLabel: 'Exemplo de conversa com a Vera',
    question: 'Quanto gastei com restaurantes este mês?',
    thinking: 'Calculando',
    answer:
      'R$ 1.280 em 14 transações, R$ 310 acima da sua média dos últimos 3 meses. Para ficar na média, o limite sugerido para o resto do mês é R$ 190.',
    disclaimer: 'Exemplo com dados fictícios.',
  },
  tracking: {
    id: 'acompanhamento',
    title: 'O que acontece com a sua carteira',
    items: [
      {
        plan: 'Free',
        title: 'Agenda',
        text: 'Proventos, assembleias, resultados e vencimentos dos próximos 30 dias, Tesouro incluído. Aviso por e‑mail na véspera da data‑com e no dia do pagamento.',
      },
      {
        plan: 'Free e Premium',
        title: 'O que mudou',
        text: 'Documentos da CVM e do FNET sobre os ativos que você tem. No Free, você vê quantos saíram. No Premium, lê o resumo de cada um.',
      },
      {
        plan: 'Free e Premium',
        title: 'Raio-X do mês',
        text: 'Rentabilidade contra CDI, IPCA e Ibovespa, maiores altas e quedas, proventos e concentração por emissor. No Premium, um parágrafo de até 4 frases explica o mês.',
      },
    ],
  },
  importing: {
    id: 'importacao',
    title: 'Importação de investimentos',
    sub: 'Você confere cada operação e o efeito na carteira antes de gravar, e pode desfazer depois.',
    groups: [
      { title: 'Lidos direto', items: ['Relatório da B3 em .xlsx ou CSV: negociação, movimentação e posição', 'CSV de cripto da Binance, da Coinbase e do Mercado Bitcoin'] },
      { title: 'Lidos por modelo de linguagem, com a sua permissão', items: ['Nota de corretagem em PDF', 'Extrato mensal de corretora no exterior', 'Print ou foto da tela da corretora'] },
    ],
    note: 'Os dois grupos valem no Free e no Premium.',
  },
  limits: {
    id: 'limites',
    title: 'O que a Vera não faz',
    items: [
      { title: 'Não move dinheiro', text: 'Não faz Pix nem pagamentos. Pelo Open Finance, só lê cartão e conta.' },
      { title: 'Não recomenda compra ou venda', text: 'Compara a carteira com a meta que você definiu. A decisão é sua.' },
      { title: 'Não envia dados sem permissão', text: 'O envio a um modelo de linguagem depende da sua permissão. Cada resposta tem “Ver o que foi enviado”.' },
      { title: 'Não guarda o cartão', text: 'O pagamento do Premium acontece na página da Revtriever.' },
    ],
  },
  operator: {
    id: 'revtriever',
    title: 'Quem opera a Vera',
    sub: 'A Vera deste site é hospedada pela Revtriever. O código é aberto e também roda no seu servidor.',
    hosted: {
      lead: 'A Revtriever LTDA opera a Vera hospedada. Ela responde pelos termos de uso e pelos dados da sua conta (LGPD) e cobra o Premium, por Pix ou cartão.',
      about: 'Fora da Vera, a Revtriever faz cobrança para negócios de receita recorrente: tenta de novo o cartão que falhou e cobra em outro cartão ou por Pix.',
      company: 'Empresa',
      companyValue: 'Revtriever LTDA',
      cnpj: 'CNPJ',
      contact: 'Contato e dados pessoais',
      cta: 'Ir para revtriever.com',
    },
    self: {
      title: 'No seu servidor',
      text: 'A Vera é AGPL-3.0 e roda com Docker Compose. Você usa as suas chaves de modelo de linguagem, WhatsApp e Google; o que não tem chave não aparece no app.',
      text2: 'Sem planos, sem cota e sem pagar à Revtriever. Cobrança e Open Finance ficam desligados, e quem hospeda é o controlador dos dados.',
      cta: 'Ver o código no GitHub',
    },
  },
  plans: {
    id: 'planos',
    title: 'Planos',
    sub: 'Nada do que é grátis vira pago.',
    free: {
      name: 'Free',
      price: 'R$ 0',
      items: [
        'Carteira, carteira-alvo, objetivos e Onde aportar',
        'Renda fixa com taxa real e cobertura do FGC',
        'Gastos pelo Open Finance e Onde cortar',
        'Agenda e números do Raio-X do mês',
        'Importação da B3, de cripto, de nota de corretagem e de print',
        'Várias pessoas na conta, como Dono, Editor ou Leitura',
        'Exportar tudo em planilha',
        'Perguntar à Vera: ajuda de uso',
      ],
      cta: 'Criar conta',
    },
    premium: {
      name: 'Premium',
      price: 'R$ 14,90',
      per: 'por mês',
      items: [
        'Resumos escritos do mês, dos cortes e da carteira',
        'Perguntar à Vera com os seus números e o mercado',
        'O que mudou: resumo de cada documento',
        'Vera no WhatsApp: perguntas, lembretes e reuniões no Google Agenda',
        'Um Premium vale para todas as pessoas da conta',
      ],
      quota: 'Uma cota mensal cobre o uso do modelo de linguagem. Se ela acabar, resumos e WhatsApp pausam até o mês seguinte, sem cobrança extra.',
      cta: 'Criar conta e assinar',
    },
    billing: 'O Premium é cobrado pela Revtriever, por Pix ou cartão. Cancelando em até 7 dias da assinatura, o valor é devolvido.',
  },
  faq: {
    id: 'faq',
    title: 'Perguntas frequentes',
    items: [
      { q: 'É grátis mesmo?', a: 'O Free não tem custo e inclui carteira, carteira-alvo, gastos, renda fixa e importação. O Premium custa R$ 14,90 por mês e soma resumos escritos, Perguntar à Vera com os seus números e WhatsApp. Nada do que é grátis vira pago.' },
      { q: 'Como eu entro?', a: 'Com a sua conta do Google ou do Facebook. A Vera não tem senha própria.' },
      { q: 'De onde vêm os dados?', a: 'Dos ativos que você cadastra ou importa, das cotações e, nos gastos, do Open Finance pelo Meu Pluggy ou de extratos em OFX e CSV.' },
      { q: 'Meus dados vão para um modelo de linguagem?', a: 'Só se você permitir. Cada resposta do painel tem “Ver o que foi enviado”. Desligando, nada mais é enviado e o resto da Vera funciona igual.' },
      { q: 'Quem cobra o Premium?', a: 'A Revtriever, que opera a Vera hospedada. O pagamento é por Pix ou cartão, na página da Revtriever, e a Vera não vê os dados do cartão.' },
      { q: 'Posso rodar no meu servidor?', a: 'Sim. A Vera é AGPL-3.0 e roda com Docker Compose, com as suas chaves e sem cobrança. Cobrança e Open Finance ficam desligados nessa versão.' },
      { q: 'O app tem versão em inglês?', a: 'Sim. Você troca em Conta, no campo Idioma da interface.' },
    ],
  },
  footer: {
    label: 'Rodapé',
    operated: 'A Vera hospedada é operada pela Revtriever LTDA. O código é aberto e mantido por Lucas Oliveira.',
    privacy: 'Privacidade',
    terms: 'Termos de uso',
    deletion: 'Exclusão de dados',
    code: 'Código no GitHub',
    license: 'Licença AGPL-3.0',
    legal: '© 2026 Revtriever LTDA · CNPJ 68.648.441/0001-38',
  },
} as const;

export type Dict = {
  [K in keyof typeof pt]: Widen<(typeof pt)[K]>;
};
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T;

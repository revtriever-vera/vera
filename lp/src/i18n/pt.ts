export const pt = {
  lang: 'pt-BR',
  ogLocale: 'pt_BR',
  path: '/',
  title: 'Vera: o retrato real do seu dinheiro',
  description:
    'Some seus investimentos e acompanhe os gastos do mês. Plataforma financeira open source, com plano gratuito completo.',
  skip: 'Ir para o conteúdo',
  nav: {
    wealth: 'Patrimônio',
    spending: 'Gastos',
    ask: 'Vera',
    plans: 'Planos',
    otherLang: 'English',
    otherLangCode: 'en',
    label: 'Principal',
  },
  hero: {
    h1: 'O retrato real do seu dinheiro',
    leadBefore: 'Acompanhe',
    words: ['a sua carteira', 'os seus gastos', 'o Raio-X do mês'],
    leadAfter: 'num lugar só. Código aberto e plano gratuito completo.',
    primary: 'Criar conta',
    secondary: 'Ver o código',
  },
  mock: {
    alt: 'Tela Visão geral da Vera',
    caption:
      'Visão geral: patrimônio, exposição ao dólar e distribuição atual contra a carteira-alvo. Dados de exemplo.',
    chartTitle: 'Patrimônio',
    chartValue: 'R$ 184.300',
    chartNote: 'últimos 12 meses, dados de exemplo',
    chartLabel: 'Gráfico de exemplo: patrimônio subindo ao longo de 12 meses',
  },
  proof: {
    title: 'Os números que a Vera mostra',
    note: 'Valores das telas de exemplo.',
    items: [
      { value: '3', unit: 'mercados', text: 'Brasil, EUA e cripto numa moeda só.' },
      { value: 'R$ 10.000', unit: '', text: 'divididos entre as classes abaixo da meta, sem vender nada.' },
      { value: 'R$ 2.240', unit: '/mês', text: 'faltam para a meta de poupança, distribuídos em 6 categorias.' },
    ],
  },
  pillars: {
    title: 'O que a Vera faz',
    sub: 'Quatro frentes, todas com os seus números.',
    items: [
      { href: '#patrimonio', title: 'Patrimônio', text: 'Cada ativo com a quantidade, em reais ou em dólar, contra a carteira-alvo.' },
      { href: '#gastos', title: 'Gastos', text: 'Cartão e conta pelo Open Finance, categorizados, com o corte sugerido por categoria.' },
      { href: '#vera', title: 'Perguntar à Vera', text: 'Um painel de perguntas sobre o uso da Vera e, no Premium, sobre os seus números.' },
      { href: '#acompanhamento', title: 'Acompanhamento', text: 'Agenda da carteira, o que mudou nos ativos e o Raio-X do mês.' },
    ],
  },
  wealth: {
    id: 'patrimonio',
    title: 'Patrimônio',
    sub: 'Brasil, EUA e cripto numa moeda só, comparados com a carteira que você considera ideal.',
    tag: 'Gestão patrimonial',
    text: 'Cadastre cada ativo com a quantidade. A Vera calcula o valor, soma em reais ou em dólar e mostra onde a carteira está fora da meta.',
    bullets: [
      'Carteira-alvo em duas camadas, com faixa de tolerância.',
      'Onde aportar: o valor do aporte dividido entre as classes abaixo da meta, sem vender nada.',
      'Renda fixa com taxa real, vencimentos e cobertura do FGC por conglomerado.',
    ],
    alt: 'Tela Onde aportar da Vera',
    caption: 'Onde aportar: R$ 10.000 divididos entre as classes abaixo da meta. Dados de exemplo.',
  },
  spending: {
    id: 'gastos',
    title: 'Gastos',
    sub: 'Cartão e conta pelo Open Finance, categorizados, para você ver onde cortar.',
    tag: 'Gestão de gastos',
    text: 'Defina quanto da renda quer guardar. A Vera calcula quanto falta e distribui o corte entre os gastos flexíveis que mais passaram da sua média.',
    bullets: [
      'Resumo do mês e transações com regras de categoria.',
      'Onde cortar: limite sugerido por categoria.',
      'Conexão pelo Meu Pluggy, com a sua conta gratuita.',
    ],
    alt: 'Tela Onde cortar da Vera',
    caption: 'Onde cortar: faltam R$ 2.240 por mês para a meta, distribuídos em 6 categorias. Dados de exemplo.',
  },
  ask: {
    id: 'vera',
    title: 'Perguntar à Vera',
    sub: 'Um painel de perguntas, aberto de qualquer tela. Ela explica e mostra os seus números; a decisão é sempre sua.',
    bullets: [
      'Free: ajuda sobre como usar a Vera.',
      'Premium: respostas sobre os seus gastos e a sua carteira e sobre o mercado (CDI, IPCA, Selic, Ibovespa, ativos e fundos), com a sua permissão de envio.',
      'Ações como criar um objetivo ou categorizar uma transação só acontecem depois que você confirma.',
    ],
    chatLabel: 'Exemplo de conversa com a Vera',
    question: 'Quanto gastei com restaurantes este mês?',
    thinking: 'pensando',
    answer:
      'R$ 1.280 em 14 transações, R$ 310 acima da sua média dos últimos 3 meses. Para ficar na média, o limite sugerido para o resto do mês é R$ 190.',
    disclaimer: 'Exemplo com dados fictícios. A Vera explica e compara; não é recomendação de compra ou venda.',
  },
  tracking: {
    id: 'acompanhamento',
    title: 'Acompanhamento da carteira',
    sub: 'Três recursos para saber o que aconteceu com o que você tem.',
    sample: 'Dados de exemplo.',
    items: [
      {
        tag: 'Free',
        title: 'Agenda da carteira',
        text: 'Vencimentos, pagamentos e datas da carteira num só calendário. No Premium, com lembretes no Google Agenda.',
        rows: [['15/05', 'Vencimento de título de renda fixa'], ['30/05', 'Pagamento de proventos'], ['10/06', 'Fechamento da fatura']],
      },
      {
        tag: 'Premium',
        title: 'O que mudou',
        text: 'Resumos dos documentos oficiais (CVM) dos ativos que você tem, para ler o que mudou sem abrir cada documento.',
        rows: [['Fato relevante', 'Resumo em três linhas, com o link do documento'], ['Comunicado', 'Resumo e data de publicação'], ['Fonte', 'CVM']],
      },
      {
        tag: 'Free + Premium',
        title: 'Raio-X do mês',
        text: 'Os números do mês no Free. No Premium, o parágrafo escrito que explica o que mudou na carteira e nos gastos.',
        rows: [['Patrimônio', 'variação no mês'], ['Gastos', 'total e maiores categorias'], ['Aportes', 'o que foi para cada classe']],
      },
    ],
  },
  importing: {
    id: 'importacao',
    title: 'Importação de investimentos',
    sub: 'Você confere as linhas e o efeito na carteira antes de gravar.',
    formats: [
      'Relatório da B3 (.xlsx)',
      'CSV da B3',
      'CSV de cripto',
      'Nota de corretagem em PDF',
      'Print da corretora',
      'Extrato mensal em PDF',
      'Planilha CSV',
    ],
    marqueeLabel: 'Formatos aceitos',
    free: 'Free: relatório da B3 (.xlsx ou CSV) e CSV de cripto da Binance, Mercado Bitcoin e Coinbase.',
    premium: 'Premium: nota de corretagem em PDF, print da corretora e extrato mensal da Avenue em PDF, lidos por modelo de linguagem.',
  },
  security: {
    id: 'seguranca',
    title: 'Segurança e código aberto',
    badge: 'Código aberto',
    items: [
      { title: 'Open Finance pela Pluggy', text: 'Você conecta com a sua conta gratuita do Meu Pluggy. A Vera lê cartão e conta.' },
      { title: 'Não move dinheiro', text: 'A Vera não faz Pix nem pagamentos.' },
      { title: 'Não recomenda compra ou venda', text: 'Ela explica, compara e mostra a carteira contra a meta que você definiu.' },
      { title: 'Você decide o que sai', text: 'O envio de dados a um modelo de linguagem só acontece com a sua permissão, e você pode ver o conteúdo exato.' },
      { title: 'AGPL-3.0', text: 'O código está aberto. Você pode rodar tudo no seu servidor, com as suas chaves.' },
    ],
    cta: 'Ver o código',
  },
  plans: {
    id: 'planos',
    title: 'Planos',
    sub: 'Nada do que é grátis vira pago.',
    free: {
      name: 'Free',
      price: 'R$ 0',
      items: [
        'Carteira, carteira-alvo e Onde aportar',
        'Gastos e Onde cortar',
        'Renda fixa com taxa real',
        'Várias pessoas na conta',
        'Importação do relatório da B3 e de CSV de cripto',
        'Agenda da carteira e números do Raio-X do mês',
        'Perguntar à Vera: ajuda de uso',
      ],
    },
    premium: {
      name: 'Premium',
      price: 'R$ 14,90',
      per: 'por mês',
      items: [
        'Resumos em texto do mês, dos cortes e da carteira',
        'Perguntar à Vera com os seus números e o mercado',
        'O que mudou: resumos de documentos oficiais da CVM',
        'Vera no WhatsApp',
        'Google Agenda com lembretes',
        'Importação de nota de corretagem, print e extrato da Avenue',
        'Um Premium por conta vale para todas as pessoas dela',
      ],
    },
    open: { name: 'Código aberto', text: 'AGPL-3.0. Você pode rodar tudo no seu servidor, com as suas chaves, sem planos.' },
    cta: 'Criar conta',
    note: 'As telas são do protótipo, com valores de exemplo.',
  },
  faq: {
    id: 'faq',
    title: 'Perguntas frequentes',
    items: [
      { q: 'É grátis mesmo?', a: 'O plano Free é completo: carteira, carteira-alvo, gastos, renda fixa e a importação do relatório da B3. O Premium custa R$ 14,90 por mês e soma resumos escritos, Perguntar à Vera com os seus números, WhatsApp e importação por PDF e print. Nada do que é grátis vira pago.' },
      { q: 'É seguro?', a: 'A Vera não move dinheiro: não faz Pix nem pagamentos. A conexão com bancos usa o Open Finance pela Pluggy, com a sua conta. O código é aberto (AGPL-3.0) e pode ser auditado.' },
      { q: 'A Vera recomenda comprar ou vender ativos?', a: 'Não. Ela explica, compara e mostra a carteira contra a meta que você definiu. A decisão é sempre sua.' },
      { q: 'De onde vêm os dados?', a: 'Dos ativos que você cadastra ou importa (relatório da B3, CSV de cripto, nota de corretagem), das cotações e, nos gastos, do Open Finance pelo Meu Pluggy.' },
      { q: 'Posso rodar no meu servidor?', a: 'Sim. A Vera é AGPL-3.0 e roda com Docker Compose, com as suas chaves e sem cobrança. Quem hospeda é o controlador dos dados.' },
      { q: 'Meus dados vão para um modelo de linguagem?', a: 'Só se você permitir. Antes do envio, "Ver o que é enviado" mostra o conteúdo exato. Desligando, nada mais é enviado e o resto da Vera funciona igual.' },
      { q: 'A Vera funciona em inglês?', a: 'Esta página tem versão em inglês. O app está em português por enquanto.' },
    ],
  },
  footer: {
    by: 'Vera, por',
    maintained: 'Mantido por Lucas Oliveira. A versão hospedada é operada pela Revtriever.',
    license: 'Licença AGPL-3.0',
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

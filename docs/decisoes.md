# Decisões de produto

Registro das decisões tomadas na fase de design, com o motivo de cada uma. Decisão nova entra no topo da seção correspondente.

## Produto e negócio

| Decisão | Motivo |
| --- | --- |
| Plano **Free** com tudo da carteira e dos gastos, sem custo; **Premium a R$ 14,90/mês** com IA e WhatsApp | IA e WhatsApp têm custo por uso, ao contrário das outras fontes. Nada do que é grátis vira pago. |
| Teto de uso de IA + WhatsApp de **R$ 4/mês por conta**, mostrado como cota (em porcentagem, não em reais), com aviso perto do teto e pausa dessas funções até o mês virar | Limita o custo por conta sem cobrança extra; o resto do app segue funcionando. |
| Assinatura pelo **Asaas**, com Pix ou cartão; um Premium por conta vale para todas as pessoas da conta | Uma cobrança por conta, não por pessoa. |
| **Pessoas na conta**: convite por e-mail (a pessoa entra com Google ou Facebook pelo link) e papéis Dono (pode tudo, inclusive o plano), Editor (mexe em carteira e gastos) e Leitura (só vê) | Mais de uma pessoa cuida do mesmo dinheiro. |
| Stack, padrões de projeto e skills **iguais aos do GetCart** | Reaproveita o que já funciona e o que o time e os agentes já conhecem. Detalhes em [`stack.md`](stack.md). |
| Nome **Vera** | Nome feminino, curto, que remete a "verdadeiro": o retrato real da carteira contra o ideal. "Prumo" foi descartado por conflito com a Prumo Logística. Disponibilidade de domínio e INPI ainda não checada. |
| Licença **AGPL-3.0** | Impede que alguém feche o código e ofereça como serviço sem publicar as mudanças. |
| Open source e gratuito no plano Free | O objetivo é relevância e marca pessoal, não receita. O Premium cobre IA e WhatsApp (ver acima). |
| Versão hospedada pela Revtriever | Investidor comum não sobe servidor; sem versão hospedada, só desenvolvedores usariam. |
| Concorrência relevante = outros open source | Os pagos (Kinvo, Gorila) não disputam o mesmo objetivo. |

## Gestão patrimonial

| Decisão | Motivo |
| --- | --- |
| Cobertura do FGC no Free: por conglomerado emissor, quanto da renda fixa coberta (CDB, LCI, LCA, LC) passa de R$ 250 mil e o total contra o teto global de R$ 1 milhão; Tesouro e debênture não entram | Vem do benchmark do Kinvo, que cobra por isso. Os dados já estão no cadastro. |
| Agenda de vencimentos da renda fixa no Free, com o valor estimado na data e atalho para realocar em Onde aportar | O vencimento é quando o dinheiro volta e a pergunta "onde aporto" aparece. |
| Taxa real e poder de compra de cada título de renda fixa no Free | Responde se o título ganha da inflação. No Kinvo é Premium. |
| Alocação por emissor e por setor no Free | A visão por classe não mostra concentração ("quanto do patrimônio é risco Itaú"). |
| Cadastro de renda fixa com **tipo do título** (CDB, LCI, LCA, LC, debênture) e **emissor** (busca numa lista de bancos, com o conglomerado); setor de ações e FIIs vem do catálogo | São os dados que o FGC e a concentração precisam. |
| Uma carteira por conta, sem "de quem" | Simplicidade: o que importa é a distribuição do patrimônio, não o dono de cada posição. |
| Cadastro manual | Não há forma gratuita e confiável de puxar posições de todas as corretoras, bancos de fora e exchanges. |
| Renda variável só com posição (quantidade) | Registrar transações exigiria tratar eventos corporativos (desdobramento, grupamento, bonificação), complexidade que não serve à visão de alocação. |
| Renda fixa com valorização automática | Atualizar saldo à mão é chato demais; o valor aproximado na curva é melhor do que nenhum. |
| Tesouro Direto separado de CDB/LCI no cadastro | Tesouro tem preço oficial diário: basta a quantidade. Os outros títulos precisam de aplicação, taxa e datas. |
| Classificação por exposição, editável, sem IA | IVVB11 é ação dos EUA, mesmo negociado na B3. Classificação determinística é grátis e previsível. |
| Mapa curado de ETFs no repositório | A comunidade corrige por PR, de graça. |
| Carteira-alvo em duas camadas | Classe (ex.: 25% em ações EUA) e ativo dentro da classe (ex.: 30% ITUB4, 40% WEGE3, 30% PETR4). |
| **Onde aportar** (antes "Aporte inteligente") como diferencial | Investidor de longo prazo não vende para rebalancear; a pergunta mensal é "onde coloco este dinheiro". |
| Não permitir o mesmo ativo duas vezes | Evita posições duplicadas que distorcem a distribuição; leva à posição existente para editar a quantidade. Renda fixa é exceção (títulos distintos). |
| Exportar carteira em planilha | Os dados são do usuário. |

## Gestão de gastos

| Decisão | Motivo |
| --- | --- |
| Open Finance via Meu Pluggy com credencial do usuário, hospedagem nossa | Acesso comercial custa milhares de reais por mês; com a conta gratuita de cada pessoa, o custo para nós é zero. |
| Importação OFX/CSV como alternativa | Funciona com qualquer banco e é plano B se o Meu Pluggy mudar. |
| Classificação sem IA | Categoria do agregador + dicionário curado + regras aprendidas cobrem a maior parte; IA só opcional. |
| Sugestão de corte determinística | É matemática: meta contra realizado, categorias flexíveis contra a média do próprio usuário. |
| Exportar transações em planilha | Os dados são do usuário. |

## Plataforma

| Decisão | Motivo |
| --- | --- |
| Na versão **auto-hospedada**, cada pessoa cadastra as próprias chaves (modelo de linguagem, WhatsApp, Google); sem a chave, a função some | Quem hospeda não depende da Revtriever nem paga a ela, e não vê função que não funciona. |
| Vera no WhatsApp **sem Pix**, por enquanto | Iniciar pagamento exige credencial comercial do Open Finance. A Vera só lê os dados. |
| Permissão do **Google Agenda** pedida só ao conectar, nunca no login | O login pede só nome e e-mail; quem não usa a agenda não precisa conceder acesso a ela. |
| Grupo do menu **Carteira** (antes "Patrimônio") e tela **Onde aportar** (antes "Aporte inteligente") | Nomes curtos e concretos, como pede o [tom de voz](tom-de-voz.md); "Onde aportar" faz par com "Onde cortar". |
| Dois ambientes (dev e prod) com AWS CDK no formato do GetCart; dev desligado na versão hospedada | O projeto fica completo para quem clonar, sem custo de um ambiente de dev que a Revtriever não usa no dia a dia. `deploy-dev` só roda por disparo manual. |
| Login só social (Google e Facebook) | Não guardar senha própria reduz a superfície de ataque e o atrito no cadastro. |
| Login separado da landing page | O login fica só login; a explicação do produto vai para a LP. |
| Onboarding com duas etapas opcionais | Ativos (~5 min) e bancos (~15 min), cada uma explicando por que existe; quem pula cai em estados vazios que mostram o próximo passo. |
| Ativos antes de bancos no onboarding | A etapa mais rápida primeiro, com resultado imediato, aumenta a chance de completar. |
| Identidade visual: tema claro, base rosa | Diferencia de apps financeiros sóbrios e conversa com o nome feminino. |

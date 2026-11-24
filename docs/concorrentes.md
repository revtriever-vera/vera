# Concorrentes open source

Pesquisa feita em 24 de novembro de 2026, só em fontes públicas (READMEs, documentação e issues dos próprios projetos). Responde ao ponto em aberto de [`viabilidade.md`](viabilidade.md): "o Ghostfolio ou outro open source já faz carteira-alvo em duas camadas com foco Brasil?". Os pagos (Kinvo, Gorila, Investidor10) ficam fora, como em [`decisoes.md`](decisoes.md).

O que está marcado como "não encontrei" significa que não achei na documentação, no código nem nas issues; é ausência de evidência, não prova. Estrelas e datas são do dia da pesquisa.

## Resumo

- **Nenhum open source cobre o conjunto.** Os que fazem carteira são genéricos e centrados em EUA e Europa; os que fazem gastos não têm carteira-alvo; o único brasileiro encontrado é de gastos.
- **O Ghostfolio não tem carteira-alvo.** Só regras de risco de concentração; a regra de desvio da alocação é uma proposta aberta.
- **O Wealthfolio é o concorrente mais próximo e muda o posicionamento.** Desde a versão 3.5 tem alocação-alvo e, na 3.12, uma planilha de rebalanceamento com modo "só aporte", parecida com o Onde aportar. Não tem a segunda camada (ativo dentro da classe) nem renda fixa brasileira.
- **Renda fixa brasileira** (CDB na curva, Tesouro com preço oficial, cota CVM, cobertura do FGC): não encontrei em nenhum.

## Tabela comparativa

| | Vera (planejado) | Ghostfolio | Wealthfolio | Portfolio Performance | Sure | Actual Budget | Firefly III | finance.sh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Foco | Carteira e gastos, Brasil e exterior | Carteira | Carteira, patrimônio e gastos | Carteira | Gastos e patrimônio | Orçamento | Orçamento e contas | Gastos (Brasil) |
| Licença | AGPL-3.0 | AGPL-3.0 | AGPL-3.0 | EPL-1.0 | AGPL-3.0 | MIT | AGPL-3.0 | AGPL-3.0 |
| Estrelas | n/a | 9,8 mil | 9,7 mil | 4,2 mil | 17,7 mil | 30,4 mil | 25,3 mil | 0 |
| Forma | Hospedado grátis ou auto-hospedado | Hospedado pago (Premium) ou auto-hospedado | App local (desktop, celular, Docker); sincronização de corretoras é assinatura opcional | Desktop | Auto-hospedado | Local-first, auto-hospedado | Auto-hospedado | Auto-hospedado |
| Carteira-alvo | Duas camadas: classe e ativo | Não; só regras de risco no X-Ray (desvio da alocação é uma issue aberta) | Sim, por uma taxonomia (classe, setor, risco, região ou grupo); pedido de meta por ativo aberto | Rebalanceamento por classificação (não verifiquei os detalhes) | Não encontrei | Não se aplica | Não se aplica | Não se aplica |
| Onde aportar | Sim, só com aporte novo, sem vender | Não | Planilha de rebalanceamento com modo "só aporte" (sem reduzir posições) | Não verifiquei | Não | Não | Não | Não |
| Renda variável Brasil | B3 pela brapi, ETF por exposição | Cotação via Yahoo e outros, sem tratamento de exposição | Cotações genéricas | Genérico | Genérico | Não | Não | Não |
| Renda fixa Brasil na curva | Sim | Não encontrei; ativo manual com preço informado | Não encontrei; suporte a títulos de renda fixa pedido em issue aberta | Não encontrei | Não encontrei | Não | Não | Não |
| Tesouro Direto e cota CVM | Sim, fontes oficiais | Não encontrei | Não encontrei | Não encontrei | Não encontrei | Não | Não | Não |
| FGC por conglomerado | Sim | Não | Não | Não | Não | Não | Não | Não |
| Gastos via Open Finance | Meu Pluggy | Não | Não encontrei | Não | Não encontrei Pluggy; usa provedores como Enable Banking e Plaid | Sim, Pluggy (experimental) | Não encontrei | Não; OFX e CSV |
| Concentração por emissor e setor | Sim | Regras de concentração por classe, região, moeda e conta | Por setor (GICS) | Por classificação | Não encontrei | Não | Não | Não |

## Por projeto

### Ghostfolio

- **O que é:** "Open Source Wealth Management Software" para quem faz buy and hold, com foco em composição da carteira. Angular, NestJS e Postgres. Há oferta hospedada paga (Premium) e imagem Docker. [README](https://github.com/ghostfolio/ghostfolio)
- **Carteira-alvo:** não tem. As regras do X-Ray são de risco (concentração por conta, classe, moeda e região, reserva de emergência, taxas, liquidez) e não comparam com uma meta do usuário. Existe uma proposta aberta, de maio de 2026, de uma regra de desvio da alocação com pesos-alvo: [issue 6840](https://github.com/ghostfolio/ghostfolio/issues/6840). Vale acompanhar: se entrar, cobre a camada de classe.
- **Duas camadas:** não, e nem a de classe existe hoje.
- **Renda fixa brasileira:** as classes são ação, renda fixa, liquidez, imóveis, commodity e alternativos, com "bond" como subclasse; títulos entram como ativo manual, com preço informado pelo usuário. Os provedores de dados são Yahoo, Alpha Vantage, EOD, FMP, CoinGecko e planilha do Google, sem fonte do Tesouro, da CVM ou do Banco Central. Moeda padrão USD. [código](https://github.com/ghostfolio/ghostfolio/tree/main/apps/api/src/services/data-provider)
- **Gastos:** não é escopo.
- **Conclusão:** confirma a hipótese do `viabilidade.md`: cobre o genérico (ações, ETFs, cripto, multimoeda) e não o brasileiro.

### Wealthfolio

- **O que é:** rastreador de investimentos, patrimônio, gastos e simulações, local-first, "grátis para sempre" no uso manual e por CSV; a sincronização automática de mais de 30 corretoras (leitura) é uma assinatura opcional (Connect). Em alta atividade (commits em novembro de 2026). [README](https://github.com/wealthfolio/wealthfolio)
- **Carteira-alvo:** sim. A [documentação](https://wealthfolio.app/docs/guide/allocation-targets/) descreve alvos por uma taxonomia por vez (classe, setor GICS, risco, região ou grupos personalizados), escopo por conta ou portfólio, faixa de tolerância e leitura do desvio por categoria.
- **Rebalanceamento:** uma planilha em três passos (configurar, ajustar posições, revisar) que divide a diferença de cada categoria entre os ativos já em carteira, proporcionalmente ao que se tem. Com "Rebalance" desligado só soma, sem vender, que é o mesmo princípio do Onde aportar. Não considera taxas nem impostos.
- **Duas camadas:** não por completo. Cada alvo é de uma taxonomia; o pedido de meta por ativo dentro da classe segue aberto ([issue 1836](https://github.com/wealthfolio/wealthfolio/issues/1836)), assim como meta por conta ([1600](https://github.com/wealthfolio/wealthfolio/issues/1600)).
- **Renda fixa:** há pedidos abertos de suporte a títulos ([434](https://github.com/wealthfolio/wealthfolio/issues/434)) e bugs de renda fixa classificada como ação ([1544](https://github.com/wealthfolio/wealthfolio/issues/1544)). Nada de curva de CDB, Tesouro ou FGC.
- **Conclusão:** é o concorrente real da carteira-alvo. A Vera não deve se vender só como "carteira-alvo aberta".

### Portfolio Performance

- **O que é:** aplicativo desktop (Eclipse, EPL-1.0) forte em performance, importação por PDF e corretoras europeias. [README](https://github.com/portfolio-performance/portfolio)
- **Relevância:** é a referência de planilha-substituta para o investidor europeu. Não verifiquei a fundo as funções de rebalanceamento; não encontrei suporte a produtos brasileiros. Não é web nem tem versão hospedada.

### Sure (continuação do Maybe)

- **O que é:** o Maybe Finance foi arquivado em julho de 2025; o Sure é a continuação da comunidade (17,7 mil estrelas, AGPL-3.0, ativo). [Sure](https://github.com/we-promise/sure), [Maybe](https://github.com/maybe-finance/maybe)
- **Carteira-alvo:** não encontrei. As issues de investimentos pedem uma página de portfólio e melhorias de trading ([4748](https://github.com/we-promise/sure/issues/4748), [3494](https://github.com/we-promise/sure/issues/3494)); há bug de renda fixa de uma corretora estrangeira com valor errado ([4012](https://github.com/we-promise/sure/issues/4012)).
- **Gastos:** usa provedores de agregação como Enable Banking e Plaid; não encontrei Pluggy nem Open Finance brasileiro.
- **Conclusão:** concorre em gastos e patrimônio gerais, não em carteira-alvo nem em Brasil.

### Actual Budget

- **O que é:** orçamento por envelopes, local-first, MIT. [site](https://actualbudget.org)
- **Relevância:** é a única que já usa o mesmo caminho de dados da Vera para gastos no Brasil, o Meu Pluggy, em integração marcada como experimental. A configuração exige o mesmo passo a passo manual descrito em `viabilidade.md`. [doc do Pluggy.ai](https://actualbudget.org/docs/advanced/bank-sync/pluggyai)
- **Carteira:** não é o foco; sem carteira-alvo.

### Firefly III

- **O que é:** gestor de finanças pessoais auto-hospedado, orçamentos e contas, 25 mil estrelas, AGPL-3.0, ativo. [repositório](https://github.com/firefly-iii/firefly-iii)
- **Relevância:** gastos e contabilidade pessoal; sem carteira de investimentos. Não verifiquei integrações brasileiras.

### finance.sh (brasileiro)

- **O que é:** controle financeiro auto-hospedado, em Go e React, AGPL-3.0, para pessoa física, MEI e microempresa, com OFX e CSV, cartões e faturas, fluxo de caixa e multi-organização. Projeto pequeno e recente. [README](https://github.com/diego-luz/finance.sh)
- **Carteira:** não encontrei carteira de investimentos.
- **Conclusão:** é o único open source brasileiro de relevo que achei, e é de gastos. Concorre com o módulo de gastos, não com o de patrimônio.

### Outros brasileiros

Busca por Tesouro Direto, B3 e FIIs no GitHub traz só bibliotecas e raspadores (preços do Tesouro, extratos, imposto de renda de bolsa, monitor de FIIs), quase todos de uma pessoa, sem produto web completo e vários sem manutenção. Servem como fonte de ideia e de dados, não como concorrência. Exemplos: [`rafa-rod/tesouro_direto_br`](https://github.com/rafa-rod/tesouro_direto_br), [`guilhermecgs/ir`](https://github.com/guilhermecgs/ir), [`vmeazevedo/myFII_B3`](https://github.com/vmeazevedo/myFII_B3).

### Outros genéricos vistos

Rotki (cripto e privacidade, AGPL-3.0) e Paisa (contabilidade em texto, AGPL-3.0) existem e são ativos, mas não miram a carteira-alvo nem o Brasil. Não os aprofundei.

## Posicionamento

O texto anterior era "a ferramenta aberta de carteira-alvo para quem investe no Brasil e lá fora". A pesquisa **confirma a parte do Brasil e ajusta a da carteira-alvo**:

- **Confirmado:** nenhum open source trata renda fixa brasileira na curva, Tesouro e cota CVM com fonte oficial, ETF da B3 por exposição e FGC por conglomerado. Esse é o espaço livre.
- **Ajustado:** "carteira-alvo" sozinha deixou de ser exclusiva. O Wealthfolio tem alvo e rebalanceamento só com aporte, e o Ghostfolio pode ganhar o desvio da alocação. O que ainda ninguém tem é a **segunda camada** (ativo dentro da classe, como 30% ITUB4 dentro de ações Brasil) combinada com o Onde aportar nas duas camadas.
- **Também diferente:** carteira e gastos no mesmo produto, com Open Finance pelo Meu Pluggy sem o passo a passo manual do Actual; versão hospedada gratuita, que Ghostfolio (Premium) e Wealthfolio (assinatura de sincronização) não oferecem nesse formato.

Frase adotada (decisão do dono, #271): **"A carteira-alvo aberta para quem investe no Brasil e lá fora, com renda fixa brasileira de verdade e aporte guiado nas duas camadas."** A pesquisa indicava que "carteira-alvo" sozinha não basta.

Em inglês, para a landing: "The open target portfolio for people who invest in Brazil and abroad, with real Brazilian fixed income and guided contributions across both layers."

## Riscos

- O Wealthfolio está ativo e tem pedidos abertos de meta por ativo e de títulos de renda fixa; pode alcançar a segunda camada. O tratamento brasileiro (fontes oficiais, FGC) dá mais trabalho a quem não vive aqui, então é a parte mais defensável.
- A cobertura do que "não encontrei" pode estar incompleta: a pesquisa não instalou nem testou os produtos.
- Vale refazer esta pesquisa antes do lançamento, pelo ritmo dos projetos citados.

## Fontes

- [Ghostfolio (README, código e issue 6840)](https://github.com/ghostfolio/ghostfolio)
- [Wealthfolio (README, documentação de alvos e issues)](https://wealthfolio.app/docs/guide/allocation-targets/)
- [Portfolio Performance](https://github.com/portfolio-performance/portfolio)
- [Sure](https://github.com/we-promise/sure) e [Maybe (arquivado)](https://github.com/maybe-finance/maybe)
- [Actual Budget: setup do Pluggy.ai](https://actualbudget.org/docs/advanced/bank-sync/pluggyai)
- [Firefly III](https://github.com/firefly-iii/firefly-iii)
- [finance.sh](https://github.com/diego-luz/finance.sh)
- Busca no GitHub por tópicos (`portfolio-tracker`, `wealth-management`, `rebalancing`, `tesouro-direto`, `b3`, `fiis`, `investimentos`) e por termos em português e inglês.

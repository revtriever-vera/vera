# Vera

**O retrato real do seu dinheiro.** Plataforma financeira open source, com plano gratuito completo, e dois objetivos:

1. **Gestão patrimonial:** ver em segundos como os investimentos estão distribuídos (Brasil, EUA e cripto, numa moeda só), comparar com a carteira que você considera ideal e saber onde aportar.
2. **Gestão de gastos:** receber os gastos do cartão e da conta pelo Open Finance, categorizados, e ver onde cortar para bater a meta de economia.

> Status: **fase de design**. O repositório tem a análise de viabilidade, as decisões de produto e um protótipo navegável. Nada da aplicação foi implementado ainda.

## O que tem aqui

| Caminho | Conteúdo |
| --- | --- |
| [`docs/viabilidade.md`](docs/viabilidade.md) | Análise de viabilidade técnica e de negócio dos dois módulos |
| [`docs/decisoes.md`](docs/decisoes.md) | Registro das decisões de produto, com o motivo de cada uma |
| [`docs/concorrentes.md`](docs/concorrentes.md) | Mapa dos concorrentes open source, tabela comparativa e posicionamento |
| [`docs/stack.md`](docs/stack.md) | Stack e padrões de projeto (os mesmos do GetCart) |
| [`docs/tom-de-voz.md`](docs/tom-de-voz.md) | Como a Vera escreve: regras, padrões por tipo de texto e referências |
| [`prototipo/`](prototipo/) | Protótipo navegável em um único HTML, com dados de exemplo |

O trabalho está organizado no [Project da Vera](https://github.com/orgs/revtriever-vera/projects/1), um card por entrega.

## Protótipo

Abra `prototipo/index.html` no navegador. Não precisa de build nem de servidor. Ele cobre:

- Login social (Google e Facebook, simulado)
- Onboarding com duas etapas opcionais: cadastrar ativos e conectar bancos
- Visão geral da carteira, carteira-alvo em duas camadas e Onde aportar
- Cadastro de ativos por tipo, com renda fixa calculada automaticamente, tipo do título e emissor
- Renda fixa: próximos vencimentos com atalho para realocar, taxa real e cobertura do FGC por conglomerado
- Concentração da carteira por emissor e por setor
- Resumo de gastos, transações com regras de categoria, sugestão de corte e conexões
- Resumos em texto do mês, dos cortes e da carteira dentro das próprias telas (Premium, com permissão explícita para enviar só totais agregados)
- Pessoas na conta (Dono, Editor e Leitura)
- Titular de cada ativo e filtro por titular, que aparecem com 2 pessoas ou mais
- Configurações com plano e uso (assinatura simulada via Asaas, Pix ou cartão, e cota mensal), Vera no WhatsApp (vínculo por código e conversa simulada), Google Agenda, bancos, preferências e dados e privacidade
- Um modo "auto-hospedado", em que não há planos e cada função aparece só com a chave da pessoa

Todos os valores são de exemplo; nada é salvo.

## Princípios

- **Free completo.** Carteira, carteira-alvo, Onde aportar, gastos e Onde cortar não custam nada. Nenhuma fonte de dados dessas funções cobra por usuário: cotações são por ativo e ficam em cache, e o Open Finance usa a conta gratuita de cada pessoa no Meu Pluggy.
- **Sem IA obrigatória.** Classificação de ativos e de gastos é determinística. IA e WhatsApp ficam no Premium, opcionais; na versão auto-hospedada, com as chaves de cada pessoa.
- **Seus dados, seu controle.** Código aberto, login sem senha própria, credenciais cifradas e possibilidade de rodar tudo no seu servidor.

## Licença

[AGPL-3.0](LICENSE). Quem oferecer uma versão modificada como serviço precisa publicar o código dessa versão.

Mantido por [Lucas Oliveira](https://github.com/lucasroscoeoliveira). A versão hospedada é operada pela Revtriever.

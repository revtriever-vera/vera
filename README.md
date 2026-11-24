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

## Instalar com Docker Compose

Roda a Vera inteira na sua máquina ou servidor: API, front-end, Postgres e Redis. Cobrança e Open Finance (Pluggy) ficam desligados; modelo de linguagem, WhatsApp e Google são opcionais e usam as chaves que cada conta cadastra na aba Integrações. Ver [auto-hospedagem](docs/auto-hospedagem.md).

Pré-requisitos: Docker com Compose v2 e acesso à internet no primeiro build (o código da API e do front-end é baixado dos repositórios [`vera-api`](https://github.com/revtriever-vera/vera-api) e [`vera-fe`](https://github.com/revtriever-vera/vera-fe)).

```sh
git clone https://github.com/revtriever-vera/vera.git
cd vera
cp .env.example .env
# preencha os segredos do .env; gere cada um com: openssl rand -hex 32
docker compose up -d --build
```

Depois que tudo subir (a primeira vez demora por causa do build):

| O quê | Onde |
| --- | --- |
| Aplicação | <http://localhost:8080> |
| API | <http://localhost:3333> (saúde em `/health`) |
| E-mails de teste (Mailpit) | <http://localhost:8025> |

### Configuração

Tudo se configura no `.env` (o `.env.example` explica cada variável):

- **Segredos obrigatórios:** `POSTGRES_PASSWORD`, `JWT_SECRET`, `CRYPTO_KEY_HEX` (64 caracteres hexadecimais), `SWAGGER_PASSWORD` e `QUEUES_DASHBOARD_PASSWORD`. Faça backup do `CRYPTO_KEY_HEX`: sem ele os dados cifrados não abrem mais.
- **Endereço público:** para hospedar fora do `localhost`, ajuste `PUBLIC_API_URL`, `APP_URL` e `CORS_ORIGINS`, ponha HTTPS na frente (proxy reverso) e use `COOKIE_SECURE=true`. O front-end lê `PUBLIC_API_URL` no build, então rode `docker compose up -d --build` de novo ao mudar.
- **E-mail:** por padrão os e-mails caem no Mailpit. Para enviar de verdade, aponte `SMTP_HOST`, `SMTP_PORT` e `MAIL_FROM_EMAIL` para o seu servidor SMTP.
- **Versões:** `VERA_API_REF` e `VERA_WEB_REF` escolhem a branch, a tag ou o commit dos dois repositórios (padrão `main`).

### Operação

```sh
docker compose logs -f api            # logs
docker compose pull && docker compose up -d --build   # atualizar (as migrações rodam sozinhas)
docker compose --profile worker up -d # consumidor de filas extra, opcional
docker compose down                   # parar (os dados ficam nos volumes)
```

As migrações do banco rodam no serviço `migrate`, antes de a API subir. A própria API já consome as filas; o perfil `worker` só soma capacidade. Os dados ficam nos volumes `pgdata` e `redisdata`: para backup, `docker compose exec postgres pg_dump -U vera vera > vera.sql`.

## Princípios

- **Free completo.** Carteira, carteira-alvo, Onde aportar, gastos e Onde cortar não custam nada. Nenhuma fonte de dados dessas funções cobra por usuário: cotações são por ativo e ficam em cache, e o Open Finance usa a conta gratuita de cada pessoa no Meu Pluggy.
- **Sem IA obrigatória.** Classificação de ativos e de gastos é determinística. IA e WhatsApp ficam no Premium, opcionais; na versão auto-hospedada, com as chaves de cada pessoa.
- **Seus dados, seu controle.** Código aberto, login sem senha própria, credenciais cifradas e possibilidade de rodar tudo no seu servidor.

## Licença

[AGPL-3.0](LICENSE). Quem oferecer uma versão modificada como serviço precisa publicar o código dessa versão.

Mantido por [Lucas Oliveira](https://github.com/lucasroscoeoliveira). A versão hospedada é operada pela Revtriever.

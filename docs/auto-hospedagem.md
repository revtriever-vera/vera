# Guia de auto-hospedagem

Como a versão que você hospeda difere da hospedada pela Revtriever. A instalação em si (Docker Compose) está no README do `vera-api`.

## Chaves

Cada conta cadastra as próprias chaves na aba Integrações: modelo de linguagem (qualquer provedor compatível com a API da OpenAI, inclusive um modelo local), WhatsApp e Google. Sem a chave, a função some.

## Sem admin, sem cobrança

`DEPLOYMENT_MODE=self_hosted` desliga tudo o que é da operação hospedada:

- não existe company de sistema, e o script de seed recusa rodar;
- as rotas `/platform` respondem 404 e o login com audiência `admin` é recusado;
- o link de cadastro com oferta é ignorado e o alvo de build `admin` não é publicado;
- não há cobrança, teste nem desconto: quem hospeda já tem o banco.

## Dados

Quem hospeda é o controlador dos dados das contas e decide a própria política de privacidade. A [Política da Revtriever](politica-de-privacidade.md) não se aplica. Se você ligar um modelo de linguagem, confira a retenção e o uso para treino no provedor que escolher.

# Política de Privacidade

Rascunho de produto, a revisar antes da publicação. Vale para a Vera hospedada pela Revtriever. Quem hospeda a Vera por conta própria é o controlador dos próprios dados e não passa por esta política.

## Quem trata os dados

A Revtriever é a controladora dos dados da sua conta na Vera hospedada, nos termos da LGPD (Lei 13.709/2018).

## O que a Vera guarda

- **Cadastro:** nome e e-mail que o Google ou o Facebook informam no login. A Vera não guarda senha.
- **Carteira e gastos:** o que você cadastra, importa ou conecta: ativos, metas, transações, contas e cartões vindos do Meu Pluggy ou de arquivos OFX e CSV.
- **Importação de investimentos:** relatórios da B3, nota de corretagem, extrato de corretora no exterior, CSV de exchange de cripto e print ou foto da corretora. Veja a seção "Importação de investimentos".
- **Pessoas da conta:** nome, e-mail e papel (Dono, Editor ou Leitura) de quem você convida.
- **Plano e cobrança:** plano, assinatura, faturas e teste. A Vera não guarda número de cartão: o pagamento acontece na página da Revtriever.
- **Chaves e credenciais** (Meu Pluggy, WhatsApp, Google Agenda): guardadas cifradas e nunca exibidas.

## WhatsApp

Quando você vincula o WhatsApp, a Vera guarda o texto das mensagens trocadas por **30 dias**. Depois disso, o texto é apagado. A Vera usa as últimas mensagens da conversa para responder e não grava conversa própria. Desvincular o número apaga o vínculo.

## Resumos escritos por modelo de linguagem

Só no Premium e só depois de você permitir. Para escrever um resumo, a Vera envia totais agregados a um modelo de linguagem, por um serviço da Vercel.

- **Enviado:** totais, percentuais e marcadores no lugar dos nomes.
- **Nunca enviado:** nomes de pessoas e de estabelecimentos, descrições de transações, e-mails, contas e credenciais.
- **Conferir:** "Ver o que é enviado" mostra o conteúdo exato, montado na hora com os seus dados.
- **Desligar:** em Dados e privacidade. Desligado, nada mais é enviado e os resumos já escritos são apagados.

**Uso pelo provedor.** O modelo usado na versão hospedada é de um provedor externo, que pode reter o que recebe e usar esses dados agregados para treinar e melhorar os próprios modelos. A Vera não promete o contrário. O que a Vera controla é o que sai: só os totais acima. Se isso não serve para você, deixe o envio desligado: o resto da Vera funciona igual.

## Importação de investimentos

Você pode trazer operações de relatórios da B3, nota de corretagem, extrato de corretora no exterior, CSV de exchange de cripto e print ou foto da corretora.

- **O arquivo é descartado assim que é lido** e nunca é guardado pela Vera.
- **As operações lidas ficam por até 30 minutos** aguardando a sua confirmação e depois são apagadas. Só o que você confirma entra na carteira.
- **Print e foto** são lidos por um modelo de linguagem, por um serviço da Vercel, e só são enviados com a sua confirmação a cada arquivo. Esse envio é separado dos resumos: a imagem pode mostrar ativos, quantidades, corretora e o nome do titular, e não segue a regra de "só totais" da seção anterior.
- **Uso pelo provedor.** O modelo é de um provedor externo, que pode reter a imagem e usá-la como descrito em "Uso pelo provedor" acima. "Descartado" vale para a cópia da Vera, não para a que está com o provedor. Se isso não serve para você, não envie print nem foto: os relatórios e arquivos em CSV ou Excel não passam por modelo de linguagem.

## Acesso do suporte aos dados da sua conta

Pessoas autorizadas da Revtriever podem abrir dados da sua conta só quando precisam, para dar suporte que você pediu ou para investigar fraude e falha de segurança.

- O acesso é só leitura e em duas camadas: resumo da conta e dados da conta.
- Cada abertura pede um motivo escrito e fica registrada: quando, quem e por quê.
- Nunca ficam acessíveis: chaves e credenciais, tokens e o conteúdo das conversas do WhatsApp.
- O Dono da conta vê cada acesso em **Configurações › Dados e privacidade › Acessos do suporte**.

Bases legais: execução do contrato (suporte pedido por você) e legítimo interesse (segurança e prevenção de fraude).

## Marca permanente do e-mail, contra abuso do teste grátis

Cada conta faz um teste grátis só. Para impedir que o mesmo e-mail abra contas novas para repetir o teste, a Vera guarda uma marca do e-mail verificado de quem resgata a oferta: um HMAC do e-mail normalizado (Gmail sem pontos e sem o que vem depois do `+`). A Vera não guarda o e-mail nessa marca e não consegue recuperá-lo a partir dela.

- **Sobrevive à exclusão da conta.** Apagar a conta não apaga a marca.
- **Retenção:** 2 anos, depois a marca é apagada.
- **Base legal:** legítimo interesse, na prevenção de fraude.
- **Efeito:** o mesmo e-mail não faz um segundo teste em conta nova.

## Seus direitos

Você pode exportar os dados da conta em planilha, corrigi-los no app e excluir a conta em Dados e privacidade. A exclusão apaga carteira, gastos, pessoas, chaves e vínculos. Ficam só o que a lei exige guardar (como notas fiscais da assinatura) e a marca do e-mail descrita acima. Pedidos que o app não cobre vão pelo canal de contato indicado no app.

## Com quem os dados são compartilhados

- Meu Pluggy: leitura de contas e transações, com a credencial que você cadastra.
- Meta: entrega das mensagens do WhatsApp.
- Vercel e o provedor do modelo: totais agregados dos resumos, se você permitir; e o print ou a foto da corretora que você confirmar enviar, para a leitura das operações.
- Google e Facebook: login. Google também para a Agenda, se você conectar.
- Revtriever e o provedor de pagamento: cobrança do Premium.

A Vera não vende dados nem usa a sua carteira para publicidade.

## Mudanças nesta política

Mudança no que é enviado ao modelo pede um novo aceite no app (para a leitura de print e foto, é a confirmação a cada arquivo). As demais ficam registradas com a data neste repositório.

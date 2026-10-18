// === BLOCO 1: TEXTOS DO CAMINHO DE VENDA (fonte única: painel de vendas + roteiro) ===
// Base: scripts 1x1 do Elton (situação → problema → paráfrase → necessidade → fechamento → comprovante,
// cadência de 2ª/3ª tentativa), objeções e calendário de grupo da Lila, na voz da Larissa.
// Variáveis: {nome} {desafio} {naoDeveria} {rotina} {link} {prazo} {vagas} {preco} {parcela} {parcelas} {encontros}
// [[ ... ]] = trecho opcional: some sozinho se alguma variável dentro dele estiver vazia.

// === BLOCO 2: MENSAGENS PRA CADA PESSOA (1 toque no painel abre o WhatsApp já escrito) ===
window.MSG_PESSOA = [
  { k: "d0_presente", rot: "Convite · foi ao workshop", quando: "No mesmo dia, depois do workshop", pra: "presente",
    txt: `Oi {nome}! Aqui é a Lari 💛

Obrigada de verdade por ter ficado comigo no workshop.[[ No formulário você me contou que o seu maior desafio hoje é "{desafio}", e eu fiquei pensando em você enquanto falava do cliente que só aparece quando dói.]]

Me conta: o que mais fez sentido pra você hoje?` },
  { k: "d0_ausente", rot: "Não foi ao workshop", quando: "No mesmo dia ou no dia seguinte", pra: "ausente",
    txt: `Oi {nome}! Aqui é a Lari 💛

Senti sua falta no workshop! A gente falou sobre por que o cliente some depois que a dor passa, e como fazer ele voltar por constância e ainda te indicar.

Abri uma oportunidade só pra quem se inscreveu: a mentoria presencial, com condição especial até {prazo}. Posso te contar como funciona?` },
  { k: "abandono", rot: "Reservou e não pagou", quando: "Algumas horas depois da reserva", pra: "reservou",
    txt: `Oi {nome}! Vi que você reservou sua vaga na mentoria, mas o comprovante ainda não chegou por aqui 💛

Aconteceu alguma coisa? Se quiser, te ajudo com a forma de pagamento: dá pra fazer no Pix ou no cartão em até {parcelas}x.` },
  { k: "conversa", rot: "Abrir conversa (quem ainda não respondeu)", quando: "1 a 2 dias depois", pra: "todas",
    txt: `Oi {nome}, tudo bem?

[[Fiquei com uma frase sua na cabeça: "eu não deveria ter que {naoDeveria}". Eu já estive exatamente aí, e foi isso que me fez criar o meu método.

]]Posso te fazer duas perguntas rápidas pra entender se a mentoria faz sentido pra você agora?` },
  { k: "prazo", rot: "Lembrete do prazo", quando: "Penúltimo dia", pra: "todas",
    txt: `{nome}, passando com carinho pra te avisar: a condição especial da mentoria (com os bônus) vai até {prazo}.[[ Restam só {vagas} vagas.]]

Se tiver qualquer dúvida, me chama aqui que eu te respondo pessoalmente 💛
{link}` },
  { k: "ultimo_dia", rot: "Último dia", quando: "Último dia, de manhã", pra: "todas",
    txt: `{nome}, hoje é o último dia da condição especial da mentoria Massoterapeuta de Sucesso. À meia-noite ela encerra, junto com os bônus.

Se você sente que é a sua hora de parar de ser o remédio de emergência dos seus clientes, é aqui 👇
{link}

Qualquer coisa, tô aqui.` },
  { k: "despedida", rot: "Despedida (sem resposta)", quando: "Depois de 2 tentativas sem resposta", pra: "todas",
    txt: `{nome}, tentei falar com você algumas vezes esses dias e imagino que não seja o momento agora, e tá tudo bem 💛

Quando fizer sentido, é só me chamar. Continua contando comigo por aqui!` },
  { k: "boas_vindas", rot: "Boas-vindas (pagou)", quando: "Assim que o comprovante chegar", pra: "pagou",
    txt: `{nome}, boas-vindas à Massoterapeuta de Sucesso! 💛

Sua vaga tá confirmada. Nos próximos dias eu te mando os detalhes do primeiro encontro e te coloco no grupo da turma.

Tô muito feliz de caminhar com você.` },
];

// === BLOCO 3: ROTEIRO DA CONVERSA NO PRIVADO (copiar e colar durante a conversa) ===
window.ROTEIRO = [
  { rot: "1 · Pergunta de situação", txt: `{nome}, qual era o seu objetivo quando você se inscreveu no workshop? E o que mais te ajudou?`, obs: "Esperar a resposta. Ouvir de verdade." },
  { rot: "2 · Pergunta de problema", txt: `E hoje, o que mais te impede de chegar nisso? Qual é o maior desafio com os seus clientes agora?`, obs: "Esperar a resposta. Ela vai dizer o impedimento principal." },
  { rot: "3 · Paráfrase + argumento", txt: `Obrigada por me contar, {nome}. Você me disse que quer [OBJETIVO] e que hoje tem dificuldade com [DESAFIO]. É exatamente isso que a gente trabalha na mentoria: como fazer o cliente entender a causa da dor, voltar por constância e te indicar, sem você trabalhar mais horas.

Uma cliente minha me disse: "depois que fizer uma vez não vai querer mais ir em outra pessoa". É isso que eu quero que os seus clientes digam de você.`, obs: "Trocar [OBJETIVO] e [DESAFIO] pelas palavras DELA." },
  { rot: "4 · Pergunta de necessidade", txt: `Diante disso, que diferença você acha que faria na sua vida ter clientes que voltam sem estar com dor e ainda trazem amigas?`, obs: "Esperar a resposta. Ela mesma vai dizer o valor." },
  { rot: "5 · Fechamento", txt: `{nome}, eu tenho certeza que a mentoria vai te ajudar a [OBJETIVO DELA]. O investimento é de {parcelas}x de {parcela} no cartão, ou {preco} à vista no Pix.

E você tem a minha garantia: se aplicar o que eu te ensinar nos primeiros 30 dias e não sentir diferença em como os seus clientes voltam, eu te acompanho sem custo até sentir.

Faz sentido pra você?`, obs: "Se disser sim → mandar o link (6)." },
  { rot: "6 · Link + comprovante", txt: `Que alegria! 💛 Aqui o link pra garantir sua vaga: {link}

Assim que pagar, me manda o comprovante aqui que eu já confirmo sua vaga e te coloco no grupo da turma.`, obs: "" },
  { rot: "Cadência · 2ª tentativa", txt: `Oi {nome}! Passando pra ver se ficou alguma dúvida sobre a mentoria, porque a condição especial termina em breve. Posso te ajudar em alguma coisa?`, obs: "Se ela parou de responder. Depois disso, usar a Despedida." },
];

// === BLOCO 4: OBJEÇÕES (resposta pronta) ===
window.OBJECOES = [
  { rot: "\"Tá caro\" / \"não tenho dinheiro agora\"", txt: `Te entendo, {nome}. Faz uma conta comigo: quantos clientes por mês aparecem uma vez e somem? Se só 2 ou 3 deles passarem a voltar por constância, a mentoria se paga, sem contar as indicações deles. Por isso deixei também em até {parcelas}x no cartão.` },
  { rot: "\"Não tenho tempo\"", txt: `Eu sei que sua rotina é corrida, {nome}, e é justamente por isso que a mentoria é prática: você aplica nos atendimentos que já tem na semana, sem trabalhar mais horas.

E pensa comigo: quanto mais cheia a sua agenda, mais valor a sua massagem tem, e mais você pode cobrar por ela. São {encontros} que você investe agora pra ter uma agenda cheia de clientes que voltam e te indicam.` },
  { rot: "\"Já fiz vários cursos\"", txt: `Faz sentido, {nome}. Mas me diz: os cursos que você fez te ensinaram o que fazer com as mãos ou o que fazer com a pessoa? A mentoria é sobre a pessoa: a escuta, o vínculo e a conversa que fazem ela voltar e te indicar.` },
  { rot: "\"Sou iniciante\"", txt: `Esse é o melhor momento, {nome}. Você já começa construindo clientes que voltam por constância, em vez de passar anos dependendo da dor dos outros como eu passei.` },
  { rot: "\"Vou pensar\"", txt: `Claro, {nome}, decisão importante merece reflexão 💛 Me ajuda a te ajudar: quais são as 2 coisas principais que você vai pensar? Assim eu já te tiro as dúvidas antes da condição encerrar.` },
  { rot: "\"De 0 a 5\" (quando ela tá em cima do muro)", txt: `{nome}, de 0 a 5, qual a chance de você entrar na mentoria? ... E o que falta pra esse número chegar no 5?` },
  { rot: "\"Isso é dom, não sei se consigo\"", txt: `Não é dom, {nome}, é escuta. Você sentiu nas próprias mãos no workshop. Escuta se treina, e é exatamente isso que a gente faz nos encontros.` },
];

// === BLOCO 5: CALENDÁRIO DO GRUPO DE WHATSAPP (antes e depois do workshop) ===
window.GRUPO = [
  { quando: "Ao criar o grupo (selecionadas)", txt: `Boas-vindas! 💛

Se você está aqui, é porque a sua inscrição foi selecionada pro meu workshop. Aqui vou mandar tudo: data, horário, o que levar e alguns presentes antes do grande dia.

Me conta aqui embaixo: de onde você é e há quanto tempo atende? 🙂` },
  { quando: "5 dias antes", txt: `Faltam 5 dias! ✨

No workshop eu vou te mostrar por que o seu cliente some depois que a dor passa, e o que fazer pra ele voltar por constância.

E tem uma coisa importante: no final, ao vivo, eu vou abrir uma oportunidade que eu nunca abri antes, só pra quem estiver lá. Por isso, fica até o fim 💛` },
  { quando: "3 dias antes", txt: `Uma pergunta pra vocês pensarem até o workshop:

Quantos dos seus clientes de hoje vão voltar mês que vem SEM estar com dor?

Guarda a sua resposta. A gente vai falar exatamente disso 💛` },
  { quando: "Véspera", txt: `É amanhã! 🔥

📅 [DATA] · ⏰ [HORÁRIO] · 📍 [LOCAL/LINK]

Leva papel e caneta (e roupa confortável, porque vai ter prática). A parte que vocês mais querem fica pro segundo tempo, e no final eu abro a oportunidade especial só pra quem estiver lá.

Te espero 💛` },
  { quando: "No dia · 1 hora antes", txt: `Daqui 1 hora a gente começa! ⏰ [LINK/ENDEREÇO]` },
  { quando: "No dia · 10 minutos antes", txt: `Já tô aqui te esperando 💛 [LINK/ENDEREÇO]` },
  { quando: "Logo depois do workshop", txt: `Que noite! 💛 Obrigada a cada pessoa que esteve comigo.

[PRINT/FOTO DOS COMENTÁRIOS: "quanto valeu", "maior insight"]

Como eu prometi, abri as vagas da mentoria presencial Massoterapeuta de Sucesso, com condição especial e bônus pras primeiras, só até {prazo}.

Todos os detalhes aqui 👇
{link}` },
  { quando: "Dia seguinte", txt: `Bom dia! 💛 Uma coisa que eu falei ontem e quero que fique com vocês:

Você não é o remédio de emergência de ninguém. Você é o caminho de cura.

Pra quem já garantiu a vaga na mentoria: boas-vindas! 🎉 Se você ainda tá pensando, me chama no privado que eu te ajudo a decidir.
{link}` },
  { quando: "2 dias depois", txt: `"Depois que fizer uma vez não vai querer mais ir em outra pessoa." (Nathalia, minha cliente)

É isso que acontece quando o cliente se sente escutado de verdade. E é isso que eu vou te ensinar a provocar, encontro por encontro, na mentoria.

Tem dúvida? Hoje às [HORÁRIO] eu fico aqui no grupo respondendo todas 💛
{link}` },
  { quando: "Penúltimo dia", txt: `Faltam 2 dias pra encerrar a condição especial da mentoria (e os bônus de quem entra primeiro acabam antes) ⏳

Se você sente que é a sua hora, não deixa pra depois.
{link}` },
  { quando: "Último dia · manhã", txt: `🚨 Último dia!

Hoje às 23h59 encerra a condição especial da Massoterapeuta de Sucesso.

Se você quer:
💛 clientes que voltam sem estar com dor
💛 indicação sem precisar pedir
💛 renda previsível sem mais horas na maca

é agora 👇
{link}` },
  { quando: "Último dia · 18h", txt: `Faltam poucas horas ⏳ A mentoria tem garantia: se aplicar e não sentir diferença em 30 dias, eu te acompanho sem custo até sentir. Você não tem nada a perder.
{link}` },
  { quando: "Último dia · 1 hora antes", txt: `🚨 Falta 1 hora! Depois disso a condição especial encerra.
{link}` },
  { quando: "Depois que encerrar", txt: `As inscrições com a condição especial encerraram 💛

Obrigada a cada pessoa que esteve comigo nessa jornada. Pra quem entrou na turma: boas-vindas, a gente se vê no primeiro encontro! 🎉` },
];

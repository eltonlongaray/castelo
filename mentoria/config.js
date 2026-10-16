// === BLOCO 1: CONFIGURAÇÃO DA OFERTA (a Larissa preenche aqui) ===
// Usado pela página da mentoria (/castelo/mentoria/) e pelo painel de vendas (/castelo/vendas/).
// Campos com null = ainda não definidos: a página mostra "a definir" e o aviso de rascunho.
window.MENTORIA = {
  nome: "Massoterapeuta de Sucesso",
  subtitulo: "Mentoria presencial com o método Sinergia Intuitiva",
  local: "Porto Alegre · no espaço da Larissa",
  datas: null,                 // ex: "4 encontros às terças, de 11/11 a 02/12, 19h às 22h"
  whatsapp: "5551984551613",   // WhatsApp da Larissa (recebe comprovante e dúvidas)

  // Condição especial (só pra quem participou do workshop)
  prazo: null,                 // ex: "2026-11-08T23:59:00-03:00"  → fecha a condição sozinho
  vagas: null,                 // total de vagas da turma (ex: 8)
  bonusPrimeiras: null,        // bônus vale pras X primeiras (ex: 3)

  // Preço
  precoCheio: null,            // "tudo isso daria" (ancoragem), ex: 6000
  precoPoderia: null,          // "eu poderia cobrar", ex: 4500
  precoHoje: null,             // à vista hoje, ex: 2970
  parcelas: 12,
  valorParcela: null,          // ex: 297

  // Pagamento
  pixChave: null,              // chave Pix da Larissa
  pixNome: "Larissa Rodrigues",
  linkCartao: null,            // link de pagamento do Mercado Pago (cartão em até 12x)

  // O que entra (cada pilar do método = um encontro prático)
  encontros: [
    { t: "A Dança", p: "Escute o que o corpo do seu cliente esconde antes mesmo dele falar.", v: null },
    { t: "O Ritual", p: "Transforme uma sessão comum numa experiência que ele não encontra em outro lugar.", v: null },
    { t: "O Vínculo", p: "Faça o cliente parar de comparar o seu preço com o de qualquer outra.", v: null },
    { t: "O Efeito Cascata", p: "Faça cada cliente feliz trazer o próximo, sem você pedir.", v: null },
    { t: "O Negócio", p: "Monte pacotes, cobre pelo valor e tenha renda previsível sem mais horas.", v: null },
  ],
  acompanhamento: { t: "Acompanhamento comigo", p: "Grupo no WhatsApp durante toda a mentoria pra tirar dúvidas e destravar na prática.", v: null },
  bonus: [
    "Uma sessão comigo pra você sentir o método na pele",
    "Roteiro da frase-ponte e do pacote: o que falar no fim da sessão pra vender constância",
    "Ficha de atendimento digital com mapa do corpo, pra usar com os seus clientes desde o primeiro dia",
  ],
  garantia: "Se você aplicar o que eu te ensinar nos primeiros 30 dias e não sentir diferença em como os seus clientes voltam, eu te acompanho sem custo até sentir.",
};

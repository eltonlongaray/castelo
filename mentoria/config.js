// === BLOCO 1: CONFIGURAÇÃO DA OFERTA (a Larissa preenche aqui) ===
// Usado pela página da mentoria (/castelo/mentoria/) e pelo painel de vendas (/castelo/vendas/).
// Campos com null = ainda não definidos: a página mostra "a definir" e o aviso de rascunho.
window.MENTORIA = {
  nome: "Massoterapeuta de Sucesso",
  subtitulo: "Mentoria presencial com o método Sinergia Intuitiva",
  local: "Porto Alegre · no espaço da Larissa",
  datas: "5 aulas de 3h + 3 atendimentos com acompanhamento", // (datas dos encontros: a definir)
  duracaoAula: "3h",
  whatsapp: "5551984551613",   // WhatsApp da Larissa (recebe comprovante e dúvidas)

  // Condição especial (só pra quem participou do workshop)
  prazo: null,                 // ex: "2026-11-08T23:59:00-03:00"  → fecha a condição sozinho
  vagas: 5,                    // vagas por TURMA. Passou de 5 inscrições pagas → abre a turma 2
  bonusPrimeiras: null,        // bônus vale pras X primeiras (ex: 3)

  // Preço
  precoCheio: null,            // "tudo isso daria" — null = soma sozinho os valores de cada item abaixo
  precoPoderia: 3000,          // "eu poderia cobrar" (proposta 18/10, a confirmar)
  precoHoje: 1800,             // valor da mentoria (definido pela Larissa, 18/10)
  parcelas: 12,
  valorParcela: null,          // ex: 297

  // Pagamento
  pixChave: null,              // chave Pix da Larissa
  pixNome: "Larissa Rodrigues",
  linkCartao: null,            // link de pagamento do Mercado Pago (cartão em até 12x)

  // O que entra (cada pilar do método = um encontro prático)
  encontros: [
    { t: "A Dança", p: "Escute o que o corpo do seu cliente esconde antes mesmo dele falar.", v: 500 },
    { t: "O Ritual", p: "Transforme uma sessão comum numa experiência que ele não encontra em outro lugar.", v: 500 },
    { t: "O Vínculo", p: "Faça o cliente parar de comparar o seu preço com o de qualquer outra.", v: 500 },
    { t: "O Efeito Cascata", p: "Faça cada cliente feliz trazer o próximo, sem você pedir.", v: 500 },
    { t: "O Negócio", p: "Monte pacotes, cobre pelo valor e tenha renda previsível sem mais horas.", v: 500 },
  ],
  acompanhamento: { t: "3 atendimentos com acompanhamento", p: "Três atendimentos com o meu acompanhamento, pra você aplicar o método na prática com segurança.", v: 1050 },
  // Ancoragem (proposta 18/10, a confirmar com a Larissa): aula = R$ 500 (3h ≈ a hora da massagem dela),
  // atendimento acompanhado = R$ 350 cada, sessão = o preço real dela (R$ 170).
  bonus: [
    { t: "Uma sessão comigo pra você sentir o método na pele", c: "Sessão comigo", v: 170 },
    { t: "Roteiro da frase-ponte e do pacote: o que falar no fim da sessão pra vender constância", c: "Roteiro da frase-ponte e do pacote", v: 197 },
    { t: "Ficha de atendimento digital com mapa do corpo, pra usar com os seus clientes desde o primeiro dia", c: "Ficha digital com mapa do corpo", v: 297 },
  ],
  garantia: "Se você aplicar o que eu te ensinar nos primeiros 30 dias e não sentir diferença em como os seus clientes voltam, eu te acompanho sem custo até sentir.",
};

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
  linkCartao: "https://checkout.infinitepay.io/larioltramari/XktEBmX75f", // link de pagamento da InfinitePay (cartão em até 12x)

  // O que entra: 5 aulas na ordem da EXPERIÊNCIA DO CLIENTE (definido pelo Elton, 18/10)
  // t = nome da aula · p = promessa · itens = entregáveis · v = valor (ancoragem)
  encontros: [
    { t: "O Ambiente", p: "Prepare um espaço que acolhe antes mesmo do primeiro toque.", v: 500,
      itens: ["Preparação da maca", "Luz, música e aromas", "Difusores e fontes com som de água", "Cremes, óleos e toalhas", "Checklist de preparação antes de cada atendimento"] },
    { t: "O Acolhimento na maca", p: "Faça o cliente se sentir cuidado do primeiro ao último minuto.", v: 500,
      itens: ["Temperatura agradável no ambiente", "Manter o cliente aquecido: pés, mãos e tronco", "Conforto e posicionamento", "O que observar enquanto ele está na maca"] },
    { t: "A Ficha do cliente", p: "Conheça o corpo do seu cliente e mostre pra ele a própria evolução.", v: 500,
      itens: ["Ficha de cadastro (anamnese e mapa do corpo)", "Acompanhamento sessão a sessão", "Como devolver a evolução pro cliente e gerar consciência corporal"] },
    { t: "A Massagem", p: "Escolha a técnica certa e escute o corpo enquanto aplica.", v: 500,
      itens: ["Tipos de massagem e quando indicar cada uma", "Métodos de execução", "A escuta das mãos: o diálogo com o corpo do cliente"] },
    { t: "O Efeito Cascata", p: "Feche pacotes e transforme cada cliente em quem te indica.", v: 500,
      itens: ["Comunicação estratégica pra fechar pacote", "Acompanhamento depois da sessão", "Lista de indicações", "Cartão presente: a cada 3 indicações, o cliente ganha 1 cartão presente pra usar como quiser"] },
  ],
  acompanhamento: { t: "3 atendimentos com acompanhamento", p: "Três atendimentos com o meu acompanhamento, pra você aplicar o método na prática com segurança.", v: 1050 },
  // Incluso pra TODA aluna (não é bônus de quem entra primeiro): a ficha é a ferramenta da aula 3
  inclusos: [
    { t: "Ficha de atendimento digital com mapa do corpo", c: "Ficha digital com mapa do corpo (app)", p: "A ferramenta da aula 3 pronta pra usar no celular: cadastro, mapa do corpo e evolução de cada cliente, desde o primeiro dia.", v: 297 },
  ],
  // Ancoragem (proposta 18/10, a confirmar com a Larissa): aula = R$ 500 (3h ≈ a hora da massagem dela),
  // atendimento acompanhado = R$ 350 cada, sessão = o preço real dela (R$ 170).
  bonus: [
    { t: "Uma sessão comigo pra você sentir o método na pele", c: "Sessão comigo", v: 170 },
    { t: "Kit de comunicação pronto: mensagens de copiar e colar pra fechar pacote, acompanhar o cliente depois da sessão e pedir indicação", c: "Kit de comunicação (pacote, acompanhamento e indicação)", v: 197 },
    { t: "Modelo do cartão presente e da lista de indicações, prontos pra usar", c: "Modelo do cartão presente e lista de indicações", v: 97 },
  ],
  garantia: "Se você aplicar o que eu te ensinar nos primeiros 30 dias e não sentir diferença em como os seus clientes voltam, eu te acompanho sem custo até sentir.",
};

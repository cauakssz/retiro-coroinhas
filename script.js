const PROGRAMACAO = [
  {
    horario: "8h – 8h30",
    titulo: "Acolhida e animação",
    responsaveis: "João, Cauã e coroinhas de Murici",
    descricao: "Recepção dos participantes, dinâmica de integração e animação inicial.",
  },
  {
    horario: "8h30 – 8h45",
    titulo: "Oração inicial",
    responsaveis: "Coroinhas de São José da Laje",
    descricao: "Invocação do Espírito Santo e oração inicial.",
  },
  {
    horario: "8h45 – 9h",
    titulo: "Dinâmica de integração",
    responsaveis: "Nossa Senhora de Lourdes",
    descricao: "Momento de descontração e integração entre os grupos.",
  },
  {
    horario: "9h – 10h30",
    titulo: "1ª Palestra – O serviço do coroinha",
    responsaveis: "Jal",
    descricao: "Reflexão sobre o significado de servir no altar, o compromisso e a responsabilidade do coroinha.",
  },
  {
    horario: "10h30 – 10h45",
    titulo: "Intervalo",
  },
  {
    horario: "10h45 – 12h15",
    titulo: "2ª Palestra – Fazer que puxa o ser",
    responsaveis: "Simone",
    descricao: "Como o serviço no altar transforma a vida, as atitudes e a relação com o próximo.",
  },
  {
    horario: "12h15 – 13h15",
    titulo: "Almoço",
    responsaveis: "Coordenação da Forania",
  },
  {
    horario: "13h15 – 14h45",
    titulo: "3ª Palestra – Formação litúrgica",
    responsaveis: "Diácono de São José da Laje",
    descricao: "Liturgia, serviço do altar, gestos, objetos litúrgicos e participação na celebração.",
  },
  {
    horario: "14h45 – 15h45",
    titulo: "Momento com o vigário forâneo",
    responsaveis: "Padre Cícero",
    descricao: "Palavra, orientação e reflexão sobre a missão dos coroinhas na Igreja.",
  },
  {
    horario: "15h45 – 16h15",
    titulo: "Adoração ao Santíssimo Sacramento",
    descricao: "Silêncio, oração e encontro com Jesus, fortalecendo a espiritualidade e a vocação de servir.",
    destaque: true,
  },
  {
    horario: "16h15 – 16h30",
    titulo: "Terço",
    responsaveis: "Coroinhas de Branquinha",
    descricao: "Momento de oração e devoção mariana.",
  },
  {
    horario: "16h30 – 16h40",
    titulo: "Leitura bíblica e reflexão",
    responsaveis: "Coroinhas de Santa Luzia",
    descricao: "Proclamação de uma passagem bíblica e breve reflexão sobre o chamado ao serviço.",
  },
  {
    horario: "16h40 – 17h",
    titulo: "Encerramento e organização",
    responsaveis: "João, Cauã e Coordenação da Forania",
    descricao: "Agradecimentos, avisos e preparação para a Santa Missa.",
  },
  {
    horario: "17h",
    titulo: "Santa Missa de encerramento",
    descricao: "Participação de todos os coroinhas da Forania.",
    destaque: true,
  },
];

function criarItemDaProgramacao(atividade) {
  const item = document.createElement("li");
  item.className = "programacao__item";
  if (atividade.destaque) {
    item.classList.add("programacao__item--destaque");
  }

  item.innerHTML = `
    <div class="programacao__horario">${atividade.horario}</div>
    <h3>${atividade.titulo}</h3>
    ${atividade.responsaveis ? `<p class="programacao__responsaveis">Responsáveis: ${atividade.responsaveis}</p>` : ""}
    ${atividade.descricao ? `<p class="programacao__descricao">${atividade.descricao}</p>` : ""}
  `;
  return item;
}

function mostrarProgramacao() {
  const lista = document.getElementById("programacao");
  PROGRAMACAO.forEach((atividade) => lista.appendChild(criarItemDaProgramacao(atividade)));
}

mostrarProgramacao();

function Curso(nome, duracao, desc) {
  this.nome = nome;
  this.duracao = duracao;
  this.desc = desc;
}

var cursos = [];

function fillCursos() {
  cursos.push(
    new Curso(
      "Eletrônica Automotiva",
      "2.880 horas",
      "O tecnólogo em Eletrônica Automotiva:" +
        "participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva;" +
        "supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio;" +
        "especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio;"
    )
  );
  cursos.push(
    new Curso(
      "Análise e Desenvolvimento de Sistemas",
      "2.880 horas",
      "O tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional."
    )
  );
  cursos.push(
    new Curso(
      "Fabricação Mecânica",
      "2.880 horas",
      "O tecnólogo em Fabricação Mecânica atua no segmento de fabricação, envolvendo usinagem, conformação, soldagem, montagem e outros processos mecânicos. Planeja, controla e gerencia os diversos processos, atuando no desenvolvimento e melhoria de produtos, dos processos de fabricação e na gestão de projetos, aliando competências das áreas de gestão, qualidade e controle ambiental. Exerce suas atividades em empresas do ramo metal-mecânico, incluindo indústrias manufatureiras e ferramentarias, podendo ainda atuar em institutos e centros de pesquisa, órgãos governamentais, escritórios de consultoria, dentre outros."
    )
  );
  cursos.push(
    new Curso(
      "Gestão da Qualidade",
      "2.880 horas",
      "O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade e produtividade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade. Elabora e analisa documentação e relatórios de qualidade, considerando normas de qualidade estabelecidas. Desenvolve avaliação sistemática dos procedimentos, práticas e rotinas internas e externas de uma organização. Mobiliza pessoas para agir com qualidade em todas as atividades corporativas. Gerencia e mantém o fluxo de informação e comunicação na empresa. Dissemina a cultura da qualidade e produtividade. Capacita pessoas em procedimentos e rotinas destinados a minimizar a produção fora de conformidade (utilizando softwares específicos). Elabora ferramentas para minimizar a incidência de falhas. Através da análise de dados (Estatística), Six Sigma, conduz programas de melhorias na Qualidade da empresa. Elabora e gerencia estratégias para obtenção de certificações, garantia e auditoria da Qualidade. Desenvolve programa de avaliação de performance produtiva organizacional considerando aspectos quantitativos e qualitativos. Avalia e emite parecer técnico em sua área de formação.?"
    )
  );
}

function pegarCurso(nome) {
  let obj = cursos.find((o) => o.nome === nome);
  console.log(obj.desc);
  if (obj == undefined) alert("Erro ao encontrar curso");
  else return obj;
}

function onLoad() {
  fillCursos();
  console.log(localStorage.getItem("curso"));
  var curso = pegarCurso(localStorage.getItem("curso"));
  document.getElementById("nome").innerHTML = curso.nome;
  document.getElementById("duracao").innerHTML =
    "Duração de : " + curso.duracao;
  document.getElementById("desc").innerHTML = curso.desc;
}

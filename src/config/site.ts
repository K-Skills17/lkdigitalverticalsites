// ─────────────────────────────────────────────────────────────────────────────
// LK Digital — Site Configuration
// All positioning copy lives here. Change this file to pivot to a vertical.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "LK Digital",
  tagline: "Sistemas de Aquisição e Conversão para Negócios de Alto Valor",
  url: "https://lkdigital.org",
  email: "contato@lkdigital.org",
  whatsapp: "5511952823271",
  social: {
    instagram: "https://instagram.com/lkdigital",
    linkedin: "https://linkedin.com/company/lkdigital",
  },
};

export const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#resultados", label: "Resultados" },
  { href: "#insights", label: "Insights" },
  { href: "#sobre", label: "Sobre" },
];

export const hero = {
  eyebrow: "AQUISIÇÃO × CONVERSÃO",
  h1: "Sua empresa já recebe procura. Nós transformamos essa procura em oportunidades comerciais.",
  sub: "Construímos sistemas que conectam Google, redes sociais, site, atendimento e automação para transformar interesse em orçamentos, agendamentos e vendas.",
  cta: "Diagnosticar minha operação",
  ctaSecondary: "Como funciona",
  flow: [
    "PROCURA",
    "GOOGLE / SOCIAL / SITE",
    "QUALIFICAÇÃO",
    "OPORTUNIDADE",
    "ORÇAMENTO / AGENDAMENTO",
    "VENDA",
  ],
};

export const trust = {
  headline: "Não começamos pela ferramenta. Começamos pelo gargalo.",
  pillars: [
    { label: "Dados antes de opinião" },
    { label: "Conversão antes de vaidade" },
    { label: "Sistema antes de improviso" },
  ],
};

export const problem = {
  eyebrow: "O PROBLEMA",
  h2: "Mais procura não resolve uma operação que perde oportunidades.",
  copy: "Muitas empresas investem para aparecer no Google, Instagram ou anúncios — mas o caminho entre a primeira visita e uma oportunidade comercial continua cheio de fricção.",
  cards: [
    {
      number: "01",
      title: "A procura chega",
      body: "Pessoas encontram sua empresa, pesquisam seus serviços e demonstram interesse.",
    },
    {
      number: "02",
      title: "O caminho quebra",
      body: "Site genérico, CTA fraco, informação insuficiente ou atendimento lento fazem parte dessa procura desaparecer.",
    },
    {
      number: "03",
      title: "O lead chega sem contexto",
      body: "A equipe precisa descobrir manualmente quem é o cliente, o que ele quer e se realmente vale a pena atendê-lo.",
    },
    {
      number: "04",
      title: "O dinheiro fica na mesa",
      body: "Orçamentos não acompanhados, contatos esquecidos e oportunidades sem processo acabam virando vendas para outra empresa.",
    },
  ],
};

export const system = {
  eyebrow: "NOSSO SISTEMA",
  h2: "Da procura à oportunidade.",
  steps: [
    {
      number: "01",
      title: "ATRAIR",
      items: ["Google", "Redes Sociais", "Anúncios", "Maps", "Orgânico"],
    },
    {
      number: "02",
      title: "CONVERTER",
      items: ["Landing page", "Website", "CTA", "Oferta"],
    },
    {
      number: "03",
      title: "QUALIFICAR",
      items: ["Intenção", "Necessidade", "Orçamento", "Momento", "Fit"],
    },
    {
      number: "04",
      title: "RECUPERAR",
      items: ["Follow-up", "Leads sem resposta", "Orçamentos perdidos", "Reativação"],
    },
    {
      number: "05",
      title: "OTIMIZAR",
      items: ["Rastreamento", "Dados", "Testes", "Taxa de conversão"],
    },
  ],
  footer: "Não é sobre adicionar mais ferramentas. É sobre fazer cada etapa trabalhar melhor junto.",
};

export const whatWeBuild = {
  title: "O que construímos",
  cards: [
    {
      title: "Infraestrutura de Aquisição",
      body: "Google, Maps, mídia paga e outros canais de demanda conectados a um caminho de conversão.",
      icon: "target",
    },
    {
      title: "Experiências de Conversão",
      body: "Landing pages e sites projetados em torno de uma ação comercial específica.",
      icon: "layout",
    },
    {
      title: "Qualificação Inteligente",
      body: "Conversas assistidas por IA que identificam intenção, necessidades e fit antes de a equipe de vendas assumir.",
      icon: "brain",
    },
    {
      title: "Recuperação de Leads",
      body: "Sistemas de follow-up para recuperar oportunidades que de outra forma desapareceriam.",
      icon: "refresh",
    },
    {
      title: "Presença Local",
      body: "Otimização do Google Business e infraestrutura de busca local.",
      icon: "map-pin",
    },
    {
      title: "Medição",
      body: "Rastreamento da jornada desde o primeiro contato até o resultado comercial.",
      icon: "bar-chart",
    },
  ],
  footer: "Cada projeto combina apenas as peças necessárias para corrigir o gargalo identificado.",
};

export const notAnotherAgency = {
  h2: "Você não precisa de mais uma agência.",
  sub: "Precisa saber onde está perdendo oportunidades — e corrigir isso.",
  rows: [
    { agency: "Começa pela ferramenta", lk: "Começa pelo gargalo" },
    { agency: "Entrega atividades", lk: "Constrói sistemas" },
    { agency: "Mede cliques e impressões", lk: "Conecta marketing à oportunidade" },
    { agency: "Vende canais", lk: "Otimiza a jornada" },
    { agency: "Relatório no fim do mês", lk: "Dados para decidir o próximo movimento" },
  ],
};

export const businessTypes = {
  h2: "Construído para negócios onde cada oportunidade importa.",
  categories: [
    {
      title: "Negócios de Projetos",
      examples: ["Móveis planejados", "Marmorarias", "Esquadrias", "Piscinas", "Reformas"],
      cta: "Ver sistema para projetos",
      href: "#diagnostico",
    },
    {
      title: "Negócios de Orçamento",
      examples: ["Funilaria", "Impermeabilização", "Ar-condicionado", "Segurança", "Serviços especializados"],
      cta: "Ver sistema para orçamentos",
      href: "#diagnostico",
    },
    {
      title: "Negócios de Agendamento",
      examples: ["Odontologia", "Estética", "Clínicas", "Serviços profissionais"],
      cta: "Ver sistema para agendamentos",
      href: "#diagnostico",
    },
  ],
};

export const process = {
  h2: "Começamos pelo seu negócio. Não por um pacote pronto.",
  steps: [
    {
      number: "01",
      title: "Diagnóstico",
      body: "Mapeamos como a procura chega e onde ela deixa de avançar.",
    },
    {
      number: "02",
      title: "Intervenção",
      body: "Construímos a menor solução necessária para corrigir o principal gargalo.",
    },
    {
      number: "03",
      title: "Medição",
      body: "Acompanhamos o que acontece depois do clique.",
    },
    {
      number: "04",
      title: "Expansão",
      body: "Quando encontramos um processo que funciona, ampliamos o que gera resultado.",
    },
  ],
};

export const results = {
  h2: "Resultados que podemos mostrar.",
  items: [
    {
      client: "FAUESP",
      result: "Infraestrutura digital construída do zero",
      description: "Arquitetura de aquisição e presença digital estruturada para a fundação.",
    },
    {
      client: "Zumbi dos Palmares",
      result: "Sistema de captação educacional",
      description: "Jornada digital mapeada e otimizada para captação de novos alunos.",
    },
    {
      client: "Interakt",
      result: "Conversão e qualificação de leads",
      description: "Processo de qualificação implementado para reduzir fricção entre interesse e atendimento.",
    },
  ],
  experimentsNote: "Estamos documentando novos acquisition systems em negócios locais.",
};

export const lab = {
  eyebrow: "LK DIGITAL LAB",
  h2: "Testamos o mercado antes de transformar hipóteses em metodologia.",
  sub: "Analisamos empresas, jornadas de compra e pontos de conversão para identificar padrões que podem ser transformados em sistemas repetíveis.",
  cards: [
    {
      title: "Inteligência de Mercado",
      body: "O que as empresas estão fazendo com sua presença digital.",
    },
    {
      title: "Experimentos de Conversão",
      body: "O que muda quando otimizamos cada etapa da jornada.",
    },
    {
      title: "Metodologias Proprietárias",
      body: "O que funciona repetidamente — documentado como metodologia.",
    },
  ],
};

export const insights = {
  h2: "Insights",
  categories: [
    {
      title: "Conversão",
      desc: "Por que potenciais clientes não se tornam oportunidades.",
      href: "/blog",
    },
    {
      title: "Aquisição",
      desc: "Como negócios de alto valor geram demanda qualificada.",
      href: "/blog",
    },
    {
      title: "Inteligência de Mercado",
      desc: "O que estamos aprendendo ao analisar empresas reais.",
      href: "/blog",
    },
  ],
};

export const about = {
  id: "sobre",
  h2: "Tecnologia é o meio. Resultado comercial é o objetivo.",
  copy: [
    "A LK Digital nasceu da combinação entre marketing, desenvolvimento e automação.",
    "Em vez de tratar cada ferramenta como um serviço separado, construímos sistemas que conectam aquisição, conversão, qualificação e dados.",
    "Nosso trabalho começa com uma pergunta simples: onde a oportunidade está sendo perdida?",
    "A partir daí, construímos o que for necessário para corrigir o problema.",
  ],
};

export const faqs = [
  {
    q: "Vocês fazem tráfego pago?",
    a: "Sim, quando mídia paga faz sentido para o problema identificado. Mas não começamos automaticamente por anúncios.",
  },
  {
    q: "Vocês fazem sites?",
    a: "Sim. Construímos páginas e sites quando eles fazem parte da solução de conversão.",
  },
  {
    q: "Vocês trabalham com IA?",
    a: "Sim. Utilizamos IA quando ela melhora uma etapa real da aquisição, qualificação ou atendimento. IA não é o produto isolado.",
  },
  {
    q: "Vocês atendem qualquer segmento?",
    a: "Trabalhamos inicialmente com negócios de alto valor que dependem de orçamentos, agendamentos ou oportunidades comerciais qualificadas. À medida que acumulamos dados, desenvolvemos sistemas específicos para os segmentos onde conseguimos gerar maior impacto.",
  },
  {
    q: "Vocês trabalham com empresas pequenas?",
    a: "Depende do modelo comercial. O principal critério não é tamanho, mas o valor de cada oportunidade e a existência de um problema que possamos medir e melhorar.",
  },
  {
    q: "Quanto custa?",
    a: "O investimento depende do gargalo e da complexidade da intervenção. Projetos iniciais podem começar como um sprint de implementação; operações com necessidade contínua podem evoluir para acompanhamento e otimização.",
  },
];

export const finalCta = {
  h2: "Descubra onde sua operação está perdendo oportunidades.",
  copy: "Conte-nos como sua empresa gera procura hoje. Nós identificaremos os principais pontos de fricção entre interesse e oportunidade comercial.",
  cta: "Diagnosticar minha operação",
  ctaSecondary: "Falar com a LK Digital",
};

export const diagnosticForm = {
  acquisitionChannels: [
    "Google",
    "Instagram",
    "Indicação",
    "Anúncios",
    "WhatsApp",
    "Outro",
  ],
  primaryProblems: [
    "Poucos leads",
    "Muitos leads desqualificados",
    "Poucos orçamentos",
    "Poucos agendamentos",
    "Leads que não respondem",
    "Orçamentos que não fecham",
    "Não sei onde está o problema",
  ],
};

export const footerLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Insights", href: "#insights" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#diagnostico" },
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
];

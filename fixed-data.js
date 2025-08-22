/*
================================================================================
                      📊 DADOS DO EVENTO "O PALCO É DELAS "
================================================================================
Este arquivo contém todos os dados e funcionalidades do site do evento.
Cada seção está bem documentada para facilitar a compreensão e manutenção.
*/

// ============================================================================
// 👩‍💻 DADOS DAS PALESTRANTES
// ============================================================================
/*
Array com informações de todas as 17 palestrantes do evento.
Cada palestrante tem: id, nome, cargo, empresa, bio, especialidades e redes sociais.
*/
const speakers = [
    {
        id: 1,
        name: "Midian Brandão",
        role: "Software Engineer",
        company: "A definir",
        bio: "Pós-graduada em Análise e Proteção de Dados, atuou em diferentes multinacionais, em projetos de Customer Experience, análise de mercado, gestão de stakeholders e transformação digital.",
        expertise: ["IA", "Machine Learning", "Python"],
        social: {
            linkedin: "http://linkedin.com/in/midian-brandao/"
        },
        talks: ["Segurança cibernética na era da Inteligência Artificial"]
    },
    {
        id: 2,
        name: "Camila Marques de Oliveira",
        role: "Data Engineer",
        company: "iFood",
        bio: "Camila Marques é Data Engineer no iFood, com trajetória iniciada em 2019 após se apaixonar por tecnologia na Campus Party Brasília. Atua ativamente na inclusão de mulheres na tecnologia por meio das comunidades PyLadies DF e Cadê as Minas?!. Nas horas vagas, gosta de explorar cafés, viajar, crochetar, compartilhar suas experiências e refletir sobre as nuances da vida.",
        expertise: ["Engenharia de Dados", "Python", "SQL"],
        social: {
            linkedin: "https://www.linkedin.com/in/camilamarquesdeoliveira/",
            twitter: "#",
            github: "https://github.com/camila-marquess"
        },
        talks: ["Introdução ao Airflow: Como Orquestrar Pipelines de Dados"]
    },
    {
        id: 3,
        name: "Gabriela Matias",
        role: "Gameplay Programmer",
        company: "ARVORE Immersive Experiences",
        bio: "Programadora de jogos desde 2021, com foco em Unreal Engine e Unity. Participa frequentemente de game jams, e acredita que aprender na prática é a melhor maneira de crescer como game dev. Nas horas vagas, está sempre jogando jogos de terror com os amigos ou lendo algum webtoon.",
        expertise: ["Unreal Engine 5", "C++", "Blueprints", "Unity", "C#"],
        social: {
            linkedin: "https://www.linkedin.com/in/gabrielamilet",
            twitter: "https://x.com/jasbrela",
            github: "https://github.com/jasbrela"
        },
        talks: ["Level 1: Primeiros passos na área de Games"]
    },
    {
        id: 4,
        name: "Laryssa Rocha",
        role: "Frontend Engineer",
        company: "Dexian",
        bio: "Laryssa é engenheira de software front-end há mais de 10 anos. Já atuou como líder técnica, é mentora e ama aprender e compartilhar conhecimento. Acredita na tecnologia como ferramenta de transformação social. Ela ama cachorrinhos, é ceramista amadora e gamer nas horas vagas 🪴 🐶 🎮",
        expertise: ["Frontend", "React", "Javascript"],
        social: {
            linkedin: "https://www.linkedin.com/in/laryro/",
            twitter: "#",
            github: "https://github.com/laryro"
        },
        talks: ["Por que você deveria ter um site pessoal em 2025?"]
    },
    {
        id: 5,
        name: "Elizabeth Cristina de Souza",
        role: "Infrastructure Analyst",
        company: "ConectaQ",
        bio: `Elizabeth é palestrante apaixonada por infraestrutura de TI, cloud e proteção de dados, com foco no protagonismo feminino na tecnologia. Após mais de 30 anos de experiência, está em transição para uma nova fase profissional, contribuindo ativamente para fortalecer e dar visibilidade às mulheres na área de tecnologia. Tem um estilo didático e prático, com uma abordagem que une conhecimento técnico e propósito humano. Contribui para a construção de uma comunidade para mulheres que querem crescer e transformar o mundo com tecnologia.`,
        expertise: ["Cloud", "Data Center", "Virtualização", "Proteção de Dados"],
        social: {
            linkedin: "https://www.linkedin.com/in/bethcsouza",
            twitter: "@bethcsouza",
            github: "#"
        },
        talks: ["Tornando Infraestruturas de TI mais eficientes e sustentáveis com a virtualização"]
    },
    {
        id: 6,
        name: "Bianca Cardoso",
        role: "Frontend Developer",
        company: "ISH Tecnologia",
        bio: "Desenvolvedora com mais de 6 anos de experiência, apaixonada por vue.js e com formação em ciência da computação. Trabalho em uma empresa de cibersegurança e participo de iniciativas para mulheres em tecnologia que promovem diversidade na área.",
        expertise: ["Frontend", "Vue", "Python", "Cibersegurança"],
        social: {
            linkedin: "https://www.linkedin.com/in/biancacardosop/",
            twitter: "https://x.com/Biancaacardoso",
            github: "https://github.com/biigue"
        },
        talks: ["Descomplicando o Frontend com Vue.js"]
    },
    {
        id: 7,
        name: "Juliana de Oliveira",
        role: "Desenvolvedora Fullstack",
        company: "Itaú Unibanco",
        bio: "Juliana de Oliveira é desenvolvedora fullstack. Formada em Farmácia e Bioquímica, fez transição de carreira e concluiu o tecnólogo em ADS em 2024. É apaixonada por aprendizado contínuo, tecnologia, arte e música, e incentiva mulheres a ingressarem com confiança no setor de tecnologia.",
        expertise: ["Frontend", "Transição de Carreira", "AWS", "Engenharia de Plataforma"],
        social: {
            linkedin: "https://www.linkedin.com/in/julianajesusoliveira/"
        },
        talks: ["De pílulas a códigos: minha mudança de carreira da farmácia para a tecnologia"]
    },
    {
        id: 8,
        name: "Marília Melo Favalesso",
        role: "Desenvolvedora de IA",
        company: "Fundação CERTI",
        bio: "Marília possui +10 anos de experiência em ciência de dados aplicada à saúde e meio-ambiente. Atuou em pesquisa, liderança e mentoria, além de ser engajada na disseminação de conhecimentos técnicos e científicos. Apaixonada por gatos, pizza e séries. MSc/PhD em ecoepidemiologia.",
        expertise: ["Ciência de Dados", "Ecoepidemiologia", "IA", "Meio Ambiente", "Machine Learning"],
        social: {
            linkedin: "https://www.linkedin.com/in/mariliafavalesso/"
        },
        talks: ["O rápido pode sair caro: entendendo os débitos invisíveis em IA"]
    },
    {
        id: 9,
        name: "Ana Hashimoto",
        role: "Coordenadora de Engenharia de Dados",
        company: "Itaú Unibanco",
        bio: "Ana Hashimoto é Administradora, Especialista em Ciência de Dados e Big Data e possui certificações AWS e Scrum. Atualmente é Coordenadora de Engenharia de Dados no Itaú Unibanco, Instrutora de Engenharia de Dados na Alura e Mentora de Carreira. Além disso, em seu tempo livre, gosta de viajar e assistir séries.",
        expertise: ["Engenharia de Dados", "AWS", "FinOps de Dados", "Arquitetura de Dados", "Gestão de Pessoas", "Carreira"],
        social: {
            linkedin: "https://www.linkedin.com/in/anahashimoto/"
        },
        talks: ["De Analista de BI a Coordenadora de Engenharia de Dados no maior banco da América Latina"]
    },
    {
        id: 10,
        name: "Andrea Simone",
        role: "Especialista em Inteligência Artificial",
        company: "Consultora de IA e Governança Digital",
        bio: "Especialista em IA voltada à implementação, automatização e oportunidades para negócios. Consultora em IA, LGPD, ética e governança de IA.",
        expertise: ["Inteligência Artificial", "Automatização de Processos", "LGPD", "Ética e Governança de IA", "Transformação Digital"],
        social: {
            site: "https://andreasimone.com.br",
            instagram: "https://www.instagram.com/andreasimone_ia",
            linkedin: "http://linkedin.com/in/andr%C3%A9a-simone-silva-38487820b",
            github: "https://github.com/andreasimone141-dot"
        },
        talks: ["Inteligência Artificial - Uma Revolução Silenciosa"]
    },
    {
        id: 11,
        name: "Bruna Valentim",
        role: "Analista de Cibersegurança",
        company: "Sicoob",
        bio: "Bruna Valentim é analista de Segurança Cibernética, atuando diretamente na resposta a incidentes e na análise forense digital, enfrentando ataques virtuais de perto. Apaixonada pelo que faz, ela acredita que proteger o mundo digital vai além da técnica — é também sobre propósito e responsabilidade",
        expertise: ["Cibersegurança", "Forense Digital"],
        social: {
            linkedin: "https://www.linkedin.com/in/bvalentim/",
            twitter: "#",
            github: "#"
        },
        talks: ["Hackers, golpes e proteção digital: o que você precisa saber para se defender"]
    },
    {
        id: 12,
        name: "Cecilia Silva",
        role: "Analista de Business Intelligence",
        company: "iFood",
        bio: "Apaixonada por transformar dados em decisões mais ágeis e estratégicas. Há 5 anos na área de Business Intelligence, atuando em empresas de tecnologia com foco em análise e visualização de dados. Graduanda em Engenharia de Software, certificada Google e IBM.",
        expertise: ["Análise de Dados", "Inteligência de Negócios"],
        social: {
            linkedin: "https://www.linkedin.com/in/ceciliasilvads/",
            twitter: "#",
            github: "https://github.com/cecisliasilvads"
        },
        talks: ["Storytelling com dados: a arte de contar histórias"]
    },
    {
        id: 13,
        name: "Jessica Borges",
        role: "Analista de Dados",
        company: "Deloitte",
        bio: "Analista de Dados na Deloitte, formada em Engenharia da Computação e pós-graduada em Inteligência Artificial e Aprendizado de Máquina. Já atuei em projetos de Visão Computacional, desenvolvendo soluções de IA aplicadas a diferentes contextos.",
        expertise: ["Python", "Visão Computacional"],
        social: {
            linkedin: "https://www.linkedin.com/in/jessicafborges/",
            twitter: "#",
            github: "https://github.com/jessicamfborges"
        },
        talks: ["Entre o Código e a Consciência: Os Dilemas Éticos da IA"]
    },
    {
        id: 14,
        name: "Karina Kaori",
        role: "Software Engineer",
        company: "Itaú Unibanco",
        bio: "Karina Tanaka, engenheira de software no Itaú, com 7 anos de experiência em desenvolvimento backend e serviços financeiros.Formada em Análise e Desenvolvimento de Sistemas pela FATEC e um MBA em Data Science & Analytics pela USP ESALQ, meu propósito vai além do código. Sou apaixonada por tecnologia e motivada a auxiliar no desenvolvimento de carreira e incentivar a participação de mais mulheres na área de tecnologia, construindo pontes entre o conhecimento técnico e as soft skills essenciais para o sucesso profissional.",
        expertise: ["COBOL", "CICS", "DB2", "JAVA", "PYTHON","AWS", "SERVIÇOS FINANCEIROS", "SOFT SKILLS"],
        social: {
            linkedin: "https://www.linkedin.com/in/karina-kaori-tanaka/",
            twitter: "#",
            github: "https://github.com/karinakaori"
        },
        talks: ["O mapa para a sua próxima conquista"]
    },
    {
        id: 15,
        name: "Keline Dantas",
        role: "Assessoria Pedagogica",
        company: "FioCruz",
        bio: "Acrescentar.",
        expertise: ["Inclusão", "Acessibilidade", "Letramento Digital", "Cibersegurança"],
        social: {
            linkedin: "https://www.linkedin.com/in/keline-santana-pcd-45631021/",
        },
        talks: ["Acrescentar"]
    },
    {
        id: 16,
        name: "Rhaissa Barbosa",
        role: "Software Developer",
        company: "Grupo Boticário",
        bio: "Desenvolvedora de software há 3 anos no Grupo Boticário. No dia a dia, trabalho com desenvolvimento backend, principalmente com Typescript e Node.js. Sou uma nordestina que adora um bom desafio, especialmente aqueles que me forçam a pensar de forma criativa e a aprender mais.",
        expertise: ["Backend", "Typscript", "Node", "Nest", "AWS" ],
        social: {
            linkedin: "https://www.linkedin.com/in/rhaissa-barbosa-vasconcelos/",
            twitter: "#",
            github: "https://github.com/rhaissav?tab=achievements"
        },
        talks: ["POO com Teoria dos Conjuntos: Entendendo Objetos Sem Precisar Codar"]
    },
    {
        id: 17,
        name: "Juliana Lisboa",
        role: "Product Manager",
        company: "Rio Endowment",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Inovação", "Transformação Digital", "Maternidade e carreira"],
        social: {
            linkedin: "https://www.linkedin.com/in/juliana-goncalves-/",
            twitter: "#",
            github: "#"
        },
        talks: ["Carreiras Femininas, Maternidade e Invisibilidade no meio tech."]
    }
];

// ============================================================================
// 🎤 DADOS DAS PALESTRAS
// ============================================================================
/*
Array com todas as 17 palestras do evento, divididas em 2 blocos:
- BLOCO 1 (Manhã): 10:10 - 12:40 (10 palestras)
- BLOCO 2 (Tarde): 14:00 - 16:30 (7 palestras)

IMPORTANTE: Todas as palestras começam como placeholders (isPlaceholder: true)
para que cada palestrante possa personalizar sua apresentação.
*/

const talks = [
    // ========================================================================
    // 🌅 BLOCO 1 - MANHÃ (10:10 - 12:40)
    // ========================================================================
    {
        id: 1,
        time: "10:15 - 10:30",
        title: "Tornando Infraestruturas de TI mais eficientes e sustentáveis com a virtualização",
        speaker: "Elizabeth Cristina de Souza",
        description: "Nesta apresentação vou falar, de forma clara e prática, o conceito de virtualização de servidores, seus principais benefícios, e como ela pode ajudar empresas a otimizarem seus recursos de TI. Se você é uma pessoa querendo aprender um pouco sobre esta área, esta palestra foi feita pensando em você.",
        tags: ["Vizualização", "Cloud", "Data Centers"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 2,
        time: "10:30 - 10:45",
        title: "Inteligência Artificial - Uma Revolução Silenciosa",
        speaker: "Andrea Simone",
        description: "A palestra abordará a revolução que a Inteligência Artificial está mudando todos os aspectos da nossa vida, desde o trabalho, estudos, negócios, tornando acessível a todos, independentemente de seu nível de conhecimento.",
        tags: ["IA", "Tecnologia", "Inovação"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 3,
        time: "10:45 - 11:00",
        title: "De pílulas a códigos: minha mudança de carreira da farmácia para a tecnologia",
        speaker: "Juliana de Oliveira",
        description: "Na palestra 'De Pílulas a Códigos', compartilharei minha jornada da Farmácia à Programação, oferecendo dicas práticas e mostrando as estratégias que utilizei durante a transição de carreira. Uma conversa para quem busca um caminho para mudar e se reinventar em uma nova área.",
        tags: ["Transição de carreira", "Desenvolvimento profissional", "Carreira em tecnologia", "Mudança profissional"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 4,
        time: "11:00- 11:15",
        title: "Level 1: Primeiros passos na área de Games",
        speaker: "Gabriela Matias",
        description: "A palestra é uma introdução à indústria de games, passando brevemente pelas áreas que envolvem a criação de um jogo, mas com um foco maior em programação, e depois com dicas de como começar, por exemplo: qual engine escolher, dicas de primeiros projetos, onde encontrar assets gratuitos, bons cursos (gratuitos e pagos) para fazer, e outros sites importantes. O objetivo é dar uma direção a quem tem o interesse de criar um jogo, seja profissionalmente ou apenas como um hobby.",
        tags: ["Games", "Programação", "Desenvolvimento de Jogos"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 5,
        time: "11:15 - 11:30",
        title: "Hackers, golpes e proteção digital: o que você precisa saber para se defender",
        speaker: "Bruna Valentim",
        description: "Nesta apresentação vou falar, de forma clara e prática, o conceito de virtualização de servidores, seus principais benefícios, e como ela pode ajudar empresas a otimizarem seus recursos de TI. Se você é uma pessoa querendo aprender um pouco sobre esta área, esta palestra foi feita pensando em você.",
        tags: ["Segurança"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 6,
        time: "11:30 - 11:45",
        title: "POO com Teoria dos Conjuntos: Entendendo Objetos Sem Precisar Codar",
        speaker: "Rhaissa Vasconcelos",
        description: "Aprender Programação Orientada a Objetos (POO) pode parecer assustador, com muitas regras e códigos. Esta palestra oferece um caminho mais suave, ideal para iniciantes ou para quem deseja solidificar os conceitos. Abordaremos os pilares da POO de forma visual, usando a Teoria dos Conjuntos, onde uma Classe é um 'conjunto' de objetos, um Objeto é um 'elemento' concreto, e a Herança é um 'subconjunto'. O objetivo é desmistificar a POO e construir uma base lógica forte, antes mesmo de escrever a primeira linha de código.",
        tags: ["POO", "Fundamentos de Programação", "Iniciantes", "Abstração"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 7,
        time: "11:45 - 12:00",
        title: "Descomplicando o frontend com vue.js",
        speaker: "Bianca Cardoso",
        description: "Vue.js, embora não tenha a popularidade do React, tem uma curva de aprendizado mais suave, sendo ideal para iniciantes. Esta palestra abordaremos termos técnicos de forma mais amigável e mostraremos como funcionalidades como reatividade (atualização automática da tela) e componentes (códigos reutilizáveis) tornam o desenvolvimento mais organizado e acessível.",
        tags: ["Frontend", "Vue"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 8,
        time: "12:00 - 12:15",
        title: "TBD",
        speaker: "Keline Dantas",
        description: "",
        tags: ["POO", "Fundamentos de Programação", "Iniciantes", "Abstração"],
        block: "morning",
        isPlaceholder: true
    },
    {
        id: 9,
        time: "12:15 - 12:30",
        title: "O rápido pode sair caro: entendendo os débitos invisíveis em IA",
        speaker: "Marília Melo Favalesso",
        description: "Sistemas de machine learning impulsionam avanços em diversos setores, mas carregam um passivo oculto: dívidas técnicas que se acumulam em camadas invisíveis, desde pipelines fragilmente acoplados até mudanças sistêmicas inesperadas. Nesta palestra, Marília Favalesso explora os principais tipos de dívida técnica em machine learning, incluindo as dimensões estruturais, algorítmicas e sociotécnicas, trazendo exemplos reais e insights de pesquisas recentes. Também serão discutidos frameworks emergentes para mapear essas dívidas e estratégias práticas de mitigação, essenciais para desenvolvedores e engenheiros que buscam robustez e sustentabilidade em sistemas inteligentes.",
        tags: ["Dívida Técnica", "Machine Learning", "MLOps"],
        block: "morning",
        isPlaceholder: false
    },
    {
        id: 10,
        time: "12:30 - 12:45",
        title: "Carreiras Femininas, maternidade e a invisibilidade no meio tech",
        speaker: "Juliana Lisboa",
        description: "A palestra abordará as nunaces, dores e sabores da mulher enquanto sua posição do feminino, profissional e pessoal no mundo tech.",
        tags: ["Inovação", "Transformação Digital", "Maternidade e carreira"],
        block: "morning",
        isPlaceholder: false
    },
    
    // ========================================================================
    // 🌇 BLOCO 2 - TARDE (14:00 - 16:00)
    // ========================================================================
    {
        id: 11,
        time: "14:15 - 14:30",
        title: "Segurança cibernética na era da Inteligência Artificial",
        speaker: "Midian Brandão",
        description: "Esta palestra explora os desafios e soluções de segurança cibernética no contexto da crescente adoção de inteligência artificial. Discutiremos como a IA está transformando o panorama de ameaças digitais, criando novos vetores de ataque e, ao mesmo tempo, oferecendo ferramentas inovadoras para defesa. Abordaremos técnicas de proteção de dados sensíveis, detecção de anomalias através de machine learning e estratégias para mitigar riscos em sistemas alimentados por IA.",
        tags: ["Segurança Cibernética", "IA", "Proteção de Dados", "Machine Learning"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 12,
        time: "14:30 - 14:45",
        title: "Storytelling com dados: a arte de contar histórias",
        speaker: "Cecilia Silva",
        description: "Nesta palestra, vamos abordar como transformar análises em histórias que convencem: definir contexto, escolher a mensagem central, estruturar em atos e usar visuais simples que respondem e elevam a compreensão da sua análise. Saia com um roteiro prático para apresentar resultados com clareza e impacto.",
        tags: ["dados", "storytelling", "visualização de dados", "análise de dados", "comunicação"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 13,
        time: "14:45 - 15:00",
        title: "De Analista de BI a Coordenadora de Engenharia de Dados no maior banco da América Latina",
        speaker: "Ana Hashimoto",
        description: "Nesta palestra, Ana Hashimoto compartilhará sua trajetória de migração de carreira para Engenharia de Dados, os desafios enfrentados, aprendizados e dicas. Ela também abordará seu dia a dia, envolvendo gestão de pessoas e o pilar técnico, além de dicas de estudos e certificações.",
        tags: ["dados", "carreira", "engenharia de dados", "gestão", "certificações"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 14,
        time: "15:00 - 15:15",
        title: "Entre o Código e a Consciência: Os Dilemas Éticos da IA",
        speaker: "Jessica Borges",
        description: "Entre o Código e a Consciência traz reflexões sobre os dilemas éticos da IA, mostrando casos reais e como essa tecnologia impacta a sociedade.",
        tags: ["Ética", "IA", "Responsabilidade", "Impacto Social"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 15,
        time: "15:15 - 15:30",
        title: "O mapa para a sua próxima conquista",
        speaker: "Karina Kaori",
        description: "Já se sentiu perdido sobre os próximos passos da sua carreira? Nesta palestra, vamos desmistificar o Plano de Desenvolvimento Individual (PDI) e mostrar como essa ferramenta pode ser o seu mapa para o sucesso. Vamos aprender, de forma prática, a estruturar um PDI para definir metas claras, identificar as habilidades necessárias (técnicas e soft skills) e, o mais importante, como usar esse plano para ter conversas estratégicas e impactantes com seus líderes. Prepare-se para conquistar o próximo nível, com planejamento e autoconfiança.",
        tags: ["Carreira", "Soft Skills", "Planejamento Estratégico", "Liderança", "Networking"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 16,
        time: "15:30 - 15:45",
        title: "Introdução ao Airflow: Como Orquestrar Pipelines de Dados",
        speaker: "Camila Marques",
        description: "A palestra tem o objetivo de fazer uma introdução à ferramenta Apache Airflow, que é muito utilizada na área de dados para a orquestração e automatização de pipelines de dados. Vou explicar o que é o Airflow, o que é um pipeline de dados e, para tornar o conteúdo mais prático, mostrar um exemplo real de como a ferramenta funciona no dia a dia.",
        tags: ["Airflow", "Engenharia de Dados", "Carreira"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 17,
        time: "15:45 - 16:00",
        title: "Por que você deveria ter um site pessoal em 2025?",
        speaker: "Laryssa Rocha",
        description: "",
        tags: ["Inteligência Artificial", "Futuro do Trabalho"],
        block: "afternoon",
        isPlaceholder: false
    }
];

// ============================================================================
// 📅 AGENDA GERAL DO EVENTO
// ============================================================================
/*
Cronograma completo do evento desde o credenciamento até o encerramento.
Inclui horários de abertura, blocos de palestras, almoço e cerimônia final.
*/
const scheduleItems = [
    { time: "10:00", title: "Abertura", description: "Cerimônia de abertura e boas-vindas (10 minutos)" },
    { time: "10:15", title: "Bloco 1 - Manhã", description: "10 palestras técnicas (15 min cada)" },
    { time: "12:45", title: "Encerramento Bloco 1", description: "Encerramento do bloco da manhã" },
    { time: "14:00", title: "Bloco 2 - Tarde", description: "8 palestras técnicas (15 min cada)" },
    { time: "16:00", title: "Encerramento", description: "Cerimônia de formatura e networking final" }
];

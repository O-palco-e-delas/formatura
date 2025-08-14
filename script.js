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
Array com informações de todas as 20 palestrantes do evento.
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
        name: "Jessica Alexandra",
        role: "Agile Coach",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Agile", "Scrum", "Leadership"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Metodologias Ágeis e Scrum"]
    },
    {
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
        name: "Luciana Damasceno",
        role: "Open Source Advocate",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Open Source", "Community", "Python"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Open Source e Comunidades Tech"]
    },
    {
        id: 18,
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
        id: 19,
        name: "Helena",
        role: "Entrepreneur",
        company: "A definir",
        bio: "Informações serão atualizadas pela própria palestrante. Este é um placeholder para o projeto open source.",
        expertise: ["Entrepreneurship", "Startups", "Business"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        talks: ["Empreendedorismo Tech Feminino"]
    },
    {
        id: 20,
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
Array com todas as 20 palestras do evento, divididas em 2 blocos:
- BLOCO 1 (Manhã): 10:10 - 12:40 (10 palestras)
- BLOCO 2 (Tarde): 14:00 - 16:30 (10 palestras)

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
        title: "IA Generativa e a Ilusão de Pensamento: Implicações para o futuro do trabalho",
        speaker: "Helena S",
        description: "",
        tags: ["Inteligência Artificial", "Futuro do Trabalho"],
        block: "morning",
        isPlaceholder: true
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
        title: "POO com Teoria dos Conjuntos: Entendendo Objetos Sem Precisar Codar",
        speaker: "Rhaissa Vasconcelos",
        description: "Aprender Programação Orientada a Objetos (POO) pode parecer assustador, com muitas regras e códigos. Esta palestra oferece um caminho mais suave, ideal para iniciantes ou para quem deseja solidificar os conceitos. Abordaremos os pilares da POO de forma visual, usando a Teoria dos Conjuntos, onde uma Classe é um 'conjunto' de objetos, um Objeto é um 'elemento' concreto, e a Herança é um 'subconjunto'. O objetivo é desmistificar a POO e construir uma base lógica forte, antes mesmo de escrever a primeira linha de código.",
        tags: ["POO", "Fundamentos de Programação", "Iniciantes", "Abstração"],
        block: "morning",
        isPlaceholder: false
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
    // 🌇 BLOCO 2 - TARDE (14:00 - 16:30)
    // ========================================================================
    {
        id: 11,
        time: "14:00 - 14:15",
        title: "Título da palestra será definido pela palestrante",
    speaker: "TBD",
        description: "A palestrante adicionará a descrição de sua apresentação. Este é um placeholder do projeto open source para que cada participante possa personalizar sua palestra.",
        tags: ["A definir"],
        block: "afternoon",
        isPlaceholder: true
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
        title: "Título da palestra será definido pela palestrante",
    speaker: "TBD",
        description: "A palestrante adicionará a descrição de sua apresentação. Este é um placeholder do projeto open source para que cada participante possa personalizar sua palestra.",
        tags: ["A definir"],
        block: "afternoon",
        isPlaceholder: true
    },
    {
        id: 14,
        time: "15:00 - 15:15",
        title: "Entre o Código e a Consciência: Os Dilemas Éticos da IA",
        speaker: "Jessica Borges",
        description: "Entre o Código e a Consciência traz reflexões sobre os dilemas éticos da IA, mostrando casos reais e como essa tecnologia impacta a sociedade.",
        tags: ["A definir"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 15,
        time: "15:15 - 15:30",
        title: "O mapa para a sua próxima conquista",
        speaker: "Karina Kaori",
        description: "Já se sentiu perdido sobre os próximos passos da sua carreira? Nesta palestra, vamos desmistificar o Plano de Desenvolvimento Individual (PDI) e mostrar como essa ferramenta pode ser o seu mapa para o sucesso. Vamos aprender, de forma prática, a estruturar um PDI para definir metas claras, identificar as habilidades necessárias (técnicas e soft skills) e, o mais importante, como usar esse plano para ter conversas estratégicas e impactantes com seus líderes. Prepare-se para conquistar o próximo nível, com planejamento e autoconfiança.",
    // Ajuste: separar string única em múltiplas tags semânticas
    tags: ["Carreira", "Soft Skills", "Planejamento Estratégico", "Liderança", "Networking"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 16,
        time: "15:30 - 15:45",
        title: "Título da palestra será definido pela palestrante",
    speaker: "TBD",
        description: "A palestrante adicionará a descrição de sua apresentação. Este é um placeholder do projeto open source para que cada participante possa personalizar sua palestra.",
        tags: ["A definir"],
        block: "afternoon",
        isPlaceholder: true
    },
    {
        id: 17,
        time: "15:45 - 16:00",
        title: "Título da palestra será definido pela palestrante",
    speaker: "TBD",
        description: "A palestrante adicionará a descrição de sua apresentação. Este é um placeholder do projeto open source para que cada participante possa personalizar sua palestra.",
        tags: ["A definir"],
        block: "afternoon",
        isPlaceholder: true
    },
    {
        id: 18,
        time: "16:00 - 16:15",
        title: "Título da palestra será definido pela palestrante",
    speaker: "TBD",
        description: "A palestrante adicionará a descrição de sua apresentação. Este é um placeholder do projeto open source para que cada participante possa personalizar sua palestra.",
        tags: ["A definir"],
        block: "afternoon",
        isPlaceholder: true
    },
    {
        id: 19,
        time: "16:15 - 16:30",
        title: "Por que você deveria ter um site pessoal em 2025?",
    speaker: "Laryssa Rocha",
        description: "Ter um site pessoal não precisa ser só sobre trabalho ou currículo: pode ser seu playground digital, um espaço para experimentar ideias, aprender coisas novas, compartilhar o que você gosta com pessoas que compartilham os mesmos interesses. Nesta palestra vamos falar sobre como criar seu cantinho na internet, e como isso pode te ajudar a assumir o controle dos seus dados, transformar aprendizado em conteúdo e, de quebra, se divertir no processo.",
        tags: ["frontend", "aprendizado contínuo", "presença digital"],
        block: "afternoon",
        isPlaceholder: false
    },
    {
        id: 20,
        time: "16:30 - 16:45",
        title: "Introdução ao Airflow: Como Orquestrar Pipelines de Dados",
    speaker: "Camila Marques",
        description: "A palestra tem o objetivo de fazer uma introdução à ferramenta Apache Airflow, que é muito utilizada na área de dados para a orquestração e automatização de pipelines de dados. Vou explicar o que é o Airflow, o que é um pipeline de dados e, para tornar o conteúdo mais prático, mostrar um exemplo real de como a ferramenta funciona no dia a dia.",
        tags: ["Airflow", "Engenharia de Dados"],
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
    { time: "14:00", title: "Bloco 2 - Tarde", description: "10 palestras técnicas (15 min cada)" },
    { time: "16:45", title: "Encerramento", description: "Cerimônia de formatura e networking final" }
];

/*
================================================================================
                        🛠️ FUNÇÕES DE RENDERIZAÇÃO
================================================================================
Estas funções são responsáveis por criar o HTML dinâmico das diferentes seções.
*/

// ============================================================================
// 👥 RENDERIZAR PALESTRANTES
// ============================================================================
/*
Função que cria os cards das palestrantes para a página principal.
Cada card inclui: foto (ícone), nome, cargo, empresa, bio, especialidades e redes sociais.
*/
function renderSpeakers() {
    const container = document.getElementById('speakers-container');
    
    // Verificar se o elemento existe na página atual
    if (!container) {
        console.log('Container speakers-container não encontrado nesta página');
        return;
    }

    container.innerHTML = speakers.map(speaker => `
        <div class="speaker-card fade-in">
            <div class="speaker-image">
                <i class="fas fa-user"></i>
            </div>
            <div class="speaker-info">
                <div class="speaker-name">${speaker.name}</div>
                <div class="speaker-role">${speaker.role}</div>
                <div class="speaker-company">${speaker.company}</div>
                <div class="speaker-bio">${speaker.bio}</div>
                <div class="speaker-expertise">
                    ${speaker.expertise.map(exp => `<span class="expertise-tag">${exp}</span>`).join('')}
                </div>
                <div class="speaker-social">
                    <a href="${speaker.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${speaker.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="${speaker.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    `).join('');
    
    console.log(`✅ ${speakers.length} palestrantes renderizadas com sucesso!`);
}

// ============================================================================
// 🎤 RENDERIZAR PALESTRAS
// ============================================================================
/*
Função que cria os cards das palestras com sistema de placeholders.
- Palestras com isPlaceholder: true mostram aviso para personalização
- Links dos nomes direcionam para a página de palestrantes
- Tags são estilizadas diferentemente para placeholders
*/
function renderTalks() {
    const container = document.getElementById('talks-container');
    
    // Verificar se o elemento existe na página atual
    if (!container) {
        console.log('Container talks-container não encontrado nesta página');
        return;
    }

    container.innerHTML = talks.map(talk => {
        const placeholderClass = talk.isPlaceholder ? 'placeholder-talk' : '';
        const speakerLink = `<a href="palestrantes.html?speaker=${encodeURIComponent(talk.speaker)}" class="speaker-link">${talk.speaker}</a>`;
        
        return `
        <div class="talk-card fade-in ${placeholderClass}">
            <div class="talk-header">
                <div class="talk-time">${talk.time}</div>
                <div class="talk-title">${talk.title}</div>
                <div class="talk-speaker">por ${speakerLink}</div>
            </div>
            <div class="talk-content">
                <div class="talk-description">${talk.description}</div>
                <div class="talk-tags">
                    ${talk.tags.map(tag => `<span class="tag ${talk.isPlaceholder ? 'tag-placeholder' : ''}">${tag}</span>`).join('')}
                </div>
                ${talk.isPlaceholder ? `
                <div class="placeholder-notice">
                    <i class="fas fa-info-circle"></i>
                    <span>Esta palestra será personalizada pela palestrante</span>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    }).join('');
    
    console.log(`✅ ${talks.length} palestras renderizadas com sucesso!`);
}

// ============================================================================
// 📋 RENDERIZAR AGENDA
// ============================================================================
/*
Função que cria a visualização da agenda em dois formatos:
1. Blocos de palestras (manhã e tarde) com detalhes
2. Timeline geral do evento com todos os horários
*/
function renderSchedule() {
    const container = document.getElementById('schedule-container');
    
    // Verificar se o elemento existe na página atual
    if (!container) {
        console.log('Container schedule-container não encontrado nesta página');
        return;
    }

    const morningTalks = talks.filter(talk => talk.block === 'morning');
    const afternoonTalks = talks.filter(talk => talk.block === 'afternoon');

    container.innerHTML = `
        <div class="schedule-blocks">
            <div class="schedule-block">
                <div class="block-header">
                    <div class="block-title">Bloco 1 - Manhã</div>
                    <div class="block-time">10:10 - 12:40</div>
                </div>
                <div class="block-talks">
                    ${morningTalks.map(talk => `
                        <div class="block-talk">
                            <div class="talk-time-small">${talk.time.split(' - ')[0]}</div>
                            <div class="talk-details">
                                <div class="talk-title-small">${talk.title}</div>
                                <div class="talk-speaker-small">${talk.speaker}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="schedule-block">
                <div class="block-header">
                    <div class="block-title">Bloco 2 - Tarde</div>
                    <div class="block-time">14:00 - 16:30</div>
                </div>
                <div class="block-talks">
                    ${afternoonTalks.map(talk => `
                        <div class="block-talk">
                            <div class="talk-time-small">${talk.time.split(' - ')[0]}</div>
                            <div class="talk-details">
                                <div class="talk-title-small">${talk.title}</div>
                                <div class="talk-speaker-small">${talk.speaker}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="timeline">
            ${scheduleItems.map(item => `
                <div class="timeline-item fade-in">
                    <div class="timeline-time">${item.time}</div>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    console.log('✅ Agenda renderizada com sucesso!');
}

/*
================================================================================
                        🎨 FUNÇÕES DE INTERATIVIDADE
================================================================================
Estas funções adicionam comportamentos dinâmicos e melhoram a experiência do usuário.
*/

// ============================================================================
// 🔗 NAVEGAÇÃO SUAVE (SMOOTH SCROLL)
// ============================================================================
/*
Adiciona efeito de scroll suave para links internos (que começam com #).
Melhora a experiência de navegação entre seções da mesma página.
*/
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✅ Navegação suave ativada para links internos');
}
// ✨ ANIMAÇÕES DE ENTRADA (FADE-IN)
// ============================================================================
/*
Observa elementos com classe 'fade-in' e adiciona classe 'visible' quando
entram na tela, criando efeito de aparição suave.
*/
function fadeInAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    console.log('✅ Animações fade-in configuradas');
}

// ============================================================================
// 📱 MENU MOBILE
// ============================================================================
/*
Controla a abertura/fechamento do menu de navegação em dispositivos móveis.
Adiciona/remove classe 'active' para mostrar/esconder o menu.
*/
function mobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        console.log('✅ Menu mobile configurado');
    }
}

// ============================================================================
// 📜 EFEITO DE SCROLL NO HEADER
// ============================================================================
/*
Muda a aparência do header quando o usuário faz scroll:
- Adiciona sombra e aumenta opacidade para melhor legibilidade
- Remove efeitos quando volta ao topo da página
*/
function headerScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    console.log('✅ Efeito de scroll no header configurado');
}

/*
================================================================================
                        🎯 FUNÇÕES DE INICIALIZAÇÃO
================================================================================
Estas funções são executadas quando a página carrega.
*/

// ============================================================================
// 🚀 INICIALIZAÇÃO PRINCIPAL
// ============================================================================
/*
Função executada quando o DOM está completamente carregado.
Chama todas as funções necessárias para inicializar o site.
*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Iniciando site "O Palco é Delas"...');
    
    // Renderizar conteúdo principal
    renderTalks();
    renderSchedule();
    
    // Configurar interatividade
    smoothScroll();
    mobileMenu();
    headerScrollEffect();
    
    // Aguardar um pouco para animações e configurações adicionais
    setTimeout(() => {
        fadeInAnimation();
        addCardInteractions();
        addCountdown();
        addSearchFunction();
        
        console.log('✅ Site inicializado com sucesso!');
    }, 100);
});

/*
================================================================================
                        🔧 FUNÇÕES UTILITÁRIAS AVANÇADAS
================================================================================
Funcionalidades extras para melhorar a experiência do usuário.
*/

// ============================================================================
// 🎨 INTERAÇÕES DOS CARDS
// ============================================================================
/*
Adiciona efeitos hover nos cards de palestras e features.
Cria animações suaves de elevação e sombra.
*/
function addCardInteractions() {
    // Efeito hover nos cards de palestra
    document.querySelectorAll('.talk-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    // Efeito hover nos cards de feature
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    console.log('✅ Interações dos cards configuradas');
}

// ============================================================================
// ⏰ CONTAGEM REGRESSIVA PARA O EVENTO
// ============================================================================
/*
Cria uma contagem regressiva até a data do evento (23 de agosto de 2025).
Atualiza automaticamente a cada minuto.
NOTA: Precisa de um elemento com id 'countdown' no HTML para funcionar.
*/
function addCountdown() {
    // Data do evento: Sábado, 23 de Agosto de 2025 às 09:00
    const eventDate = new Date('2025-08-23T09:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            // Elemento HTML onde mostrar a contagem (opcional)
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m para o evento!`;
            }
        }
    }
    
    // Atualizar a cada minuto
    setInterval(updateCountdown, 60000);
    updateCountdown(); // Executar imediatamente
    
    console.log('✅ Contagem regressiva configurada para 23/08/2025');
}

// ============================================================================
// 🔍 BUSCA DE PALESTRAS
// ============================================================================
/*
Permite buscar palestras por título, palestrante, descrição ou tags.
Filtra e re-renderiza os resultados em tempo real.
NOTA: Precisa de um elemento com id 'search-talks' no HTML para funcionar.
*/
function addSearchFunction() {
    const searchInput = document.getElementById('search-talks');
    
    // Verificar se o elemento existe na página atual
    if (!searchInput) {
        console.log('Campo de busca não encontrado nesta página');
        return;
    }
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        // Filtrar palestras baseado no termo de busca
        const filteredTalks = talks.filter(talk => 
            talk.title.toLowerCase().includes(searchTerm) ||
            talk.speaker.toLowerCase().includes(searchTerm) ||
            talk.description.toLowerCase().includes(searchTerm) ||
            talk.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        renderFilteredTalks(filteredTalks);
        console.log(`🔍 Busca: "${searchTerm}" - ${filteredTalks.length} resultados`);
    });
    
    console.log('✅ Função de busca configurada');
}

// ============================================================================
// 📋 RENDERIZAR PALESTRAS FILTRADAS
// ============================================================================
/*
Versão simplificada da renderização para resultados de busca.
Não inclui sistema de placeholders pois foca na busca.
*/

function renderFilteredTalks(filteredTalks) {
    const container = document.getElementById('talks-container');
    if (!container) return;

    container.innerHTML = filteredTalks.map(talk => `
        <div class="talk-card fade-in visible">
            <div class="talk-header">
                <div class="talk-time">${talk.time}</div>
                <div class="talk-title">${talk.title}</div>
                <div class="talk-speaker">por ${talk.speaker}</div>
            </div>
            <div class="talk-content">
                <div class="talk-description">${talk.description}</div>
                <div class="talk-tags">
                    ${talk.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-aplicar interações nos novos elementos
    addCardInteractions();
}

/*
================================================================================
                        🌐 FUNÇÕES DE COMPARTILHAMENTO SOCIAL
================================================================================
Permitem compartilhar o evento nas principais redes sociais.
*/

// ============================================================================
// 📤 COMPARTILHAR NAS REDES SOCIAIS
// ============================================================================
/*
Abre janelas popup para compartilhar o evento no Twitter, LinkedIn ou Facebook.
Parâmetros: plataforma, texto e URL para compartilhar.
*/
function shareOnSocial(platform, text, url) {
    const shareText = encodeURIComponent(text);
    const shareUrl = encodeURIComponent(url);
    let shareLink = '';
    
    // Definir URL de compartilhamento baseada na plataforma
    switch(platform) {
        case 'twitter':
            shareLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
            break;
        case 'linkedin':
            shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
            break;
        case 'facebook':
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
            break;
        default:
            console.log('Plataforma de compartilhamento não suportada:', platform);
            return;
    }
    
    // Abrir janela popup para compartilhamento
    window.open(shareLink, '_blank', 'width=600,height=400');
    console.log(`📤 Compartilhando no ${platform}`);
}

// ============================================================================
// 🔗 CONFIGURAR BOTÕES DE COMPARTILHAMENTO
// ============================================================================
/*
Adiciona eventos de clique nos botões com classe 'share-btn'.
Os botões devem ter atributo data-platform com o nome da rede social.
*/
function addSocialSharing() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    if (shareButtons.length === 0) {
        console.log('Nenhum botão de compartilhamento encontrado');
        return;
    }
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.dataset.platform;
            const text = 'Confira o evento "O Palco é Delas" - Empoderando mulheres na tecnologia!';
            const url = window.location.href;
            shareOnSocial(platform, text, url);
        });
    });
    
    console.log(`✅ ${shareButtons.length} botões de compartilhamento configurados`);
}

/*
================================================================================
                        🎪 FUNCIONALIDADES EXTRAS
================================================================================
Recursos adicionais que podem ser implementados conforme necessário.
*/

// ============================================================================
// 📋 MODAL DE DETALHES DA PALESTRA
// ============================================================================
/*
Exibe detalhes completos de uma palestra em modal popup.
NOTA: Função opcional - precisa de CSS correspondente para o modal.
*/
function showTalkDetails(talkId) {
    // Buscar palestra pelo ID
    const talk = talks.find(t => t.id === talkId);
    if (!talk) {
        console.log('Palestra não encontrada:', talkId);
        return;
    }
    
    // Criar estrutura do modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${talk.title}</h2>
            <p><strong>Palestrante:</strong> ${talk.speaker}</p>
            <p><strong>Horário:</strong> ${talk.time}</p>
            <p><strong>Descrição:</strong> ${talk.description}</p>
            <div class="talk-tags">
                ${talk.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Configurar fechamento do modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Fechar clicando fora do modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    console.log('📋 Modal aberto para palestra:', talk.title);
}

// ============================================================================
// 🖨️ IMPRESSÃO DA AGENDA
// ============================================================================
/*
Gera uma versão para impressão da agenda do evento.
Abre nova janela com layout otimizado para papel.
*/
function printSchedule() {
    // Criar nova janela para impressão
    const printWindow = window.open('', '_blank');
    
    // Gerar HTML otimizado para impressão
    printWindow.document.write(`
        <html>
            <head>
                <title>Agenda - O Palco é Delas</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        margin: 20px; 
                        color: #333;
                    }
                    h1 { 
                        color: #3a8197; 
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    .schedule-item { 
                        margin-bottom: 15px; 
                        padding: 10px; 
                        border-left: 4px solid #91c9cd;
                        page-break-inside: avoid;
                    }
                    .time { 
                        font-weight: bold; 
                        color: #3a8197; 
                        font-size: 1.1em;
                    }
                    h3 {
                        margin: 5px 0;
                        color: #3a8197;
                    }
                    p {
                        margin: 5px 0;
                        line-height: 1.4;
                    }
                    @media print {
                        body { margin: 0; }
                    }
                </style>
            </head>
            <body>
                <h1>O Palco é Delas - Agenda do Evento</h1>
                <p style="text-align: center; margin-bottom: 30px;">
                    <strong>Sábado, 23 de Agosto de 2025</strong>
                </p>
                ${scheduleItems.map(item => `
                    <div class="schedule-item">
                        <div class="time">${item.time}</div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </body>
        </html>
    `);
    
    // Finalizar e imprimir
    printWindow.document.close();
    printWindow.print();
    
    console.log('🖨️ Agenda enviada para impressão');
}

/*
================================================================================
                              🎯 RESUMO FINAL
================================================================================
Este arquivo contém todas as funcionalidades do site "O Palco é Delas":

📊 DADOS:
- 20 palestrantes com informações completas
- 20 palestras divididas em 2 blocos (manhã e tarde)
- Agenda completa do evento
- Sistema de placeholders para personalização

🛠️ FUNCIONALIDADES:
- Renderização dinâmica de conteúdo
- Navegação suave entre seções
- Menu mobile responsivo
- Animações de entrada
- Sistema de busca
- Contagem regressiva
- Compartilhamento social
- Modal de detalhes
- Impressão de agenda

🚀 INICIALIZAÇÃO:
- Carregamento automático quando DOM estiver pronto
- Verificações de segurança para elementos opcionais
- Logs detalhados para debugging
- Configuração modular e extensível

Para adicionar novas funcionalidades, seguir o padrão de documentação
e organização estabelecido neste arquivo.
*/

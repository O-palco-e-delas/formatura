# 🎤 Como Personalizar Suas Informações - O Palco é Delas

Olá, alunas do programa "O Palco é Delas"! 👋

Este site é **open source** e cada uma de vocês pode atualizar suas próprias informações. Atualmente o site possui placeholders com seus nomes reais, mas as informações profissionais e palestras são genéricas.
...
## 🚀 Como Contribuir:

1. **Fork** do repositório no GitHub
2. **Clone** o projeto na sua máquina
3. **Edite** suas informações pessoais e palestra
4. **Commit** suas mudanças
5. **Abra um Pull Request**
6. Suas mudanças serão revisadas e aprovadas ✅

## 🎯 O que você pode personalizar:

### 👩‍💼 **Suas Informações Pessoais**
Localize seu objeto no array `speakers` (arquivo `script.js`):

- **Cargo atual** (`role`)
- **Empresa** (`company`) 
- **Bio pessoal** (`bio`)
- **Áreas de expertise** (`expertise`)
- **Links para redes sociais** (`social`)

### 🎤 **Sua Palestra**
Localize sua palestra no array `talks` (arquivo `script.js`):

- **Título da palestra** (`title`)
- **Descrição** (`description`)
- **Tags/categorias** (`tags`)
- **Remover flag placeholder** (`isPlaceholder: false`)

## � Encontrando Suas Informações no Código:

### **Para Informações Pessoais:**
1. Abra o arquivo `script.js`
2. Procure por `const speakers = [`
3. Encontre o objeto com `name: "Seu Nome"`

### **Para Sua Palestra:**
1. No mesmo arquivo `script.js`
2. Procure por `const talks = [`
3. Encontre o objeto com `speaker: "Seu Nome"`

## ✏️ Exemplo Prático de Edição:

### **ANTES (placeholder atual):**
```javascript
// INFORMAÇÕES PESSOAIS
{
    id: 1,
    name: "Midian Brandão",
    role: "Tech Lead",
    company: "A definir",
    bio: "Informações serão atualizadas pela própria palestrante...",
    expertise: ["IA", "Machine Learning", "Python"],
    social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
    },
    talks: ["Inteligência Artificial e o Futuro do Trabalho"]
}

// PALESTRA
{
    id: 1,
    time: "10:10 - 10:25",
    title: "Título da palestra será definido pela palestrante",
    speaker: "Midian Brandão",
    description: "A palestrante adicionará a descrição...",
    tags: ["A definir"],
    block: "morning",
    isPlaceholder: true
}
```

### **DEPOIS (personalizado):**
```javascript
// INFORMAÇÕES PESSOAIS
{
    id: 1,
    name: "Midian Brandão",
    role: "Senior AI Engineer",
    company: "Tech Innovators Inc.",
    bio: "Especialista em IA com 8 anos de experiência desenvolvendo soluções de machine learning para empresas Fortune 500. Apaixonada por democratizar a tecnologia e empoderar mulheres na área.",
    expertise: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "MLOps"],
    social: {
        linkedin: "https://linkedin.com/in/midian-brandao",
        twitter: "https://twitter.com/midian_dev",
        github: "https://github.com/midian-brandao"
    },
    talks: ["IA Responsável: Construindo o Futuro com Ética"]
}

// PALESTRA
{
    id: 1,
    time: "10:10 - 10:25",
    title: "IA Responsável: Construindo o Futuro com Ética",
    speaker: "Midian Brandão",
    description: "Explore como desenvolver sistemas de IA que sejam não apenas eficientes, mas também éticos e responsáveis. Discutiremos bias em algoritmos, transparência em modelos e como construir tecnologia que beneficie toda a sociedade.",
    tags: ["IA", "Ética", "Machine Learning", "Responsabilidade Social"],
    block: "morning",
    isPlaceholder: false  // ← IMPORTANTE: Mude para false!
}
```

## ⚠️ Pontos Importantes:

### ✅ **O que PODE ser alterado:**
- Cargo e empresa
- Bio pessoal (seja criativa!)
- Especialidades/skills
- Links das redes sociais
- Título da palestra
- Descrição da palestra
- Tags/categorias
- Flag `isPlaceholder` (mude para `false`)

### ❌ **O que NÃO deve ser alterado:**
- `id` - Identificador único
- `name` - Seu nome (já está correto)
- `time` - Horário já definido pela organização
- `block` - Bloco do evento (manhã/tarde)
- `speaker` - Deve corresponder ao seu nome exato

## 🔧 Testando Suas Mudanças:

1. **Salve** o arquivo `script.js`
2. **Abra** o arquivo `index.html` no navegador
3. **Verifique** se suas informações aparecem corretamente
4. **Teste** a navegação entre páginas

## 📝 Dicas para uma Boa Palestra:

### **Título Impactante:**
- Seja específica e clara
- Use palavras-chave relevantes
- Desperte curiosidade

### **Descrição Envolvente:**
- Explique o que os participantes vão aprender
- Mencione ferramentas/tecnologias específicas
- Destaque o valor prático do conteúdo

### **Tags Estratégicas:**
- Use termos que as pessoas buscariam
- Inclua tecnologias, conceitos e áreas
- Máximo de 4-5 tags por palestra

## 🤝 Precisa de Ajuda?

- Abra uma **Issue** no GitHub
- Entre em contato com a organização
- Pergunte para outras palestrantes que já contribuíram

---

**Lembre-se:** Suas contribuições tornam este evento ainda mais especial! 💪✨

## 📂 Como encontrar suas informações:

### Palestras por bloco :

**🌅 BLOCO 1 - MANHÃ (10:10 - 12:40):**
1. Midian Brandão
2. Camila Marques de Oliveira
3. Gabriela Milet Matias
4. Laryssa Viana Rocha
5. Elizabeth Cristina de Souza
6. Bianca Pinto Cardoso
7. Juliana de Jesus de Oliveira
8. Marília Melo Favalesso
9. Ana Hashimoto
10. Andrea Simone

**🌇 BLOCO 2 - TARDE (14:00 - 16:30):**
11. Bruna Valentim
12. Cecilia Silva
13. Jessica Alexandra
14. Jessica Borges
15. Karina Kaori
16. Keline
17. Luciana Damasceno
18. Rhaissa Barbosa
19. Helena
20. Juliana Lisboa

## 🔧 Como editar:

1. **Encontre seu nome** no arquivo `script.js`
2. **Localize seu objeto** na array `speakers` (para informações pessoais)
3. **Encontre sua palestra** na array `talks` (para informações da apresentação)
4. **Edite os campos** desejados
5. **Mantenha a estrutura** do JSON

## 💡 Exemplo de personalização:

**ANTES (placeholder):**
```javascript
{
    id: 1,
    name: "Midian Brandão",
    role: "Tech Lead",
    company: "A definir",
    bio: "Informações serão atualizadas pela própria palestrante...",
    expertise: ["IA", "Machine Learning", "Python"],
    // ...
}
```

**DEPOIS (personalizado):**
```javascript
{
    id: 1,
    name: "Midian Brandão",
    role: "Desenvolvedora Full Stack",
    company: "TechCorp",
    bio: "Desenvolvedora apaixonada por IA com 5 anos de experiência em Python e Machine Learning. Amo resolver problemas complexos com tecnologia.",
    expertise: ["Python", "TensorFlow", "React"],
    social: {
        linkedin: "https://linkedin.com/in/midian-brandao",
        twitter: "https://twitter.com/midian_dev",
        github: "https://github.com/midian-brandao"
    }
    // ...
}
```

## 🎨 Dicas importantes:

- ✅ **Mantenha** a estrutura JSON
- ✅ **Use** seus links reais do LinkedIn, GitHub, etc.
- ✅ **Seja autêntica** na sua bio
- ✅ **Escolha** expertise que representa você
- ❌ **Não altere** o `id` nem o `name`
- ❌ **Não quebre** a sintaxe do JavaScript



---

**Vamos juntas tornar este site ainda mais incrível! 💪✨**

*Este projeto representa nossa jornada no "O Palco é Delas" e cada uma de vocês faz parte desta história.*

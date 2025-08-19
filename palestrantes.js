// JavaScript específico para a página de palestrantes

// Verificar se os dados dos palestrantes estão disponíveis
function checkSpeakersData() {
    if (typeof speakers === 'undefined') {
        console.error('Erro: Dados dos palestrantes não encontrados');
        return false;
    }
    if (!Array.isArray(speakers) || speakers.length === 0) {
        console.error('Erro: Array de palestrantes vazio ou inválido');
        return false;
    }
    console.log('✓ Dados dos palestrantes carregados:', speakers.length, 'palestrantes');
    return true;
}

// Função para renderizar palestrantes na página dedicada
function renderSpeakersPage() {
    const container = document.getElementById('speakers-container');
    if (!container) {
        console.error('Erro: Container speakers-container não encontrado');
        return;
    }

    if (!checkSpeakersData()) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: #ffebee; border-radius: 8px; color: #c62828;">
                <h3>⚠️ Erro ao carregar dados</h3>
                <p>Os dados dos palestrantes não foram carregados corretamente.</p>
                <p>Verifique se o arquivo script.js está sendo carregado antes deste script.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = speakers.map(speaker => `
        <div class="speaker-card-detailed fade-in visible" data-category="${getCategoryFromRole(speaker.role)}">
            <div class="speaker-info-detailed">
                <div class="speaker-header">
                    <div class="speaker-name-large">${speaker.name}</div>
                    <div class="speaker-role-large">${speaker.role}</div>
                    <div class="speaker-company-large">${speaker.company}</div>
                </div>
                
                <div class="speaker-bio-detailed">
                    <p>${speaker.bio}</p>
                </div>
                
                <div class="speaker-expertise-detailed">
                    <h4>Especialidades</h4>
                    <div class="expertise-tags">
                        ${speaker.expertise.map(exp => `<span class="expertise-tag-large">${exp}</span>`).join('')}
                    </div>
                </div>
                
                <div class="speaker-talks-list">
                    <h4>Palestras</h4>
                    <ul>
                        ${speaker.talks.map(talk => `<li>${talk}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="speaker-social-detailed">
                    <a href="${speaker.social.linkedin}" target="_blank" class="social-btn linkedin">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="${speaker.social.twitter}" target="_blank" class="social-btn twitter">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="${speaker.social.github}" target="_blank" class="social-btn github">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </div>
                
                <div class="speaker-actions">
                    <button class="btn btn-primary btn-sm" onclick="viewSpeakerTalks(${speaker.id})">
                        Ver Palestras
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="contactSpeaker(${speaker.id})">
                        Contato
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    console.log('✓ Palestrantes renderizados com sucesso');
}

// Função para determinar categoria baseada no role
function getCategoryFromRole(role) {
    const roleMap = {
        'Tech Lead': 'tech-lead',
        'Frontend Developer': 'developer',
        'Security Engineer': 'engineer',
        'DevOps Engineer': 'engineer',
        'Data Scientist': 'data',
        'UX Designer': 'designer',
        'Blockchain Developer': 'developer',
        'Mobile Developer': 'developer',
        'IoT Engineer': 'engineer',
        'Software Architect': 'engineer',
        'Quantum Researcher': 'other',
        'VR/AR Developer': 'developer',
        'Agile Coach': 'other',
        'Big Data Engineer': 'data',
        'Robotics Engineer': 'engineer',
        'Open Source Advocate': 'other',
        'Green Tech Specialist': 'other',
        'Entrepreneur': 'other',
        'Tech Evangelist': 'other',
        'Frontend Engineer': 'engineer',
    };
    return roleMap[role] || 'other';
}

// Função de busca de palestrantes
function setupSpeakerSearch() {
    const searchInput = document.getElementById('search-speakers');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterSpeakers(searchTerm);
    });
}

// Função para filtrar palestrantes
function filterSpeakers(searchTerm = '', category = 'all') {
    const speakerCards = document.querySelectorAll('.speaker-card-detailed');
    
    speakerCards.forEach(card => {
        const speakerName = card.querySelector('.speaker-name-large').textContent.toLowerCase();
        const speakerRole = card.querySelector('.speaker-role-large').textContent.toLowerCase();
        const speakerCompany = card.querySelector('.speaker-company-large').textContent.toLowerCase();
        const speakerBio = card.querySelector('.speaker-bio-detailed').textContent.toLowerCase();
        const expertiseTags = Array.from(card.querySelectorAll('.expertise-tag-large')).map(tag => tag.textContent.toLowerCase());
        
        const matchesSearch = searchTerm === '' || 
            speakerName.includes(searchTerm) ||
            speakerRole.includes(searchTerm) ||
            speakerCompany.includes(searchTerm) ||
            speakerBio.includes(searchTerm) ||
            expertiseTags.some(tag => tag.includes(searchTerm));
        
        const matchesCategory = category === 'all' || card.dataset.category === category;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
    
    updateResultsCount();
}

// Função para configurar filtros por categoria
function setupCategoryFilters() {
    const filterTags = document.querySelectorAll('.filter-tag');
    
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            filterTags.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            this.classList.add('active');
            
            const category = this.dataset.filter;
            const searchTerm = document.getElementById('search-speakers').value.toLowerCase();
            filterSpeakers(searchTerm, category);
        });
    });
}

// Função para atualizar contador de resultados
function updateResultsCount() {
    const visibleCards = document.querySelectorAll('.speaker-card-detailed[style*="block"], .speaker-card-detailed:not([style*="none"])');
    const totalCards = document.querySelectorAll('.speaker-card-detailed');
    
    // Criar ou atualizar contador se não existir
    let counter = document.querySelector('.results-counter');
    if (!counter) {
        counter = document.createElement('div');
        counter.className = 'results-counter';
        const searchSection = document.querySelector('.search-section .container');
        if (searchSection) {
            searchSection.appendChild(counter);
        }
    }
    
    counter.innerHTML = `Mostrando ${visibleCards.length} de ${totalCards.length} palestrantes`;
}

// Função para ver palestras de uma palestrante específica
function viewSpeakerTalks(speakerId) {
    if (!checkSpeakersData()) return;
    
    const speaker = speakers.find(s => s.id === speakerId);
    if (!speaker) return;
    
    // Redirecionar para página de palestras com filtro
    window.location.href = `palestras.html?speaker=${encodeURIComponent(speaker.name)}`;
}

// Função para contatar palestrante
function contactSpeaker(speakerId) {
    if (!checkSpeakersData()) return;
    
    const speaker = speakers.find(s => s.id === speakerId);
    if (!speaker) return;
    
    // Criar modal de contato ou redirecionar para LinkedIn
    if (speaker.social.linkedin && speaker.social.linkedin !== '#') {
        window.open(speaker.social.linkedin, '_blank');
    } else {
        alert(`Para entrar em contato com ${speaker.name}, verifique as redes sociais disponíveis.`);
    }
}

// Função para estatísticas das palestrantes
function updateSpeakersStats() {
    if (!checkSpeakersData()) return;
    
    const totalSpeakers = speakers.length;
    const uniqueExpertises = new Set();
    
    speakers.forEach(speaker => {
        speaker.expertise.forEach(exp => uniqueExpertises.add(exp));
    });
    
    // Atualizar estatísticas na página
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = totalSpeakers;
        statNumbers[1].textContent = `${uniqueExpertises.size}+`;
        // Manter o terceiro como está (5h de conteúdo)
    }
}

// Função para animação dos cards
function animateSpeakerCards() {
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

    document.querySelectorAll('.speaker-card-detailed').forEach(card => {
        observer.observe(card);
    });
}

// Função para efeitos hover nos cards
function addSpeakerCardEffects() {
    document.querySelectorAll('.speaker-card-detailed').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Inicialização da página de palestrantes
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando página de palestrantes...');
    
    // Verificar se estamos na página de palestrantes
    if (document.querySelector('.speakers-page')) {
        console.log('Página de palestrantes detectada');
        
        // Aguardar um pouco para garantir que todos os scripts carregaram
        setTimeout(() => {
            if (checkSpeakersData()) {
                console.log('Iniciando renderização...');
                renderSpeakersPage();
                setupSpeakerSearch();
                setupCategoryFilters();
                updateSpeakersStats();
                
                // Pequeno delay para animações
                setTimeout(() => {
                    animateSpeakerCards();
                    addSpeakerCardEffects();
                    updateResultsCount();
                }, 100);
            } else {
                console.error('Falha na verificação dos dados dos palestrantes');
            }
        }, 200);
    } else {
        console.log('Não é a página de palestrantes');
    }
});

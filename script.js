// ===================================
// Data Constants
// ===================================
const EXPERIENCES = [
    {
        period: 'jul/2023 - jan/2026',
        title: 'Analista de Dados',
        company: 'Mafer Engenharia Ltda',
        description: 'Responsável pela análise de dados e desenvolvimento de soluções corporativas com Microsoft Power Platform (Power Apps, Power BI e Power Automate), atuando desde a arquitetura e modelagem de dados até a entrega de aplicativos, dashboards e automações inteligentes. Transformação de controles manuais e planilhas em sistemas integrados, com soluções online e offline, promovendo ganho de produtividade, redução de retrabalho e maior confiabilidade das informações.'
    },
    {
        period: 'ago/2017 - set/2020',
        title: 'Analista de Monitoramento',
        company: 'Martins Logística S/A',
        description: 'Atuação no time de Monitoramento e Infraestrutura de TEF (Transferência Eletrônica de Fundos), com responsabilidade sobre o acompanhamento e suporte de todo o fluxo transacional, incluindo PDV, tráfego de dados, servidores de TEF e integração com adquirentes. Execução de análises preventivas para identificação e mitigação de riscos operacionais, garantindo confiabilidade, desempenho e alta taxa de sucesso das transações. Realização de manutenções nos sistemas operacionais dos servidores e nas aplicações do ambiente de TEF.'
    },
    {
        period: 'set/2004 - jan/2017',
        title: 'Técnico de Manut. Eletrônica',
        company: 'Caixa Econômica Federal (Terceirizado)',
        description: 'Execução de instalação, configuração e suporte técnico em centrais telefônicas no parque tecnológico da Caixa Econômica Federal. Atuação em manutenção preventiva e corretiva de infraestrutura de TI, incluindo computadores, servidores, salas técnicas, impressoras e equipamentos de autoatendimento (Cash Dispensers), assegurando confiabilidade, performance e continuidade dos ambientes críticos.'
    }
];

const SKILLS = [
    { name: 'Power Apps Developer', percentage: 95 },
    { name: 'Power BI Analist', percentage: 80 },
    { name: 'Power Automate', percentage: 90 },
    { name: 'Microsoft SharePoint', percentage: 98 },
    { name: 'Microsoft Office 365', percentage: 90 },
    { name: 'Windows Server', percentage: 80 },
    { name: 'HTML/CSS', percentage: 50 },
    { name: 'Apps Google (Forms, Docs, Sheets, Present.)', percentage: 100 },
    { name: 'Inglês', percentage: 30 },
    { name: 'CorelDraw', percentage: 80 },
    { name: 'Photoshop/Indesign', percentage: 85 }
];

const EDUCATIONS = [
    {
        title: 'Gestão em TI',
        institution: 'Faculdade Uninter (Uberlândia-MG)',
        status: 'EM ANDAMENTO',
        icon: 'school'
    },
    {
        title: 'Segundo Grau',
        institution: 'E.E. Professora Juvenilia Ferreira dos Santos',
        status: 'CONCLUÍDO EM 1998',
        icon: 'history_edu'
    }
];

const INTERESTS = [
    { label: 'Streaming', icon: 'play_circle' },
    { label: 'Café', icon: 'coffee' },
    { label: 'Família', icon: 'family_restroom' }
];

// ===================================
// DOM Elements
// ===================================
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// ===================================
// Dark Mode Toggle with Auto Time-based Theme
// ===================================
function getAutoThemeByTime() {
    const currentHour = new Date().getHours();
    // Dark mode: 18:00 (6 PM) to 05:59 (5:59 AM)
    // Light mode: 06:00 (6 AM) to 17:59 (5:59 PM)
    return (currentHour >= 18 || currentHour < 6) ? 'dark' : 'light';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const manualOverride = localStorage.getItem('manualThemeOverride');

    let themeToApply;

    // If user manually changed theme, use their preference
    if (manualOverride === 'true' && savedTheme) {
        themeToApply = savedTheme;
    } else {
        // Otherwise, use automatic time-based theme
        themeToApply = getAutoThemeByTime();
        localStorage.setItem('theme', themeToApply);
    }

    // Apply theme
    if (themeToApply === 'light') {
        document.body.classList.remove('dark-mode');
        themeToggle.querySelector('.material-symbols-outlined').textContent = 'light_mode';
    } else {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('.material-symbols-outlined').textContent = 'dark_mode';
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.querySelector('.material-symbols-outlined').textContent = isDark ? 'dark_mode' : 'light_mode';

    // Save user preference and mark as manual override
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('manualThemeOverride', 'true');
});

// ===================================
// Mobile Menu Toggle
// ===================================
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===================================
// Generate Timeline
// ===================================
function generateTimeline() {
    const timeline = document.getElementById('timeline');

    EXPERIENCES.forEach((exp, index) => {
        const isEven = index % 2 !== 0;

        const item = document.createElement('div');
        item.className = 'timeline-item reveal';

        item.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">
          <span class="timeline-badge">${exp.period}</span>
          <h3 class="timeline-title">${exp.title}</h3>
          <p class="timeline-company">${exp.company}</p>
        </div>
        <div class="timeline-dot"></div>
        <div class="timeline-description">
          <p>${exp.description}</p>
        </div>
      </div>
    `;

        timeline.appendChild(item);
    });
}

// ===================================
// Generate Skills
// ===================================
function generateSkills() {
    const skillsList = document.getElementById('skillsList');

    SKILLS.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        skillItem.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-percentage">${skill.percentage}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-percentage="${skill.percentage}"></div>
      </div>
    `;

        skillsList.appendChild(skillItem);
    });
}

// ===================================
// Generate Education
// ===================================
function generateEducation() {
    const educationList = document.getElementById('educationList');

    EDUCATIONS.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';

        const statusClass = edu.status.includes('ANDAMENTO') ? 'in-progress' : 'completed';

        eduItem.innerHTML = `
      <div class="education-icon">
        <span class="material-symbols-outlined">${edu.icon}</span>
      </div>
      <div class="education-info">
        <h4>${edu.title}</h4>
        <p>${edu.institution}</p>
        <p class="education-status ${statusClass}">${edu.status}</p>
      </div>
    `;

        educationList.appendChild(eduItem);
    });
}

// ===================================
// Generate Interests
// ===================================
function generateInterests() {
    const interestsList = document.getElementById('interestsList');

    INTERESTS.forEach(interest => {
        const interestItem = document.createElement('div');
        interestItem.className = 'interest-item';

        interestItem.innerHTML = `
      <div class="interest-icon">
        <span class="material-symbols-outlined">${interest.icon}</span>
      </div>
      <span class="interest-label">${interest.label}</span>
    `;

        interestsList.appendChild(interestItem);
    });
}

// ===================================
// Scroll Reveal Animation
// ===================================
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// ===================================
// Animate Skills on Scroll
// ===================================
function animateSkills() {
    const skillsSection = document.querySelector('.skills-section');
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const percentage = bar.getAttribute('data-percentage');
                    setTimeout(() => {
                        bar.style.width = percentage + '%';
                        bar.classList.add('animate');
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ===================================
// Contact Form Submission
// ===================================
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        empresa: document.getElementById('empresa').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Update button state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando...';
    formMessage.textContent = '';
    formMessage.className = 'form-message';

    try {
        const response = await fetch('https://formspree.io/f/xdalnlbk', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Success
            submitBtn.classList.add('success');
            submitBtn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Enviado com Sucesso!';
            formMessage.textContent = 'Obrigado! Responderei em breve.';
            formMessage.classList.add('success');

            // Reset form
            contactForm.reset();

            // Reset button after 5 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.classList.remove('success');
                submitBtn.innerHTML = '<span class="material-symbols-outlined">send</span> Enviar Mensagem';
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        } else {
            throw new Error('Erro no envio');
        }
    } catch (error) {
        // Error
        submitBtn.classList.add('error');
        submitBtn.innerHTML = '<span class="material-symbols-outlined">error</span> Erro. ID Inválido ou Rede.';
        formMessage.textContent = 'Dica: Verifique se o seu "Form ID" no arquivo script.js está correto.';
        formMessage.classList.add('error');

        // Reset button after 5 seconds
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('error');
            submitBtn.innerHTML = '<span class="material-symbols-outlined">send</span> Enviar Mensagem';
        }, 5000);
    }
});

// ===================================
// Initialize on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    generateTimeline();
    generateSkills();
    generateEducation();
    generateInterests();
    animateSkills();
    reveal(); // Initial check for elements in view
});

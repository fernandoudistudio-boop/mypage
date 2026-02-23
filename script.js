// ===================================
// Data Constants
// ===================================
const EXPERIENCES = {
    pt: [
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
    ],
    en: [
        {
            period: 'Jul/2023 - Jan/2026',
            title: 'Data Analyst',
            company: 'Mafer Engenharia Ltda',
            description: 'Responsible for data analysis and development of corporate solutions with Microsoft Power Platform (Power Apps, Power BI, and Power Automate), acting from data architecture and modeling to the delivery of apps, dashboards, and smart automations. Transformation of manual controls and spreadsheets into integrated systems, with online and offline solutions, promoting productivity gains, reduction of rework, and greater reliability of information.'
        },
        {
            period: 'Aug/2017 - Sep/2020',
            title: 'Monitoring Analyst',
            company: 'Martins Logística S/A',
            description: 'Worked in the EFT (Electronic Funds Transfer) Monitoring and Infrastructure team, responsible for monitoring and supporting the entire transactional flow, including POS, data traffic, EFT servers, and integration with acquirers. Execution of preventive analyses for identification and mitigation of operational risks, ensuring reliability, performance, and a high success rate of transactions. Maintenance of server operating systems and applications in the EFT environment.'
        },
        {
            period: 'Sep/2004 - Jan/2017',
            title: 'Electronic Maintenance Technician',
            company: 'Caixa Econômica Federal (Outsourced)',
            description: 'Installation, configuration, and technical support in telephone exchanges at Caixa Econômica Federal\'s technology park. Performance in preventive and corrective maintenance of IT infrastructure, including computers, servers, technical rooms, printers, and self-service equipment (Cash Dispensers), ensuring reliability, performance, and continuity of critical environments.'
        }
    ],
    es: [
        {
            period: 'jul/2023 - ene/2026',
            title: 'Analista de Datos',
            company: 'Mafer Engenharia Ltda',
            description: 'Responsable del análisis de datos y desarrollo de soluciones corporativas con Microsoft Power Platform (Power Apps, Power BI y Power Automate), actuando desde la arquitectura y modelado de datos hasta la entrega de aplicaciones, tableros y automatizaciones inteligentes. Transformación de controles manuales y hojas de cálculo en sistemas integrados, con soluciones en línea y fuera de línea, promoviendo ganancias de productividad, reducción de retrabajo y mayor confiabilidad de la información.'
        },
        {
            period: 'ago/2017 - sep/2020',
            title: 'Analista de Monitoreo',
            company: 'Martins Logística S/A',
            description: 'Actuación en el equipo de Monitoreo e Infraestructura de TEF (Transferencia Electrónica de Fondos), con responsabilidad sobre el seguimiento y soporte de todo el flujo transaccional, incluyendo PDV, tráfico de datos, servidores de TEF e integración con adquirientes. Ejecución de análisis preventivos para identificar y mitigar riesgos operativos, garantizando confiabilidad, desempeño y alta tasa de éxito de las transacciones. Realización de mantenimientos en los sistemas operativos de los servidores y en las aplicaciones del entorno de TEF.'
        },
        {
            period: 'sep/2004 - ene/2017',
            title: 'Técnico de Mant. Electrónica',
            company: 'Caixa Econômica Federal (Tercerizado)',
            description: 'Ejecución de instalación, configuración y soporte técnico en centrales telefónicas en el parque tecnológico de la Caixa Econômica Federal. Actuación en mantenimiento preventivo y correctivo de infraestructura de TI, incluyendo computadoras, servidores, salas técnicas, impresoras y equipos de autoservicio (Cash Dispensers), asegurando confiabilidad, desempeño y continuidad de los entornos críticos.'
        }
    ]
};

const SKILLS = {
    pt: [
        { name: 'Power Apps Developer', percentage: 95 },
        { name: 'Analista Power BI', percentage: 80 },
        { name: 'Power Automate', percentage: 90 },
        { name: 'Administração Windows Server', percentage: 95 },
        { name: 'Gestão/Suporte de Servidores e Estações de Trab.', percentage: 80 },
        { name: 'Active Directory', percentage: 90 },
        { name: 'Microsoft SharePoint', percentage: 98 },
        { name: 'Microsoft Office 365', percentage: 90 },
        { name: 'HTML/CSS', percentage: 50 },
        { name: 'Apps Google (Forms, Docs, Sheets, Present.)', percentage: 100 },
        { name: 'Inglês', percentage: 30 },
        { name: 'CorelDraw', percentage: 80 },
        { name: 'Photoshop/Indesign', percentage: 85 }
    ],
    en: [
        { name: 'Power Apps Developer', percentage: 95 },
        { name: 'Power BI Analyst', percentage: 80 },
        { name: 'Power Automate', percentage: 90 },
        { name: 'Windows Server Administration', percentage: 95 },
        { name: 'Server & Workstation Management/Support', percentage: 80 },
        { name: 'Active Directory', percentage: 90 },
        { name: 'Microsoft SharePoint', percentage: 98 },
        { name: 'Microsoft Office 365', percentage: 90 },
        { name: 'HTML/CSS', percentage: 50 },
        { name: 'Google Apps (Forms, Docs, Sheets, Slides)', percentage: 100 },
        { name: 'English', percentage: 30 },
        { name: 'CorelDraw', percentage: 80 },
        { name: 'Photoshop/Indesign', percentage: 85 }
    ],
    es: [
        { name: 'Desarrollador Power Apps', percentage: 95 },
        { name: 'Analista de Power BI', percentage: 80 },
        { name: 'Power Automate', percentage: 90 },
        { name: 'Administración de Windows Server', percentage: 95 },
        { name: 'Gestión/Soporte de Servidores y Estaciones de Trab.', percentage: 80 },
        { name: 'Active Directory', percentage: 90 },
        { name: 'Microsoft SharePoint', percentage: 98 },
        { name: 'Microsoft Office 365', percentage: 90 },
        { name: 'HTML/CSS', percentage: 50 },
        { name: 'Apps de Google (Forms, Docs, Sheets, Present.)', percentage: 100 },
        { name: 'Inglés', percentage: 30 },
        { name: 'CorelDraw', percentage: 80 },
        { name: 'Photoshop/Indesign', percentage: 85 }
    ]
};

const EDUCATIONS = {
    pt: [
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
    ],
    en: [
        {
            title: 'IT Management',
            institution: 'Faculdade Uninter (Uberlândia-MG)',
            status: 'IN PROGRESS',
            icon: 'school'
        },
        {
            title: 'High School',
            institution: 'E.E. Professora Juvenilia Ferreira dos Santos',
            status: 'COMPLETED IN 1998',
            icon: 'history_edu'
        }
    ],
    es: [
        {
            title: 'Gestión de TI',
            institution: 'Faculdade Uninter (Uberlândia-MG)',
            status: 'EN CURSO',
            icon: 'school'
        },
        {
            title: 'Secundaria',
            institution: 'E.E. Professora Juvenilia Ferreira dos Santos',
            status: 'COMPLETADO EN 1998',
            icon: 'history_edu'
        }
    ]
};

const INTERESTS = {
    pt: [
        { label: 'Streaming', icon: 'play_circle' },
        { label: 'Café', icon: 'coffee' },
        { label: 'Família', icon: 'family_restroom' }
    ],
    en: [
        { label: 'Streaming', icon: 'play_circle' },
        { label: 'Coffee', icon: 'coffee' },
        { label: 'Family', icon: 'family_restroom' }
    ],
    es: [
        { label: 'Streaming', icon: 'play_circle' },
        { label: 'Café', icon: 'coffee' },
        { label: 'Familia', icon: 'family_restroom' }
    ]
};

const TRANSLATIONS = {
    pt: {
        "nav-about": "Sobre",
        "nav-experience": "Experiência",
        "nav-works": "Trabalhos",
        "nav-skills": "Habilidades",
        "nav-education": "Formação",
        "nav-contact": "Contato",
        "hero-badge": "Power Platform Expert",
        "hero-description": "Power Platform Developer & Power BI Analyst. <br>Ajudo empresas a modernizar processos com aplicativos inteligentes, dashboards automáticos e fluxos conectados.",
        "hero-btn-call": "Solicite uma Call!",
        "hero-btn-trajectory": "Trajetória Profissional",
        "about-title": "Low-Code / No-Code Application Developer & Integration Specialist",
        "about-quote": '"Desenvolvedor de soluções No-Code e Low-Code com foco em automação de processos, integração de sistemas e criação de aplicações web. Experiência em plataformas como Power Platform, Bubble.io, e orquestração de workflows com n8n, além de ferramentas AI-assisted como Lovable, Stitch e Antigravity. Entrego soluções que reduzem retrabalho, melhoram eficiência operacional e aceleram a entrega de produtos digitais"',
        "focus-automation-title": "Automação",
        "focus-automation-desc": "Eliminando retrabalho e processos manuais lentos.",
        "focus-dashboards-title": "Dashboards",
        "focus-dashboards-desc": "Decisões baseadas em dados reais e atualizados.",
        "focus-apps-title": "Apps Customizados",
        "focus-apps-desc": "Sistemas modernos, fáceis de usar e acessíveis.",
        "experience-title": "Minhas Experiências",
        "works-title": "Alguns trabalhos",
        "skills-title": "Habilidades Técnicas",
        "ed-title": "Educação e Foco",
        "interests-title": "Interesses & Hobies",
        "contact-call": "Solicite uma Call!",
        "contact-subtitle": "Vamos conversar sobre como transformar sua empresa.",
        "contact-label-residence": "Residência",
        "contact-text-city": "São Francisco do Sul - SC",
        "form-label-name": "Nome",
        "form-placeholder-name": "Seu nome",
        "form-label-company": "Empresa",
        "form-placeholder-company": "Nome da empresa",
        "form-label-email": "Seu E-mail",
        "form-placeholder-email": "seu@parceiro.com.br",
        "form-label-message": "Mensagem",
        "form-placeholder-message": "Como posso ajudar?",
        "form-btn-send": "Enviar Mensagem",
        "footer-text": "© 2024 Fernando Couto. Todos os direitos reservados.",
        "scroll-topo": "Voltar ao topo",
        "sending": "Enviando...",
        "sent-success": "Enviado com Sucesso!",
        "sent-msg": "Obrigado! Responderei em breve.",
        "error-send": "Erro. ID Inválido ou Rede.",
        "error-msg": 'Dica: Verifique se o seu "Form ID" no arquivo script.js está correto.',
        "btn-resend": "Enviar Mensagem",
        "empty-gallery-msg": "Novos projetos em breve..."
    },
    en: {
        "nav-about": "About",
        "nav-experience": "Experience",
        "nav-works": "Works",
        "nav-skills": "Skills",
        "nav-education": "Education",
        "nav-contact": "Contact",
        "hero-badge": "Power Platform Expert",
        "hero-description": "Power Platform Developer & Power BI Analyst. <br>I help companies modernize processes with smart apps, automatic dashboards, and connected workflows.",
        "hero-btn-call": "Schedule a Call!",
        "hero-btn-trajectory": "Professional Journey",
        "about-title": "Low-Code / No-Code Application Developer & Integration Specialist",
        "about-quote": '"No-Code and Low-Code solutions developer focused on process automation, system integration, and web application creation. Experience in platforms like Power Platform, Bubble.io, and workflow orchestration with n8n, as well as AI-assisted tools like Lovable, Stitch, and Antigravity. I deliver solutions that reduce rework, improve operational efficiency, and accelerate digital product delivery."',
        "focus-automation-title": "Automation",
        "focus-automation-desc": "Eliminating rework and slow manual processes.",
        "focus-dashboards-title": "Dashboards",
        "focus-dashboards-desc": "Decisions based on real and updated data.",
        "focus-apps-title": "Custom Apps",
        "focus-apps-desc": "Modern, easy-to-use, and accessible systems.",
        "experience-title": "My Experience",
        "works-title": "Some Works",
        "skills-title": "Technical Skills",
        "ed-title": "Education & Focus",
        "interests-title": "Interests & Hobbies",
        "contact-call": "Schedule a Call!",
        "contact-subtitle": "Let's talk about how to transform your company.",
        "contact-label-residence": "Residence",
        "contact-text-city": "São Francisco do Sul - SC, Brazil",
        "form-label-name": "Name",
        "form-placeholder-name": "Your name",
        "form-label-company": "Company",
        "form-placeholder-company": "Company name",
        "form-label-email": "Your E-mail",
        "form-placeholder-email": "your@partner.com",
        "form-label-message": "Message",
        "form-placeholder-message": "How can I help?",
        "form-btn-send": "Send Message",
        "footer-text": "© 2024 Fernando Couto. All rights reserved.",
        "scroll-topo": "Back to top",
        "sending": "Sending...",
        "sent-success": "Sent Successfully!",
        "sent-msg": "Thank you! I will respond soon.",
        "error-send": "Error. Invalid ID or Network.",
        "error-msg": 'Tip: Check if your "Form ID" in script.js is correct.',
        "btn-resend": "Send Message",
        "empty-gallery-msg": "New projects coming soon..."
    },
    es: {
        "nav-about": "Sobre",
        "nav-experience": "Experiencia",
        "nav-works": "Trabajos",
        "nav-skills": "Habilidades",
        "nav-education": "Formación",
        "nav-contact": "Contacto",
        "hero-badge": "Experto en Power Platform",
        "hero-description": "Desarrollador de Power Platform y Analista de Power BI. <br>Ayudo a las empresas a modernizar procesos con aplicaciones inteligentes, tableros automáticos y flujos conectados.",
        "hero-btn-call": "¡Solicite una llamada!",
        "hero-btn-trajectory": "Trayectoria Profesional",
        "about-title": "Desarrollador de Aplicaciones Low-Code / No-Code y Especialista en Integración",
        "about-quote": '"Desarrollador de soluciones No-Code y Low-Code con enfoque en automatización de procesos, integração de sistemas e criação de aplicações web. Experiência em plataformas como Power Platform, Bubble.io y orquestación de flujos de trabajo con n8n, además de herramientas asistidas por IA como Lovable, Stitch y Antigravity. Entrego soluciones que reducen el retrabajo, mejoran la eficiencia operativa y aceleran la entrega de productos digitales."',
        "focus-automation-title": "Automatización",
        "focus-automation-desc": "Eliminando retrabajo y procesos manuales lentos.",
        "focus-dashboards-title": "Tableros",
        "focus-dashboards-desc": "Decisiones basadas en datos reales y actualizados.",
        "focus-apps-title": "Apps Personalizadas",
        "focus-apps-desc": "Sistemas modernos, fáciles de usar y accesibles.",
        "experience-title": "Mis Experiencias",
        "works-title": "Algunos trabajos",
        "skills-title": "Habilidades Técnicas",
        "ed-title": "Educación y Enfoque",
        "interests-title": "Intereses y Pasatiempos",
        "contact-call": "¡Solicite una llamada!",
        "contact-subtitle": "Hablemos sobre cómo transformar su empresa.",
        "contact-label-residence": "Residencia",
        "contact-text-city": "São Francisco do Sul - SC, Brasil",
        "form-label-name": "Nombre",
        "form-placeholder-name": "Su nombre",
        "form-label-company": "Empresa",
        "form-placeholder-company": "Nombre de la empresa",
        "form-label-email": "Su correo electrónico",
        "form-placeholder-email": "su@socio.com",
        "form-label-message": "Mensaje",
        "form-placeholder-message": "¿Cómo puedo ayudar?",
        "form-btn-send": "Enviar Mensaje",
        "footer-text": "© 2024 Fernando Couto. Todos los derechos reservados.",
        "scroll-topo": "Volver arriba",
        "sending": "Enviando...",
        "sent-success": "¡Enviado con Éxito!",
        "sent-msg": "¡Gracias! Responderé pronto.",
        "error-send": "Error. ID Inválido o Red.",
        "error-msg": 'Sugerencia: Verifique si su "Form ID" en script.js es correcto.',
        "btn-resend": "Enviar Mensaje",
        "empty-gallery-msg": "Próximamente nuevos proyectos..."
    }
};

const WORKS = {
    pt: [
        {
            title: 'Dashboards',
            description: 'Desenvolvimento de dashboards inteligentes e intuitivos no Power BI, integrando diversas fontes de dados para fornecer insights em tempo real e facilitar a tomada de decisão estratégica.',
            icon: 'analytics',
            images: ['img/dashboards/Dashboard1.png', 'img/dashboards/Dashboard2.png', 'img/dashboards/Dashboard3.png', 'img/dashboards/Dashboard4.png']
        },
        {
            title: 'Apps Mobile',
            description: 'Desenvolvimento de aplicativos voltados para o uso em dispositivos móveis, facilitando a coleta de dados em campo, inspeções e acesso rápido a informações em qualquer lugar.',
            icon: 'smartphone',
            images: []
        },
        {
            title: 'Checklist Manager',
            description: 'Solução robusta para gestão de conformidade e auditorias.<br><br><b>Tecnologias:</b><br>• Core: React 19 + Vite<br>• Linguagem: TypeScript<br>• Estilo: Tailwind CSS (Dark Mode)<br>• Gráficos: Recharts<br>• IA: Google Gemini API<br>• Rotas: React Router 7<br>• Ícones: Material Symbols',
            icon: 'desktop_windows',
            images: ['img/apps/desktop/desktop1.png', 'img/apps/desktop/desktop2.png', 'img/apps/desktop/desktop3.png', 'img/apps/desktop/desktop4.png']
        }
    ],
    en: [
        {
            title: 'Dashboards',
            description: 'Development of intelligent and intuitive dashboards in Power BI, integrating several data sources to provide real-time insights and facilitate strategic decision-making.',
            icon: 'analytics',
            images: ['img/dashboards/Dashboard1.png', 'img/dashboards/Dashboard2.png', 'img/dashboards/Dashboard3.png', 'img/dashboards/Dashboard4.png']
        },
        {
            title: 'Mobile Apps',
            description: 'Development of applications focused on mobile device usage, facilitating field data collection, inspections, and quick access to information anywhere.',
            icon: 'smartphone',
            images: []
        },
        {
            title: 'Checklist Manager',
            description: 'Robust solution for compliance and audit management.<br><br><b>Technologies:</b><br>• Core: React 19 + Vite<br>• Language: TypeScript<br>• Style: Tailwind CSS (Dark Mode)<br>• Charts: Recharts<br>• AI: Google Gemini API<br>• Routing: React Router 7<br>• Icons: Material Symbols',
            icon: 'desktop_windows',
            images: ['img/apps/desktop/desktop1.png', 'img/apps/desktop/desktop2.png', 'img/apps/desktop/desktop3.png', 'img/apps/desktop/desktop4.png']
        }
    ],
    es: [
        {
            title: 'Tableros',
            description: 'Desarrollo de tableros inteligentes e intuitivos en Power BI, integrando diversas fuentes de datos para proporcionar información en tiempo real y facilitar la toma de decisiones estratégicas.',
            icon: 'analytics',
            images: ['img/dashboards/Dashboard1.png', 'img/dashboards/Dashboard2.png', 'img/dashboards/Dashboard3.png', 'img/dashboards/Dashboard4.png']
        },
        {
            title: 'Apps Móviles',
            description: 'Desarrollo de aplicaciones enfocadas en el uso de dispositivos móviles, facilitando la recopilación de datos de campo, inspecciones y acceso rápido a la información en cualquier lugar.',
            icon: 'smartphone',
            images: []
        },
        {
            title: 'Checklist Manager',
            description: 'Solución robusta para la gestión de cumplimiento y auditorías.<br><br><b>Tecnologías:</b><br>• Core: React 19 + Vite<br>• Lenguaje: TypeScript<br>• Estilo: Tailwind CSS (Dark Mode)<br>• Gráficos: Recharts<br>• IA: Google Gemini API<br>• Rutas: React Router 7<br>• Iconos: Material Symbols',
            icon: 'desktop_windows',
            images: ['img/apps/desktop/desktop1.png', 'img/apps/desktop/desktop2.png', 'img/apps/desktop/desktop3.png', 'img/apps/desktop/desktop4.png']
        }
    ]
};

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
    return (currentHour >= 18 || currentHour < 6) ? 'dark' : 'light';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const manualOverride = localStorage.getItem('manualThemeOverride');

    let themeToApply;

    if (manualOverride === 'true' && savedTheme) {
        themeToApply = savedTheme;
    } else {
        themeToApply = getAutoThemeByTime();
        localStorage.setItem('theme', themeToApply);
    }

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
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('manualThemeOverride', 'true');
});

// ===================================
// Mobile Menu Toggle
// ===================================
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===================================
// Language Selection Logic
// ===================================
let currentLanguage = localStorage.getItem('language') || 'pt';

function updateUI() {
    // Update static elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[currentLanguage][key]) {
            el.innerHTML = TRANSLATIONS[currentLanguage][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[currentLanguage][key]) {
            el.placeholder = TRANSLATIONS[currentLanguage][key];
        }
    });

    // Update aria-labels
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        if (TRANSLATIONS[currentLanguage][key]) {
            el.setAttribute('aria-label', TRANSLATIONS[currentLanguage][key]);
        }
    });

    // Update current language display in header
    document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();

    // Re-generate dynamic content
    generateTimeline();
    generateWorks();
    generateSkills();
    generateEducation();
    generateInterests();

    // Re-trigger animations for new elements
    animateSkills();
    reveal();
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateUI();

    // Close dropdown
    const dropdown = document.querySelector('.language-dropdown');
    dropdown.classList.remove('active');
}

// Toggle language dropdown on click (especially for mobile)
document.getElementById('langBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('.language-dropdown').classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    document.querySelector('.language-dropdown').classList.remove('active');
});

// ===================================
// Generate Timeline
// ===================================
function generateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = ''; // Clear previous content

    EXPERIENCES[currentLanguage].forEach((exp, index) => {
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
// Generate Works
// ===================================
function generateWorks() {
    const worksList = document.getElementById('worksList');
    worksList.innerHTML = '';

    WORKS[currentLanguage].forEach((work, index) => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item reveal';

        // Generate gallery HTML if images exist
        let galleryHTML = '';
        if (work.images && work.images.length > 0) {
            galleryHTML = `<div class="work-gallery">`;
            work.images.forEach(img => {
                galleryHTML += `
                    <div class="gallery-item">
                        <img src="${img}" alt="${work.title}" loading="lazy">
                    </div>
                `;
            });
            galleryHTML += `</div>`;
        } else {
            galleryHTML = `
                <div class="empty-gallery">
                    <span class="material-symbols-outlined">image_not_supported</span>
                    <p data-i18n="empty-gallery-msg">${TRANSLATIONS[currentLanguage]['empty-gallery-msg'] || 'Novos projetos em breve...'}</p>
                </div>
            `;
        }

        workItem.innerHTML = `
            <div class="work-header" onclick="toggleWork(${index})">
                <div class="work-title-group">
                    <span class="material-symbols-outlined work-icon">${work.icon}</span>
                    <h3>${work.title}</h3>
                </div>
                <span class="material-symbols-outlined expand-icon" id="expand-icon-${index}">expand_more</span>
            </div>
            <div class="work-content" id="work-content-${index}">
                <p>${work.description}</p>
                ${galleryHTML}
            </div>
        `;

        worksList.appendChild(workItem);
    });
}

function toggleWork(index) {
    const content = document.getElementById(`work-content-${index}`);
    const icon = document.getElementById(`expand-icon-${index}`);

    if (!content || !icon) return;

    const allContents = document.querySelectorAll('.work-content');
    const allIcons = document.querySelectorAll('.expand-icon');

    // Close others
    allContents.forEach((c, i) => {
        if (i !== index) {
            c.classList.remove('active');
            if (allIcons[i]) allIcons[i].style.transform = 'rotate(0deg)';
        }
    });

    // Toggle current
    const isActive = content.classList.contains('active');
    if (isActive) {
        content.classList.remove('active');
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('active');
        icon.style.transform = 'rotate(180deg)';
    }
}

// ===================================
// Generate Skills
// ===================================
function generateSkills() {
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = ''; // Clear previous content

    SKILLS[currentLanguage].forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        skillItem.innerHTML = `
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-percentage" data-target="${skill.percentage}">0%</span>
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
    educationList.innerHTML = ''; // Clear previous content

    EDUCATIONS[currentLanguage].forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';

        const statusClass = (edu.status.includes('ANDAMENTO') || edu.status.includes('PROGRESS') || edu.status.includes('CURSO')) ? 'in-progress' : 'completed';

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
    interestsList.innerHTML = ''; // Clear previous content

    INTERESTS[currentLanguage].forEach(interest => {
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
let skillsObserver = null;

function animateSkills() {
    const skillsSection = document.querySelector('.skills-section');

    // Disconnect old observer if it exists
    if (skillsObserver) {
        skillsObserver.disconnect();
    }

    skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                const skillNumbers = entry.target.querySelectorAll('.skill-percentage');

                // Animate Bars
                skillBars.forEach(bar => {
                    const percentage = bar.getAttribute('data-percentage');
                    // Reset first to allow re-animation
                    bar.style.width = '0%';
                    bar.classList.remove('animate');

                    setTimeout(() => {
                        bar.style.width = percentage + '%';
                        bar.classList.add('animate');
                    }, 100);
                });

                // Animate Numbers
                skillNumbers.forEach(number => {
                    const target = +number.getAttribute('data-target');
                    const duration = 1500;
                    const increment = target / (duration / 16);

                    let current = 0;
                    const updateNumber = () => {
                        current += increment;
                        if (current < target) {
                            number.textContent = Math.ceil(current) + '%';
                            requestAnimationFrame(updateNumber);
                        } else {
                            number.textContent = target + '%';
                        }
                    };
                    requestAnimationFrame(updateNumber);
                });

                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
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

    submitBtn.disabled = true;
    submitBtn.innerHTML = TRANSLATIONS[currentLanguage]['sending'];
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
            submitBtn.classList.add('success');
            submitBtn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> ${TRANSLATIONS[currentLanguage]['sent-success']}`;
            formMessage.textContent = TRANSLATIONS[currentLanguage]['sent-msg'];
            formMessage.classList.add('success');
            contactForm.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.classList.remove('success');
                submitBtn.innerHTML = `<span class="material-symbols-outlined">send</span> ${TRANSLATIONS[currentLanguage]['form-btn-send']}`;
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        } else {
            throw new Error('Erro no envio');
        }
    } catch (error) {
        submitBtn.classList.add('error');
        submitBtn.innerHTML = `<span class="material-symbols-outlined">error</span> ${TRANSLATIONS[currentLanguage]['error-send']}`;
        formMessage.textContent = TRANSLATIONS[currentLanguage]['error-msg'];
        formMessage.classList.add('error');

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('error');
            submitBtn.innerHTML = `<span class="material-symbols-outlined">send</span> ${TRANSLATIONS[currentLanguage]['btn-resend']}`;
        }, 5000);
    }
});

// ===================================
// PROFILE PICTURE FADE SYSTEM
// ===================================
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const trigger = 180;

    if (scroll > trigger) {
        document.body.classList.add('avatar-active');
    } else {
        document.body.classList.remove('avatar-active');
    }
});

// ===================================
// Initialize on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateUI(); // updateUI calls animateSkills and reveal
});

// ===================================
// Active Navigation Highlight
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

const sectionsToObserve = document.querySelectorAll('section[id], #education');
sectionsToObserve.forEach(section => {
    observer.observe(section);
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

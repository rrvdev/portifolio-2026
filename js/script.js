(function () {

    emailjs.init({
        publicKey: "ftOygsiDcdulDvctM",
    });
})();


emailjs.init({
    publicKey: "ftOygsiDcdulDvctM",
});


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_xymmdlk", "template_65hd7dc", this)
        .then(
            (response) => {
                console.log("SUCCESS!", response);

                window.location.href = "index.htm?email=success";
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Erro ao enviar. Tente novamente mais tarde.");
            }
        );
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('email') === 'success') {
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.style.display = 'block';
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
        history.replaceState(null, '', window.location.pathname);
    }
}
const translations = {
    pt: {
        "page-title": "Ronald.dev",
        "logo-text": "Home",
        "nav-about": "Sobre",
        "nav-projects": "Projetos",
        "nav-contact": "Contato",
        "hero-title": "Olá, eu sou Ronald",
        "hero-subtitle": "Desenvolvedor Web | Python ",
        "hero-btn-projects": "Ver Projetos",
        "hero-btn-contact": "Contato",
        "hero-btn-preview": "Visualizar CV",
        "about-title": "Sobre",
        "about-text-1": "Sou um jovem profissional movido por desafios, com um pé na infraestrutura de TI e outro no desenvolvimento Python.",
        "about-text-2": "Especialista em infraestrutura e redes. Utilizo Python para criar automações para facilitar tarefas repetitivas. Sempre a procura de novos desafios para demostrar conhecimentos e aprender com outros profissionais.",
        "skills-title": "Minhas Habilidades",
        "projects-title": "Meus Projetos",
        "project-desc-1": "Landing page de viagens com foco em ofertas exclusivas e cadastro.",
        "project-desc-2": "Template para academia destacando estrutura, métricas e diferenciais.",
        "project-desc-3": "Landing page de cafeteria com foco na história e qualidade do café.",
        "project-btn-details": "Ver Detalhes",
        "btn-project-2": "Ver Detalhes",
        "btn-project-3": "Ver Detalhes",
        "project-btn-demo": "Deploy",
        "modal-techs-title": "Tecnologias utilizadas",
        "contact-title": "Entre em Contato",
        "contact-info-title": "Informações de Contato",
        "contact-name": "Seu Nome",
        "contact-email": "Seu Email",
        "contact-message": "Sua Mensagem",
        "contact-btn-submit": "Enviar Mensagem",
        "footer-text": "© 2025 Ronald Rodrigues Vasconcelos. Todos os direitos reservados."
    },
    en: {
        "page-title": "Ronald.dev",
        "logo-text": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-title": "Hello, I'm Ronald",
        "hero-subtitle": "Web Developer | Python",
        "hero-btn-projects": "View Projects",
        "hero-btn-contact": "Contact",
        "hero-btn-preview": "View CV",
        "about-title": "About",
        "about-text-1": "I am a young professional driven by challenges, with one foot in IT infrastructure and the other in Python development.",
        "about-text-2": "Infrastructure and networking specialist. I use Python to create automations to facilitate repetitive tasks. Always looking for new challenges to demonstrate knowledge and learn from other professionals.",
        "skills-title": "My Skills",
        "projects-title": "My Projects",
        "project-desc-1": "Travel landing page focused on exclusive offers and newsletter signup.",
        "project-desc-2": "Gym template highlighting facilities, metrics, and key differentiators.",
        "project-desc-3": "Coffee shop landing page focused on brand story and bean quality.",
        "project-btn-details": "View Details",
        "btn-project-2": "View Details",
        "btn-project-3": "View Details",
        "project-btn-demo": "Deploy",
        "modal-techs-title": "Technologies used",
        "contact-title": "Get in Touch",
        "contact-info-title": "Contact Information",
        "contact-name": "Your Name",
        "contact-email": "Your Email",
        "contact-message": "Your Message",
        "contact-btn-submit": "Send Message",
        "footer-text": "© 2025 Ronald Rodrigues Vasconcelos. All rights reserved."
    }
};


function changeLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(`lang-${lang}`).classList.add('active');

    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][id];
            } else if (element.innerHTML.includes('<span>')) {
                const parts = translations[lang][id].split(' ');
                const lastWord = parts.pop();
                element.innerHTML = parts.join(' ') + ` <span>${lastWord}</span>`;
            } else {
                element.textContent = translations[lang][id];
            }
        }
    });
}
document.getElementById('lang-pt').addEventListener('click', () => changeLanguage('pt'));
document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');


    const langSwitcher = document.querySelector('.language-switcher');
    if (navLinks.classList.contains('active')) {
        langSwitcher.style.top = 'auto';
        langSwitcher.style.bottom = '20px';
        langSwitcher.style.right = '50%';
        langSwitcher.style.transform = 'translateX(50%)';
    } else {
        langSwitcher.style.top = '80px';
        langSwitcher.style.bottom = 'auto';
        langSwitcher.style.right = '10px';
        langSwitcher.style.transform = 'none';
    }
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
        document.querySelector('.language-switcher').style.top = '80px';
        document.querySelector('.language-switcher').style.bottom = 'auto';
        document.querySelector('.language-switcher').style.right = '10px';
        document.querySelector('.language-switcher').style.transform = 'none';
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .project-card, .contact-content');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};
document.querySelectorAll('.about-content, .project-card, .contact-content').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

const projectDetails = {
    "card-adventures": {
        pt: { descriptionKey: "project-desc-1" },
        en: { descriptionKey: "project-desc-1" }
    },
    "card-gym": {
        pt: { descriptionKey: "project-desc-2" },
        en: { descriptionKey: "project-desc-2" }
    },
    "card-coffee": {
        pt: { descriptionKey: "project-desc-3" },
        en: { descriptionKey: "project-desc-3" }
    }
};

document.querySelectorAll('.project-details-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.dataset.target;
        const card = document.getElementById(targetId);
        
        // Se já estiver ativo, fecha (toggle)
        const overlay = card.querySelector('.project-overlay');
        const isActive = overlay.classList.contains('active');
        
        // Fecha todos os overlays
        document.querySelectorAll('.project-overlay').forEach(el => el.classList.remove('active'));
        
        if (!isActive) {
            // Atualiza o texto da descrição antes de abrir
            const currentLang = document.documentElement.lang === 'en' ? 'en' : 'pt';
            const project = projectDetails[targetId][currentLang];
            const descElement = document.getElementById(project.descriptionKey);
            const overlayDesc = overlay.querySelector('.overlay-desc');
            
            if (descElement && overlayDesc) {
                overlayDesc.textContent = descElement.textContent;
            }
            
            overlay.classList.add('active');
        }
    });
});

// Atualizar descrições dos overlays e botões ao trocar de idioma
const originalChangeLanguage = changeLanguage;
changeLanguage = function(lang) {
    originalChangeLanguage(lang);
    
    // Atualiza os textos dos botões "Ver Detalhes" e "Deploy" em todos os cards
    const detailsText = translations[lang]["project-btn-details"];
    const deployText = translations[lang]["project-btn-demo"];
    
    document.querySelectorAll('.project-details-btn').forEach(btn => {
        btn.textContent = detailsText;
    });
    
    document.querySelectorAll('.project-links .btn-secondary').forEach(btn => {
        btn.textContent = deployText;
    });
    
    // Atualiza os overlays abertos ou fechados
    Object.keys(projectDetails).forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) {
            const project = projectDetails[cardId][lang];
            const descElement = document.getElementById(project.descriptionKey);
            const overlayDesc = card.querySelector('.overlay-desc');
            if (descElement && overlayDesc) {
                overlayDesc.textContent = descElement.textContent;
            }
        }
    });
};

changeLanguage('pt');


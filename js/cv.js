const translations = {
    pt: {
        "cv-name": "Ronald Vasconcelos",
        "summary-title": "SUMÁRIO",
        "summary-text": "Profissional de T.I com experiência em infraestrutura, redes e suporte técnico, atuando na manutenção de ambientes, resolução de incidentes e apoio aos usuários. Possuo foco em estabilidade, organização e melhoria contínua, além de interesse em automação de processos com n8n e criação de agents de IA e boas práticas de tecnologia, e também utilizando python, para automatizar tarefas repetitivas e otimizar processos.",
        "experience-title": "EXPERIÊNCIAS",
        "job-1-title": "Auxiliar de T.I",
        "job-1-date": "07/2025 - Atual",
        "job-1-desc": "Atuação em suporte técnico presencial e remoto, atendendo colaboradores via helpdesk e resolvendo incidentes de hardware, software e sistemas. Trabalho com infraestrutura de redes (DHCP, DNS, TCP/IP), configuração e suporte a VPNs, administração de usuários no Active Directory e instalação e manutenção de softwares. Também sou responsável por criar e manter automações de tarefas repetitivas, utilizando Python e ferramentas de automação como n8n, contribuindo para maior eficiência e organização dos processos internos.",
        "job-2-title": "Estagiário de T.I - Plannea Contabilidade",
        "job-2-date": "07/2024 - 07/2025",
        "job-2-desc": "Suporte ao colaborador, tanto presencialmente quanto remotamente. Meu dia a dia envolve atender solicitações e resolver problemas diversos, garantindo que todos tenham o suporte necessário para desempenhar suas funções.",
        "education-title": "EDUCAÇÃO",
        "edu-1-school": "Estácio Parangaba",
        "edu-1-date": "Jan 2014 - Dez 2027",
        "edu-1-course": "Análise e Desenvolvimento de Sistemas - Cursando",
        "additional-title": "ADDITIONAL INFORMATION",
        "skills-label": "Competências Técnicas:",
        "skills-text": "Suporte técnico (presencial e remoto) · Helpdesk · Infraestrutura de redes · Automação (Python, n8n) · Banco de dados.",
        "tools-label": "Ferramentas e Sistemas:",
        "tools-text": "Active Directory · Sistema FORTES · Ambiente Windows",
        "languages-label": "Idiomas:",
        "languages-text": "Inglês ( básico/intermediário )",
        "btn-back": "Voltar",
        "btn-print": "Imprimir / Salvar PDF"
    },
    en: {
        "cv-name": "Ronald Vasconcelos",
        "summary-title": "SUMMARY",
        "summary-text": "IT professional with experience in infrastructure, networking, and technical support, working on environment maintenance, incident resolution, and user support. Focused on stability, organization, and continuous improvement, with an interest in process automation using n8n, creation of AI agents, and technology best practices, also utilizing Python to automate repetitive tasks and optimize processes.",
        "experience-title": "EXPERIENCE",
        "job-1-title": "IT Assistant",
        "job-1-date": "07/2025 - Present",
        "job-1-desc": "Providing on-site and remote technical support, assisting employees via helpdesk, and resolving hardware, software, and system incidents. Working with network infrastructure (DHCP, DNS, TCP/IP), VPN configuration and support, user administration in Active Directory, and software installation and maintenance. Also responsible for creating and maintaining automation for repetitive tasks using Python and automation tools like n8n, contributing to greater efficiency and organization of internal processes.",
        "job-2-title": "IT Intern - Plannea Contabilidade",
        "job-2-date": "07/2024 - 07/2025",
        "job-2-desc": "Employee support, both on-site and remote. My daily routine involves handling requests and resolving various problems, ensuring everyone has the necessary support to perform their functions.",
        "education-title": "EDUCATION",
        "edu-1-school": "Estácio Parangaba",
        "edu-1-date": "Jan 2014 - Dec 2027",
        "edu-1-course": "Analysis and Systems Development - In Progress",
        "additional-title": "ADDITIONAL INFORMATION",
        "skills-label": "Technical Skills:",
        "skills-text": "Technical Support (On-site & Remote) · Helpdesk · Network Infrastructure · Automation (Python, n8n) · Databases.",
        "tools-label": "Tools & Systems:",
        "tools-text": "Active Directory · FORTES System · Windows Environment",
        "languages-label": "Languages:",
        "languages-text": "English (Basic/Intermediate)",
        "btn-back": "Back",
        "btn-print": "Print / Save PDF"
    }
};

function changeLanguage(lang) {
    // Atualiza botões
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Atualiza textos
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            // Verifica se é um elemento strong ou span dentro de um li, ou o próprio elemento
            if (element.tagName === 'STRONG') {
                 element.textContent = translations[lang][key];
            } else {
                 element.textContent = translations[lang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lang-pt').addEventListener('click', () => changeLanguage('pt'));
    document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
    
    // Inicializa em PT
    changeLanguage('pt');
});
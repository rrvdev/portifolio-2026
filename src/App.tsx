import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Database } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiReact } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// ── i18n ──
const i18n = {
  pt: {
    nav: { about: 'Sobre', resume: 'Currículo', projects: 'Projetos', contact: 'Contato' },
    hero: {
      status: 'Disponível para trabalhar',
      greeting: 'Olá, eu sou',
      name: 'Ronald.',
      subtitle: 'Desenvolvedor focado em criar soluções eficientes. Utilizo Inteligência Artificial e programação no dia a dia para otimizar processos e alavancar a produtividade corporativa.',
      cta: 'Ver Projetos',
      ctaSecondary: 'Ver Currículo',
    },
    about: {
      label: 'SOBRE',
      heading: 'Um pouco sobre mim',
      p1: 'Sou um profissional movido por desafios, com sólida experiência em infraestrutura de TI e desenvolvimento de software.',
      p2: 'No meu dia a dia como programador, a Inteligência Artificial é minha principal aliada. Utilizo IA de forma intensiva em conjunto com linguagens como Python e JavaScript para criar automações, simplificar tarefas repetitivas e construir soluções escaláveis. Meu foco é sempre aumentar a produtividade geral das equipes com ferramentas inteligentes.',
      skillsLabel: 'Tecnologias',
    },
    experience: {
      label: 'CURRÍCULO',
      heading: 'Experiência Profissional',
      role: 'Assistente de TI - Programação',
      company: 'Plannea Contabilidade',
      period: 'Desde Janeiro de 2026 – Presente',
      description: 'Responsável por criar automações e soluções contábeis unindo programação e IA. Desenvolvo ferramentas web e desktop com o objetivo principal de aumentar a produtividade do time contábil no geral, eliminando gargalos operacionais e tarefas manuais.',
    },
    projects: {
      label: 'PROJETOS',
      heading: 'Trabalhos selecionados',
      items: [
        { title: 'Adventures', desc: 'Landing page de viagens com foco em ofertas exclusivas e call-to-action para cadastro.' },
        { title: 'Gym Template', desc: 'Template para academia destacando estrutura, diferenciais e métricas de treino.' },
        { title: 'Coffee', desc: 'Landing page de cafeteria focada na história da marca e qualidade dos grãos.' },
      ],
      viewDeploy: 'Ver Deploy',
    },
    contact: {
      label: 'CONTATO',
      heading: 'Vamos conversar',
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      email: 'Email',
      emailPlaceholder: 'seu@email.com',
      message: 'Mensagem',
      messagePlaceholder: 'Escreva sua mensagem...',
      submit: 'Enviar Mensagem',
      sending: 'Enviando...',
    },
    footer: '© {year} Ronald Rodrigues Vasconcelos. Todos os direitos reservados.',
  },
  en: {
    nav: { about: 'About', resume: 'Resume', projects: 'Projects', contact: 'Contact' },
    hero: {
      status: 'Available for work',
      greeting: "Hi, I'm",
      name: 'Ronald.',
      subtitle: 'Developer focused on building efficient solutions. I use Artificial Intelligence and programming daily to optimize processes and boost corporate productivity.',
      cta: 'View Projects',
      ctaSecondary: 'View Resume',
    },
    about: {
      label: 'ABOUT',
      heading: 'A little about me',
      p1: 'I am a challenge-driven professional with solid experience in IT infrastructure and software development.',
      p2: 'In my daily workflow as a programmer, Artificial Intelligence is my main ally. I heavily utilize AI alongside languages like Python and JavaScript to build automations, simplify repetitive tasks, and create scalable solutions. My focus is always to increase the overall productivity of teams with smart tools.',
      skillsLabel: 'Technologies',
    },
    experience: {
      label: 'RESUME',
      heading: 'Professional Experience',
      role: 'IT Assistant - Programming',
      company: 'Plannea Contabilidade',
      period: 'From January 2026 – Present',
      description: 'Responsible for creating accounting automations and solutions by combining programming and AI. I develop web and desktop tools mainly to increase the accounting team\'s overall productivity, eliminating operational bottlenecks and manual tasks.',
    },
    projects: {
      label: 'PROJECTS',
      heading: 'Selected work',
      items: [
        { title: 'Adventures', desc: 'Travel landing page focused on exclusive deals and newsletter sign-up.' },
        { title: 'Gym Template', desc: 'Gym template highlighting facilities, metrics, and key differentiators.' },
        { title: 'Coffee', desc: 'Coffee shop landing page focused on brand story and bean quality.' },
      ],
      viewDeploy: 'View Deploy',
    },
    contact: {
      label: 'CONTACT',
      heading: "Let's talk",
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'Write your message...',
      submit: 'Send Message',
      sending: 'Sending...',
    },
    footer: '© {year} Ronald Rodrigues Vasconcelos. All rights reserved.',
  },
};

type Lang = 'pt' | 'en';

// ── Data ──
const projectsMeta = [
  { image: '/img/adventures.jpg', tags: ['HTML5', 'CSS3', 'JavaScript'], link: 'https://adventures-lading-page.vercel.app/' },
  { image: '/img/gym.jpg', tags: ['HTML5', 'CSS3', 'JavaScript'], link: 'https://gym-five-kohl.vercel.app/' },
  { image: '/img/coffee.jpg', tags: ['HTML5', 'CSS3', 'JavaScript'], link: 'https://coffe-ruby-seven.vercel.app/' },
];

const skills = [
  { name: 'TypeScript', icon: <SiTypescript size={14} /> },
  { name: 'React', icon: <SiReact size={14} /> },
  { name: 'Python', icon: <FaPython size={14} /> },
  { name: 'Git', icon: <FaGitAlt size={14} /> },
  { name: 'SQL', icon: <Database size={14} /> },
];

// ── Animation Variants ──
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

function App() {
  const [lang, setLang] = useState<Lang>('pt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const t = i18n[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    emailjs
      .sendForm('service_xymmdlk', 'template_65hd7dc', formRef.current, 'ftOygsiDcdulDvctM')
      .then(() => {
        alert(lang === 'pt' ? 'E-mail enviado com sucesso!' : 'Email sent successfully!');
        formRef.current?.reset();
      })
      .catch(() => {
        alert(lang === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Failed to send. Please try again.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="logo">ronald.dev</a>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">{t.nav.about}</a></li>
            <li><a href="#resume" className="nav-link">{t.nav.resume}</a></li>
            <li><a href="#projects" className="nav-link">{t.nav.projects}</a></li>
            <li><a href="#contact" className="nav-link">{t.nav.contact}</a></li>
            <li>
              <div className="lang-toggle">
                <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>PT</button>
                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              </div>
            </li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav">
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#resume" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.resume}</a>
            <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
            <div className="lang-toggle" style={{ alignSelf: 'flex-start' }}>
              <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>PT</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div className="hero-text" initial="hidden" animate="visible" variants={fadeUp}>
              <div className="hero-status">
                <span className="status-dot" />
                {t.hero.status}
              </div>
              <h1 className="title">
                {t.hero.greeting}<br />
                {t.hero.name}
              </h1>
              <p className="subtitle">{t.hero.subtitle}</p>
              <div className="btn-group">
                <a href="#projects" className="btn btn-primary">{t.hero.cta}</a>
                <a href="#resume" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
              </div>
            </motion.div>

            <motion.div
              className="hero-anim"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <DotLottieReact
                src="https://lottie.host/fcf391c8-4ed3-4127-8883-25f3366adaa1/po8M64O6sL.lottie"
                loop
                autoplay
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <p className="section-label">{t.about.label}</p>
            <h2 className="section-heading">{t.about.heading}</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              <div>
                <p className="skills-label">{t.about.skillsLabel}</p>
                <div className="skills-grid">
                  {skills.map((s) => (
                    <span key={s.name} className="skill-chip">
                      {s.icon} {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Resume / Experience ── */}
      <section id="resume" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <p className="section-label">{t.experience.label}</p>
            <h2 className="section-heading">{t.experience.heading}</h2>
            
            <div className="experience-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{t.experience.role}</h3>
                  <p className="exp-company">{t.experience.company}</p>
                </div>
                <div className="exp-period">{t.experience.period}</div>
              </div>
              <p className="exp-desc">{t.experience.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <p className="section-label">{t.projects.label}</p>
            <h2 className="section-heading">{t.projects.heading}</h2>
          </motion.div>
          <div className="projects-grid">
            {projectsMeta.map((proj, i) => (
              <motion.div
                key={proj.link}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="project-thumb">
                  <img src={proj.image} alt={t.projects.items[i].title} />
                </div>
                <div className="project-info">
                  <h3 className="project-name">{t.projects.items[i].title}</h3>
                  <div className="project-tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="project-desc">{t.projects.items[i].desc}</p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.projects.viewDeploy} <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            className="contact-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <p className="section-label">{t.contact.label}</p>
            <h2 className="section-heading">{t.contact.heading}</h2>

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-label">{t.contact.name}</label>
                <input type="text" name="name" className="form-input" placeholder={t.contact.namePlaceholder} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.email}</label>
                <input type="email" name="email" className="form-input" placeholder={t.contact.emailPlaceholder} required />
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.message}</label>
                <textarea name="msg" className="form-input" placeholder={t.contact.messagePlaceholder} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                {isSubmitting ? t.contact.sending : <>{t.contact.submit} <Mail size={14} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-text">{t.footer.replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="footer-links">
            <a href="https://github.com/rrvdev" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ronald-vasconcelos-/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

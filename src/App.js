import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './index.css';
import profileImg from './images/review_3.png';

const socialLinks = [
  { href: 'https://github.com/', icon: '🐙', label: 'GitHub' },
  { href: 'https://linkedin.com/', icon: '💼', label: 'LinkedIn' },
];

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
];

const education = [
  { titleKey: 'education.bachelor', year: '2022', placeKey: 'education.university' },
  { titleKey: 'education.certificate', year: '2023', placeKey: 'education.coursera' },
];

const skills = [
  'React', 'Tailwind CSS', 'Framer Motion', 'i18next', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'Figma'
];

const spokenLanguages = [
  { key: 'lang.ar', level: 'Native' },
  { key: 'lang.fr', level: 'Fluent' },
  { key: 'lang.en', level: 'Advanced' },
];

function App() {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const navLinks = [
    { to: '#hero', label: t('nav.hero') },
    { to: '#about', label: t('nav.about') },
    { to: '#projects', label: t('nav.projects') },
    { to: '#education', label: t('nav.education') },
    { to: '#skills', label: t('nav.skills') },
    { to: '#languages', label: t('nav.languages') },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans`}> 
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur flex justify-between items-center px-6 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full border-2 border-blue-400 dark:border-blue-600" />
          <span className="font-bold text-lg tracking-tight">{t('hero.name')}</span>
        </div>
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a key={link.to} href={link.to} className="hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => i18n.changeLanguage(l.code)}
              className={`px-2 py-1 rounded ${i18n.language === l.code ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => setDark(d => !d)}
            className="ml-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
          <button className="md:hidden ml-2" onClick={() => setMenuOpen(m => !m)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col gap-2 p-4 md:hidden shadow-lg animate-fade-in">
            {navLinks.map(link => (
              <a key={link.to} href={link.to} className="py-2 px-4 rounded hover:bg-blue-100 dark:hover:bg-gray-800" onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="flex flex-col items-center justify-center py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={profileImg} alt="Profile" className="w-36 h-36 rounded-full shadow-lg mb-4 border-4 border-blue-400 dark:border-blue-600" />
        <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{t('hero.name')}</h1>
        <h2 className="text-xl font-semibold mb-2 text-blue-500 dark:text-blue-400">{t('hero.title')}</h2>
        <p className="text-lg text-center max-w-xl mb-4 text-gray-700 dark:text-gray-300">{t('hero.bio')}</p>
        <div className="flex gap-4 mt-2">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-125 transition-transform" aria-label={link.label}>{link.icon}</a>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="max-w-3xl mx-auto py-8 px-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-blue-500 dark:text-blue-400">{t('about.title')}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">{t('about.content')}</p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="max-w-5xl mx-auto py-8 px-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2].map(i => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow border-t-4 border-blue-400 dark:border-blue-600"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold mb-2 text-lg">{t(`projects.project${i}.title`)}</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">{t(`projects.project${i}.desc`)}</p>
              <a href="#" className="text-blue-500 hover:underline font-medium">{t('projects.more')}</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="max-w-3xl mx-auto py-8 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">{t('education.title')}</h2>
        <ul className="space-y-4">
          {education.map((ed, idx) => (
            <li key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between border-l-4 border-blue-400 dark:border-blue-600">
              <div>
                <div className="font-bold text-lg">{t(ed.titleKey)}</div>
                <div className="text-gray-500 dark:text-gray-400">{t(ed.placeKey)}</div>
              </div>
              <div className="text-blue-500 dark:text-blue-400 font-semibold mt-2 md:mt-0">{ed.year}</div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="max-w-3xl mx-auto py-8 px-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">{t('skills.title')}</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-700 text-white rounded-full shadow hover:scale-105 transition-transform cursor-pointer font-medium text-sm">{skill}</span>
          ))}
        </div>
      </motion.section>

      {/* Languages Section */}
      <motion.section
        id="languages"
        className="max-w-3xl mx-auto py-8 px-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">{t('languages.title')}</h2>
        <div className="flex flex-wrap gap-4">
          {spokenLanguages.map(lang => (
            <div key={lang.key} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-32">
              <span className="font-bold text-lg mb-1">{t(lang.key)}</span>
              <span className="text-blue-500 dark:text-blue-400 font-medium">{lang.level}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} {t('hero.name')} - Portfolio
      </footer>
    </div>
  );
}

export default App;

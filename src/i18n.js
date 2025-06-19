import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        hero: "Home",
        about: "About",
        projects: "Projects",
        education: "Education",
        skills: "Skills",
        languages: "Languages"
      },
      hero: {
        name: "Your Name",
        title: "Full Stack Developer",
        welcome: "Welcome!",
        bio: "I'm a passionate developer creating modern, beautiful web experiences."
      },
      about: {
        title: "About Me",
        content: "I love building modern web applications with a focus on design, performance, and user experience."
      },
      projects: {
        title: "My Work",
        more: "See more projects",
        project1: {
          title: "Modern Portfolio Website",
          desc: "A responsive, animated portfolio with dark mode and multilingual support."
        },
        project2: {
          title: "E-commerce Platform",
          desc: "A scalable e-commerce platform with payment integration and admin dashboard."
        }
      },
      education: {
        title: "Education & Certificates",
        bachelor: "Bachelor of Computer Science",
        university: "Tech University",
        certificate: "Full Stack Web Development Certificate",
        coursera: "Coursera"
      },
      skills: {
        title: "Skills"
      },
      languages: {
        title: "Languages"
      },
      lang: {
        ar: "Arabic",
        fr: "French",
        en: "English"
      },
      language: "Language"
    }
  },
  fr: {
    translation: {
      nav: {
        hero: "Accueil",
        about: "À propos",
        projects: "Projets",
        education: "Éducation",
        skills: "Compétences",
        languages: "Langues"
      },
      hero: {
        name: "Votre Nom",
        title: "Développeur Full Stack",
        welcome: "Bienvenue!",
        bio: "Je suis un développeur passionné créant des expériences web modernes et belles."
      },
      about: {
        title: "À propos de moi",
        content: "J'adore créer des applications web modernes axées sur le design, la performance et l'expérience utilisateur."
      },
      projects: {
        title: "Mes Projets",
        more: "Voir plus de projets",
        project1: {
          title: "Portfolio Moderne",
          desc: "Un portfolio réactif et animé avec mode sombre et support multilingue."
        },
        project2: {
          title: "Plateforme E-commerce",
          desc: "Une plateforme e-commerce évolutive avec intégration de paiement et tableau de bord admin."
        }
      },
      education: {
        title: "Éducation & Certificats",
        bachelor: "Licence en Informatique",
        university: "Université Tech",
        certificate: "Certificat Développement Web Full Stack",
        coursera: "Coursera"
      },
      skills: {
        title: "Compétences"
      },
      languages: {
        title: "Langues"
      },
      lang: {
        ar: "Arabe",
        fr: "Français",
        en: "Anglais"
      },
      language: "Langue"
    }
  },
  ar: {
    translation: {
      nav: {
        hero: "الرئيسية",
        about: "من أنا",
        projects: "المشاريع",
        education: "الدراسة والشهادات",
        skills: "المهارات",
        languages: "اللغات"
      },
      hero: {
        name: "اسمك",
        title: "مطور برمجيات متكامل",
        welcome: "مرحبًا!",
        bio: "أنا مطور شغوف أصنع تجارب ويب عصرية وجذابة."
      },
      about: {
        title: "من أنا",
        content: "أحب بناء تطبيقات ويب حديثة تركز على التصميم والأداء وتجربة المستخدم."
      },
      projects: {
        title: "أعمالي",
        more: "عرض المزيد من المشاريع",
        project1: {
          title: "موقع بورتفوليو عصري",
          desc: "بورتفوليو متجاوب مع رسوميات ودعم الوضع الليلي وتعدد اللغات."
        },
        project2: {
          title: "منصة تجارة إلكترونية",
          desc: "منصة تجارة إلكترونية قابلة للتوسع مع الدفع ولوحة تحكم للإدارة."
        }
      },
      education: {
        title: "الدراسة والشهادات",
        bachelor: "بكالوريوس علوم الحاسوب",
        university: "جامعة التقنية",
        certificate: "شهادة تطوير ويب متكامل",
        coursera: "كورسيرا"
      },
      skills: {
        title: "المهارات"
      },
      languages: {
        title: "اللغات"
      },
      lang: {
        ar: "العربية",
        fr: "الفرنسية",
        en: "الإنجليزية"
      },
      language: "اللغة"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 
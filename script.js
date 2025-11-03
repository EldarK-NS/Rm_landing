// ---------- NAV ----------
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("navMenu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// ---------- Smooth scroll ----------
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute("href");
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    menu?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

// ---------- Reveal on view ----------
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting) en.target.classList.add("is-visible");
    }),
  { threshold: 0.12 }
);

document
  .querySelectorAll(".section, .feature, .steps li, .gallery img")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

// ---------- I18N ----------
const i18n = {
  ru: {
    // Общие meta (index.html)
    "meta.title":
      "Recruit Master — Платформа для рекрутинга и мобильное приложение",
    "meta.description":
      "Recruit Master — сайт и мобильная платформа для рекрутинга с встроенной CRM/ATS: совместная работа рекрутеров и заказчиков, прозрачный найм.",
    "meta.og_title":
      "Recruit Master — Платформа для рекрутинга и мобильное приложение",
    "meta.og_description":
      "Recruit Master — веб и мобильная платформа с CRM/ATS для компаний и рекрутеров.",
    "meta.tw_title":
      "Recruit Master — Платформа для рекрутинга и мобильное приложение",
    "meta.tw_description":
      "Веб-сайт и мобильная платформа для найма с CRM/ATS.",

    // Навигация и строки
    "a11y.skip": "Перейти к содержимому",
    "a11y.menu": "Меню",
    "nav.about": "О проекте",
    "nav.how": "Как это работает",
    "nav.features": "Возможности",
    "nav.design": "Дизайн",
    "nav.contact": "Контакты",
    "nav.privacy": "Политика конфиденциальности",
    "nav.delete": "Удалить аккаунт",
    "nav.lang_label": "Выбор языка",

    // Главная
    "hero.title":
      "Recruit Master — платформа для рекрутинга и мобильное приложение",
    "hero.lead":
      "Веб-сайт и мобильная платформа со встроенной CRM/ATS для прозрачной совместной работы рекрутеров и заказчиков — идеальна для фриланс- и удалённых рекрутеров.",
    "cta.learn": "Узнать больше",
    "cta.contact": "Связаться",
    "cta.webapp": "Web App",
    "about.title": "О проекте",
    "about.p1":
      "Recruit Master — это веб-сайт и мобильная платформа для рекрутинга с интегрированной CRM/ATS. Площадка объединяет рекрутеров и работодателей, даёт быстрый доступ к проверенным кандидатам и обеспечивает прозрачный процесс найма с оценками, комментариями и полной историей кандидатов.",
    "about.p2":
      "Для компаний это означает ускорение найма без недель на сорсинг. Для агентств и частных рекрутеров — монетизацию базы кандидатов, управление процессом с телефона и сотрудничество с заказчиком в реальном времени.",
    "how.title": "Как это работает",
    "how.s1.title": "Разместите вакансию или ищите",
    "how.s1.text":
      "Публикуйте вакансии или находите кандидатов с нужным опытом.",
    "how.s2.title": "Получайте прескрининг",
    "how.s2.text":
      "Получайте проверенные профили с оценками и заметками рекрутеров.",
    "how.s3.title": "Работайте вместе в реальном времени",
    "how.s3.text": "Чаты, интервью и обратная связь — в одном месте.",
    "how.s4.title": "Отслеживайте прогресс",
    "how.s4.text": "Единая панель с полной прозрачностью по воронке найма.",
    "features.title": "Ключевые возможности",
    "features.f1.title": "Маркетплейс кандидатов",
    "features.f1.muted":
      "Подходит для команд любой конфигурации: компании, фриланс- и удалённые рекрутеры.",
    "features.f1.text":
      "Подобранный пул талантов с профилями, опытом и доступностью.",
    "features.f2.title": "Встроенная CRM/ATS",
    "features.f2.text":
      "Управляйте воронкой, приоритетами и финалистами как в современном ATS.",
    "features.f3.title": "Совместная работа",
    "features.f3.text":
      "Общая видимость для рекрутеров и заказчиков, комментарии и рейтинги.",
    "features.f4.title": "Оценка кандидатов",
    "features.f4.text":
      "Скоркарты и история помогают выбирать лучших финалистов.",
    "design.title": "Дизайн",
    "contact.title": "Контакты",
    "contact.phone_label": "Телефон:",
    "contact.email_label": "Email:",
    "contact.addr_label": "Адрес:",
    closing:
      "Recruit Master — веб-сайт и мобильное приложение, построенные на принципах прозрачности и скорости. Платформа упрощает взаимодействие команд найма, фриланс- и удалённых рекрутеров.",

    // Страница Политики
    "privacy.meta.title": "Recruit Master — Политика конфиденциальности",
    "privacy.meta.description":
      "Официальная Политика конфиденциальности сервиса Recruit Master.",
    "privacy.title": "Политика конфиденциальности",

    // Страница Удаления аккаунта (мета)
    "delete.meta.title": "Recruit Master — Удаление аккаунта",
    "delete.meta.description":
      "Как удалить аккаунт Recruit Master и какие данные будут удалены.",
  },

  en: {
    // Common meta (index.html)
    "meta.title": "Recruit Master – Website for Recruitment and Mobile App",
    "meta.description":
      "Recruit Master is a web and mobile recruitment platform with integrated CRM/ATS for transparent collaboration between recruiters and clients.",
    "meta.og_title": "Recruit Master – Website for Recruitment and Mobile App",
    "meta.og_description":
      "A web and mobile platform with CRM/ATS for companies and recruiters.",
    "meta.tw_title": "Recruit Master – Website for Recruitment and Mobile App",
    "meta.tw_description": "Web and mobile hiring platform with CRM/ATS.",

    // Nav & strings
    "a11y.skip": "Skip to content",
    "a11y.menu": "Menu",
    "nav.about": "About",
    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.design": "Design",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy",
    "nav.delete": "Delete Account",
    "nav.lang_label": "Language",

    // Index
    "hero.title": "Recruit Master — Website for Recruitment and Mobile App",
    "hero.lead":
      "A web and mobile platform with integrated CRM/ATS for transparent collaboration between recruiters and clients — ideal for freelance and remote recruiters.",
    "cta.learn": "Learn More",
    "cta.contact": "Contact",
    "cta.webapp": "Web App",
    "about.title": "About the Project",
    "about.p1":
      "Recruit Master is a web and mobile recruitment platform with an integrated CRM/ATS. It connects recruiters and employers, giving quick access to vetted candidates and a transparent hiring process with ratings, comments and complete candidate history.",
    "about.p2":
      "For companies, it speeds up hiring without weeks of sourcing. For agencies and independent recruiters, it monetizes candidate databases, enables phone-first process control, and real-time collaboration with clients.",
    "how.title": "How It Works",
    "how.s1.title": "Post or search",
    "how.s1.text":
      "Post your vacancy or find candidates with the required experience.",
    "how.s2.title": "Get pre-screened profiles",
    "how.s2.text":
      "Receive vetted profiles from recruiters with ratings and notes.",
    "how.s3.title": "Collaborate in real time",
    "how.s3.text": "Chats, interviews and feedback in one place.",
    "how.s4.title": "Track progress",
    "how.s4.text":
      "A single dashboard with full transparency across the pipeline.",
    "features.title": "Key Features",
    "features.f1.title": "Candidate Marketplace",
    "features.f1.muted":
      "Optimized for teams of any shape: companies, freelance and remote recruiters.",
    "features.f1.text":
      "Curated talent pool with profiles, experience and availability.",
    "features.f2.title": "Built-in CRM/ATS",
    "features.f2.text":
      "Manage pipeline, priorities and finalists as in a modern ATS.",
    "features.f3.title": "Real-Time Collaboration",
    "features.f3.text":
      "Shared visibility for recruiters and clients with comments and ratings.",
    "features.f4.title": "Candidate Evaluation",
    "features.f4.text":
      "Scorecards and history help select the best finalists.",
    "design.title": "Design",
    "contact.title": "Contact",
    "contact.phone_label": "Phone:",
    "contact.email_label": "Email:",
    "contact.addr_label": "Address:",
    closing:
      "Recruit Master is built on transparency and speed. It streamlines collaboration between hiring teams and freelance/remote recruiters.",

    // Privacy page
    "privacy.meta.title": "Recruit Master — Privacy Policy",
    "privacy.meta.description":
      "Official Privacy Policy of the Recruit Master service.",
    "privacy.title": "Privacy Policy",

    // Delete page meta
    "delete.meta.title": "Recruit Master — Delete Account",
    "delete.meta.description":
      "How to delete your Recruit Master account and what data is removed.",
  },
};

const STORAGE_KEY = "rm_lang";
const langSelect = document.getElementById("langSelect");

// ВАЖНО: явно ставим display:block / none, чтобы EN-версия показывалась
function applyLangVisibility(currentLang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display =
      el.getAttribute("data-lang") === currentLang ? "block" : "none";
  });
}

function applyI18n(lang) {
  document.documentElement.lang = lang;
  const dict = i18n[lang] || {};

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val == null) return;

    if (el.tagName.toLowerCase() === "meta") {
      el.setAttribute("content", val);
    } else {
      el.innerHTML = val;
    }
  });

  // Обновим <title> с учётом спец-страниц
  const pageSpecificTitle =
    dict["privacy.meta.title"] || // для privacy.html
    dict["delete.meta.title"] || // для delete-account.html
    dict["meta.title"]; // общий
  if (pageSpecificTitle) document.title = pageSpecificTitle;

  applyLangVisibility(lang);

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {}
}

function getPreferredLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const guess = (navigator.language || "ru").slice(0, 2).toLowerCase();
  return (saved || guess) === "en" ? "en" : "ru";
}

// init
const initialLang = getPreferredLang();
if (langSelect) langSelect.value = initialLang;
applyI18n(initialLang);

// change handler
langSelect?.addEventListener("change", (e) => {
  const lang = e.target.value === "en" ? "en" : "ru";
  applyI18n(lang);
});

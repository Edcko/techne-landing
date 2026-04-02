import { translations, type Lang } from '../i18n/translations';

function getLang(): Lang {
  return (localStorage.getItem('techne-lang') as Lang) || 'en';
}

function applyTranslations(lang: Lang) {
  const t = translations[lang];
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && t[key as keyof typeof t] !== undefined) {
      el.textContent = t[key as keyof typeof t] as string;
    }
  });
  document.documentElement.lang = lang;
}

// Apply on load (before paint if possible)
const lang = getLang();
applyTranslations(lang);

// Listen for language changes from selector
window.addEventListener('techne:lang-change', ((e: CustomEvent) => {
  const newLang = e.detail.lang as Lang;
  applyTranslations(newLang);
}) as EventListener);

export { getLang, applyTranslations };

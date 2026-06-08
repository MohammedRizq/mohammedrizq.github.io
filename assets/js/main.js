const supportedLanguages = ["en", "ar", "es", "fr", "id", "tr", "pt"];
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.mrizq.echo_path";

function getPreferredLanguage() {
  const savedLanguage = localStorage.getItem("echoGateLanguage");
  if (savedLanguage && supportedLanguages.includes(savedLanguage)) return savedLanguage;

  const browserLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const item of browserLanguages) {
    const code = String(item || "").slice(0, 2).toLowerCase();
    if (supportedLanguages.includes(code)) return code;
  }
  return "en";
}

function applyBootstrapDirection(language) {
  const bootstrap = document.getElementById("bootstrap-css");
  if (!bootstrap) return;
  bootstrap.href = language === "ar"
    ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css"
    : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
}

function applyLanguage(language) {
  const translations = window.ECHO_TRANSLATIONS[language] || window.ECHO_TRANSLATIONS.en;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  applyBootstrapDirection(language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) element.textContent = translations[key];
  });

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) languageSelect.value = language;
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("echoGateTheme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) themeIcon.textContent = theme === "dark" ? "☾" : "☀";
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function setupControls() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      localStorage.setItem("echoGateLanguage", event.target.value);
      window.location.reload();
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-bs-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("echoGateTheme", next);
      applyTheme(next);
    });
  }

  document.querySelectorAll('a[href="https://play.google.com/store/apps"]').forEach((link) => {
    link.href = playStoreUrl;
  });
}

(function init() {
  applyTheme(getPreferredTheme());
  applyLanguage(getPreferredLanguage());
  setupControls();
  setupRevealAnimations();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

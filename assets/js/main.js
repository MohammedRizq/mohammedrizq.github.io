document.documentElement.classList.add("js");

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

function applyLanguage(language) {
  const allTranslations = window.ECHO_TRANSLATIONS || {};
  const translations = allTranslations[language] || allTranslations.en || {};
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
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
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
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
  const loadVideo = document.getElementById("loadVideo");
  const videoShell = document.getElementById("videoShell");
  if (loadVideo && videoShell) {
    loadVideo.addEventListener("click", () => {
      videoShell.innerHTML = '<iframe src="https://www.youtube.com/embed/WQzhi43B-gw?autoplay=1" title="Echo Gate video trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());
  applyLanguage(getPreferredLanguage());
  setupControls();
  setupRevealAnimations();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

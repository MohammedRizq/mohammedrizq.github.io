const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.mrizq.echo_path';

const translations = {
  en: {
    navGame: 'Game', navFeatures: 'Features', navTrailer: 'Trailer', navDownload: 'Download',
    eyebrow: 'Offline puzzle game for Android', heroTitle: 'Your past movements become the puzzle.',
    heroText: 'Echo Gate is a unique puzzle game where your echo repeats the path you took after a short delay. Use it to press plates, open doors, block hazards, and solve handcrafted rooms — but avoid touching your echo.',
    downloadNow: 'Download on Google Play', watchTrailer: 'Watch Trailer on YouTube', statOffline: 'Offline', statOfflineSub: 'play anywhere', statRooms: 'Handcrafted', statRoomsSub: 'puzzle rooms', statControls: '5 Controls', statControlsSub: 'choose your layout',
    tagEcho: 'Echo delay', tagPlan: 'Plan every move', tagAvoid: 'Avoid contact', tagTime: 'Time your route', featuresEyebrow: 'Built for thoughtful players', featuresTitle: 'A clean puzzle experience with premium game feel.', featuresIntro: 'Plan, move, wait, and use your echo wisely as each room introduces new timing and logic challenges.',
    f1Title: 'Echo-based gameplay', f1Text: 'Your previous path repeats after a delay, turning every movement into part of the solution.', f2Title: 'Handcrafted rooms', f2Text: 'Solve focused puzzle rooms built around timing, logic, plates, doors, and hazards.', f3Title: 'Flexible controls', f3Text: 'Choose joystick, arrows, or split arrows for the play style that feels best.', f4Title: 'Difficulty options', f4Text: 'Play relaxed or challenge yourself with tougher puzzle timing.', f5Title: 'Progression rewards', f5Text: 'Earn stars, unlock rewards, upgrade skills, and continue through new mechanics.', f6Title: 'Offline and multilingual', f6Text: 'Enjoy offline puzzle gameplay with support for multiple languages.',
    trailerEyebrow: 'Game trailer', trailerTitle: 'See the echo mechanic in motion.', trailerText: 'No embed, no playback issues — open the official trailer directly on YouTube.', playTrailer: 'Watch on YouTube', downloadEyebrow: 'Available now', downloadTitle: 'Download Echo Gate on Google Play.', downloadText: 'Start solving handcrafted echo puzzles today. Offline gameplay, multiple control layouts, stars, rewards, skills, and unlockable progression.', developer: 'Developer', rights: 'All rights reserved.'
  },
  ar: {
    navGame: 'اللعبة', navFeatures: 'المميزات', navTrailer: 'العرض', navDownload: 'التحميل',
    eyebrow: 'لعبة ألغاز أوفلاين للأندرويد', heroTitle: 'حركاتك السابقة تصبح جزءًا من اللغز.',
    heroText: 'Echo Gate هي لعبة ألغاز فريدة، حيث يعيد صداك تكرار المسار الذي سلكته بعد تأخير قصير. استخدمه للضغط على الألواح وفتح الأبواب وحجب المخاطر وحل الغرف المصممة يدويًا — لكن تجنب لمس صداك.',
    downloadNow: 'حمّلها من Google Play', watchTrailer: 'شاهد العرض على يوتيوب', statOffline: 'أوفلاين', statOfflineSub: 'العب في أي مكان', statRooms: 'مصممة يدويًا', statRoomsSub: 'غرف ألغاز', statControls: '5 تحكمات', statControlsSub: 'اختر تخطيطك',
    tagEcho: 'تأخير الصدى', tagPlan: 'خطط لكل حركة', tagAvoid: 'تجنب الاصطدام', tagTime: 'أتقن التوقيت', featuresEyebrow: 'مصممة للاعبين المفكرين', featuresTitle: 'تجربة ألغاز نظيفة بإحساس لعبة فاخر.', featuresIntro: 'خطط، تحرك، انتظر، واستخدم صداك بحكمة مع غرف تقدم تحديات توقيت ومنطق جديدة.',
    f1Title: 'أسلوب لعب قائم على الصدى', f1Text: 'مسارك السابق يتكرر بعد تأخير، ليصبح كل تحرك جزءًا من الحل.', f2Title: 'غرف مصممة يدويًا', f2Text: 'حل غرفًا مركزة تعتمد على التوقيت والمنطق والألواح والأبواب والمخاطر.', f3Title: 'تحكم مرن', f3Text: 'اختر بين عصا التحكم أو الأسهم أو الأسهم المنقسمة حسب ما يناسبك.', f4Title: 'خيارات صعوبة', f4Text: 'العب بهدوء أو تحدَّ نفسك بتوقيت ألغاز أصعب.', f5Title: 'مكافآت وتقدم', f5Text: 'اجمع النجوم وافتح المكافآت وطوّر المهارات وتقدم عبر آليات جديدة.', f6Title: 'أوفلاين ومتعددة اللغات', f6Text: 'استمتع بألغاز أوفلاين مع دعم لغات متعددة.',
    trailerEyebrow: 'عرض اللعبة', trailerTitle: 'شاهد آلية الصدى أثناء اللعب.', trailerText: 'بدون تضمين داخل الموقع وبدون مشاكل تشغيل — افتح العرض الرسمي مباشرة على يوتيوب.', playTrailer: 'شاهد على يوتيوب', downloadEyebrow: 'متاحة الآن', downloadTitle: 'حمّل Echo Gate من Google Play.', downloadText: 'ابدأ اليوم في حل ألغاز الصدى المصممة يدويًا. لعب أوفلاين، تخطيطات تحكم متعددة، نجوم، مكافآت، مهارات، وتقدم قابل للفتح.', developer: 'المطور', rights: 'جميع الحقوق محفوظة.'
  },
  es: {
    navGame: 'Juego', navFeatures: 'Funciones', navTrailer: 'Tráiler', navDownload: 'Descargar', eyebrow: 'Juego de puzles sin conexión para Android', heroTitle: 'Tus movimientos pasados se vuelven el puzle.', heroText: 'Echo Gate es un juego de puzles único donde tu eco repite el camino que tomaste tras un breve retraso. Úsalo para presionar placas, abrir puertas, bloquear peligros y resolver salas hechas a mano — pero evita tocar tu eco.', downloadNow: 'Descargar en Google Play', watchTrailer: 'Ver tráiler en YouTube', statOffline: 'Sin conexión', statOfflineSub: 'juega donde sea', statRooms: 'Hecho a mano', statRoomsSub: 'salas de puzles', statControls: '5 controles', statControlsSub: 'elige tu diseño', tagEcho: 'Retraso del eco', tagPlan: 'Planifica cada movimiento', tagAvoid: 'Evita el contacto', tagTime: 'Calcula tu ruta', featuresEyebrow: 'Para jugadores que piensan', featuresTitle: 'Una experiencia de puzles limpia con sensación premium.', featuresIntro: 'Planifica, muévete, espera y usa tu eco con inteligencia mientras cada sala introduce nuevos retos de lógica y tiempo.', f1Title: 'Jugabilidad con eco', f1Text: 'Tu camino anterior se repite con retraso, convirtiendo cada movimiento en parte de la solución.', f2Title: 'Salas hechas a mano', f2Text: 'Resuelve salas enfocadas en tiempo, lógica, placas, puertas y peligros.', f3Title: 'Controles flexibles', f3Text: 'Elige joystick, flechas o flechas divididas para jugar como prefieras.', f4Title: 'Opciones de dificultad', f4Text: 'Juega relajado o desafíate con un tiempo de puzle más exigente.', f5Title: 'Recompensas de progreso', f5Text: 'Gana estrellas, desbloquea recompensas, mejora habilidades y avanza con nuevas mecánicas.', f6Title: 'Sin conexión y multilingüe', f6Text: 'Disfruta puzles sin conexión con soporte para varios idiomas.', trailerEyebrow: 'Tráiler del juego', trailerTitle: 'Mira la mecánica del eco en acción.', trailerText: 'Sin inserción ni errores de reproducción: abre el tráiler oficial directamente en YouTube.', playTrailer: 'Ver en YouTube', downloadEyebrow: 'Disponible ahora', downloadTitle: 'Descarga Echo Gate en Google Play.', downloadText: 'Empieza hoy a resolver puzles de eco hechos a mano. Juego sin conexión, varios diseños de control, estrellas, recompensas, habilidades y progresión desbloqueable.', developer: 'Desarrollador', rights: 'Todos los derechos reservados.'
  },
  fr: {
    navGame: 'Jeu', navFeatures: 'Fonctionnalités', navTrailer: 'Bande-annonce', navDownload: 'Télécharger', eyebrow: 'Jeu de puzzle hors ligne pour Android', heroTitle: 'Vos anciens mouvements deviennent le puzzle.', heroText: 'Echo Gate est un jeu de puzzle unique où votre écho répète votre chemin après un court délai. Utilisez-le pour activer des plaques, ouvrir des portes, bloquer des dangers et résoudre des salles conçues à la main — mais évitez de toucher votre écho.', downloadNow: 'Télécharger sur Google Play', watchTrailer: 'Voir sur YouTube', statOffline: 'Hors ligne', statOfflineSub: 'jouez partout', statRooms: 'Artisanal', statRoomsSub: 'salles de puzzle', statControls: '5 contrôles', statControlsSub: 'choisissez votre style', tagEcho: 'Délai de l’écho', tagPlan: 'Planifiez chaque mouvement', tagAvoid: 'Évitez le contact', tagTime: 'Maîtrisez le timing', featuresEyebrow: 'Pour les joueurs réfléchis', featuresTitle: 'Une expérience de puzzle soignée avec une sensation premium.', featuresIntro: 'Planifiez, bougez, attendez et utilisez votre écho intelligemment tandis que chaque salle apporte de nouveaux défis de logique et de timing.', f1Title: 'Gameplay basé sur l’écho', f1Text: 'Votre chemin précédent se répète avec retard, transformant chaque mouvement en partie de la solution.', f2Title: 'Salles conçues à la main', f2Text: 'Résolvez des salles centrées sur le timing, la logique, les plaques, les portes et les dangers.', f3Title: 'Contrôles flexibles', f3Text: 'Choisissez joystick, flèches ou flèches séparées selon votre préférence.', f4Title: 'Options de difficulté', f4Text: 'Jouez détendu ou relevez des défis de timing plus exigeants.', f5Title: 'Récompenses de progression', f5Text: 'Gagnez des étoiles, débloquez des récompenses, améliorez des compétences et découvrez de nouvelles mécaniques.', f6Title: 'Hors ligne et multilingue', f6Text: 'Profitez de puzzles hors ligne avec plusieurs langues disponibles.', trailerEyebrow: 'Bande-annonce', trailerTitle: 'Découvrez la mécanique d’écho en action.', trailerText: 'Pas de lecteur intégré ni de problème de lecture : ouvrez la bande-annonce officielle directement sur YouTube.', playTrailer: 'Regarder sur YouTube', downloadEyebrow: 'Disponible maintenant', downloadTitle: 'Téléchargez Echo Gate sur Google Play.', downloadText: 'Commencez dès aujourd’hui à résoudre des puzzles d’écho conçus à la main. Jeu hors ligne, contrôles multiples, étoiles, récompenses, compétences et progression à débloquer.', developer: 'Développeur', rights: 'Tous droits réservés.'
  },
  pt: {
    navGame: 'Jogo', navFeatures: 'Recursos', navTrailer: 'Trailer', navDownload: 'Baixar', eyebrow: 'Jogo de quebra-cabeça offline para Android', heroTitle: 'Seus movimentos passados viram o quebra-cabeça.', heroText: 'Echo Gate é um jogo de quebra-cabeça único onde seu eco repete o caminho que você fez após um curto atraso. Use-o para pressionar placas, abrir portas, bloquear perigos e resolver salas feitas à mão — mas evite tocar no seu eco.', downloadNow: 'Baixar no Google Play', watchTrailer: 'Ver trailer no YouTube', statOffline: 'Offline', statOfflineSub: 'jogue em qualquer lugar', statRooms: 'Feito à mão', statRoomsSub: 'salas de puzzle', statControls: '5 controles', statControlsSub: 'escolha seu layout', tagEcho: 'Atraso do eco', tagPlan: 'Planeje cada movimento', tagAvoid: 'Evite contato', tagTime: 'Controle o tempo', featuresEyebrow: 'Para jogadores estratégicos', featuresTitle: 'Uma experiência limpa de puzzle com sensação premium.', featuresIntro: 'Planeje, mova, espere e use seu eco com sabedoria enquanto cada sala apresenta novos desafios de lógica e tempo.', f1Title: 'Jogabilidade com eco', f1Text: 'Seu caminho anterior se repete com atraso, tornando cada movimento parte da solução.', f2Title: 'Salas feitas à mão', f2Text: 'Resolva salas focadas em tempo, lógica, placas, portas e perigos.', f3Title: 'Controles flexíveis', f3Text: 'Escolha joystick, setas ou setas divididas para o estilo que preferir.', f4Title: 'Opções de dificuldade', f4Text: 'Jogue relaxado ou desafie-se com tempos de puzzle mais difíceis.', f5Title: 'Recompensas de progresso', f5Text: 'Ganhe estrelas, desbloqueie recompensas, melhore habilidades e avance por novas mecânicas.', f6Title: 'Offline e multilíngue', f6Text: 'Aproveite puzzles offline com suporte a vários idiomas.', trailerEyebrow: 'Trailer do jogo', trailerTitle: 'Veja a mecânica do eco em ação.', trailerText: 'Sem incorporação e sem problemas de reprodução: abra o trailer oficial diretamente no YouTube.', playTrailer: 'Ver no YouTube', downloadEyebrow: 'Disponível agora', downloadTitle: 'Baixe Echo Gate no Google Play.', downloadText: 'Comece hoje a resolver puzzles de eco feitos à mão. Jogo offline, vários layouts de controle, estrelas, recompensas, habilidades e progressão desbloqueável.', developer: 'Desenvolvedor', rights: 'Todos os direitos reservados.'
  },
  id: {
    navGame: 'Game', navFeatures: 'Fitur', navTrailer: 'Trailer', navDownload: 'Unduh', eyebrow: 'Game puzzle offline untuk Android', heroTitle: 'Gerakan masa lalumu menjadi teka-teki.', heroText: 'Echo Gate adalah game puzzle unik di mana echo-mu mengulang jalur yang kamu ambil setelah jeda singkat. Gunakan untuk menekan plate, membuka pintu, memblokir bahaya, dan menyelesaikan ruangan buatan tangan — tapi jangan sampai menyentuh echo-mu.', downloadNow: 'Unduh di Google Play', watchTrailer: 'Tonton Trailer di YouTube', statOffline: 'Offline', statOfflineSub: 'main di mana saja', statRooms: 'Buatan tangan', statRoomsSub: 'ruang puzzle', statControls: '5 Kontrol', statControlsSub: 'pilih tata letak', tagEcho: 'Jeda echo', tagPlan: 'Rencanakan tiap gerakan', tagAvoid: 'Hindari kontak', tagTime: 'Atur waktumu', featuresEyebrow: 'Dibuat untuk pemain yang berpikir', featuresTitle: 'Pengalaman puzzle bersih dengan nuansa premium.', featuresIntro: 'Rencanakan, bergerak, tunggu, dan gunakan echo dengan bijak saat tiap ruangan menghadirkan tantangan logika dan timing baru.', f1Title: 'Gameplay berbasis echo', f1Text: 'Jalur sebelumnya terulang setelah jeda, membuat setiap gerakan menjadi bagian dari solusi.', f2Title: 'Ruangan buatan tangan', f2Text: 'Selesaikan ruangan fokus dengan timing, logika, plate, pintu, dan bahaya.', f3Title: 'Kontrol fleksibel', f3Text: 'Pilih joystick, panah, atau panah terpisah sesuai gaya bermainmu.', f4Title: 'Pilihan kesulitan', f4Text: 'Main santai atau tantang dirimu dengan timing puzzle yang lebih sulit.', f5Title: 'Hadiah progres', f5Text: 'Dapatkan bintang, buka hadiah, tingkatkan skill, dan lanjutkan ke mekanik baru.', f6Title: 'Offline dan multibahasa', f6Text: 'Nikmati gameplay puzzle offline dengan dukungan banyak bahasa.', trailerEyebrow: 'Trailer game', trailerTitle: 'Lihat mekanik echo saat dimainkan.', trailerText: 'Tanpa embed dan tanpa masalah pemutaran — buka trailer resmi langsung di YouTube.', playTrailer: 'Tonton di YouTube', downloadEyebrow: 'Tersedia sekarang', downloadTitle: 'Unduh Echo Gate di Google Play.', downloadText: 'Mulai pecahkan puzzle echo buatan tangan hari ini. Gameplay offline, beberapa tata letak kontrol, bintang, hadiah, skill, dan progres yang dapat dibuka.', developer: 'Developer', rights: 'Semua hak dilindungi.'
  },
  tr: {
    navGame: 'Oyun', navFeatures: 'Özellikler', navTrailer: 'Fragman', navDownload: 'İndir', eyebrow: 'Android için çevrimdışı bulmaca oyunu', heroTitle: 'Geçmiş hareketlerin bulmacaya dönüşür.', heroText: 'Echo Gate, yankının kısa bir gecikmeyle izlediğin yolu tekrar ettiği benzersiz bir bulmaca oyunudur. Plakalara basmak, kapıları açmak, tehlikeleri engellemek ve el yapımı odaları çözmek için onu kullan — ama yankına dokunma.', downloadNow: 'Google Play’den indir', watchTrailer: 'Fragmanı YouTube’da İzle', statOffline: 'Çevrimdışı', statOfflineSub: 'her yerde oyna', statRooms: 'El yapımı', statRoomsSub: 'bulmaca odaları', statControls: '5 Kontrol', statControlsSub: 'düzenini seç', tagEcho: 'Yankı gecikmesi', tagPlan: 'Her hamleni planla', tagAvoid: 'Temastan kaçın', tagTime: 'Rotanı zamanla', featuresEyebrow: 'Düşünen oyuncular için', featuresTitle: 'Premium his veren temiz bir bulmaca deneyimi.', featuresIntro: 'Planla, hareket et, bekle ve her oda yeni zamanlama ve mantık zorlukları sunarken yankını akıllıca kullan.', f1Title: 'Yankı tabanlı oynanış', f1Text: 'Önceki yolun gecikmeyle tekrar eder ve her hareket çözümün bir parçasına dönüşür.', f2Title: 'El yapımı odalar', f2Text: 'Zamanlama, mantık, plakalar, kapılar ve tehlikeler üzerine kurulu odaları çöz.', f3Title: 'Esnek kontroller', f3Text: 'Joystick, oklar veya bölünmüş oklar arasından sana en uygun düzeni seç.', f4Title: 'Zorluk seçenekleri', f4Text: 'Rahat oyna veya daha zor bulmaca zamanlamalarıyla kendini zorla.', f5Title: 'İlerleme ödülleri', f5Text: 'Yıldız kazan, ödüller aç, becerileri geliştir ve yeni mekaniklerle ilerle.', f6Title: 'Çevrimdışı ve çok dilli', f6Text: 'Çoklu dil desteğiyle çevrimdışı bulmaca oynanışının tadını çıkar.', trailerEyebrow: 'Oyun fragmanı', trailerTitle: 'Yankı mekaniğini hareket halinde gör.', trailerText: 'Gömülü oynatıcı yok, oynatma sorunu yok — resmi fragmanı doğrudan YouTube’da aç.', playTrailer: 'YouTube’da izle', downloadEyebrow: 'Şimdi yayında', downloadTitle: 'Echo Gate’i Google Play’den indir.', downloadText: 'El yapımı yankı bulmacalarını bugün çözmeye başla. Çevrimdışı oynanış, çoklu kontrol düzenleri, yıldızlar, ödüller, beceriler ve açılabilir ilerleme.', developer: 'Geliştirici', rights: 'Tüm hakları saklıdır.'
  }
};

const root = document.documentElement;
const langSelect = document.getElementById('languageSelect');
const supportedLanguages = Object.keys(translations);
function detectSystemLanguage() {
  const browserLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  for (const item of browserLanguages) {
    const code = String(item).toLowerCase().split('-')[0];
    if (supportedLanguages.includes(code)) return code;
  }
  return 'en';
}
function detectSystemTheme() {
  return 'dark';
}
const savedTheme = localStorage.getItem('theme') || 'dark';
const savedLang = localStorage.getItem('language') || detectSystemLanguage();

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langSelect.value = lang;
  localStorage.setItem('language', lang);
}

applyTheme(savedTheme);
applyLanguage(savedLang);

const systemTheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
if (systemTheme) {
  systemTheme.addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) applyTheme(event.matches ? 'light' : 'dark');
  });
}
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
});

langSelect.addEventListener('change', (event) => applyLanguage(event.target.value));

const menuToggle = document.querySelector('[data-menu-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
menuToggle.addEventListener('click', () => {
  const open = navPanel.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navPanel.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Image loading placeholders: keep the layout beautiful while large artwork loads.
document.querySelectorAll('.media-loading img').forEach((img) => {
  const done = () => img.closest('.media-loading')?.classList.add('is-loaded');
  if (img.complete && img.naturalWidth > 0) done();
  else img.addEventListener('load', done, { once: true });
});

// Keep all Google Play links centralized.
document.querySelectorAll(`a[href*="play.google.com"]`).forEach(link => link.href = PLAY_URL);

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }) : null;

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
  if (revealObserver) revealObserver.observe(el); else el.classList.add('in-view');
});

function burstFrom(element) {
  const rect = element.getBoundingClientRect();
  const dot = document.createElement('span');
  dot.className = 'click-burst';
  dot.style.left = `${rect.left + rect.width / 2}px`;
  dot.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 650);
}

document.querySelectorAll('.btn, .theme-toggle, .video-poster').forEach(el => {
  el.addEventListener('click', () => burstFrom(el));
});

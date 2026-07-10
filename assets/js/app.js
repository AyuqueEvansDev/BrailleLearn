// ============================================
// BrailleLearn - Shared Application Module
// ============================================

// --- Navigation Active Tab ---
(function initNavigation() {
  const pageMap = {
    "inicio.html": "home",
    "ejercicios_interactivos.html": "explore",
    "reproductor_leccion.html": "videos",
    "ejercicio_practica.html": "explore",
    "perfil_usuario.html": "profile"
  };

  const currentPage = window.location.pathname.split("/").pop() || "inicio.html";
  const activeTab = pageMap[currentPage] || "home";

  var activeClasses = ["bg-secondary-container", "dark:bg-secondary", "text-on-secondary-container", "dark:text-on-secondary", "rounded-full", "px-5", "py-1", "translate-y-[-2px]"];
  var inactiveClasses = ["text-on-surface-variant", "dark:text-on-tertiary-container", "p-2", "hover:bg-surface-container-highest", "dark:hover:bg-on-tertiary-fixed-variant"];

  document.querySelectorAll("nav a").forEach(function(link) {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    link.classList.remove.apply(link.classList, activeClasses);
    link.classList.add.apply(link.classList, inactiveClasses);
    var icon = link.querySelector(".material-symbols-outlined");
    if (icon) icon.removeAttribute("style");

    const linkPage = href.split("/").pop();
    const tab = pageMap[linkPage];
    if (tab === activeTab) {
      link.classList.add.apply(link.classList, activeClasses);
      link.classList.remove.apply(link.classList, inactiveClasses);
      if (icon) icon.setAttribute("style", "font-variation-settings: 'FILL' 1;");
    }
  });
})();

// --- Global Visual Preferences (persisted across all pages) ---
(function applyVisualPreferences() {
  try {
    var prefs = JSON.parse(localStorage.getItem("bl_visualPrefs"));
    if (!prefs) return;

    // Dark mode
    if (prefs.darkMode) {
      document.documentElement.classList.add("dark");
    }

    // ADHD mode
    if (prefs.adhdMode) {
      document.body.classList.add("adhd-mode");
    }

    // Font size (applied as CSS custom property for global scope)
    if (prefs.fontSize) {
      document.documentElement.style.setProperty("--user-font-size", prefs.fontSize + "px");
    }
  } catch (e) {}
})();

// --- Header Scroll Shadow ---
(function initHeaderScroll() {
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("shadow-md");
      header.classList.remove("shadow-sm");
    } else {
      header.classList.add("shadow-sm");
      header.classList.remove("shadow-md");
    }
  });
})();

// --- Shared Store (localStorage-based) ---
window.BrailleStore = {
  set: function(key, value) {
    try { localStorage.setItem("bl_" + key, JSON.stringify(value)); } catch (e) {}
  },
  get: function(key) {
    try { return JSON.parse(localStorage.getItem("bl_" + key)); } catch (e) { return null; }
  },
  remove: function(key) {
    try { localStorage.removeItem("bl_" + key); } catch (e) {}
  },
  clear: function() {
    try {
      Object.keys(localStorage).filter(function(k) { return k.startsWith("bl_"); }).forEach(function(k) { localStorage.removeItem(k); });
    } catch (e) {}
  },
  // App-specific state
  getUser: function() { return this.get("user"); },
  setUser: function(user) { this.set("user", user); },
  getProgress: function() { return this.get("progress") || { streak: 0, lessons: {} }; },
  setProgress: function(progress) { this.set("progress", progress); },
  completeLesson: function(lessonId) {
    var p = this.getProgress();
    p.lessons[lessonId] = { completed: true, date: new Date().toISOString() };
    p.streak = (p.streak || 0) + 1;
    this.setProgress(p);
  }
};

// --- Exercise Bank (shared exercise/lesson data) ---
window.ExerciseBank = {

  // ==================== ALFABETO ====================

  "leccion-letra-b": {
    mode: "lesson",
    category: "alfabeto",
    label: "El Alfabeto Braille",
    progressCurrent: 1,
    progressTotal: 6,
    character: "B",
    dots: [1,0,1,0,0,0],
    interactive: true,
    description: 'Forma la letra <b>B</b> activando los puntos <b>1 y 2</b> del cajetín Braille.',
    audioLabel: "Escuchar pronunciación",
    mnemonic: 'Ejemplo: <b>B</b> de <u>Braille</u>.',
    next: "identificar-letra-a"
  },

  "identificar-letra-a": {
    mode: "quiz",
    category: "alfabeto",
    label: "El Alfabeto Braille",
    progressCurrent: 2,
    progressTotal: 6,
    question: "Identifica el símbolo para la letra 'A'",
    hint: "Selecciona la celda Braille correcta.",
    options: [
      { dots: [1,0,0,0,0,0], label: "A" },
      { dots: [1,0,1,0,0,0], label: "B" },
      { dots: [1,1,0,0,0,0], label: "C" },
      { dots: [1,1,0,1,0,0], label: "F" }
    ],
    correctIndex: 0,
    successMessage: "¡Correcto! Has identificado la letra A.",
    next: "leccion-letra-c"
  },

  "leccion-letra-c": {
    mode: "lesson",
    category: "alfabeto",
    label: "El Alfabeto Braille",
    progressCurrent: 3,
    progressTotal: 6,
    character: "C",
    dots: [1,1,0,0,0,0],
    interactive: true,
    description: 'Forma la letra <b>C</b> activando los puntos <b>1 y 4</b> del cajetín Braille.',
    audioLabel: "Escuchar pronunciación",
    mnemonic: 'Ejemplo: <b>C</b> de <u>Comunicación</u>.',
    next: "identificar-letra-b"
  },

  "identificar-letra-b": {
    mode: "quiz",
    category: "alfabeto",
    label: "El Alfabeto Braille",
    progressCurrent: 4,
    progressTotal: 6,
    question: "Identifica el símbolo para la letra 'B'",
    hint: "Selecciona la celda Braille correcta.",
    options: [
      { dots: [1,0,0,0,0,0], label: "A" },
      { dots: [1,0,1,0,0,0], label: "B" },
      { dots: [1,1,0,0,0,0], label: "C" },
      { dots: [1,0,0,1,0,0], label: "E" }
    ],
    correctIndex: 1,
    successMessage: "¡Correcto! Has identificado la letra B.",
    next: "leccion-letra-d"
  },

  "leccion-letra-d": {
    mode: "lesson",
    category: "alfabeto",
    label: "El Alfabeto Braille",
    progressCurrent: 5,
    progressTotal: 6,
    character: "D",
    dots: [1,1,0,1,0,0],
    interactive: true,
    description: 'Forma la letra <b>D</b> activando los puntos <b>1, 4 y 5</b> del cajetín Braille.',
    audioLabel: "Escuchar pronunciación",
    mnemonic: 'Ejemplo: <b>D</b> de <u>Dedo</u>.',
    next: "identificar-letra-c"
  },

  "identificar-letra-c": {
    mode: "quiz",
    category: "alfabeto",
    label: "El Alfabeto Braille",
    progressCurrent: 6,
    progressTotal: 6,
    question: "Identifica el símbolo para la letra 'C'",
    hint: "Selecciona la celda Braille correcta.",
    options: [
      { dots: [1,0,1,0,0,0], label: "B" },
      { dots: [1,1,0,0,0,0], label: "C" },
      { dots: [1,0,0,1,0,0], label: "E" },
      { dots: [1,0,0,0,0,0], label: "A" }
    ],
    correctIndex: 1,
    successMessage: "¡Excelente! Conoces las primeras letras del alfabeto Braille.",
    next: null
  },

  // ==================== NÚMEROS ====================

  "leccion-numero-1": {
    mode: "lesson",
    category: "numeros",
    label: "Números en Braille",
    progressCurrent: 1,
    progressTotal: 4,
    character: "1",
    dots: [1,0,0,0,0,0],
    interactive: true,
    description: 'Forma el número <b>1</b> activando el punto <b>1</b> del cajetín Braille (mismo patrón que la letra A).',
    audioLabel: "Escuchar pronunciación",
    mnemonic: 'El <b>1</b> es el primer punto, en la esquina superior izquierda.',
    next: "identificar-numero-1"
  },

  "identificar-numero-1": {
    mode: "quiz",
    category: "numeros",
    label: "Números en Braille",
    progressCurrent: 2,
    progressTotal: 4,
    question: "¿Qué número representa este patrón?",
    hint: "Observa los puntos activos en la celda Braille.",
    options: [
      { dots: [1,0,0,0,0,0], label: "1" },
      { dots: [1,0,1,0,0,0], label: "2" },
      { dots: [1,1,0,0,0,0], label: "3" },
      { dots: [0,1,1,0,0,0], label: "0" }
    ],
    correctIndex: 0,
    successMessage: "¡Correcto! El patrón del número 1 es igual al de la letra A.",
    next: "leccion-numero-2"
  },

  "leccion-numero-2": {
    mode: "lesson",
    category: "numeros",
    label: "Números en Braille",
    progressCurrent: 3,
    progressTotal: 4,
    character: "2",
    dots: [1,0,1,0,0,0],
    interactive: true,
    description: 'Forma el número <b>2</b> activando los puntos <b>1 y 2</b> del cajetín Braille.',
    audioLabel: "Escuchar pronunciación",
    mnemonic: 'El <b>2</b> tiene dos puntos activos: el 1 y el 2.',
    next: "identificar-numero-2"
  },

  "identificar-numero-2": {
    mode: "quiz",
    category: "numeros",
    label: "Números en Braille",
    progressCurrent: 4,
    progressTotal: 4,
    question: "Identifica el número representado por los puntos activos 1 y 2",
    hint: "¿Qué número tiene el mismo patrón que la letra B?",
    options: [
      { dots: [1,0,0,0,0,0], label: "1" },
      { dots: [0,1,1,1,0,0], label: "0" },
      { dots: [1,0,1,0,0,0], label: "2" },
      { dots: [1,1,0,0,0,0], label: "3" }
    ],
    correctIndex: 2,
    successMessage: "¡Muy bien! El número 2 comparte su patrón con la letra B.",
    next: null
  },

  // ==================== PALABRAS Y FRASES ====================

  "traducir-hola": {
    mode: "traduccion",
    category: "palabras",
    label: "Palabras y Frases",
    progressCurrent: 1,
    progressTotal: 4,
    question: "Traduce la siguiente palabra en Braille:",
    hint: "Escribe la palabra en texto convencional.",
    displayLabel: "¿Qué palabra es?",
    answer: "hola",
    braille: [
      [1,0,1,1,0,0],
      [1,0,0,1,1,0],
      [1,0,1,0,1,0],
      [1,0,0,0,0,0]
    ],
    successMessage: "¡Excelente! Has traducido 'hola' correctamente.",
    next: "traducir-mama"
  },

  "traducir-mama": {
    mode: "traduccion",
    category: "palabras",
    label: "Palabras y Frases",
    progressCurrent: 2,
    progressTotal: 4,
    question: "Traduce la siguiente palabra en Braille:",
    hint: "Escribe la palabra en texto convencional.",
    displayLabel: "¿Qué palabra es?",
    answer: "mama",
    braille: [
      [1,1,0,0,1,0],
      [1,0,0,0,0,0],
      [1,1,0,0,1,0],
      [1,0,0,0,0,0]
    ],
    successMessage: "¡Correcto! Has traducido 'mamá' (mama).",
    next: "traducir-sol"
  },

  "traducir-sol": {
    mode: "traduccion",
    category: "palabras",
    label: "Palabras y Frases",
    progressCurrent: 3,
    progressTotal: 4,
    question: "Traduce la siguiente palabra en Braille:",
    hint: "Escribe la palabra en texto convencional.",
    displayLabel: "¿Qué palabra es?",
    answer: "sol",
    braille: [
      [0,1,1,0,1,0],
      [1,0,0,1,1,0],
      [1,0,1,0,1,0]
    ],
    successMessage: "¡Muy bien! 'Sol' se escribe así en Braille.",
    next: "traducir-abeja"
  },

  "traducir-abeja": {
    mode: "traduccion",
    category: "palabras",
    label: "Palabras y Frases",
    progressCurrent: 4,
    progressTotal: 4,
    question: "Traduce la siguiente palabra en Braille:",
    hint: "Escribe la palabra en texto convencional.",
    displayLabel: "¿Qué palabra es?",
    answer: "abeja",
    braille: [
      [1,0,0,0,0,0],
      [1,0,1,0,0,0],
      [1,0,0,1,0,0],
      [1,1,0,1,0,0],
      [1,0,0,0,0,0]
    ],
    successMessage: "¡Perfecto! Has completado todos los ejercicios de palabras.",
    next: null
  }
};

// --- Course Router (centralized navigation) ---
window.CourseRouter = {
  categories: {
    "alfabeto":  { page: "ejercicio_practica.html", course: "braille-basico", lesson: "leccion-letra-b" },
    "numeros":   { page: "ejercicio_practica.html", course: "numeros",        lesson: "leccion-numero-1" },
    "palabras":  { page: "ejercicio_practica.html", course: "palabras",       lesson: "traducir-hola" },
    "lectura":   { page: "ejercicio_practica.html", course: "braille-basico", lesson: "leccion-letra-b" },
    "escritura": { page: "ejercicio_practica.html", course: "braille-basico", lesson: "identificar-letra-a" }
  },

  nextSteps: {
    "leccion-letra-b":      { page: "ejercicio_practica.html", course: "braille-basico", lesson: "identificar-letra-a" },
    "identificar-letra-a":  { page: "ejercicio_practica.html", course: "braille-basico", lesson: "leccion-letra-c" },
    "leccion-letra-c":      { page: "ejercicio_practica.html", course: "braille-basico", lesson: "identificar-letra-b" },
    "identificar-letra-b":  { page: "ejercicio_practica.html", course: "braille-basico", lesson: "leccion-letra-d" },
    "leccion-letra-d":      { page: "ejercicio_practica.html", course: "braille-basico", lesson: "identificar-letra-c" },
    "identificar-letra-c":  null,
    "leccion-numero-1":     { page: "ejercicio_practica.html", course: "numeros",        lesson: "identificar-numero-1" },
    "identificar-numero-1": { page: "ejercicio_practica.html", course: "numeros",        lesson: "leccion-numero-2" },
    "leccion-numero-2":     { page: "ejercicio_practica.html", course: "numeros",        lesson: "identificar-numero-2" },
    "identificar-numero-2": null,
    "traducir-hola":  { page: "ejercicio_practica.html", course: "palabras", lesson: "traducir-mama" },
    "traducir-mama":  { page: "ejercicio_practica.html", course: "palabras", lesson: "traducir-sol" },
    "traducir-sol":   { page: "ejercicio_practica.html", course: "palabras", lesson: "traducir-abeja" },
    "traducir-abeja": null
  },

  getExercise: function(lesson) {
    return ExerciseBank[lesson] || null;
  },

  open: function(course, lesson, progress) {
    var params = "?course=" + encodeURIComponent(course) + "&lesson=" + encodeURIComponent(lesson);
    if (progress !== undefined) params += "&progress=" + progress;
    window.location.href = "ejercicio_practica.html" + params;
  },

  openCategory: function(slug) {
    var cat = this.categories[slug];
    if (!cat) return;
    var params = "?course=" + encodeURIComponent(cat.course) + "&lesson=" + encodeURIComponent(cat.lesson);
    window.location.href = cat.page + params;
  },

  isLastStep: function(currentLesson) {
    return !this.nextSteps[currentLesson];
  },

  goNext: function(currentLesson) {
    var next = this.nextSteps[currentLesson];
    if (!next) {
      window.location.href = "ejercicios_interactivos.html";
      return;
    }
    var params = "?course=" + encodeURIComponent(next.course) + "&lesson=" + encodeURIComponent(next.lesson);
    if (next.progress !== undefined) params += "&progress=" + next.progress;
    window.location.href = next.page + params;
  },

  goBack: function() {
    window.history.back();
  }
};

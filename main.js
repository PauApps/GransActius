const dict = {
  ca: {
    codeTitle: "Introdueix el codi que t'ha donat la professora",
    codeError: "Codi incorrecte, torna-ho a intentar!",
    btnVerify: "Validar Codi",
    btnClose: "Tornar al menú",
    placeholderCode: "Escriu aquí...",
    correctMsg: "¡Correcte! Ja pots anar a dir-li a la professora.",
    wrongMsg: "Això no és correcte, torna a intentar-ho.",
    topics: {
      1: { name: 'Tema 1: Ubicació', type: 'test', title: 'Repàs de Google Maps', question: 'Quina aplicació fas servir per veure on ets al mapa?', options: ['A la configuració / Ajustos', 'Mantenint premut el micròfon', 'A Google Maps', 'A la galeria de fotos'], correctIndex: 2 },
      2: { name: 'Tema 2: Missatges', type: 'text', title: 'Prova Pràctica 1', text: "La teva prova és: Envia un missatge de WhatsApp al grup de la classe dient la paraula 'ACONSEGUIT'. Quan ho hagis fet, avisa a la professora." },
      3: { name: 'Tema 3: Àudios', type: 'test', title: 'Repàs de WhatsApp', question: 'Com s\'envia un missatge de veu per WhatsApp?', options: ['Polsant l\'espai en l\'escriptura', 'Mantenint premut icona del micròfon', 'Esborrant les lletres per parlar', 'Fent doble clic a la foto'], correctIndex: 1 },
      4: { name: 'Tema 4: Fotos', type: 'text', title: 'Prova Pràctica 2', text: "La teva prova és: Fes-te un selfie (autofoto) i ensenya-li a la professora la foto des de la teva Galeria." },
      5: { name: 'Tema 5: Texts', type: 'test', title: 'Repàs d\'Ajustos', question: 'On es canvia la mida de la lletra perquè la vegis més grossa?', options: ['A l\'aplicació del temps', 'Als números del telèfon per trucar', 'A Configuració / Pantalla (o Ajustos)', 'Apagant la pantalla'], correctIndex: 2 },
      6: { name: 'Tema 6: Alarma', type: 'text', title: 'Prova Pràctica 3', text: "La teva prova és: Posa una alarma al rellotge del teu mòbil per demà a les 08:30 del matí. Mostra-ho a la professora." },
      7: { name: 'Tema 7: Connexió', type: 'test', title: 'Repàs de Connexions', question: 'Com et connectes a un nou Wi-Fi?', options: ['Posant el mode avió per volar', 'A Configuració / Connexions (o Xarxa Wi-Fi)', 'Apujant el volum de la música al màxim', 'Esborrant contactes antics'], correctIndex: 1 },
      8: { name: 'Tema 8: Agenda', type: 'text', title: 'Prova Pràctica 4', text: "La teva prova és: Afegeix el telèfon d'un company a la teva agenda de Contactes i truca'l un instant." }
    }
  },
  es: {
    codeTitle: "Introduce el código que te ha dado la profesora",
    codeError: "¡Código incorrecto, vuelve a intentarlo!",
    btnVerify: "Verificar Código",
    btnClose: "Volver al menú",
    placeholderCode: "Escribe aquí...",
    correctMsg: "¡Correcto! Ve a decírselo a la profesora.",
    wrongMsg: "Esa no es correcta, vuelve a intentarlo.",
    topics: {
      1: { name: 'Tema 1: Ubicación', type: 'test', title: 'Repaso de Google Maps', question: '¿Qué aplicación usas para ver dónde estás en el mapa?', options: ['En Configuración / Ajustes', 'Manteniendo pulsado el micrófono', 'En Google Maps', 'En la galería de fotos'], correctIndex: 2 },
      2: { name: 'Tema 2: Mensajes', type: 'text', title: 'Prueba Práctica 1', text: "Tu prueba es: Envía un mensaje de WhatsApp al grupo de la clase diciendo la palabra 'LOGRADO'. Cuando lo hagas, avisa a la profesora." },
      3: { name: 'Tema 3: Audios', type: 'test', title: 'Repaso de WhatsApp', question: '¿Cómo se envía un mensaje de voz por WhatsApp?', options: ['Pulsando el espacio en blanco', 'Manteniendo pulsada la icono del micrófono', 'Borrando las letras de la pantalla', 'Haciendo doble clic en la foto'], correctIndex: 1 },
      4: { name: 'Tema 4: Fotos', type: 'text', title: 'Prueba Práctica 2', text: "Tu prueba es: Hazte un selfie (autofoto) y enséñale a la profesora la foto desde tu Galería." },
      5: { name: 'Tema 5: Textos', type: 'test', title: 'Repaso de Ajustes', question: '¿Dónde se cambia el tamaño de la letra para que la veas más grande?', options: ['En la aplicación del tiempo', 'En los números para llamar', 'En Configuración / Pantalla (o Ajustes)', 'Apagando el teléfono'], correctIndex: 2 },
      6: { name: 'Tema 6: Alarma', type: 'text', title: 'Prueba Práctica 3', text: "Tu prueba es: Pon una alarma en el móvil para mañana a las 08:30 de la mañana. Muéstraselo a la profesora." },
      7: { name: 'Tema 7: Conexión', type: 'test', title: 'Repaso de Conexiones', question: '¿Cómo te conectas a un nuevo Wi-Fi?', options: ['Poniendo el modo avión', 'En Configuración / Conexiones (o Red Wi-Fi)', 'Subiendo el volumen de la música', 'Borrando contactos antiguos'], correctIndex: 1 },
      8: { name: 'Tema 8: Agenda', type: 'text', title: 'Prueba Práctica 4', text: "Tu prueba es: Añade el teléfono de un compañero a tu agenda de Contactos y dale un toque." }
    }
  }
};

const CODES = {
  1: "1",
  2: "1",
  3: "1",
  4: "1",
  5: "1",
  6: "1",
  7: "1",
  8: "1"
};

let currentLang = 'ca';
let currentTopic = null;

const gridContainer = document.getElementById('topics-grid');
const modalCode = document.getElementById('modal-code');
const modalContent = document.getElementById('modal-content');
const codeInput = document.getElementById('code-input');
const codeError = document.getElementById('code-error');
const quizTitle = document.getElementById('quiz-title');
const quizBody = document.getElementById('quiz-body');
const quizFeedback = document.getElementById('quiz-feedback');
const btnCloseContent = document.getElementById('btn-close-content');

function init() {
  renderGrid();
  setLanguage(currentLang);

  codeInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      verifyCode();
    }
  });

  codeInput.addEventListener('input', () => {
    codeError.classList.add('hidden');
  });
}

function renderGrid() {
  gridContainer.innerHTML = '';
  for (let i = 1; i <= 8; i++) {
    const btn = document.createElement('button');
    btn.className = 'topic-btn';
    btn.onclick = () => openCodeModal(i);
    btn.dataset.topicId = i;
    gridContainer.appendChild(btn);
  }
}

function setLanguage(lang) {
  currentLang = lang;

  document.getElementById('btn-ca').classList.toggle('active', lang === 'ca');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[lang][key]) {
      el.textContent = dict[lang][key];
    }
  });

  codeInput.placeholder = dict[lang].placeholderCode;

  // Actualitza el nom de les pestanyes fàcilment
  document.querySelectorAll('.topic-btn').forEach(btn => {
    const topicId = btn.dataset.topicId;
    btn.textContent = dict[lang].topics[topicId].name;
  });

  if (currentTopic && !modalContent.classList.contains('hidden')) {
    renderTopicContent(currentTopic);
  }
}

window.setLanguage = setLanguage;

function openCodeModal(topicId) {
  currentTopic = topicId;
  codeInput.value = '';
  codeError.classList.add('hidden');
  modalCode.classList.remove('hidden');
  setTimeout(() => codeInput.focus(), 100);
}

window.openCodeModal = openCodeModal;

function closeModals() {
  modalCode.classList.add('hidden');
  modalContent.classList.add('hidden');
  currentTopic = null;
}

window.closeModals = closeModals;

function verifyCode() {
  const code = codeInput.value.trim().toUpperCase();
  const expectedCode = CODES[currentTopic];

  if (code === expectedCode) {
    modalCode.classList.add('hidden');
    renderTopicContent(currentTopic);
    modalContent.classList.remove('hidden');
  } else {
    codeError.classList.remove('hidden');
    codeInput.style.borderColor = 'var(--error-color)';
    setTimeout(() => {
      codeInput.style.borderColor = '';
    }, 800);
  }
}

window.verifyCode = verifyCode;

function renderTopicContent(topicId) {
  const d = dict[currentLang];
  const topicData = d.topics[topicId];

  quizBody.innerHTML = '';
  quizFeedback.className = 'feedback-text hidden';
  btnCloseContent.classList.add('hidden');

  // Mostra el nom del tema i el títol dins les proves
  quizTitle.textContent = `${topicData.name} - ${topicData.title}`;

  if (topicData.type === 'text') {
    // Tests: Real World Task
    const textBlock = document.createElement('div');
    textBlock.className = 'real-world-text';
    textBlock.innerText = topicData.text;

    quizBody.appendChild(textBlock);
    btnCloseContent.classList.remove('hidden');
  } else if (topicData.type === 'test') {
    // Tests: A/B/C/D
    const qText = document.createElement('p');
    qText.style.fontSize = '1.4rem';
    qText.style.fontWeight = '600';
    qText.style.marginBottom = '15px';
    qText.innerText = topicData.question;
    quizBody.appendChild(qText);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';

    const labels = ['A', 'B', 'C', 'D'];

    topicData.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="lbl">${labels[index]}.</span> <span>${optText}</span>`;

      btn.onclick = () => handleAnswer(btn, index === topicData.correctIndex);
      optionsContainer.appendChild(btn);
    });

    quizBody.appendChild(optionsContainer);
  }
}

function handleAnswer(clickedBtn, isCorrect) {
  const d = dict[currentLang];
  const buttons = quizBody.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.style.pointerEvents = 'none';
  });

  quizFeedback.classList.remove('hidden');

  if (isCorrect) {
    clickedBtn.classList.add('correct');
    quizFeedback.textContent = d.correctMsg;
    quizFeedback.className = 'feedback-text feedback-success';
    btnCloseContent.classList.remove('hidden');
  } else {
    clickedBtn.classList.add('wrong');
    quizFeedback.textContent = d.wrongMsg;
    quizFeedback.className = 'feedback-text feedback-error';

    setTimeout(() => {
      buttons.forEach(btn => {
        btn.style.pointerEvents = 'auto';
        btn.classList.remove('wrong');
      });
      quizFeedback.classList.add('hidden');
    }, 2500);
  }
}

document.addEventListener('DOMContentLoaded', init);

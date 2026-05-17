const dict = {
  ca: {
    codeTitle: "Introdueix el codi que t'ha donat n'Alba",
    codeError: "Codi incorrecte, torna-ho a intentar!",
    btnVerify: "Validar Codi",
    btnClose: "Tornar al menú",
    placeholderCode: "Escriu aquí...",
    correctMsg: "¡Correcte! Ja pots anar a dir-li a n'Alba.",
    wrongMsg: "Això no és correcte, torna a intentar-ho.",
    levelSelectTitle: "Tria el teu nivell",
    btnRelax: "Relax 🧘",
    btnExpert: "Expert 🚀",
    topics: {
      1: { 
        name: 'Cirera', title: 'Repàs de Google Maps', 
        relax: { type: 'test', question: 'Quina aplicació fas servir per veure on ets al mapa?', options: ['A la configuració / Ajustos', 'Mantenint premut el micròfon', 'A Google Maps', 'A la galeria de fotos'], correctIndex: 2 },
        expert: { type: 'test', question: 'Com envies la teva ubicació actual per WhatsApp?', options: ['Fent-li una foto al carrer', 'A l\'icona del clip (Adjuntar) > Ubicació', 'Cridant pel micròfon on ets', 'Escribint "soc aquí"'], correctIndex: 1 }
      },
      2: { 
        name: 'Poma', title: 'Prova Pràctica 1', 
        relax: { type: 'text', text: "La teva prova és: Envia un missatge de WhatsApp al grup de la classe dient la paraula 'ACONSEGUIT'. Quan ho hagis fet, avisa a n'Alba." },
        expert: { type: 'text', text: "La teva prova és: Envia un missatge de WhatsApp al grup de la classe adjuntant un enllaç a una notícia d'internet. Avisa a n'Alba quan ho tinguis." }
      },
      3: { 
        name: 'Mandarina', title: 'Repàs de WhatsApp', 
        relax: { type: 'test', question: 'Com s\'envia un missatge de veu per WhatsApp?', options: ['Polsant l\'espai en l\'escriptura', 'Mantenint premut icona del micròfon', 'Esborrant les lletres per parlar', 'Fent doble clic a la foto'], correctIndex: 1 },
        expert: { type: 'test', question: 'Com pots escoltar un àudio que has gravat abans d\'enviar-lo?', options: ['No es pot', 'Lliscar amunt per bloquejar i donar-li al pause', 'Tancant l\'aplicació', 'Enviant-lo primer i escoltant-lo després'], correctIndex: 1 }
      },
      4: { 
        name: 'Plàtan', title: 'Prova Pràctica 2', 
        relax: { type: 'text', text: "La teva prova és: Fes-te un selfie (autofoto) i ensenya-li a n'Alba la foto des de la teva Galeria." },
        expert: { type: 'text', text: "La teva prova és: Fes-te un selfie fent servir el temporitzador de 3 segons de la càmera i ensenya'l a n'Alba." }
      },
      5: { 
        name: 'Meló', title: 'Repàs d\'Ajustos', 
        relax: { type: 'test', question: 'On es canvia la mida de la lletra perquè la vegis més grossa?', options: ['A l\'aplicació del temps', 'Als números del telèfon per trucar', 'A Configuració / Pantalla (o Ajustos)', 'Apagant la pantalla'], correctIndex: 2 },
        expert: { type: 'test', question: 'On pots veure quin percentatge de bateria et queda?', options: ['Dins de WhatsApp', 'A Configuració > Bateria (o fent lliscar de dalt a baix)', 'A la càmera de fotos', 'Trucant a la teva operadora'], correctIndex: 1 }
      },
      6: { 
        name: 'Síndria', title: 'Prova Pràctica 3', 
        relax: { type: 'text', text: "La teva prova és: Posa una alarma al rellotge del teu mòbil per demà a les 08:30 del matí. Mostra-ho a n'Alba." },
        expert: { type: 'text', text: "La teva prova és: Posa una alarma per demà a les 08:30 i posa-li d'etiqueta/nom 'Bon dia'. Mostra-ho a n'Alba." }
      },
      7: { 
        name: 'Pera', title: 'Repàs de Connexions', 
        relax: { type: 'test', question: 'Com et connectes a un nou Wi-Fi?', options: ['Posant el mode avió per volar', 'A Configuració / Connexions (o Xarxa Wi-Fi)', 'Apujant el volum de la música al màxim', 'Esborrant contactes antics'], correctIndex: 1 },
        expert: { type: 'test', question: 'Què és el Mode Avió?', options: ['Un joc d\'avions', 'Una opció que desactiva temporalment trucades, dades i Wi-Fi', 'Una alarma per despertar-te', 'Un botó per anar més ràpid per internet'], correctIndex: 1 }
      },
      8: { 
        name: 'Rem', title: 'Prova Pràctica 4', 
        relax: { type: 'text', text: "La teva prova és: Afegeix el telèfon d'un company a la teva agenda de Contactes i truca'l un instant." },
        expert: { type: 'text', text: "La teva prova és: Crea un contacte nou posant-li una foto de perfil (li pots fer a l'instant) i guarda'l. Avisa a n'Alba." }
      }
    }
  },
  es: {
    codeTitle: "Introduce el código que te ha dado Alba",
    codeError: "¡Código incorrecto, vuelve a intentarlo!",
    btnVerify: "Verificar Código",
    btnClose: "Volver al menú",
    placeholderCode: "Escribe aquí...",
    correctMsg: "¡Correcto! Ve a decírselo a Alba.",
    wrongMsg: "Esa no es correcta, vuelve a intentarlo.",
    levelSelectTitle: "Elige tu nivel",
    btnRelax: "Relax 🧘",
    btnExpert: "Experto 🚀",
    topics: {
      1: { 
        name: 'Cereza', title: 'Repaso de Google Maps', 
        relax: { type: 'test', question: '¿Qué aplicación usas para ver dónde estás en el mapa?', options: ['En Configuración / Ajustes', 'Manteniendo pulsado el micrófono', 'En Google Maps', 'En la galería de fotos'], correctIndex: 2 },
        expert: { type: 'test', question: '¿Cómo compartes tu ubicación actual por WhatsApp?', options: ['Haciéndole una foto a la calle', 'En el icono del clip (Adjuntar) > Ubicación', 'Gritando por el micrófono dónde estás', 'Escribiendo "estoy aquí"'], correctIndex: 1 }
      },
      2: { 
        name: 'Manzana', title: 'Prueba Práctica 1', 
        relax: { type: 'text', text: "Tu prueba es: Envía un mensaje de WhatsApp al grupo de la clase diciendo la palabra 'LOGRADO'. Cuando lo hagas, avisa a Alba." },
        expert: { type: 'text', text: "Tu prueba es: Envía un mensaje de WhatsApp al grupo de la clase adjuntando un enlace a una noticia de internet. Avisa a Alba cuando lo tengas." }
      },
      3: { 
        name: 'Mandarina', title: 'Repaso de WhatsApp', 
        relax: { type: 'test', question: '¿Cómo se envía un mensaje de voz por WhatsApp?', options: ['Pulsando el espacio en blanco', 'Manteniendo pulsada la icono del micrófono', 'Borrando las letras de la pantalla', 'Haciendo doble clic en la foto'], correctIndex: 1 },
        expert: { type: 'test', question: '¿Cómo puedes escuchar un audio que has grabado antes de enviarlo?', options: ['No se puede', 'Deslizando hacia arriba para bloquear y dándole al pause', 'Cerrando la aplicación', 'Enviándolo primero y escuchándolo después'], correctIndex: 1 }
      },
      4: { 
        name: 'Plátano', title: 'Prueba Práctica 2', 
        relax: { type: 'text', text: "Tu prueba es: Hazte un selfie (autofoto) y enséñale a Alba la foto desde tu Galería." },
        expert: { type: 'text', text: "Tu prueba es: Hazte un selfie usando el temporizador de 3 segundos de la cámara y enséñaselo a Alba." }
      },
      5: { 
        name: 'Melón', title: 'Repaso de Ajustes', 
        relax: { type: 'test', question: '¿Dónde se cambia el tamaño de la letra para que la veas más grande?', options: ['En la aplicación del tiempo', 'En los números para llamar', 'En Configuración / Pantalla (o Ajustes)', 'Apagando el teléfono'], correctIndex: 2 },
        expert: { type: 'test', question: '¿Dónde puedes ver qué porcentaje de batería te queda?', options: ['Dentro de WhatsApp', 'En Configuración > Batería (o deslizando de arriba abajo)', 'En la cámara de fotos', 'Llamando a tu operadora'], correctIndex: 1 }
      },
      6: { 
        name: 'Sandía', title: 'Prueba Práctica 3', 
        relax: { type: 'text', text: "Tu prueba es: Pon una alarma en el móvil para mañana a las 08:30 de la mañana. Muéstraselo a Alba." },
        expert: { type: 'text', text: "Tu prueba es: Pon una alarma para mañana a las 08:30 y ponle de etiqueta/nombre 'Buenos días'. Muéstraselo a Alba." }
      },
      7: { 
        name: 'Pera', title: 'Repaso de Conexiones', 
        relax: { type: 'test', question: '¿Cómo te conectas a un nuevo Wi-Fi?', options: ['Poniendo el modo avión', 'En Configuración / Conexiones (o Red Wi-Fi)', 'Subiendo el volumen de la música', 'Borrando contactos antiguos'], correctIndex: 1 },
        expert: { type: 'test', question: '¿Qué es el Modo Avión?', options: ['Un juego de aviones', 'Una opción que desactiva temporalmente llamadas, datos y Wi-Fi', 'Una alarma para despertarte', 'Un botón para ir más rápido por internet'], correctIndex: 1 }
      },
      8: { 
        name: 'Uva', title: 'Prueba Práctica 4', 
        relax: { type: 'text', text: "Tu prueba es: Añade el teléfono de un compañero a tu agenda de Contactos y dale un toque." },
        expert: { type: 'text', text: "Tu prueba es: Crea un contacto nuevo poniéndole una foto de perfil (se la puedes hacer al instante) y guárdalo. Avisa a Alba." }
      }
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
let currentLevel = null;

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
    if (currentLevel) {
      renderTopicContent(currentTopic, currentLevel);
    } else {
      renderLevelSelection();
    }
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
  currentLevel = null;
}

window.closeModals = closeModals;

function verifyCode() {
  const code = codeInput.value.trim().toUpperCase();
  const expectedCode = CODES[currentTopic];

  if (code === expectedCode) {
    modalCode.classList.add('hidden');
    renderLevelSelection();
    modalContent.classList.remove('hidden');
  } else {
    codeError.classList.remove('hidden');
    codeInput.style.borderColor = 'var(--error-color)';
    setTimeout(() => {
      codeInput.style.borderColor = '';
    }, 800);
  }
}

function renderLevelSelection() {
  const d = dict[currentLang];
  quizBody.innerHTML = '';
  quizFeedback.className = 'feedback-text hidden';
  btnCloseContent.classList.remove('hidden');

  quizTitle.textContent = d.levelSelectTitle;

  const btnContainer = document.createElement('div');
  btnContainer.style.display = 'flex';
  btnContainer.style.flexDirection = 'column';
  btnContainer.style.gap = '16px';
  btnContainer.style.marginTop = '20px';
  btnContainer.style.width = '100%';

  const btnRelax = document.createElement('button');
  btnRelax.className = 'action-btn relax-btn';
  btnRelax.style.backgroundColor = '#38a169';
  btnRelax.textContent = d.btnRelax;
  btnRelax.onclick = () => renderTopicContent(currentTopic, 'relax');

  const btnExpert = document.createElement('button');
  btnExpert.className = 'action-btn expert-btn';
  btnExpert.style.backgroundColor = '#e53e3e';
  btnExpert.textContent = d.btnExpert;
  btnExpert.onclick = () => renderTopicContent(currentTopic, 'expert');

  btnContainer.appendChild(btnRelax);
  btnContainer.appendChild(btnExpert);

  quizBody.appendChild(btnContainer);
}

window.verifyCode = verifyCode;

function renderTopicContent(topicId, level) {
  currentLevel = level;
  const d = dict[currentLang];
  const topicData = d.topics[topicId];
  const contentData = topicData[level];

  quizBody.innerHTML = '';
  quizFeedback.className = 'feedback-text hidden';
  btnCloseContent.classList.add('hidden');

  // Mostra el nom del tema i el títol dins les proves
  quizTitle.textContent = `${topicData.name} - ${topicData.title} (${level === 'relax' ? 'Relax' : 'Expert'})`;

  if (contentData.type === 'text') {
    // Tests: Real World Task
    const textBlock = document.createElement('div');
    textBlock.className = 'real-world-text';
    textBlock.innerText = contentData.text;

    quizBody.appendChild(textBlock);
    btnCloseContent.classList.remove('hidden');
  } else if (contentData.type === 'test') {
    // Tests: A/B/C/D
    const qText = document.createElement('p');
    qText.style.fontSize = '1.4rem';
    qText.style.fontWeight = '600';
    qText.style.marginBottom = '15px';
    qText.innerText = contentData.question;
    quizBody.appendChild(qText);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';

    const labels = ['A', 'B', 'C', 'D'];

    contentData.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="lbl">${labels[index]}.</span> <span>${optText}</span>`;

      btn.onclick = () => handleAnswer(btn, index === contentData.correctIndex);
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

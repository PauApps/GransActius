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
        name: 'Cirera', title: 'Estafa o no?',
        relax: {
          type: 'test', questions: [
            { image: 'Paquet1.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 0 },
            { question: 'Hola mama ❤️\nHe perdut el mòbil. Aquest és el meu número nou: 693618372\nNecessit que me facis un bizum urgent ara mateix.\n\n Què faries?', options: ['Fer el bizum', 'Telefonar al teu fill/a abans o intentar contactar amb algun amic/amiga', 'Contestar amb les dades bancàries'], correctIndex: 1 },
            { image: 'Citaprevia.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 1 },
            { image: 'iCloud2.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 0 },
            { image: 'Logitravel.jpg', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 1 }
          ]
        },
        expert: {
          type: 'test', questions: [
            { image: 'Imagin.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 1 },
            { image: 'BBVA.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 0 },
            { image: 'SEUR.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 0 },
            { image: 'Bankinter.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 1 },
            { image: 'ConsellMallorca.png', question: 'És estafa?', options: ['Si', 'No'], correctIndex: 1 },
          ]
        }
      },
      2: {
        name: 'Poma', title: 'WhatsApp',
        relax: { type: 'text', text: "Has de fer les següents proves: \n1. Enviau una nota de veu per WhatsApp a n'Alba. \n2. Compartiu la vostra ubicació en directe amb n’Alba \n3. Feu una foto d’alguna cosa de la classe i edita-la afegint un dibuix i escriu “GRANS ACTIUS”. Després enviau-la a n’Alba." },
        expert: { type: 'text', text: "Has de fer les següents proves: \n1. Creau un grup nou amb n’Alba i vosaltres. \n2. Enviau pel grup nou una selfie i tapau-vos la cara amb un emoticono. \n3. Creau un sticker instantani a partir d’una foto i envia-la pel grup nou. \n4. Eliminau el grup que heu fet." }
      },
      3: {
        name: 'Mandarina', title: 'IA (Chat GPT/Gemini)',
        relax: { type: 'text', text: "Demanau a la IA les següents coses: \n1. Que vos faci un menú saludable per la setmana. \n2. Que vos tregui la llista de la compra del menú anterior. \n3. Com fer una recepta de magdalenes de xocolata." },
        expert: { type: 'text', text: "Demanau a la IA les següents coses: \n1. Que vos tregui una imatge d’un menú saludable per la setmana. \n2. Que faci un prompt per fer una cançó o un poema. \n3. Fer una cançó o un poema a partir del prompt anterior." }
      },
      4: {
        name: 'Plàtan', title: 'Correu electrònic',
        relax: { type: 'text', text: "La teva prova és: Obre el teu correu electrònic i envia un correu a l'adreça de correu de n'Alba amb l'assumpte 'Hola n'Alba' i un missatge senzill." },
        expert: { type: 'text', text: "La teva prova és: Fes-te un selfie fent servir el temporitzador de 3 segons de la càmera i ensenya'l a n'Alba." }
      },
      5: {
        name: 'Meló', title: 'Repàs d\'Ajustos',
        relax: {
          type: 'test', questions: [
            { question: 'On es canvia la mida de la lletra perquè la vegis més grossa?', options: ['A l\'aplicació del temps', 'Als números del telèfon per trucar', 'A Configuració / Pantalla (o Ajustos)', 'Apagant la pantalla'], correctIndex: 2 },
            { question: 'Com s\'apuja la lluentor de la pantalla?', options: ['Lliscar de dalt a baix i moure la barra del sol', 'Posant el mòbil de cara al sol', 'Fregant la pantalla', 'Canviant la bateria'], correctIndex: 0 }
          ]
        },
        expert: {
          type: 'test', questions: [
            { question: 'On pots veure quin percentatge de bateria et queda?', options: ['Dins de WhatsApp', 'A Configuració > Bateria (o fent lliscar de dalt a baix)', 'A la càmera de fotos', 'Trucant a la teva operadora'], correctIndex: 1 },
            { question: 'Com es canvia el fons de pantalla?', options: ['No es pot canviar mai', 'Fent una foto i prou', 'A Configuració > Fons de pantalla (o mantenint premut l\'escriptori)', 'A l\'aplicació del calendari'], correctIndex: 2 }
          ]
        }
      },
      6: {
        name: 'Síndria', title: 'Prova Pràctica 3',
        relax: { type: 'text', text: "La teva prova és: Posa una alarma al rellotge del teu mòbil per demà a les 08:30 del matí. Mostra-ho a n'Alba." },
        expert: { type: 'text', text: "La teva prova és: Posa una alarma per demà a les 08:30 i posa-li d'etiqueta/nom 'Bon dia'. Mostra-ho a n'Alba." }
      },
      7: {
        name: 'Pera', title: 'Repàs de Connexions',
        default: {
          type: 'test', questions: [
            { question: 'Com et connectes a un nou Wi-Fi?', options: ['Posant el mode avió per volar', 'A Configuració / Connexions (o Xarxa Wi-Fi)', 'Apujant el volum de la música al màxim', 'Esborrant contactes antics'], correctIndex: 1 },
            { question: 'Com actives o desactives el Bluetooth?', options: ['Tancant els ulls', 'Esborrant totes les fotos', 'A Configuració > Bluetooth (o lliscant de dalt a baix)', 'Fent una trucada'], correctIndex: 2 },
            { image: 'airplane_icon.png', question: 'Per a què serveix aquesta icona?', options: ['Per jugar a un joc d\'avions', 'Per desactivar temporalment trucades, dades i Wi-Fi', 'Per posar una alarma per despertar-te', 'Per fer que internet vagi més ràpid'], correctIndex: 1 },
            { question: 'Si no et funciona l\'Internet pel carrer, què comproves?', options: ['Que estiguin enceses les Dades Mòbils', 'L\'aplicació del temps', 'Que tinguis saldo al banc', 'El volum de la trucada'], correctIndex: 0 }
          ]
        }
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
        relax: {
          type: 'test', questions: [
            { question: '¿Qué aplicación usas para ver dónde estás en el mapa?', options: ['En Configuración / Ajustes', 'Manteniendo pulsado el micrófono', 'En Google Maps', 'En la galería de fotos'], correctIndex: 2 },
            { question: '¿Cómo puedes ver una ruta para ir a pie?', options: ['Clicando en el icono del peatón', 'Poniendo el móvil en el suelo', 'Abriendo la cámara', 'Llamando a un taxi'], correctIndex: 0 }
          ]
        },
        expert: {
          type: 'test', questions: [
            { question: '¿Cómo compartes tu ubicación actual por WhatsApp?', options: ['Haciéndole una foto a la calle', 'En el icono del clip (Adjuntar) > Ubicación', 'Gritando por el micrófono dónde estás', 'Escribiendo "estoy aquí"'], correctIndex: 1 },
            { question: '¿Qué significa el punto azul en el mapa?', options: ['Un sitio para comer', 'La posición donde estás tú ahora mismo', 'Una piscina pública', 'Una tienda cerrada'], correctIndex: 1 }
          ]
        }
      },
      2: {
        name: 'Manzana', title: 'Prueba Práctica 1',
        relax: { type: 'text', text: "Tu prueba es: Envía un mensaje de WhatsApp al grupo de la clase diciendo la palabra 'LOGRADO'. Cuando lo hagas, avisa a Alba." },
        expert: { type: 'text', text: "Tu prueba es: Envía un mensaje de WhatsApp al grupo de la clase adjuntando un enlace a una noticia de internet. Avisa a Alba cuando lo tengas." }
      },
      3: {
        name: 'Mandarina', title: 'Repaso de WhatsApp',
        relax: {
          type: 'test', questions: [
            { question: '¿Cómo se envía un mensaje de voz por WhatsApp?', options: ['Pulsando el espacio en blanco', 'Manteniendo pulsada la icono del micrófono', 'Borrando las letras de la pantalla', 'Haciendo doble clic en la foto'], correctIndex: 1 },
            { question: '¿Cómo se hace una videollamada?', options: ['Gritando muy fuerte', 'Acercando el móvil a la oreja', 'Clicando en el icono de la cámara de vídeo arriba', 'Enviando 5 fotos seguidas'], correctIndex: 2 }
          ]
        },
        expert: {
          type: 'test', questions: [
            { question: '¿Cómo puedes escuchar un audio que has grabado antes de enviarlo?', options: ['No se puede', 'Deslizando hacia arriba para bloquear y dándole al pause', 'Cerrando la aplicación', 'Enviándolo primero y escuchándolo después'], correctIndex: 1 },
            { question: '¿Cómo se envía una foto que solo se puede ver una vez?', options: ['Pulsando el número 1 dentro del círculo antes de enviar', 'Enviándola y borrándola rápido', 'Haciéndola con los ojos cerrados', 'Eso es imposible'], correctIndex: 0 }
          ]
        }
      },
      4: {
        name: 'Plátano', title: 'Prueba Práctica 2',
        relax: { type: 'text', text: "Tu prueba es: Hazte un selfie (autofoto) y enséñale a Alba la foto desde tu Galería." },
        expert: { type: 'text', text: "Tu prueba es: Hazte un selfie usando el temporizador de 3 segundos de la cámara y enséñaselo a Alba." }
      },
      5: {
        name: 'Melón', title: 'Repaso de Ajustes',
        relax: {
          type: 'test', questions: [
            { question: '¿Dónde se cambia el tamaño de la letra para que la veas más grande?', options: ['En la aplicación del tiempo', 'En los números para llamar', 'En Configuración / Pantalla (o Ajustes)', 'Apagando el teléfono'], correctIndex: 2 },
            { question: '¿Cómo se sube el brillo de la pantalla?', options: ['Deslizando de arriba a abajo y moviendo la barra del sol', 'Poniendo el móvil de cara al sol', 'Frotando la pantalla', 'Cambiando la batería'], correctIndex: 0 }
          ]
        },
        expert: {
          type: 'test', questions: [
            { question: '¿Dónde puedes ver qué porcentaje de batería te queda?', options: ['Dentro de WhatsApp', 'En Configuración > Batería (o deslizando de arriba abajo)', 'En la cámara de fotos', 'Llamando a tu operadora'], correctIndex: 1 },
            { question: '¿Cómo se cambia el fondo de pantalla?', options: ['No se puede cambiar nunca', 'Haciendo una foto y ya está', 'En Configuración > Fondo de pantalla (o manteniendo pulsado el escritorio)', 'En la aplicación del calendario'], correctIndex: 2 }
          ]
        }
      },
      6: {
        name: 'Sandía', title: 'Prueba Práctica 3',
        relax: { type: 'text', text: "Tu prueba es: Pon una alarma en el móvil para mañana a las 08:30 de la mañana. Muéstraselo a Alba." },
        expert: { type: 'text', text: "Tu prueba es: Pon una alarma para mañana a las 08:30 y ponle de etiqueta/nombre 'Buenos días'. Muéstraselo a Alba." }
      },
      7: {
        name: 'Pera', title: 'Repaso de Conexiones',
        default: {
          type: 'test', questions: [
            { question: '¿Cómo te conectas a un nuevo Wi-Fi?', options: ['Poniendo el modo avión', 'En Configuración / Conexiones (o Red Wi-Fi)', 'Subiendo el volumen de la música', 'Borrando contactos antiguos'], correctIndex: 1 },
            { question: '¿Cómo activas o desactivas el Bluetooth?', options: ['Cerrando los ojos', 'Borrando todas las fotos', 'En Configuración > Bluetooth (o deslizando de arriba abajo)', 'Haciendo una llamada'], correctIndex: 2 },
            { image: 'airplane_icon.png', question: '¿Para qué sirve este icono?', options: ['Para jugar a un juego de aviones', 'Para desactivar temporalmente llamadas, datos y Wi-Fi', 'Para poner una alarma para despertarte', 'Para hacer que internet vaya más rápido'], correctIndex: 1 },
            { question: 'Si no te funciona Internet por la calle, ¿qué compruebas?', options: ['Que estén encendidos los Datos Móviles', 'La aplicación del tiempo', 'Que tengas saldo en el banco', 'El volumen de la llamada'], correctIndex: 0 }
          ]
        }
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
let currentQuestionIndex = 0;

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
    const topicData = dict[currentLang].topics[currentTopic];
    if (topicData.relax && topicData.expert) {
      if (currentLevel) {
        renderTopicContent(currentTopic, currentLevel, currentQuestionIndex);
      } else {
        renderLevelSelection();
      }
    } else {
      renderTopicContent(currentTopic, 'default', currentQuestionIndex);
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
  currentQuestionIndex = 0;
}

window.closeModals = closeModals;

function verifyCode() {
  const code = codeInput.value.trim().toUpperCase();
  const expectedCode = CODES[currentTopic];

  if (code === expectedCode) {
    modalCode.classList.add('hidden');
    const topicData = dict[currentLang].topics[currentTopic];
    if (topicData.relax && topicData.expert) {
      renderLevelSelection();
    } else {
      renderTopicContent(currentTopic, 'default', 0);
    }
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
  btnRelax.onclick = () => renderTopicContent(currentTopic, 'relax', 0);

  const btnExpert = document.createElement('button');
  btnExpert.className = 'action-btn expert-btn';
  btnExpert.style.backgroundColor = '#e53e3e';
  btnExpert.textContent = d.btnExpert;
  btnExpert.onclick = () => renderTopicContent(currentTopic, 'expert', 0);

  btnContainer.appendChild(btnRelax);
  btnContainer.appendChild(btnExpert);

  quizBody.appendChild(btnContainer);
}

window.verifyCode = verifyCode;

function renderTopicContent(topicId, level, questionIndex = 0) {
  currentLevel = level;
  currentQuestionIndex = questionIndex;
  const d = dict[currentLang];
  const topicData = d.topics[topicId];
  const contentData = topicData[level];

  quizBody.innerHTML = '';
  quizFeedback.className = 'feedback-text hidden';
  btnCloseContent.classList.add('hidden');

  // Mostra el nom del tema i el títol dins les proves
  const levelText = level === 'relax' ? ' (Relax)' : (level === 'expert' ? ' (Expert)' : '');
  quizTitle.textContent = `${topicData.name} - ${topicData.title}${levelText}`;

  if (contentData.type === 'text') {
    // Tests: Real World Task
    const textBlock = document.createElement('div');
    textBlock.className = 'real-world-text';
    textBlock.innerText = contentData.text;

    quizBody.appendChild(textBlock);
    btnCloseContent.classList.remove('hidden');
  } else if (contentData.type === 'test') {
    // Tests: A/B/C/D multiple questions
    const qData = contentData.questions[currentQuestionIndex];

    const progressText = document.createElement('p');
    progressText.style.fontSize = '1rem';
    progressText.style.color = '#666';
    progressText.style.marginBottom = '5px';
    progressText.innerText = currentLang === 'ca' ? `Pregunta ${currentQuestionIndex + 1} de ${contentData.questions.length}` : `Pregunta ${currentQuestionIndex + 1} de ${contentData.questions.length}`;
    quizBody.appendChild(progressText);

    if (qData.image) {
      const img = document.createElement('img');
      img.src = qData.image;
      img.style.width = '100%';
      img.style.maxHeight = '150px';
      img.style.objectFit = 'contain';
      img.style.marginBottom = '15px';
      img.style.borderRadius = '8px';
      quizBody.appendChild(img);
    }

    if (qData.question) {
      const qText = document.createElement('p');
      qText.style.fontSize = '1.4rem';
      qText.style.fontWeight = '600';
      qText.style.marginBottom = '15px';
      qText.innerText = qData.question;
      quizBody.appendChild(qText);
    }

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';

    const labels = ['A', 'B', 'C', 'D'];

    qData.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="lbl">${labels[index]}.</span> <span>${optText}</span>`;

      btn.onclick = () => handleAnswer(btn, index === qData.correctIndex, contentData.questions.length);
      optionsContainer.appendChild(btn);
    });

    quizBody.appendChild(optionsContainer);
  }
}

function handleAnswer(clickedBtn, isCorrect, totalQuestions) {
  const d = dict[currentLang];
  const buttons = quizBody.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.style.pointerEvents = 'none';
  });

  quizFeedback.classList.remove('hidden');

  if (isCorrect) {
    clickedBtn.classList.add('correct');

    if (totalQuestions && currentQuestionIndex + 1 < totalQuestions) {
      quizFeedback.textContent = currentLang === 'ca' ? "¡Correcte! Preparat per la següent..." : "¡Correcto! Preparado para la siguiente...";
      quizFeedback.className = 'feedback-text feedback-success';

      setTimeout(() => {
        renderTopicContent(currentTopic, currentLevel, currentQuestionIndex + 1);
      }, 1500);
    } else {
      quizFeedback.textContent = d.correctMsg;
      quizFeedback.className = 'feedback-text feedback-success';
      btnCloseContent.classList.remove('hidden');
    }
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

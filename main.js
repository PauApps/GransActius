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
            { question: 'Hola mama ❤️\nHe perdut el mòbil. Aquest és el meu número nou: 693618372\nNecessit que me facis un bizum urgent ara mateix.\n\n Què faries?', options: ['Fer el bizum', 'Telefonar al teu fill/a o intentar contactar amb algun amic/amiga', 'Contestar amb les dades bancàries'], correctIndex: 1 },
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
        relax: { type: 'text', text: "Heu de fer les següents proves:\n\n1. Enviau una nota de veu per WhatsApp a n'Alba.\n\n2. Compartiu la vostra ubicació en directe amb n’Alba\n\n3. Feis una foto d’alguna cosa de la classe i editau-la afegint un dibuix i escriviu “GRANS ACTIUS”. Després enviau-la a n’Alba." },
        expert: { type: 'text', text: "Heu de fer les següents proves:\n\n1. Creau un grup nou amb n’Alba i vosaltres.\n\n2. Enviau pel grup nou una selfie i tapau-vos la cara amb un emoticono.\n\n3. Creau un sticker a partir d’una foto i enviau-lo pel grup nou.\n\n4. Eliminau el grup que heu fet." }
      },
      3: {
        name: 'Mandarina', title: 'IA (Chat GPT/Gemini)',
        relax: { type: 'text', text: "Demanau a la IA les següents coses:\n\n1. Que vos faci un menú saludable per la setmana.\n\n2. Que vos tregui la llista de la compra del menú anterior.\n\n3. Com fer una recepta de magdalenes de xocolata." },
        expert: { type: 'text', text: "Demanau a la IA les següents coses:\n\n1. Que vos tregui una imatge d’un menú saludable per la setmana.\n\n2. Que faci un prompt per fer una cançó o un poema.\n\n3. Fer una cançó o un poema a partir del prompt anterior." }
      },
      4: {
        name: 'Plàtan', title: 'Correu electrònic',
        relax: { type: 'text', text: "Enviau un correu electrònic a n’Alba (alba.gransactius@gmail.com) amb assumpte, salutació, una dita Mallorquina i clausura amb els vostres noms." },
        expert: { type: 'text', text: "Has de fer les següents proves:\n\n1. Enviau un correu electrònic a n’Alba (alba.gransactius@gmail.com) amb còpia als altres del vostre grup.\n\n2. Responeu al correu de n’Alba a tots els del grup adjuntant una foto." }
      },
      5: {
        name: 'Meló', title: 'Videocridada',
        relax: { type: 'text', text: "Llegiu primer totes les proves i després feis-les durant la videocridada:\n\n1. Feis una videocridada amb n’Alba i els del grup\n\n2. Silenciau-vos.\n\n3. Canviau la càmera a la de darrere." },
        expert: { type: 'text', text: "Llegiu primer totes les proves i després feis-les durant la videocridada:\n\n1. Feis una videocridada amb n’Alba i els del grup\n\n2. Silenciau-vos.\n\n3. Sortiu de whatsapp sense sortir de la cridada.\n\n4. Tornau a la cridada.\n\n5. Posau-vos un filtre/fons/efecte…" },
      },
      6: {
        name: 'Síndria', title: 'Google Maps',
        relax: { type: 'text', text: "Cercau al google maps les següents coses:\n\n1. Com anar des del Casal fins a la Catedral de Palma en cotxe.\n\n2. Un restaurant a Santa Eugènia amb bona puntuació." },
        expert: { type: 'text', text: "Cercau al google maps les següents coses:\n\n1. Com anar des del Casal fins a la Catedral de Palma en transport públic a les 14:00 h.\n\n2. Un restaurant a Santa Maria amb bona puntuació, que estigui obert, amb preu 20-30 € i guardau-lo.\n\n3. Compartiu el restaurant amb n’Alba per WhatsApp." }
      },
      7: {
        name: 'Pera', title: 'Emojis',
        default: {
          type: 'test', questions: [
            { question: '📱 La teva neta t’envia una foto molt divertida.\nQuin emoji respondries?', options: ['😂', '😡', '😴', '🤔'], correctIndex: 0 },
            { question: 'TQM ❤️\nQuè significa “TQM”?', options: ['Tenc qualque missatge', 'T’estim molt', 'Tenc que menjar'], correctIndex: 1 },
            { question: '🔥😎🙌\nAquest conjunt vol dir…', options: ['Perill d’incendi', 'Estic cansat', 'Alguna cosa molt xula o espectacular'], correctIndex: 2 },
            { question: 'xfa envia ubi\nQuè significa?', options: ['Per favor envia la ubicació', 'Xerraré amb tu avui', 'Envia una foto urgent'], correctIndex: 0 },
            { question: '🙈\nAquest emoji sovint significa…', options: ['Tenc por', 'Quina gràcia', 'Quina vergonya', 'No vull mirar'], correctIndex: 2 },
            { question: 'El teu amic et diu que serà avi. Quin emoji encaixa millor?', options: ['😭', '🎉', '👻'], correctIndex: 1 },
            { question: '🤔📱❓\nQuè podria voler dir?', options: ['Tenc un dubte amb el mòbil', 'Estic content', 'He perdut el telèfon'], correctIndex: 0 },
            { question: 'Què significa “OMG”?', options: ['Oh no!', 'Oh my God / Mare meva!', 'Organització Mundial de gent Gran'], correctIndex: 1 },
            { question: '💬 Has llegit un missatge però no entens gaire el que et demanen.\nQuin emoji podries enviar?', options: ['😡', '🔥', '😎', '❓'], correctIndex: 3 },
            { question: 'dps \nQuè significa?', options: ['Despesa', 'Després', 'De passeig', 'D’aquí poc sortim'], correctIndex: 1 }
          ]
        }
      },
      8: {
        name: 'Rem', title: 'Cerques',
        relax: { type: 'text', text: "Heu de fer les següents proves:\n\n1. Cercar la cançó Mediterráneo d’en Joan Manuel Serrat.\n\n2. Cercar al youtube una recepta d’arròs brut.\n\n3. Cercar amb incògnit un vol a Barcelona." },
        expert: { type: 'text', text: "Heu de fer les següents proves:\n\n1. Cercar un vídeo d’exercicis d’esquena sana.\n\n2. Crear una llista de spotify o youtube amb 5 cançons.\n\n3. Cercar un vídeo-tutorial de com plantar tomatigueres i guarda’l\n\n4. Cercar amb incògnit un vol i un hotel a Nova York." }
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
        name: 'Cereza', title: '¿Estafa o no?',
        relax: {
          type: 'test', questions: [
            { image: 'Paquet1.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 0 },
            { question: 'Hola mamá ❤️\nHe perdido el móvil. Este es mi número nuevo: 693618372\nNecesito que me hagas un bizum urgente ahora mismo.\n\n ¿Qué harías?', options: ['Hacer el bizum', 'Llamar a tu hijo/a o intentar contactar con algún amigo/amiga', 'Contestar con los datos bancarios'], correctIndex: 1 },
            { image: 'Citaprevia.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 1 },
            { image: 'iCloud2.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 0 },
            { image: 'Logitravel.jpg', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 1 }
          ]
        },
        expert: {
          type: 'test', questions: [
            { image: 'Imagin.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 1 },
            { image: 'BBVA.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 0 },
            { image: 'SEUR.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 0 },
            { image: 'Bankinter.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 1 },
            { image: 'ConsellMallorca.png', question: '¿Es estafa?', options: ['Sí', 'No'], correctIndex: 1 },
          ]
        }
      },
      2: {
        name: 'Manzana', title: 'WhatsApp',
        relax: { type: 'text', text: "Tenéis que hacer las siguientes pruebas:\n\n1. Enviad una nota de voz por WhatsApp a Alba.\n\n2. Compartid vuestra ubicación en directo con Alba.\n\n3. Haced una foto de algo de la clase, editadla añadiendo un dibujo y escribid “GRANS ACTIUS”. Después enviadla a Alba." },
        expert: { type: 'text', text: "Tenéis que hacer las siguientes pruebas:\n\n1. Cread un grupo nuevo con Alba y vosotros.\n\n2. Enviad por el grupo nuevo un selfie y tapaos la cara con un emoticono.\n\n3. Cread un sticker a partir de una foto y enviadlo por el grupo nuevo.\n\n4. Eliminad el grupo que habéis creado." }
      },
      3: {
        name: 'Mandarina', title: 'IA (Chat GPT/Gemini)',
        relax: { type: 'text', text: "Pedid a la IA las siguientes cosas:\n\n1. Que os haga un menú saludable para la semana.\n\n2. Que os saque la lista de la compra del menú anterior.\n\n3. Cómo hacer una receta de magdalenas de chocolate." },
        expert: { type: 'text', text: "Pedid a la IA las siguientes cosas:\n\n1. Que os saque una imagen de un menú saludable para la semana.\n\n2. Que haga un prompt para hacer una canción o un poema.\n\n3. Hacer una canción o un poema a partir del prompt anterior." }
      },
      4: {
        name: 'Plátano', title: 'Correo electrónico',
        relax: { type: 'text', text: "Enviad un correo electrónico a Alba (alba.gransactius@gmail.com) con asunto, saludo, un refrán y despedida con vuestros nombres." },
        expert: { type: 'text', text: "Tienes que hacer las siguientes pruebas:\n\n1. Enviad un correo electrónico a Alba (alba.gransactius@gmail.com) con copia a los demás de vuestro grupo.\n\n2. Responded al correo de Alba a todos los del grupo adjuntando una foto." }
      },
      5: {
        name: 'Melón', title: 'Videollamada',
        relax: { type: 'text', text: "Leed primero todas las pruebas y después hacedlas durante la videollamada:\n\n1. Haced una videollamada con Alba y los del grupo.\n\n2. Silenciaos.\n\n3. Cambiad la cámara a la trasera." },
        expert: { type: 'text', text: "Leed primero todas las pruebas y después hacedlas durante la videollamada:\n\n1. Haced una videollamada con Alba y los del grupo.\n\n2. Silenciaos.\n\n3. Salid de WhatsApp sin salir de la llamada.\n\n4. Volved a la llamada.\n\n5. Poneos un filtro/fondo/efecto…" },
      },
      6: {
        name: 'Sandía', title: 'Google Maps',
        relax: { type: 'text', text: "Buscad en Google Maps las siguientes cosas:\n\n1. Cómo ir desde el Casal hasta la Catedral de Palma en coche.\n\n2. Un restaurante en Santa Eugènia con buena puntuación." },
        expert: { type: 'text', text: "Buscad en Google Maps las siguientes cosas:\n\n1. Cómo ir desde el Casal hasta la Catedral de Palma en transporte público a las 14:00 h.\n\n2. Un restaurante en Santa Maria con buena puntuación, que esté abierto, con precio 20-30 € y guardadlo.\n\n3. Compartid el restaurante con Alba por WhatsApp." }
      },
      7: {
        name: 'Pera', title: 'Emojis',
        default: {
          type: 'test', questions: [
            { question: '📱 Tu nieta te envía una foto muy divertida.\n¿Qué emoji responderías?', options: ['😡', '😴', '🤔', '😂'], correctIndex: 3 },
            { question: 'TQM ❤️\n¿Qué significa “TQM”?', options: ['Tengo que marcharme', 'Te quiero mucho', 'Tengo que merendar'], correctIndex: 1 },
            { question: '🔥😎🙌\nEste conjunto significa…', options: ['Algo muy chulo o espectacular', 'Peligro de incendio', 'Estoy cansado'], correctIndex: 0 },
            { question: 'xfa envia ubi\n¿Qué significa?', options: ['Hablaré contigo hoy', 'Por favor envía una imagen', 'Por favor envía la ubicación'], correctIndex: 3 },
            { question: '🙈\nEste emoji a menudo significa…', options: ['Qué verguenza', 'Tengo miedo', 'Qué gracia', 'No puedo mirar'], correctIndex: 0 },
            { question: 'Tu amigo te dice que será abuelo. ¿Qué emoji encaja mejor?', options: ['😭', '🎉', '👻'], correctIndex: 1 },
            { question: '🤔📱❓\n¿Qué podría significar?', options: ['Tengo una duda con el móvil', 'Estoy contento', 'He perdido el teléfono'], correctIndex: 0 },
            { question: '¿Qué significa “OMG”?', options: ['¡Oh no!', 'Organización Mundial de Gente Mayor', 'Oh my God / ¡Madre mía!'], correctIndex: 2 },
            { question: '💬 Has leído un mensaje pero no entiendes mucho lo que te piden.\n¿Qué emoji podrías enviar?', options: ['😡', '🔥', '😎', '❓'], correctIndex: 3 },
            { question: 'dps \n¿Qué significa?', options: ['Despacio', 'Después', 'De paseo', 'Donde podemos salir'], correctIndex: 1 }
          ]
        }
      },
      8: {
        name: 'Uva', title: 'Búsquedas',
        relax: { type: 'text', text: "Tenéis que hacer las siguientes pruebas:\n\n1. Buscar la canción Mediterráneo de Joan Manuel Serrat.\n\n2. Buscar en youtube una receta de arroz brut.\n\n3. Buscar en incógnito un vuelo a Barcelona." },
        expert: { type: 'text', text: "Tenéis que hacer las siguientes pruebas:\n\n1. Buscar un vídeo de ejercicios de espalda sana.\n\n2. Crear una lista de spotify o youtube con 5 canciones.\n\n3. Buscar un vídeo-tutorial de cómo plantar tomateras y guardarlo.\n\n4. Buscar en incógnito un vuelo y un hotel en Nueva York." }
      }
    }
  }
};

const CODES = {
  1: "9423d",
  2: "2323r",
  3: "9742a",
  4: "9243p",
  5: "3424e",
  6: "8431q",
  7: "2921m",
  8: "4928c"
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

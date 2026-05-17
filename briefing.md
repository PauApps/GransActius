Crea una aplicación web SPA (Single Page Application) optimizada para dispositivos móviles (diseño 'Mobile-First') inspirada en la interfaz física de un smartphone clásico. La aplicación está dirigida a personas mayores que han finalizado un curso de nuevas tecnologías llamado "Grans Actius / Grandes Activos". El propósito es realizar un repaso dinámico de las clases.

La aplicación debe ser completamente bilingüe (Catalán y Castellano) con un selector de idioma siempre visible.

---

### 1. DISEÑO DE INTERFAZ Y ACCESIBILIDAD (UI/UX para Gente Mayor)
- **Contenedor Principal:** La app simula la pantalla de un teléfono. Debe tener un fondo limpio con alto contraste.
- **Selector de Idioma:** Situado siempre en la parte superior fija (Header). Dos botones grandes, claros y con banderas o texto inequívoco: [Català] | [Castellano]. Al pulsar uno, toda la interfaz y los contenidos cambian de idioma instantáneamente sin perder el progreso.
- **La Cuadrícula de Cajas (Grid):** Inspirada en un dibujo de 2 columnas y 4 filas (8 cajas en total). 
  - Las cajas deben ser botones muy grandes, con bordes redondeados bien definidos, tipografía grande (mínimo 20px) y un espaciado (padding) generoso para facilitar la pulsación a dedos temblorosos.
  - Los nombres de las cajas por ahora serán genéricos ("Tema 1", "Tema 2", hasta "Tema 8").
  - Visualmente no hay distinción inicial entre cajas (no hay candados ni colores grises), todas parecen accesibles.

---

### 2. LÓGICA DE INTERACCIÓN Y CÓDIGOS DE ACCESO
Cada una de las 8 cajas requiere un código único e independiente introducido por la profesora para poder ver la prueba.
- **Flujo de Bloqueo:** Al pulsar cualquier caja, se abre una ventana emergente (Modal) a pantalla completa o casi completa.
- **Pantalla de Código:** - Muestra un texto claro: "Introduce el código que te ha dado la profesora" / "Introdueix el codi que t'ha donat la professora".
  - Un campo de texto (Input) grande donde escribir y un botón gigante de [Validar / Verificar].
  - **Códigos únicos simulados (Hardcoded en el frontend para desarrollo):** - Tema 1: "ACTIU1"
    - Tema 2: "ACTIU2"
    - Tema 3: "ACTIU3"
    - Tema 4: "ACTIU4"
    - Tema 5: "ACTIU5"
    - Tema 6: "ACTIU6"
    - Tema 7: "ACTIU7"
    - Tema 8: "ACTIU8"
  - Si el código es incorrecto, muestra un mensaje de error claro en color rojo: "Código incorrecto, vuelve a intentarlo".

---

### 3. CONTENIDO DE LAS PRUEBAS (Al acertar el código)
Una vez introducido el código correcto, la ventana modal cambia su contenido para mostrar la prueba correspondiente. Configura las pruebas de la siguiente manera para demostrar la variedad:

- **Temas 1, 3, 5 y 7 (Tipo Test A/B/C/D):**
  - Muestra una pregunta con texto grande y 4 botones de opción (A, B, C, D) gigantescos.
  - Al pulsar la respuesta correcta, muestra una felicitación animada o clara: "¡Correcto! Ve a decírselo a la profesora". Si falla, permite volver a intentarlo de forma amigable.
- **Temas 2, 4, 6 y 8 (Prueba del Món Real / Texto explicativo):**
  - Muestra un texto con instrucciones para realizar una acción física en el aula. 
  - *Ejemplo de texto:* "¡Código correcto! Tu prueba es: Envía un mensaje de WhatsApp al grupo de la clase diciendo la palabra 'LOGRADO'. Cuando lo hagas, avisa a la profesora."
  - Incluye un botón grande abajo que diga [Cerrar / Tornar] para volver al menú de las cajas.

---

### 4. REQUISITOS TÉCNICOS
- Usa HTML5, CSS3 moderno (Flexbox/Grid) y JavaScript nativo (o Vue/React si Antigravity lo prefiere, pero estructurado de forma simple).
- Asegura que el tamaño de la fuente base sea grande (mínimo 18px-20px para textos comunes) y los botones tengan un tamaño de click objetivo excelente (mínimo 60px de altura para los botones de respuesta y temas).
- El diseño debe ser totalmente "responsive" para que encaje perfectamente en cualquier pantalla de smartphone (iOS/Android).
const questions = [
  {
    question: "¿Cuál es el nombre real de Young Miko?",
    options: [
      "María Fernanda Borjas",
      "María Fernanda Miko",
      "Miko Young",
      "Fernanda Young"
    ],
    answer: 0,
    image: "img/miko1.jpg"  // Cambia aquí a la ruta correcta de tu imagen
  },
  {
    question: "¿En qué ciudad nació Young Miko?",
    options: [
      "Guayaquil",
      "Quito",
      "Cuenca",
      "Ambato"
    ],
    answer: 1,
    image: "img/miko2.jpg"  // Cambia aquí a la ruta correcta de tu imagen
  },
  // Agrega más preguntas con sus rutas de imagen específicas
];

let currentQuestionIndex = 0;

const questionNumberElem = document.getElementById('question-number');
const questionElem = document.getElementById('question');
const optionsElem = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const questionImage = document.getElementById('question-image');

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionNumberElem.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionElem.textContent = current.question;
  questionImage.src = current.image;
  questionImage.alt = `Imagen para pregunta ${currentQuestionIndex + 1}`;
  optionsElem.innerHTML = '';

  current.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => {
      selectOption(index);
    });
    optionsElem.appendChild(btn);
  });

  nextBtn.style.display = 'none';
}

function selectOption(selectedIndex) {
  const current = questions[currentQuestionIndex];
  const buttons = optionsElem.querySelectorAll('button');

  buttons.forEach((btn, i) => {
    btn.disabled = true; // Deshabilitar todas las opciones para que no se pueda cambiar la respuesta
    
    if (i === selectedIndex) {
      // La opción que seleccionaste
      if (i === current.answer) {
        // Si es correcta, la pones verde
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
      } else {
        // Si es incorrecta, la pones roja
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
      }
    }

    // Además, si la opción es la correcta y no es la que seleccionaste, también la ponemos verde para mostrar la respuesta correcta
    if (i === current.answer && i !== selectedIndex) {
      buttons[i].style.backgroundColor = 'green';
      buttons[i].style.color = 'white';
    }
  });

  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert('¡Has terminado la trivia!');
    // Reiniciar la trivia
    currentQuestionIndex = 0;
    loadQuestion();
  }
});

// Carga la primera pregunta al inicio
loadQuestion();

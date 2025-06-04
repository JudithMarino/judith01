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
    image: "assets/images/pregunta1.jpg"
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
    image: "assets/images/pregunta2.jpg"
  },
  // agrega más preguntas aquí
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
    btn.disabled = true;
    if (i === current.answer) {
      btn.style.backgroundColor = 'green';
      btn.style.color = 'white';
    } else if (i === selectedIndex) {
      btn.style.backgroundColor = 'red';
      btn.style.color = 'white';
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
    // Aquí puedes mostrar el resultado o reiniciar la trivia
    currentQuestionIndex = 0;
    loadQuestion();
  }
});

// Carga la primera pregunta al inicio
loadQuestion();

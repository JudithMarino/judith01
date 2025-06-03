const questions = [
  {
    question: "¿De dónde es originaria Young Miko?",
    options: ["Colombia", "Puerto Rico", "Argentina", "México"],
    answer: "Puerto Rico",
    image: "img/miko2.jpg"
  },
  {
    question: "¿Cuál fue una de sus canciones más conocidas?",
    options: ["Bichota", "Tusa", "Riri", "Linda"],
    answer: "Riri",
    image: "img/miko3.jpg"
  },
  {
    question: "¿Young Miko forma parte de qué comunidad?",
    options: ["Vegana", "Católica", "LGBTQ+", "Ninguna"],
    answer: "LGBTQ+",
    image: "img/miko4.jpg"
  },
  {
    question: "¿Con qué estilo musical se identifica más?",
    options: ["Rock", "Trap/Reggaetón", "Pop", "Salsa"],
    answer: "Trap/Reggaetón",
    image: "img/miko5.jpg"
  },
  {
    question: "¿Cuál es el nombre real de Young Miko?",
    options: ["María Victoria Ramírez de Arellano Cardona", "Micaela Rodríguez", "Ana Sofía López", "Camila Fernández"],
    answer: "María Victoria Ramírez de Arellano Cardona",
    image: "img/miko6.jpg"
  },
  {
    question: "¿En qué año nació Young Miko?",
    options: ["2000", "1994", "1999", "1997"],
    answer: "1997",
    image: "img/miko7.jpg"
  },
  {
    question: "¿Qué otro talento tiene Young Miko además de la música?",
    options: ["Ilustradora de tatuajes", "Bailarina profesional", "Chef", "Actriz"],
    answer: "Ilustradora de tatuajes",
    image: "img/miko8.jpg"
  },
  {
    question: "¿Con qué artista ha colaborado Young Miko?",
    options: ["Bad Bunny", "Karol G", "Ambos", "Ninguno"],
    answer: "Ambos",
    image: "img/miko9.jpg"
  },
  {
    question: "¿Cuál es el apodo que usan sus fans para referirse a Young Miko?",
    options: ["Baby Miko", "Mikito", "Mikota", "Mikura"],
    answer: "Baby Miko",
    image: "img/miko10.jpg"
  },
  {
    question: "¿En qué plataforma Young Miko ganó popularidad inicialmente?",
    options: ["SoundCloud", "YouTube", "Spotify", "TikTok"],
    answer: "SoundCloud",
    image: "img/miko11.jpg"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question-number').textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
  document.getElementById('question').textContent = q.question;

  const img = document.getElementById('question-image');
  img.src = q.image;
  img.alt = `Imagen de la pregunta ${currentQuestion + 1}`;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.background = "#43a047"; // verde
      btn.style.color = "#fff";
    } else if (btn.textContent === selected) {
      btn.style.background = "#e63946"; // rojo
      btn.style.color = "#fff";
    }
  });

  if (selected === correct) score++;
}

document.getElementById('next-btn').onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById('quiz-container').innerHTML = `
      <h2>¡Has completado la trivia!</h2>
      <p>Respuestas correctas: <strong>${score}</strong> de ${questions.length}</p>
    `;
  }
};

showQuestion();

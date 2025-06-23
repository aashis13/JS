const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    answer: 0,
  },
  {
    question: "Which tag is used for inserting the largest heading in HTML?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: 1,
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "background-color", "bgcolor", "backgroundImage"],
    answer: 1,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: 1,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: 0,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World');",
      "alertBox('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
    ],
    answer: 3,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    answer: 1,
  },
  {
    question: "Which is the correct CSS syntax?",
    options: [
      "body:color=black;",
      "{body;color:black;}",
      "body {color: black;}",
      "{body:color=black;}",
    ],
    answer: 2,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "create myFunction()",
      "def myFunction()",
    ],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const startBtn = document.getElementById("start-btn");

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = `Q${index + 1}. ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectOption(i);
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });
  nextBtn.style.display = "none";
  questionEl.style.display = "";
  optionsEl.style.display = "";
}

function selectOption(selected) {
  const q = questions[currentQuestion];
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.style.background = "#28a745";
    if (i === selected && i !== q.answer) btn.style.background = "#dc3545";
  });
  if (selected === q.answer) score++;
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

startBtn.onclick = () => {
  startBtn.style.display = "none";
  scoreEl.textContent = "";
  currentQuestion = 0;
  score = 0;
  showQuestion(currentQuestion);
};

// Hide quiz elements initially
questionEl.style.display = "none";
optionsEl.style.display = "none";
nextBtn.style.display = "none";

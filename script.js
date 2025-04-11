// JavaScript for Smart Assessment Board Quiz Website

const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const scoreText = document.getElementById("scoreText");
const downloadBtn = document.getElementById("downloadBtn");
const certificate = document.getElementById("certificate");
const certName = document.getElementById("certName");
const certCollege = document.getElementById("certCollege");
const certScore = document.getElementById("certScore");

let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
  {
    question: "What is the capital of Mizoram?",
    options: ["Imphal", "Aizawl", "Agartala", "Kohima"],
    correct: 1
  },
  {
    question: "Which state has Hyderabad as its capital?",
    options: ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu"],
    correct: 1
  },
  {
    question: "Capital of Jharkhand is:",
    options: ["Patna", "Jamshedpur", "Ranchi", "Dhanbad"],
    correct: 2
  },
  {
    question: "Gandhinagar is the capital of which state?",
    options: ["Maharashtra", "Rajasthan", "Gujarat", "Punjab"],
    correct: 2
  },
  {
    question: "Which state has Bhopal as its capital?",
    options: ["Madhya Pradesh", "Chhattisgarh", "Uttar Pradesh", "Haryana"],
    correct: 0
  },
  {
    question: "Capital of Kerala is:",
    options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Alappuzha"],
    correct: 1
  },
  {
    question: "Which capital is of Arunachal Pradesh?",
    options: ["Dispur", "Itanagar", "Shillong", "Kohima"],
    correct: 1
  },
  {
    question: "What is the capital of Bihar?",
    options: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
    correct: 0
  },
  {
    question: "Chandigarh is the capital of which two states?",
    options: ["Punjab and Haryana", "Punjab and Himachal", "Haryana and Rajasthan", "Punjab and Delhi"],
    correct: 0
  },
  {
    question: "Which state has Dehradun as its capital?",
    options: ["Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "Assam"],
    correct: 0
  }
];
startBtn.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  const userCollege = userCollegeInput.value.trim();

  if (!userName || !userCollege) {
    alert("Please enter your name and college before starting the quiz.");
    return;
  }

  // Save for certificate use
  window.userName = userName;
  window.userCollege = userCollege;

  document.getElementById("userDetails").style.display = "none";
  startBtn.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
});



nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showQuestion() {
  const current = quizQuestions[currentQuestionIndex];
  questionElement.textContent = `Q${currentQuestionIndex + 1}: ${current.question}`;

  optionsContainer.innerHTML = "";

  current.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-primary", "m-2", "w-100");
    btn.textContent = option;
    btn.onclick = () => selectOption(index);
    optionsContainer.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectOption(selectedIndex) {
  const current = quizQuestions[currentQuestionIndex];

  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.correct) {
      btn.classList.replace("btn-outline-primary", "btn-success");
    } else if (idx === selectedIndex) {
      btn.classList.replace("btn-outline-primary", "btn-danger");
    }
  });

  if (selectedIndex === current.correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreText.textContent = `You scored ${score} out of ${quizQuestions.length}`;
}
downloadBtn.addEventListener('click', () => {
  certificate.style.display = 'block';
  certName.textContent = userName;
  certCollege.textContent = userCollege;
  certScore.textContent = `${score} / ${questions.length}`;

  html2canvas(certificate).then(canvas => {
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
restartBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  resultContainer.style.display = "none";
  startBtn.style.display = "inline-block";
});
const userNameInput = document.getElementById("userName");
const userCollegeInput = document.getElementById("userCollege");
certScore.textContent = `${score} / ${quizQuestions.length}`;


const questions = [
    { q: "Who is the father of Computers?", options: ["James Gosling", "Charles Babbage", " Dennis Ritchie","Bjarne Stroustrup"]},
    { q: "What is the full form of CPU?", options: ["Computer Processing Unit"," Computer Principle Unit"," Central Processing Unit","Control Processing Unit"], answer: "Central Processing Unit" },
    { q: "Which of the following computer language is written in binary codes only??", options: ["pascal", "machine language", "C", "C#"], answer: "machine language" },
    { q: "What is 10 + 5?", options: ["10", "15", "20", "5"], answer: "15" },
    { q: "Which of the following is the brain of the computer?", options: ["Central Processing Unit", "Memory", "Arithmetic and Logic unit", "Control unit"], answer: " central Processing unit" },
    { q: "Which of the following is not a characteristic of a computer", options: ["Versatility", "Accuracy", "Diligence", " I.Q"], answer: "Pacific" },
    { q: "Which of the following is the smallest unit of data in a computer?", options: ["Bit", "Kb", "Nibble", "Byte"], answer: "Bit" },
  ];

  let currentQuestion = 0;
  let score = 0;
  let timeEnd = 60;
  let timer;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const timerEl = document.getElementById("timer");
  const resultEl = document.getElementById("result");

  function startQuiz() {
    showQuestion();
  }

  function showQuestion() {
    if (currentQuestion >= questions.length) {
      return showResult();
    }

    const q = questions[currentQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      optionsEl.appendChild(btn);
    });

    timeEnd = 60;
    timerEl.textContent = `Time left: ${timeEnd}s`;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      timeEnd--;
      timerEl.textContent = `Time left: ${timeEnd}s`;
      if (timeEnd <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }

  function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    nextQuestion();
  }

  function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;
    showQuestion();
  }

  function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    timerEl.style.display = "none";
    resultEl.textContent = `You scored ${score}`;
  }

  startQuiz();
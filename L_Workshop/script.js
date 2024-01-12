document.addEventListener('keydown', handleKeyPress);


let questions = [
    { question: "Wer hat die Fußball-Weltmeisterschaft 2018 gewonnen?", options: ["Frankreich", "Deutschland", "Brasilien", "Spanien"], answer: 0 },
    { question: "In welchem Land wurde der FC Barcelona gegründet?", options: ["Spanien", "Italien", "Deutschland", "Frankreich"], answer: 0 },
    { question: "Wie viele Spieler sind auf dem Fußballfeld?", options: ["11", "9", "22", "15"], answer: 2 },
    { question: "Welcher Spieler hält den Rekord für die meisten Tore in der Bundesliga?", options: ["Gerd Müller", "Robert Lewandowski", "Klaus Fischer", "Karl-Heinz Rummenigge"], answer: 1 },
    { question: "Welches Land hat die meisten Weltmeisterschaften gewonnen?", options: ["Deutschland", "Brasilien", "Italien", "Argentinien"], answer: 1 },
    { question: "In welchem Jahr fand die erste Fußball-Weltmeisterschaft statt?", options: ["1922", "1930", "1940", "1950"], answer: 1 },
    { question: "Welches Team gewann die UEFA Champions League 2020/2021?", options: ["Real Madrid", "Manchester City", "Chelsea", "Bayern München"], answer: 2 },
    { question: "Wer ist der Kapitän der deutschen Fußballnationalmannschaft?", options: ["Thomas Müller", "Manuel Neuer", "Joshua Kimmich", "Toni Kroos"], answer: 1 },
    { question: "Welcher Spieler erhielt den Goldenen Schuh 2020?", options: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Mohamed Salah"], answer: 0 },
    { question: "In welchem Land fand die erste Weltmeisterschaft der Frauen statt?", options: ["USA", "Deutschland", "Schweden", "China"], answer: 0 }
  ];
  
  // Funktion zum Mischen der Fragen
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  // Rufe shuffleQuestions auf, um die Fragen vor dem ersten Spiel zu mischen
  shuffleQuestions();
  
  let player1Score = 0;
  let player2Score = 0;
  let currentQuestionIndex = 0;
  let currentPlayer = 1;
  let buzzerClicked = false;
  
  function startGame() {
    document.getElementById('startButton').disabled = true;
    document.getElementById('resetButton').disabled = false;
    document.getElementById('questionContainer').style.display = 'block';
    updateScoreDisplay();
    showQuestion();
  }
  
  function updateScoreDisplay() {                               
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;
  }
  
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
  
    buzzerClicked = false;
    document.getElementById('player1Button').disabled = false;
    document.getElementById('player2Button').disabled = false;
  
    // Reset optionsContainer and show answer options after the buzzer is clicked
    document.getElementById('optionsContainer').innerHTML = '';
  }
  
  function buzz(player) {
    if (!buzzerClicked) {
      buzzerClicked = true;
      document.getElementById('player1Button').disabled = true;
      document.getElementById('player2Button').disabled = true;
  
      // Display answer options after the buzzer is clicked
      let currentQuestion = questions[currentQuestionIndex];
      let optionsHtml = currentQuestion.options.map((option, index) => {
        return `<button onclick="checkAnswer(${index})">${option}</button>`;
      }).join('');
      
      document.getElementById('optionsContainer').innerHTML = optionsHtml;
    }
  
    currentPlayer = player;
  }
  
  function checkAnswer(selectedOption) {
    let currentQuestion = questions[currentQuestionIndex];
    let isCorrect = selectedOption === currentQuestion.answer;
  
    if (isCorrect) {
      alert(`Richtig! Spieler ${currentPlayer} bekommt einen Punkt.`);
      updateScore(currentPlayer);
    } else {
      alert(`Falsch! Spieler ${3 - currentPlayer} bekommt einen Punkt.`);
      updateScore(3 - currentPlayer);
    }
  
    if (player1Score === 3 || player2Score === 3) {
      endGame();
    } else {
      setTimeout(() => {
        currentQuestionIndex++;
        updateScoreDisplay();
        showQuestion();
      }, 2000);
    }
  }
  
  function updateScore(player) {
    if (player === 1) {
      player1Score++;
    } else {
      player2Score++;
    }
  }
  
  function endGame() {
    alert(`Spiel beendet! Spieler ${player1Score > player2Score ? '1' : '2'} gewinnt!`);
    resetGame();
  }
  
  function resetGame() {
    document.getElementById('startButton').disabled = false;
    document.getElementById('resetButton').disabled = true;
    document.getElementById('questionContainer').style.display = 'none';
    player1Score = 0;
    player2Score = 0;
    currentQuestionIndex = 0;
    buzzerClicked = false;
    updateScoreDisplay();
  }
  
  function handleKeyPress(event) {
    const key = event.key;
    if (key === '1') {
      buzz(1);
    } else if (key === '0') {
      buzz(2);
    }
  }
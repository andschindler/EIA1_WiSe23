document.addEventListener('keydown', handleKeyPress); // Eventlistener für Tastendruck (1 für Spieler 1, 0 für Spieler 2)



let questions = [
  { question: "WAS STEHT FÜR CSS?", options: ["CASCADING STYLE SHEET", "COMPUTER STYLE SYSTEM", "CODED STYLE SCRIPT", "CREATIVE STYLE SHEET"], answer: 0 },
  { question: "WELCHE BEDEUTUNG HAT DIE ABKÜRZUNG HTML?", options: ["HYPER TEXT MARKUP LANGUAGE", "HIGH TECH MODERN LANGUAGE", "HYPERLINK AND TEXT LANGUAGE", "HARDWARE TESTING AND MARKUP LANGUAGE"], answer: 0 },
  { question: "WAS IST DER ZWECK DER HTML <HEAD>-SEKTION IN EINEM HTML-DOKUMENT?", options: ["DEFINITION VON ÜBERSCHRIFTEN", "SPEICHERUNG VON METADATEN UND VERWEISEN", "PLATZIERUNG VON HAUPTINHALTEN DER WEBSITE", "FESTLEGUNG DER HINTERGRUNDFARBE"], answer: 1 },
  { question: "WAS BEDEUTET JS IN BEZUG AUF PROGRAMMIERUNG?", options: ["JAVA STYLE", "JUMP START", "JAVASCRIPT", "JUST SOURCE"], answer: 2 },
  { question: "WIE ERSTELLT MAN EINE KOMMENTARZEILE IN JAVASCRIPT?", options: ["// Kommentar", "# Kommentar", "-- Kommentar", "/* Kommentar */"], answer: 0 },
  { question: "WIE KANN MAN IN CSS EINEN STIL FÜR ALLE <P>-ELEMENTE FESTLEGEN?", options: ["paragraph { }", "p { }", ".paragraph { }", "#paragraph { }"], answer: 1 },
  { question: "WAS BEZEICHNET DIE ABKÜRZUNG DOM?", options: ["DOCUMENT OBJECT MODEL", "DATA OBJECT MODEL", "DESIGN OBJECT MODEL", "DIGITAL OBJECT MODEL"], answer: 0 },
  // { question: "WIE KANN MAN EXTERNE JS-DATEIEN IN EIN HTML-DOKUMENT EINBINDEN?", options: ["<script src='datei.js'></script>", "<javascript link='datei.js'></javascript>", "<js file='datei.js'></js>", "<link rel='script' href='datei.js'>"], answer: 0 },
  { question: "WAS BEDEUTET DIE ABKÜRZUNG API?", options: ["APPLICATION PROGRAMMING INTERFACE", "ADVANCED PROGRAMMING INTERFACE", "APPLICATION PROCESSING INTERFACE", "ADVANCED PROCESSING INTERFACE"], answer: 0 },
  { question: "WELCHE METHODE WIRD IN JAVASCRIPT VERWENDET, UM DEN INHALT EINES HTML-ELEMENTS ZU ÄNDERN?", options: ["alterText()", "innerHTML()", "modifyContent()", "changeContent()"], answer: 1 },
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

// Initialisierung von Spielvariablen und Scores
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

// Funktion zur Anzeige der aktuellen Frage
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

    // Zeige Antwortmöglichkeiten nach Betätigung des Buzzers
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHtml = currentQuestion.options.map((option, index) => {
      return `<button onclick="checkAnswer(${index})">${option}</button>`;
    }).join('');

    document.getElementById('optionsContainer').innerHTML = optionsHtml;
  }

  currentPlayer = player;
}

function displayResult(resultText) {
  let resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = resultText;
  resultContainer.style.display = 'block';

  setTimeout(function() {
    resultContainer.style.display = 'none';
    
    if (player1Score === 3 || player2Score === 3) {
      endGame();
    } else {
      let questionElement = document.getElementById('question');

      setTimeout(() => {
        questionElement.textContent = "Ready";
        questionElement.style.color = "#F52700";
      },);

      setTimeout(() => {
        questionElement.textContent = "Set!";
        questionElement.style.color = "#FAF301";
      }, 1000);

      setTimeout(() => {
        questionElement.textContent = "GO!";
        questionElement.style.color = "#41F401";
      }, 2000);

      setTimeout(() => {
        questionElement.textContent = "";
        questionElement.style.color = ""; // Zurücksetzen auf die Standardfarbe
        currentQuestionIndex++;
        updateScoreDisplay();
        showQuestion();
      }, 3000);
    }
  }, 3000);
}

function checkAnswer(selectedOption) {
  let currentQuestion = questions[currentQuestionIndex];
  let isCorrect = selectedOption === currentQuestion.answer;

  if (isCorrect) {
    playCorrectSound();
    displayResult(`Richtig! Spieler ${currentPlayer} bekommt einen Punkt.`);
    updateScore(currentPlayer);
  } else {
    playWrongSound();
    displayResult(`Falsch! Spieler ${3 - currentPlayer} bekommt einen Punkt.`);
    updateScore(3 - currentPlayer);
  }
}

function playCorrectSound() {
  let correctSound = document.getElementById('correctSound');

  // Setze die Wiedergabeposition auf den Anfang, falls der Sound bereits gespielt wurde
  correctSound.currentTime = 0;

  // Spiele den Sound ab
  correctSound.play();

}

function playWrongSound() {
  // Hole das Audio-Element
  let wrongSound = document.getElementById('wrongSound');

  // Setze die Wiedergabeposition auf den Anfang, falls der Sound bereits gespielt wurde
  wrongSound.currentTime = 0;


  // Spiele den Sound ab
  wrongSound.play();
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
  const key = event.key.toUpperCase();

  if (key === '1') {
    buzz(1);
  } else if (key === '0') {
    buzz(2);
  } else if (['A', 'S', 'D', 'F'].includes(key)) {
    // Wenn eine der Tasten A, S, D oder F gedrückt wird, den Index ermitteln
    const optionIndex = ['A', 'S', 'D', 'F'].indexOf(key);

    // Rufe die checkAnswer-Funktion mit dem gefundenen Index auf
    checkAnswer(optionIndex);
  }
} 







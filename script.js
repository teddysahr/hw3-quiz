//CORRECT/WRONG POP-UPS
var notifyCorrect = document.createElement("h2");
var notifyWrong = document.createElement("h2");
var nextButton = document.createElement("button");

notifyCorrect.textContent = "Correct!";
notifyWrong.textContent = "Wrong!";

//Next question function

function moveToNextQuestion(x, y) {
  var secondsLeftTillNext = 1;
  var timerInterval = setInterval(function () {
    secondsLeftTillNext--;
    if (secondsLeftTillNext === 0) {
      x.removeAttribute("id", "present-question");
      y.setAttribute("id", "present-question");
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Score Functions

var count = 0;
var countEl = document.querySelector("#score");
var finalScore = document.querySelector("#final-score");

function updatePointsDisplay() {
  countEl.textContent = count;
}

function scorePoints() {
  count++;
}

function displayFinalScore() {
  finalScore.textContent = count - 1;
}

//Timer Function

var secondsLeft = 61;
var timerEl = document.querySelector("#time-remaining");

function gameTimer() {
  var timeLeftInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      alert("TIME IS UP");
      finalPage.setAttribute("id", "present-question");
      removeCurrentPage.remove();
      displayFinalScore();
      clearInterval(timeLeftInterval);
    }
  }, 1000);
}

//Go to final page variable

var removeCurrentPage = document.querySelector("#main-pages");

//BEGIN
var startButton = document.querySelector("#start-button");

var startContainer = document.querySelector(".container");

var wrongAnswer = document.querySelector(".wrong");

startButton.addEventListener("click", function () {
  startContainer.setAttribute("style", "display: none");
  questionOne.setAttribute("id", "present-question");
  console.log("start button");
  updatePointsDisplay();
  scorePoints();
  gameTimer();
});

//question and answer variables
var questionOne = document.querySelector(".hidden-question-1");
var answerOne = document.querySelector("#CSS");
var wrongAnswerOne = document.querySelectorAll(".wrong-answer-1");
var questionTwo = document.querySelector(".hidden-question-2");
var answerTwo = document.querySelector("#Div");
var wrongAnswerTwo = document.querySelectorAll(".wrong-answer-2");
var questionThree = document.querySelector(".hidden-question-3");
var answerThree = document.querySelector("#parentheses");
var wrongAnswerThree = document.querySelectorAll(".wrong-answer-3");
var questionFour = document.querySelector(".hidden-question-4");
var answerFour = document.querySelector("#pwd");
var wrongAnswerFour = document.querySelectorAll(".wrong-answer-4");
var questionFive = document.querySelector(".hidden-question-5");
var answerFive = document.querySelector("#tank");
var wrongAnswerFive = document.querySelectorAll(".wrong-answer-5");
var finalPage = document.querySelector(".score-page");
var leaderBoard = document.querySelector(".leader-board");
var leaderBoardButton = document.querySelector(".leader-board-button");
var restartButton = document.querySelector(".restart");
var secondRestartButton = document.querySelector(".second-restart");
var headerRemove = document.querySelector(".header");

//QUESTION ONE

answerOne.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionOne, questionTwo);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerOne.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    console.log("hit");
    document.getElementById("present-question").appendChild(notifyWrong);
    moveToNextQuestion(questionOne, questionTwo);
  });
});

//QUESTION TWO

answerTwo.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionTwo, questionThree);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerTwo.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    console.log("hit");
    document.getElementById("present-question").appendChild(notifyWrong);
    moveToNextQuestion(questionTwo, questionThree);
  });
});

//QUESTION THREE

answerThree.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionThree, questionFour);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerThree.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    console.log("hit");
    document.getElementById("present-question").appendChild(notifyWrong);
    moveToNextQuestion(questionThree, questionFour);
  });
});

//QUESTION FOUR

answerFour.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionFour, questionFive);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerFour.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    console.log("hit");
    document.getElementById("present-question").appendChild(notifyWrong);
    moveToNextQuestion(questionFour, questionFive);
  });
});

//QUESTION FIVE

answerFive.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionFive, finalPage);
  updatePointsDisplay();
  scorePoints();
  displayFinalScore();
});

wrongAnswerFive.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    console.log("hit");
    document.getElementById("present-question").appendChild(notifyWrong);
    moveToNextQuestion(questionFive, finalPage);
    displayFinalScore();
  });
});

leaderBoardButton.addEventListener("click", function () {
  moveToNextQuestion(finalPage, leaderBoard);
});

restartButton.addEventListener("click", function () {
  location.reload();
});

secondRestartButton.addEventListener("click", function () {
  location.reload();
});

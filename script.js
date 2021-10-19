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

function updatePointsDisplay() {
  countEl.textContent = count;
}

function scorePoints() {
  count++;
}

//Timer Function

var secondsLeft = 61;
var timerEl = document.querySelector("#time-remaining");

function gameTimer() {
  var timeLeftInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      alert("YOU LOSE");
      clearInterval(timeLeftInterval);
    }
  }, 1000);
}

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
var wrongAnswerOne = document.querySelector(".wrong-answer-1");
var questionTwo = document.querySelector(".hidden-question-2");
var answerTwo = document.querySelector("#Div");
var wrongAnswerTwo = document.querySelector(".wrong-answer-2");
var questionThree = document.querySelector(".hidden-question-3");
var answerThree = document.querySelector("#parentheses");
var wrongAnswerThree = document.querySelector(".wrong-answer-3");
var questionFour = document.querySelector(".hidden-question-4");
var answerFour = document.querySelector("#pwd");
var wrongAnswerFour = document.querySelector(".wrong-answer-4");
var questionFive = document.querySelector(".hidden-question-5");
var answerFive = document.querySelector("#tank");
var wrongAnswerFive = document.querySelector(".wrong-answer-5");

//QUESTION ONE

answerOne.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionOne, questionTwo);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerOne.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyWrong);
  moveToNextQuestion(questionOne, questionTwo);
});

//QUESTION TWO

answerTwo.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionTwo, questionThree);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerTwo.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyWrong);
  moveToNextQuestion(questionTwo, questionThree);
});

//QUESTION THREE

answerThree.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionThree, questionFour);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerThree.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyWrong);
  moveToNextQuestion(questionThree, questionFour);
});

//QUESTION FOUR

answerFour.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionFour, questionFive);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerFour.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyWrong);
  moveToNextQuestion(questionFour, questionFive);
});

//QUESTION FIVE

answerFive.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  moveToNextQuestion(questionFive);
  updatePointsDisplay();
  scorePoints();
});

wrongAnswerFive.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyWrong);
  moveToNextQuestion(questionFive);
});

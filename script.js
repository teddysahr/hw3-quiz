//CORRECT/WRONG POP-UPS
var notifyCorrect = document.createElement("h2");
var notifyWrong = document.createElement("h2");
var nextButton = document.createElement("button");

nextButton.textContent = "Next Question";
notifyCorrect.textContent = "Correct!";
notifyWrong.textContent = "Wrong!";

//BEGIN
var startButton = document.querySelector("#start-button");

var startContainer = document.querySelector(".container");

var questionOne = document.querySelector(".hidden-question-1");

var wrongAnswer = document.querySelector(".wrong");

startButton.addEventListener("click", function () {
  startContainer.setAttribute("style", "display: none");
  questionOne.setAttribute("id", "present-question");
  console.log("start button");
});

//QUESTION ONE

var questionTwo = document.querySelector(".hidden-question-2");
var answerOne = document.querySelector("#wicked");

answerOne.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyCorrect);
  document.getElementById("present-question").appendChild(nextButton);
});

wrongAnswer.addEventListener("click", function () {
  document.getElementById("present-question").appendChild(notifyWrong);
  document.getElementById("present-question").appendChild(nextButton);
});

//QUESTION TWO

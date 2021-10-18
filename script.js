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
  questionOne.removeAttribute("id", "present-question");
  questionTwo.setAttribute("id", "present-question");
});

//QUESTION TWO

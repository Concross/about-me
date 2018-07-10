'use strict';

// Global variables
// Adding test comment

// Used to append the questions to the parent ul in game.html
var guessingGameSectionEl = document.getElementById('guessing-game-section');
/***********************************
*      YES/NO QUESTION OBJECT      *
************************************/
// Initialize arrays for tracking and answering yes/no questions
var questionsArray = [['Do I like to go camping?', 1], ['Do I like dogs?', 1], ['Am I funny?', 1], ['Am I Batman?', 1], ['Am I bilingual?', 0]];
var questionObjectsArray = [];

// Yes/No questions constructor function
function YesNoQuestionConstructor(question, answer) {
  this.question = question;
  this.answer = answer;
}

YesNoQuestionConstructor.prototype.render = function () {
  var liEl = document.createElement('li');
  var h2El = document.createElement('h2');
  h2El.textContent = this.question;
  liEl.appendChild(h2El);
  guessingGameSectionEl.appendChild(liEl);
};
/***********************************
*         HELPER FUNCTIONS         *
************************************/
var createYesNoQuestions = function () {
  for (var question in questionsArray) {
    questionObjectsArray.push(new YesNoQuestionConstructor(questionsArray[question][0], questionsArray[question][1]));
  }
};

createYesNoQuestions();
questionObjectsArray[0].render();

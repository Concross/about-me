'use strict';

/***********************************
*     DOM Access                   *
************************************/
var gameSectionUl = document.getElementById('guessing-game-section');

/***********************************
*     Global Variables             *
************************************/
var yesNoQuestionsArray = [];
var yesNoQuestionsPool = [{question: 'Do I love camping?', answer: true}, {question: 'Do I have a dog?', answer: true}, {question: 'Have I run a half marathon?', answer: false}, {question: 'Am I batman?', answer: true}, {question: 'Am I vegetarian?', answer: false}];

/***********************************
*   Yes No Question Constructor    *
************************************/

function YesNoQuestion(question, answer) {
  this.question = question;
  this.answer = answer;
  yesNoQuestionsArray.push(this);
}

YesNoQuestion.renderAll = function() {
  for (var i = 0; i < yesNoQuestionsArray.length; i++) {
    var liEl = document.createElement('li');
    var h2El = document.createElement('h2');
    console.log(yesNoQuestionsArray[i].question);
    h2El.textContent = yesNoQuestionsArray[i].question;
    liEl.appendChild(h2El);
    gameSectionUl.appendChild(liEl);
  }
};

function runGame() {
  for (var i = 0; i < yesNoQuestionsPool.length; i++) {
    new YesNoQuestion(yesNoQuestionsPool[i].question, yesNoQuestionsPool[i].answer);
  }
  YesNoQuestion.renderAll();
}

runGame();
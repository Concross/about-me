'use strict';

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

function runGame() {
  for (var i = 0; i < yesNoQuestionsPool.length; i++) {
    new YesNoQuestion(yesNoQuestionsPool[i].question, yesNoQuestionsPool[i].answer);
  }
}

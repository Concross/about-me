'use strict';

var yesNoQuestionsArray = [];
/***********************************
*   Yes No Question Constructor    *
************************************/

function YesNoQuestion(question, answer) {
  this.question = question;
  this.answer = answer;
  yesNoQuestionsArray.push(this);
}
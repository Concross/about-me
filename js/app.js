'use strict';

/***********************************
*     DOM Stuff                   *
************************************/
$('main section:first').siblings().hide();
let $navBar = $('nav a').on('click', function () {
  $('section').hide();
  let $shownSection = $(this).data('section');
  $(`#${$shownSection}`).fadeIn(750);
});
var gameHeaderEl = document.getElementById('game-header');
var gameSectionUl = document.getElementById('guessing-game-section');

/***********************************
*     Global Variables             *
************************************/
var userScore = 0;
var yesNoQuestionsArray = [];
var yesNoQuestionsPool = [{ question: 'Do I love camping?', answer: 1 }, { question: 'Do I have a dog?', answer: 1 }, { question: 'Have I run a half marathon?', answer: 0 }, { question: 'Am I batman?', answer: 1 }, { question: 'Am I vegetarian?', answer: 0 }];

var possibleAnswers = [['no', 'n'], ['yes', 'y']];
var wrongAnswers = [['yes', 'y'], ['no', 'n']];
/***********************************
*   Yes No Question Constructor    *
************************************/

function YesNoQuestion(question, answer) {
  this.question = question;
  this.answer = answer;
  this.userAnswer;
  yesNoQuestionsArray.push(this);
}

YesNoQuestion.askAll = function () {
  for (var i = 0; i < yesNoQuestionsArray.length; i++) {
    askYesNo(yesNoQuestionsArray[i]);
  }
};

YesNoQuestion.renderAll = function () {
  for (var i = 0; i < yesNoQuestionsArray.length; i++) {
    var liEl = document.createElement('li');
    var h2El = document.createElement('h2');
    var pEl = document.createElement('p');

    h2El.textContent = yesNoQuestionsArray[i].question;
    liEl.appendChild(h2El);

    pEl.textContent = 'The correct answer was ' + possibleAnswers[yesNoQuestionsArray[i].answer][0] + ' or ' + possibleAnswers[yesNoQuestionsArray[i].answer][1] + '. You answered ' + yesNoQuestionsArray[i].userAnswer;
    liEl.appendChild(pEl);

    gameSectionUl.appendChild(liEl);
  }
};

/***********************************
*     Helper Functions             *
************************************/

function askYesNo(questionObj) {
  // Prompt user for answer
  var notAnswered = true;
  do {
    questionObj.userAnswer = prompt(questionObj.question).toLowerCase();
    console.log('Correct Answer: ' + questionObj.answer);
    console.log('User Answer: ' + questionObj.userAnswer);
    if (questionObj.userAnswer === possibleAnswers[questionObj.answer][0] || questionObj.userAnswer === possibleAnswers[questionObj.answer][1]) {
      alert('Nice! You got it right.');
      updateScore();
      notAnswered = false;
    } else if (questionObj.userAnswer === wrongAnswers[questionObj.answer][0] || questionObj.userAnswer === wrongAnswers[questionObj.answer][1]) {
      alert('Sorry, you got this one wrong.');
      notAnswered = false;
    } else {
      alert('Please answer with either a yes or no');
      notAnswered = true;
    }
  } while (notAnswered);
  return;
}

function updateScore() {
  userScore++;
}

function renderScore() {
  var scoreEl = document.createElement('h3');
  scoreEl.textContent = 'Your Score: ' + userScore + '/' + yesNoQuestionsArray.length;

  gameHeaderEl.appendChild(scoreEl);
}

function updateUser() {
  var username = prompt('Get to know me with a quick guessing game! But first, let me get to know you by entering your name below.');

  var gameHeaderh1 = document.createElement('h1');
  gameHeaderh1.textContent = 'Thanks for playing, ' + username + '!';

  gameHeaderEl.appendChild(gameHeaderh1);
}

function runGame() {
  for (var i = 0; i < yesNoQuestionsPool.length; i++) {
    new YesNoQuestion(yesNoQuestionsPool[i].question, yesNoQuestionsPool[i].answer);
  }
  updateUser();
  YesNoQuestion.askAll();
  renderScore();
  YesNoQuestion.renderAll();
}

// runGame();
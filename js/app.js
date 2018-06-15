'use strict';

// Global variables
var userName, likesCamping, hasDog, isFunny, isBatman, isBilingual, userNumGuess, randomNum, userLangGuess;
var favLanguagesMessage = '';
var totalCorrect; // Declare a variable for counting the total number of correctly answered questions

var questionsArray = ['Do I like to go camping?', 'Do I like dogs?', 'Am I funny?', 'Am I Batman?', 'Am I bilingual?'];

var correctAnswerArray = [1, 1, 1, 1, 0];
var incorrectAnswerArray = [0, 0, 0, 0, 1];

var possibleAnswerArray = [['no', 'n'], ['yes', 'y']];

function asksAllQuestions() {
  askName();
  totalCorrect = 0;

  for (var i = 0; i < questionsArray.length; i++) {
    var notAnswered = true;
    do {
      var answer = prompt(questionsArray[i]).toLowerCase();

      if (answer === possibleAnswerArray[correctAnswerArray[i]][0] || answer === possibleAnswerArray[correctAnswerArray[i]][1]) {
        alert('You\'re right!');
        totalCorrect += 1;
        notAnswered = false;
      } else if (answer === possibleAnswerArray[incorrectAnswerArray[i]][0] || answer === possibleAnswerArray[incorrectAnswerArray[i]][1]) {
        alert('Sorry, you missed this one.');
        notAnswered = false;
      } else {
        alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
      }
    } while (notAnswered);
  }
}

asksAllQuestions();

// Prompt user for name, respond with a greeting
function askName() {
  userName = prompt('Hello! What is your name?');
  alert('Nice to meet you, ' + userName + '. Let\'s play a yes or no guessing game!');
  console.log('Username: ' + userName);
}




// Question logic for a random number guessing game
function randomNumberGame() {
  // Random number functionality used from MDN reference
  var myMin = 1;
  var myMax = 100;
  //The maximum is inclusive and the minimum is inclusive
  randomNum = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

  // Variable declaration for the random number guessing game
  var numGuessCounter = 1;

  // While user has made less than 4 guess, stay in the while loop
  while (numGuessCounter < 5) {

    // Prompt user and log values
    userNumGuess = prompt('Try and guess my random number between 1 and 100!');

    // Check for null values/empty strings and guesses outside desired range
    if ((userNumGuess < 1 || userNumGuess > 100) || userNumGuess === null || userNumGuess === '') {
      alert('Please guess a NUMBER between 1 and 100');
    } else if (numGuessCounter === 4) { // Checks if user is out of guesses and breaks out of loop
      alert('Sorry, you are out of guesses! The number was ' + randomNum + '.');
      break;
    } else if (userNumGuess == randomNum) { // Checks if guess matches random number (type coerced), break
      alert('NICE! You guessed the number in ' + numGuessCounter + ' out of 4 guesses!');
      totalCorrect += 1;
      break;
    } else if (userNumGuess > randomNum) { // Checks if guess is higher than random number, inc counter
      alert('Nope, it\'s lower! You have used ' + numGuessCounter + ' out of 4 guesses');
      numGuessCounter++;
    } else if (userNumGuess < randomNum) { // Checks guess is lower than random number, inc counter
      alert('Nope, it\'s higher! You have used ' + numGuessCounter + ' out of 4 guess;');
      numGuessCounter++;
    } else { // Tries to weakly handle unexpected input like random characters or letters
      alert('Hmm... something\'s not right. Please try again guessing a NUMBER between 1and 100.');
    }
  }
};
randomNumberGame();

// Guessing game from a list of possible answers
function languageGuessingGame() {
  var favLanguages = ['html', 'css', 'javascript', 'python']; // Array of answers
  var langGuessCounter = 1; // Declared a guess counter
  var guessMax = 7;
  var isRight = false;

  // Beginning of while loop for language guessing game
  while (langGuessCounter < guessMax && !isRight) {

    // Prompt user for a guess
    userLangGuess = prompt('What is ONE of my favorite programming languages?').toLowerCase();
    // Iterate through the list and check if values match
    for (var i = 0; i < favLanguages.length; i++) {
      if (userLangGuess === favLanguages[i]) { // If there's a match, over increment counter to fail while
        alert('YAY! You got it right in ' + langGuessCounter + ' out of 6 guesses!');
        isRight = true;
      };
    }
    if (isRight) {
      totalCorrect += 1;
    } else {
      alert('Sorry, try again! You have used ' + langGuessCounter + ' out of 6 guesses');
    }
    langGuessCounter++;
  }
  if (!isRight) {
    alert('Sorry, you ran out of guesses!');
  }
  // Display a message of all of my favorite languages to the user
  for (var index = 0; index < favLanguages.length; index++) {
    favLanguagesMessage += favLanguages[index] + ' ';
  }
  alert('My favorite languages are: ' + favLanguagesMessage);
};
languageGuessingGame();


// Code block to grab elements from game.html
var questionHeader = document.getElementById('question-header');
var scoreHeader = document.getElementById('score-header');
var campingAnswer = document.getElementById('camping-answer');
var dogAnswer = document.getElementById('dog-answer');
var funnyAnswer = document.getElementById('funny-answer');
var batmanAnswer = document.getElementById('batman-answer');
var bilingualAnswer = document.getElementById('bilingual-answer');
var numberGuessAnswer = document.getElementById('number-guess-answer');
var languageAnswer = document.getElementById('language-answer');
// Code block to write to the above elements
function gameAnswersWriter() {
  questionHeader.innerHTML = userName + ' here are the questions and your answers!';
  scoreHeader.innerHTML = 'You got ' + totalCorrect + ' out of 7 correct!';
  campingAnswer.innerHTML = 'You answered ' + likesCamping + ', and the correct answer is yes.';
  dogAnswer.innerHTML = 'You answered ' + hasDog + ', and the correct answer is yes.';
  funnyAnswer.innerHTML = 'You answered ' + isFunny + ', and obviously the answer is yes.';
  batmanAnswer.innerHTML = 'You answered ' + isBatman + '... I\'M BATMAN';
  bilingualAnswer.innerHTML = 'You answered ' + isBilingual + ', and the answer is no, not quite.';
  numberGuessAnswer.innerHTML = 'You\'re best guess was ' + userNumGuess + ' and the correct answer was ' + randomNum;
  languageAnswer.innerHTML = 'Your best guess was ' + userLangGuess + '. My favorite languages are: ' + favLanguagesMessage;
};
gameAnswersWriter();
// Final message of the game!
alert('Thanks for playing, ' + userName + '! You got ' + totalCorrect + '/7 questions right!');
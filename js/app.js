'use strict';

var totalCorrect = 0; // Declare a variable for counting the total number of correctly answered questions
// Prompt user for name, respond with a greeting
var userName = prompt('Hello! What is your name?');
alert('Nice to meet you, ' + userName + '. Let\'s play a yes or no guessing game!');
console.log('Username: ' + userName);

// DO WHILE loop
var likesCamping;
var likesCampingBool = true;
do {
  likesCamping = prompt('Do I like to go camping?').toLowerCase();

  // Check if the guess is correct
  if (likesCamping === 'yes' || likesCamping === 'y') {
    alert('You\'re right! I LOVE camping');
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    likesCampingBool = false;
  } else if (likesCamping === 'no' || likesCamping === 'n') {
    alert('Sorry, you missed this one. I LOVE camping!');
  } else {
    alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
  }
  console.log('likesCamping: ' + likesCamping);
} while (likesCampingBool);


// Prompt user and respond based on the answer
var hasDog;
var hasDogBool = true;
do {
  hasDog = prompt('Do I have a dog?').toLowerCase();

  // Check if the guess is correct
  if (hasDog === 'yes' || hasDog === 'y') {
    alert('You\'re right, I have a big fluffy Alaskan Malamute named Sledge!');
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    hasDogBool = false;
  } else if (hasDog === 'no' || hasDog === 'n') {
    alert('Sorry, you missed this one. I have a big fluffy Alaskan Malamute named Sledge!');
  } else {
    alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
  }
  console.log('hasDog: ' + hasDog);
} while (hasDogBool);

// Prompt user and respond based on the answer
var isFunny;
var isFunnyBool = true;
do {
  isFunny = prompt('Do you think I\'m funny?').toLowerCase();

  // Check if the guess is correct
  if (isFunny === 'yes' || isFunny === 'y') {
    alert('Well.... you\'re right, I\'m obviously hilarious!');
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    isFunnyBool = false;
  } else if (isFunny === 'no' || isFunny === 'n') {
    alert('Oof...');
  } else {
    alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
  }
  console.log('isFunny: ' + isFunny);
} while (isFunnyBool);

// Prompt user and respond based on the answer
var isBatman;
var isBatmanBool = true;

do {
  isBatman = prompt('Am I Batman?').toLowerCase();

  // Check if the guess is correct
  if (isBatman === 'yes' || isBatman === 'y') {
    alert('I\'m BATMAN');
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    isBatmanBool = false;
  } else if (isBatman === 'no' || isBatman === 'n') {
    alert('Nope, I\'m definitely batman');
  } else {
    alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
  }
  console.log('isBatman: ' + isBatman);
} while (isBatmanBool);

// Prompt user and respond based on the answer
var isBilingual;
var isBilingualBool = true;
do {
  isBilingual = prompt('Am I bilingual?').toLowerCase();

  // Check if the guess is correct
  if (isBilingual === 'yes' || isBilingual === 'y') {
    alert('Well not quite, but I\'d love to be bilingual someday soon!');
  } else if (isBilingual === 'no' || isBilingual === 'n') {
    alert('Sadly, you\'re right. But I hope to change that soon!');
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    isBilingualBool = false;
  } else {
    alert('Please respond with a simple (Y) Yes or (N) No next time, thanks!');
  }
  console.log('isBilingual: ' + isBilingual);
} while (isBilingualBool);

// Question logic for a random number guessing game
// Random number functionality used from MDN reference
var myMin = 1;
var myMax = 100;
//The maximum is inclusive and the minimum is inclusive
var randomNum = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
console.log('randomNum: ' + randomNum);

// Variable declaration for the random number guessing game
var userNumGuess;
var numGuessCounter = 1;

// While user has made less than 4 guess, stay in the while loop
while (numGuessCounter < 5) {

  // Prompt user and log values
  userNumGuess = prompt('Try and guess my random number between 1 and 100!');
  console.log('userNumGuess: ' + userNumGuess);
  console.log('numGuessCounter: ' + numGuessCounter);

  // Check for null values/empty strings and guesses outside desired range
  if ((userNumGuess < 1 || userNumGuess > 100) || userNumGuess === null || userNumGuess === '') {
    alert('Please guess a NUMBER between 1 and 100');
    console.log('User inputted a null value, an empty string, or a number outside the range');
  } else if (numGuessCounter === 4) { // Checks if user is out of guesses and breaks out of loop
    alert('Sorry, you are out of guesses! The number was ' + randomNum + '.');
    console.log('User ran out of guesses');
    break;
  } else if (userNumGuess == randomNum) { // Checks if guess matches random number (type coerced), break
    alert('NICE! You guessed the number in ' + numGuessCounter + ' out of 4 guesses!');
    console.log('Number was guessed');
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    break;
  } else if (userNumGuess > randomNum) { // Checks if guess is higher than random number, inc counter
    alert('Nope, it\'s lower! You have used ' + numGuessCounter + ' out of 4 guesses');
    console.log('User guess was higher than random number');
    numGuessCounter++;
  } else if (userNumGuess < randomNum) { // Checks guess is lower than random number, inc counter
    alert('Nope, it\'s higher! You have used ' + numGuessCounter + ' out of 4 guess;');
    console.log('User guess was lower than random number');
    numGuessCounter++;
  } else { // Tries to weakly handle unexpected input like random characters or letters
    alert('Hmm... something\'s not right. Please try again guessing a NUMBER between 1and 100.');
    console.log('Unexpected response');
  }
}

// Guessing game from a list of possible answers
var favLanguages = ['html', 'css', 'javascript', 'python']; // Array of answers
console.log('Favorite languages: ' + favLanguages);
var userLangGuess; // Declared variable holder for users guess
var langGuessCounter = 1; // Declared a guess counter
var isRight = false;

// Beginning of while loop for language guessing game
while (langGuessCounter < 7) {

  // Prompt user for a guess
  userLangGuess = prompt('What is ONE of my favorite programming languages?').toLowerCase();
  console.log('User guess: ' + userLangGuess);
  console.log('langGuessCounter: ' + langGuessCounter);
  // Iterate through the list and check if values match
  for (var i = 0; i < favLanguages.length; i++) {
    if (userLangGuess === favLanguages[i]) { // If there's a match, over increment counter to fail while
      alert('YAY! You got it right in ' + langGuessCounter + ' out of 6 guesses!');
      isRight = true;
      break;
    } else {
      isRight = false;
    }
  }
  if (isRight) {
    totalCorrect += 1;
    console.log('Total Correct: ' + totalCorrect);
    break;
  } else {
    alert('Sorry, try again! You have used ' + langGuessCounter + ' out of 6 guesses');
  }

  langGuessCounter++;
}
if (langGuessCounter === 7) {
  alert('Sorry, you ran out of guesses!');
}

// Display a message of all of my favorite languages to the user
var favLanguagesMessage = '';
for (var index = 0; index < favLanguages.length; index++) {
  favLanguagesMessage += favLanguages[index] + ' ';
}
alert('My favorite languages are: ' + favLanguagesMessage);

alert('Thanks for playing, ' + userName + '! You got ' + totalCorrect + '/7 questions right!');
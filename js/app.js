'use strict';

// Prompt user for name, respond with a greeting
var userName = prompt('Hello! What is your name?');
alert('Nice to meet you, ' + userName + '. Let\'s play a yes or no guessing game!');
console.log('Username: ' + userName);

// // Prompt user and respond based on the answer
// var likesCamping = prompt('Do I like to go camping?');
// likesCamping = likesCamping.toLowerCase();

// if(likesCamping === 'yes' || likesCamping === 'y'){
//   alert('You\'re right! I LOVE camping');
// } else if (likesCamping === 'no' || likesCamping === 'n'){
//   alert('Sorry, you missed this one. I LOVE camping!');
// } else {
//   alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
// }
// console.log('likesCamping: ' + likesCamping);

// // Prompt user and respond based on the answer
// var hasDog = prompt('Do I have a dog?');
// hasDog = hasDog.toLowerCase();

// if(hasDog === 'yes' || hasDog === 'y'){
//   alert('You\'re right, I have a big fluffy Alaskan Malamute named Sledge!');
// } else if (hasDog === 'no' || hasDog === 'n'){
//   alert('Sorry, you missed this one. I have a big fluffy Alaskan Malamute named Sledge!');
// } else {
//   alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
// }
// console.log('hasDog: ' + hasDog);

// // Prompt user and respond based on the answer
// var isFunny = prompt('Do you think I\'m funny?');
// isFunny = isFunny.toLowerCase();

// if(isFunny === 'yes' || isFunny === 'y'){
//   alert('Well.... you\'re right, I\'m obviously hilarious!');
// } else if (isFunny === 'no' || isFunny === 'n'){
//   alert('Oof...');
// } else {
//   alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
// }
// console.log('isFunny: ' + isFunny);

// // Prompt user and respond based on the answer
// var isBatman = prompt('Am I Batman?');
// isBatman = isBatman.toLowerCase();

// if(isBatman === 'yes' || isBatman === 'y'){
//   alert('I\'m BATMAN');
// } else if (isBatman === 'no' || isBatman === 'n'){
//   alert('Nope, I\'m definitely batman');
// } else {
//   alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
// }
// console.log('isBatman: ' + isBatman);

// // Prompt user and respond based on the answer
// var isBilingual = prompt('Am I bilingual?');
// isBilingual = isBilingual.toLowerCase();

// if(isBilingual === 'yes' || isBilingual === 'y'){
//   alert('Well not quite, but I\'d love to be bilingual someday soon!');
// } else if (isBilingual === 'no' || isBilingual === 'n'){
//   alert('Sadly, you\'re right. But I hope to change that soon!');
// } else {
//   alert('Please respond with a simple (Y) Yes or (N) No next time, thanks!');
// }
// console.log('isBilingual: ' + isBilingual);


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

while(numGuessCounter < 5){
  userNumGuess = prompt('Try and guess my random number between 1 and 100!');
  console.log('userNumGuess: ' + userNumGuess);
  console.log('numGuessCounter: ' + numGuessCounter);

  if ( (userNumGuess < 1 || userNumGuess > 100) || userNumGuess === null || userNumGuess === ''){
    alert('Please guess a NUMBER between 1 and 100');
    console.log('User inputted a null value, an empty string, or a number outside the range');
  } else if (numGuessCounter === 4){
    alert('Sorry, you are out of guesses! The number was ' + randomNum + '.');
    console.log('User ran out of guesses');
    break;
  } else if (userNumGuess == randomNum){
    alert('NICE! You guessed the number in ' + numGuessCounter + ' out of 4 guesses!');
    console.log('Number was guessed');
    break;
  } else if (userNumGuess > randomNum){
    alert('Nope, it\'s lower! You have used ' + numGuessCounter + ' out of 4 guesses');
    console.log('User guess was higher than random number');
    numGuessCounter++;
  } else if (userNumGuess < randomNum){
    alert('Nope, it\'s higher! You have used ' + numGuessCounter + ' out of 4 guess;');
    console.log('User guess was lower than random number');
    numGuessCounter++;
  }
}

alert('Thanks for playing!');






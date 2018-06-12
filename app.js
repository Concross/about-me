'use strict';

// Prompt user for name, respond with a greeting
var userName = prompt('Hello! What is your name?');
alert('Nice to meet you, ' + userName + '. Let\'s play a yes or no guessing game!');
console.log('Username: ' + userName);

// Prompt user and respond based on the answer
var likesCamping = prompt('Do I like to go camping?').toLowerCase();
if(likesCamping === 'yes' || likesCamping === 'y'){
  alert('You\'re right! I LOVE camping');
} else if (likesCamping === 'no' || likesCamping === 'n'){
  alert('Sorry, you missed this one. I LOVE camping!');
} else {
  alert('Please respond with a simple (Y) Yes or (N) No for the following questions, thanks!');
}
console.log('likesCamping: ' + likesCamping);




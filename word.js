//This file should contain all of the methods which will check the letters guessed versus the random word selected.

// var guess = "r";

// console.log("Selected Word is " + selectedWord);

// var wordToletters = selectedWord.split("");

// var printedWordArray = [];

// console.log("Array of selected word: " + wordToletters);

// function checkGuess(){
// 	for (i = 0; i < wordToletters.length; i++){
// 	if (guess == wordToletters[i]){
// 		printedWordArray.push("You guessed: " + guess);
// 	}else{
// 		printedWordArray.push("_");
// 	}
// 	}
// }

// var printedWord = printedWordArray.join(' ');

// console.log(printedWord);

// exports.checkGuess = checkGuess();

//in class exercise explanation

var selectedWord = require('./game.js')

var Letter = require('./letter.js')

var Word = function Word(value) {
	//The word we want our user to guess
	this.value = value;
	//An array of Letter objects that represent our word
	this.letters = value.split().map(function(v){
		return new Letter(v);
	});
}

// Word.prototype.show = function() {
// 	// takes Letters and calls .show on each one
// 	// collectes them into a new array
// 	// calls .join to return a string
// 	return this.letters.map(function (v) {
// 		return v.show();
// 	})
// 	.join();
// }

// //modify any correctly guesse letter to set visible to ture and then it will return true or false depeneding if a correct letter was guessed.
// Word.prototype.guess = function(guess) {
// 	this.letters.map(function(l) {
// 		if (guess === l.value) {
// 			l.visible == true;
// 			return true;
// 		}
// 		else {
// 			return false;
// 		}
// 	})
// 	.some (function(v) {
// 		return v;
// 	});
// }

// //Return true or false depending on if the workd has been completely guesssed
// Word.prototype.finished = function() {
// 	return [this.show() === this.value];
// }

word1 = new Word(selectedWord);

console.log(word1);

exports = Word;
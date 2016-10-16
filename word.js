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

function Word(value) {
	//The word we want our user to guess
	this.value = value;
	//An array of Letter objects that represent our word
	this.letters = value
		.split('')
		// The parameter to the following map call is called an arr
		// It is short had for an anonymus funcitonwith a few spe
		// Arrow functions were added to JavaScript fair recently 
		.map(l => Letter(l));
}


Word.prototype.render = function() {
	// takes Letters and calls .show on each one
	// collectes them into a new array
	// calls .join to return a string
	return this.letters
		.map(l => l.render()) 
	.join('');
}

//Makes every letter in the word visible

Word.prototype.revel = function() {
	this.Letters
		.forEach(l => {l.visible = true});
	return this;
}

// //modify any correctly guesse letter to set visible to ture and then it will return true or false depeneding if a correct letter was guessed.
Word.prototype.guess = function(guess) {
	this.letters
		.map(l => {
			var match = (guess === l.value);
			l.visible = l.visible || match;
			return match;
		})
	.some (v => v);
}

//Return true or false depending on if the workd has been completely guesssed
Word.prototype.complete = function() {
	return this.render() === this.value;
}

word1 = new Word(selectedWord);

console.log(word1);

module.exports = Word;
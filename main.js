//will contain the logic of your app. Running it in Terminal/Bash will start the game.

var word = require('./word.js');
var inquirer = require("inquirer");

var guess;

var count = 9;

for (i = 0; i < count; i++){
	inquirer.prompt({
		name: "guess",
		message: "Guess a letter..."
	}).then(function(answer){
		guess = answer.guess;
		console.log(guess);
		exports.guess = guess;
		word.checkGuess();
	});

}


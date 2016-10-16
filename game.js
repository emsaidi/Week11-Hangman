//This file will randomly select a word for the player

var randomWords = require('random-words');



var wordBank = randomWords({ exactly: 20});

var selectedWord = function selectWord(){
	return wordBank[Math.floor((Math.random() * wordBank.length))];
};

exports = selectedWord;
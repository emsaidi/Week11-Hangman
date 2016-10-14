// should control whether or not a letter appears as a "_" or as itself on-screen.

//on class excersise

function Letter(value) {
	this.value = value;
	this.visible = false;
}

Letter.prototype.show = function() {
	// ternary operator below
	return.(this.visible) ? this.value : '_';

	//same as the line 11
	// if (this.visible){
	// 	return this.value;
	// }else {
	// 	return '_';
	// }
}

exports = Letter;
// should control whether or not a letter appears as a "_" or as itself on-screen.

//on class excersise

function Letter(value) {
	//Store the character value in the Letter object
	this.value = value;
	// If the letter is a space, visiable defaults to true
	// Otherwise visible defaults to false
	this.visible = (value === ' ');
}

/*
* Returns the stored character if it is visible, or _ if not
*/

Letter.prototype.render = function() {
	// ternary operator below, read this as:
	// "if this. visible is true return this.value otherwise return"
	return (this.visible) ? this.value : '_';

	//same as the line 11
	// if (this.visible){
	// 	return this.value;
	// }else {
	// 	return '_';
	// }
}

module.exports = Letter;
'use strict';

/**
* FUNCTION: CustomError( msg )
*	Create a new object, which prototypically inherits from the Error constructor.
*
* @constructor
* @param {String} msg - error message
* @returns {CustomError} custom error instance
*/
function CustomError( msg ) {
	this.name = 'CustomError';
	if ( msg ) {
		this.message = msg;
	}
	this.stack = ( new Error() ).stack;
	return this;
} // end FUNCTION CustomError()

/**
* Create a prototype which inherits from the parent prototype.
*/
CustomError.prototype = Object.create( Error.prototype );

/**
* Set the constructor.
*/
CustomError.prototype.constructor = CustomError;


// EXPORTS //

module.exports = CustomError;

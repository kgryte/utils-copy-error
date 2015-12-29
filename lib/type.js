'use strict';

// MODULES //

var getKeys = require( 'object-keys' );
var CTORS = require( './ctors.js' );


// VARIABLES //

var KEYS = getKeys( CTORS );
var LEN = KEYS.length;


// TYPE NAME //

/**
* FUNCTION: typeName( error )
*	Returns the error type.
*
* @param {Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|RangeError|EvalError} error - input error
* @returns {String|Null} error type or null
*/
function typeName( error ) {
	var i;
	if ( !( error instanceof Error ) ) {
		throw new TypeError( 'invalid input argument. Must provide an error object. Value: `' + error + '`.' );
	}
	if ( error.constructor && error.constructor.name ) {
		return error.constructor.name;
	}
	for ( i = 0; i < LEN; i++ ) {
		if ( error instanceof CTORS[ KEYS[i] ] ) {
			return KEYS[ i ];
		}
	}
	return null;
} // end FUNCTION typeName()


// EXPORTS //

module.exports = typeName;

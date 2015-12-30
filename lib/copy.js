'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();


// COPY ERROR //

/**
* FUNCTION: copy( error )
*	Copies an error.
*
* @param {Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|RangeError|EvalError} error - error to copy
* @returns {Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|RangeError|EvalError} error copy
*/
function copy( error ) {
	/* jshint newcap:false */
	var keys;
	var err;
	var i;
	if ( !( error instanceof Error ) ) {
		throw new TypeError( 'invalid input argument. Must provide an error object. Value: `' + error + '`.' );
	}
	// Create a new error and copy over standard error properties...
	err = new error.constructor( error.message );
	err.name = error.name;
	if ( error.stack ) {
		err.stack = error.stack;
	} else {
		delete err.stack;
	}
	// Node.js specific (system errors)...
	if ( error.code ) {
		err.code = error.code;
	}
	if ( error.errno ) {
		err.errno = error.errno;
	}
	if ( error.syscall ) {
		err.syscall = error.syscall;
	}
	// Any enumerable properties...
	keys = getKeys( error );
	for ( i = 0; i < keys.length; i++ ) {
		err[ keys[ i ] ] = error[ keys[ i ] ];
	}
	return err;
} // end FUNCTION copy()


// EXPORTS //

module.exports = copy;

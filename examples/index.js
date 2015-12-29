'use strict';

var copy = require( './../lib' );

var err1;
var err2;

err1 = new Error( 'beep' );
err2 = copy( err1 );

console.log( err1 === err2 );
// returns false

console.log( err1.message === err2.message );
// returns true

err1 = new TypeError( 'bad type' );
err2 = copy (err1 );

console.log( err1 === err2 );
// returns false

console.log( err1.stack === err2.stack );
// returns true

err1 = new RangeError( 'invalid value' );
err2 = copy( err1 );

console.log( err1 === err2 );
// returns false

console.log( err1.name === err2.name );
// returns true

'use strict';

// MODULES //

var test = require( 'tape' );
var CTORS = require( './../lib/ctors.js' );


// TESTS //

test( 'error constructors are exposed via an exported array', function test( t ) {
	t.ok( Array.isArray( CTORS ), 'export is an array' );
	t.end();
});

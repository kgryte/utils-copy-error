'use strict';

// MODULES //

var test = require( 'tape' );
var CTORS = require( './../lib/ctors.js' );


// TESTS //

test( 'error constructors are exposed via an exported object', function test( t ) {
	t.ok( typeof CTORS === 'object', 'export is an object' );
	t.end()
});

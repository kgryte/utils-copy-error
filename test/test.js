'use strict';

// MODULES //

var test = require( 'tape' );
var copy = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof copy === 'function', 'export is a function' );
	t.end();
});

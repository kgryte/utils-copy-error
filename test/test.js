'use strict';

// MODULES //

var test = require( 'tape' );
var copy = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.plan( 1 );
	t.ok( typeof copy === 'function', 'export is a function' );
});

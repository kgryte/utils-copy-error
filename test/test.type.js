'use strict';

// MODULES //

var test = require( 'tape' );
var typeName = require( './../lib/type.js' );


// TESTS //

test( 'file exports a function', function test( t ) {
	t.ok( typeof typeName === 'function', 'export is a function' );
	t.end();
});

test( 'if not provided an error instance, the function returns null', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( typeName( values[ i ] ), null, 'returns `null` when provided a ' + ( typeof values[ i ] ) );
	}
	t.end();
});

test( 'if an error instance has a constructor name, the function returns the name', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		new Error( 'beep' ),
		new SyntaxError( 'boop' ),
		new TypeError( 'bop' ),
		new URIError( 'bap' ),
		new ReferenceError( 'bip' ),
		new EvalError( 'bup' )
	];

	expected = [
		'Error',
		'SyntaxError',
		'TypeError',
		'URIError',
		'ReferenceError',
		'EvalError'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( typeName( values[i] ), expected[ i ], 'returns the constructor name: ' + expected[ i ] );
	}
	t.end();
});

test( 'if an error instance lacks a constructor or the constructor.name property is not supported, the function should check against known error constructors', function test(t ) {
	var expected;
	var values;
	var err;
	var i;

	values = [
		new Error( 'beep' ),
		new SyntaxError( 'boop' ),
		new TypeError( 'bop' ),
		new URIError( 'bap' ),
		new ReferenceError( 'bip' ),
		new EvalError( 'bup' )
	];

	expected = [
		'Error',
		'SyntaxError',
		'TypeError',
		'URIError',
		'ReferenceError',
		'EvalError'
	];

	for ( i = 0; i < values.length; i++ ) {
		err = values[ i ];
		if ( err.constructor.name ) {
			delete err.constructor.name;
			t.equal( typeName( err ), expected[ i ], 'returns the constructor name (missing name): ' + expected[ i ] );
		}
		delete err.constructor;
		t.equal( typeName( err ), expected[ i ], 'returns the constructor name (missing constructor): ' + expected[ i ] );
	}
	t.end();
});

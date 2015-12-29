'use strict';

// MODULES //

var test = require( 'tape' );
var copy = require( './../lib/copy.js' );


// TESTS //

test( 'file exports a function', function test( t ) {
	t.ok( typeof copy === 'function', 'export is a function' );
	t.end();
});

test( 'if not provided an error instance, the function throws an error', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[ i ] ) );
	}
	t.end();

	function badValue( value ) {
		return function() {
			copy( value );
		};
	}
});

test( 'generic <Error> object', function test( t ) {
	var error = new Error( 'beep' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof Error, 'instance of Error' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

test( '<TypeError>', function test( t ) {
	var error = new TypeError( 'invalid type' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof TypeError, 'instance of TypeError' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

test( '<RangeError>', function test( t ) {
	var error = new RangeError( 'out-of-range' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof RangeError, 'instance of RangeError' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

test( '<SyntaxError>', function test( t ) {
	var error = new SyntaxError( 'bad syntax' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof SyntaxError, 'instance of SyntaxError' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

test( '<ReferenceError>', function test( t ) {
	var error = new ReferenceError( 'undefined variable' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof ReferenceError, 'instance of ReferenceError' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

test( '<EvalError>', function test( t ) {
	var error = new EvalError( 'eval error' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof EvalError, 'instance of EvalError' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

test( '<URIError>', function test( t ) {
	var error = new URIError( 'bad URI' );
	var err = copy( error );

	t.ok( error !== err, 'separate instances' );
	t.ok( err instanceof URIError, 'instance of URIError' );
	t.equal( error.message, err.message, 'equal messages' );
	t.equal( error.name, err.name, 'equal names' );
	t.equal( error.stack, err.stack, 'equal stack trace' );
	t.end();
});

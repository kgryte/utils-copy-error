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
	var err1 = new Error( 'beep' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof Error, 'instance of Error' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

test( '<TypeError>', function test( t ) {
	var err1 = new TypeError( 'invalid type' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof TypeError, 'instance of TypeError' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

test( '<RangeError>', function test( t ) {
	var err1 = new RangeError( 'out-of-range' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof RangeError, 'instance of RangeError' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

test( '<SyntaxError>', function test( t ) {
	var err1 = new SyntaxError( 'bad syntax' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof SyntaxError, 'instance of SyntaxError' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

test( '<ReferenceError>', function test( t ) {
	var err1 = new ReferenceError( 'undefined variable' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof ReferenceError, 'instance of ReferenceError' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

test( '<EvalError>', function test( t ) {
	var err1 = new EvalError( 'eval err1' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof EvalError, 'instance of EvalError' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

test( '<URIError>', function test( t ) {
	var err1 = new URIError( 'bad URI' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof URIError, 'instance of URIError' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

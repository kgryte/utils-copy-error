'use strict';

// MODULES //

var test = require( 'tape' );
var hasClass = require( 'detect-class-support' )();
var copy = require( './../lib/copy.js' );


// FIXTURES //

var CustomError1 = require( './fixtures/customerror.proto.js' );
var createClass = require( './fixtures/customerror.subclass.js' );


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

test( 'environments missing a `stack` property', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	delete err1.stack;

	err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof Error, 'instance of Error' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err2.stack, void 0, 'no stack trace' );
	t.end();
});

test( '`code` property (Node.js)', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	err1.code = 43;

	err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof Error, 'instance of Error' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack traces' );
	t.equal( err1.code, err2.code, 'equal codes' );
	t.end();
});

test( '`errno` property (Node.js)', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	err1.errno = 'EACCES';

	err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof Error, 'instance of Error' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack traces' );
	t.equal( err1.code, err2.code, 'equal errno' );
	t.end();
});

test( '`syscall` property (Node.js)', function test( t ) {
	var err1;
	var err2;

	err1 = new Error( 'beep' );
	err1.syscall = 'boop';

	err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof Error, 'instance of Error' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack traces' );
	t.equal( err1.syscall, err2.syscall, 'equal syscall values' );
	t.end();
});

test( 'custom errors (proto)', function test( t ) {
	var err1 = new CustomError1( 'custom error' );
	var err2 = copy( err1 );

	t.ok( err1 !== err2, 'separate instances' );
	t.ok( err2 instanceof CustomError1, 'instance of CustomError' );
	t.ok( err2 instanceof Error, 'instance of Error' );
	t.equal( err1.message, err2.message, 'equal messages' );
	t.equal( err1.name, err2.name, 'equal names' );
	t.equal( err1.stack, err2.stack, 'equal stack trace' );
	t.end();
});

if ( hasClass ) {
	var CustomError2 = createClass();
	test( 'custom errors (subclass; ES2015)', function test( t ) {
		var err1 = new CustomError2( 'custom error' );
		var err2 = copy( err1 );

		t.ok( err1 !== err2, 'separate instances' );
		t.ok( err2 instanceof CustomError2, 'instance of CustomError' );
		t.ok( err2 instanceof Error, 'instance of Error' );
		t.equal( err1.message, err2.message, 'equal messages' );
		t.equal( err1.name, err2.name, 'equal names' );
		t.equal( err1.stack, err2.stack, 'equal stack trace' );
		t.end();
	});
}

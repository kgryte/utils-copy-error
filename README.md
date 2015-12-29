Copy Error
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Copy an `error` object.


## Installation

``` bash
$ npm install utils-copy-error
```


## Usage

``` javascript
var copy = require( 'utils-copy-error' );
```

#### copy( error )

Copy an `error` object.

``` javascript
var error = new TypeError( 'beep' );

var err = copy( error );
// returns <TypeError>
```


## Notes

*	Supported `error` types:
	-	`Error`
	- 	`URIError`
	-	`ReferenceError`
	-	`SyntaxError`
	-	`RangeError`
	-	`EvalError`
	-	`TypeError`


## Examples

``` javascript
var copy = require( 'utils-copy-error' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-copy-error.svg
[npm-url]: https://npmjs.org/package/utils-copy-error

[build-image]: http://img.shields.io/travis/kgryte/utils-copy-error/master.svg
[build-url]: https://travis-ci.org/kgryte/utils-copy-error

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/utils-copy-error/master.svg
[coverage-url]: https://codecov.io/github/kgryte/utils-copy-error?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-copy-error.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-copy-error

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-copy-error.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-copy-error

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-copy-error.svg
[github-issues-url]: https://github.com/kgryte/utils-copy-error/issues

[browsers-image]: https://ci.testling.com/kgryte/utils-copy-error.png
[browsers-url]: https://ci.testling.com/kgryte/utils-copy-error

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

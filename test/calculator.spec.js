var should = require('should');
var calculator = require('../source/calculator');

describe('calculator spec', function() {
/*	it('should fail', function() {
		should(1).equal(0);
	});
*/
	it('should calculator exist', function() {
		should(calculator).be.ok;
	});

	it('should return 0 for empty string', function() {
		var result = calculator.add('');
		should(result).equal(0);
	});

	it('should return 1 for 1', function() {
		var result = calculator.add('1');
		should(result).equal(1);
	});

	it('should return 2 for 2', function() {
		var result = calculator.add('2');
		should(result).equal(2);
	});

	it('should return 3 for 1, 2', function() {
		var result = calculator.add('1, 2');
		should(result).equal(3);
	});

	it('should return 5 for 2,3', function() {
		var result = calculator.add('2,3');
		should(result).equal(5);
	});

	it('should return 10 for 1,2,3,4', function() {
		var result = calculator.add('1,2,3,4');
		should(result).equal(10);
	});

	it('should return 20 for 2,5,6,7', function() {
		var result = calculator.add('2,5,6,7');
		should(result).equal(20);
	});

	it('it should return 6 for 1\\n2,3', function () {
		var result = calculator.add('1\n2,3');
		should(result).equal(6);
	});

	describe('diferent delimiters', function () {
		it('should return 3 with custom delimiter', function () {
			var result = calculator.add('//;\n1;2');
			should(result).equal(3);
		})
	});

	describe('negatives', function () {
		it('should throw error for negatives', function () {
			(function(){
				calculator.add('1,2,-3');
			}).should.throw('negatives not allowed');
		})
	})

});
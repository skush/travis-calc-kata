// string calculator source file
// tdd kata

var calculator = {
	add: function(str) {
		var defaultDelimiter = /\n|,/;
		if (str.indexOf('//') === 0) {
			var customDelimeter = str.substr(2, 1);
			console.log(customDelimeter);
			defaultDelimiter = new RegExp(customDelimeter);
			str = str.substr(4);
		}
		var numbers = str.split(defaultDelimiter);
		var integers = numbers.map(function (value) { return +value; }); //parseInt(value)

		var hasNegatives = integers.some(function (value) {
			return value < 0;
		});
		if (hasNegatives) {
			throw new Error('negatives not allowed');
		}
		console.log(integers);

/*		if (numbers.length == 1) {
			return +str;
		}
		return +numbers[0] + +numbers[	1];
*/
		return integers.reduce(function (memo, value) {
			return memo + value;
		}, 0);
	}
}

module.exports = calculator;
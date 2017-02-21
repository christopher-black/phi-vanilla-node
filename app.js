var numOne = 4;
var numTwo = 7;
//console.log(numOne + numTwo);

function multiply(x, y) {
  return x * y;
}

//console.log(multiply(2, 4));

// require navigates to file, finds exports
// and returns result
var someNumber = require('./some-number.js');
console.log(someNumber);

var hello = require('./hello.js');
console.log(hello);

var someObject = require('./some-object.js');
console.log(someObject);

var someFunction = require('./some-function.js');
console.log(someFunction.greet("Chris"));

var calc = require('./calculator.js');
console.log(calc.multiply(3, 4));
console.log(calc.divide(8, 4));

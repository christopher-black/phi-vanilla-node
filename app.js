// require navigates to file, finds exports
// and returns result
var someNumber = require('./modules/utils/some-number.js');
console.log(someNumber);

var hello = require('./modules/utils/hello.js');
console.log(hello);

var someObject = require('./modules/utils/some-object.js');
console.log(someObject);

var someFunction = require('./modules/utils/some-function.js');
console.log(someFunction.greet("Chris"));

var calc = require('./modules/calculator.js');
console.log(calc.multiply(3, 4));
console.log(calc.divide(8, 4));
console.log(calc.sayHello("Joe"));

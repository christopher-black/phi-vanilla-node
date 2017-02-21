var hello = require('./utils/hello.js');

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sayHello(name) {
  return "Hi " + name;
}

module.exports = {
  multiply: multiply,
  divide: divide,
  add: add,
  subtract: subtract,
  sayHello: sayHello
}

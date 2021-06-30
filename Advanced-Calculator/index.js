'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let hasil = new Calculator(3);
let output = hasil.add(3).subtract(2).multiply(2).divide(2).square(2).squareRoot().circleArea(4);

console.log(output);
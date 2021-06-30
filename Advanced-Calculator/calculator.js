'use strict'

class Calculator 
{
  //write your code here
  constructor (angka) {
    this.hasil = angka;
  }

  add (num) {
      this.hasil = this.hasil + num;
      return this;
  }

  subtract (num) {
      this.hasil = this.hasil - num;
      return this;
  }

  multiply (num) {
      this.hasil = this.hasil * num;
      return this;
  }

  divide (num) {
      this.hasil = this.hasil / num;
      return this;
  }

  square (num) {
      this.hasil = Math.pow(this.hasil, num)
      return this
  }

  squareRoot (num) {
      this.hasil = Math.sqrt(this.hasil, num)
      return this
  }
  
  circleArea(num){
    this.hasil = Math.PI * num * num
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator

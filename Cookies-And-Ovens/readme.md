# Cookies and Ovens

```JavaScript
// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Oven {
    constructor() {
      this._cake = null;
    }
  
    set cook(cakeName) {
      return this._cake = cakeName
    }
  
    bake(time){
      let donenessLevel = ['mentah', 'hampir matang', 'matang','hangus']
      let bakeTime = this._cake._bakeTime
    //   console.log(this._cake._bakeTime)
  
      for (let i = 0; i <= time; i += 5) {
        console.log(`Kamu telah memasak selama: ${i} minutes`)
        if (i >= 0 && i < bakeTime / 2) {
            console.log(`Kue ini masih ${donenessLevel[0]}`)
        } else if (i === bakeTime - 10) {
            console.log(`Kue mu ${donenessLevel[0]}`)
        } else if (i === bakeTime - 5) {
            console.log(`Kue mu ${donenessLevel[1]}`)
        } else if (i === bakeTime) {
            console.log(`Kue mu ${donenessLevel[2]}!!!`)
        } else {
            console.log(`Kue mu ${donenessLevel[3]}!!!`)
        }
  
        console.log("--------------------------------------------------------")
      }
    }
  }
  
  class Cookie {
    constructor() {
      this._bakeTime = 10;
    }
  }
  
  class ChocolateCake extends Cookie {
    constructor() {
      super();
      this._bakeTime = 20;
    }
  }
  
  class NutCake extends Cookie {
    constructor() {
      super();
      this._bakeTime = 30;
    }
  }
  
  class CheeseCake extends Cookie {
    constructor() {
      super();
      this._bakeTime = 35;
    }
  }
  
  let oven = new Oven()
  let cokelat = new ChocolateCake()
  let nut = new NutCake()
  let cheese = new CheeseCake()
  
  oven.cook = cokelat
  oven.bake(30)
//   oven.cook = nut
//   oven.bake(30)
//   oven.cook = cheese
//   oven.bake(30)
```
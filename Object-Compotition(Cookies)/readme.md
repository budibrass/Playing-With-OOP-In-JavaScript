# Objcet Compotition (Cookies)

```JavaScript
const fs = require('fs')
const options = fs.readFileSync('./cookies.txt', 'utf8').split('\n')
const dataIngredients = fs.readFileSync('./ingredients.txt', 'utf8').split('\n')

//class Cookie merupakan class PARENT dari semua COOKIE
class Cookie {
  constructor (name, recipe) {
    this.name = name
    this.status = 'mentah'
    this.ingredients = this.choosingIngredients(recipe)
  }

  choosingIngredients (recipe) {
    const ingredients = []
    for (const key in recipe) {
      ingredients.push(new Ingredients({ name: key, amount: recipe[key] }))
    }
    return ingredients
  }

  bake () {
    this.status = 'selesai dimasak'
  }
}

class Ingredients {
  constructor (data) {
    this.name = data['name']
    this.amount = data['amount']
  }
}

//pewarisan dari kelas Cookie
class PeanutButter extends Cookie {
  constructor (name, recipe) {
    super(name, recipe)
    this.peanut_count = 100
  }
}

//pewarisan dari kelas Cookie
class ChocolateChip extends Cookie {
  constructor (name, recipe) {
    super(name, recipe)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor (name, recipe) {
    super(name, recipe)
    this.other_cookie_count = 150
  }
}


class CookieFactory {
  static create (cookies, dataIngredients) {
    const orderedCookies = []
    const parsingIngredients = CookieFactory.parsingIngredients(dataIngredients)

    cookies.forEach(name => {
      switch (name) {
        case 'peanut butter':
          orderedCookies.push(new PeanutButter(name, parsingIngredients[name]))
          break
        case 'chocolate chip':
          orderedCookies.push(new ChocolateChip(name, parsingIngredients[name]))
          break
        default:
          orderedCookies.push(new OtherCookie(name, parsingIngredients[name]))
          break
      }
    })
    return orderedCookies
  }

  //static method untuk menentukan hari
  static cookieRecommendation (day, batchOfCookies) {
    
    if (day === 'tuesday') {
      let isContainSugar = false
      const result = []
      for (let i = 0; i < batchOfCookies.length; i++) {
        isContainSugar = false
        const check = batchOfCookies[i]['ingredients']
        
        for (let j = 0; j < check.length; j++) {
          if (check[j]['name'] === 'sugar') {
            isContainSugar = true
            break
          }
        }
        if (!isContainSugar) result.push(batchOfCookies[i])
      }
      return result
    }
  }

  static parsingIngredients (dataIngredients) {
    const recipes = {}
    dataIngredients.forEach(cookie => {
      const name = (cookie.split('=')[0]).trim()
      const ingre = (cookie.split('=')[1]).trim().split(',')
      const recipe = {}
      ingre.forEach(element => {
          recipe[(element.split(':')[1]).trim()] = (element.split(':')[0]).trim()
        })
      recipes[name] = recipe
    })
    return recipes
  }
}

/* RELEASE 0 */
const batchOfCookies = CookieFactory.create(options, dataIngredients)
console.log(batchOfCookies)

/* RELEASE 1 */
const sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batchOfCookies)
console.log(`\nKue Bebas Gula :\n======================`)
for (let i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i].name)
}
```
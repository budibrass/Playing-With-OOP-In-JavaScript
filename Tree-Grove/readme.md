# Tree Grove

Disini kita akan belajar mengenai Composition dan Agregation

- index.js
```JavaScript
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove 
{
  constructor () {
    this._treeInGrove = []
  }

  // input your trees data !
  // parameter ke-1: nama pohon
  // parameter ke-2: umur pohon ketika ditanam di taman tersebut
  // pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
  // parameter ke-4: umur mature pohon tersebut
  // parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
  inputTree (treeName, treeInitAge, treeInitHeight, treeMatureAge, healthInitStatus) {
    switch (treeName) {
      case 'MangoTree':
        this._treeInGrove.push(new MangoTree(treeName, treeInitAge, treeInitHeight, treeMatureAge, healthInitStatus))
        break
      case 'AppleTree':
        this._treeInGrove.push(new AppleTree(treeName, treeInitAge, treeInitHeight, treeMatureAge, healthInitStatus))
        break
      case 'PearTree':
        this._treeInGrove.push(new PearTree(treeName, treeInitAge, treeInitHeight, treeMatureAge, healthInitStatus))
        break
    }
  }

  nextYear () {
      for (const key in this._treeInGrove) {
        this._treeInGrove[key].grow()
      }
  }

  showAges () {
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━`)
      console.log(`Tree's Ages in Tree Grove`)
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━`)
      for (const key in this._treeInGrove) {
        console.log(`${this._treeInGrove[key]._treeName}: ${this._treeInGrove[key].age} years old`)
      }
  }

  showTrees () {
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      console.log(`List of The Tree in Tree Grove`)
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      for (const key in this._treeInGrove) {
        console.log(`Tree ${Number(key) + 1} name: ${this._treeInGrove[key].treeName}`)
      }
  }

  showMatureTrees () {
      let isMature = false
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      console.log(`List of The Mature Tree in Tree Grove`)
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      for (const key in this._treeInGrove) {
        if (this._treeInGrove[key]._age >= this._treeInGrove[key].matureAge && this._treeInGrove[key].healthy) {
          console.log(`Tree number ${Number(key) + 1}: ${this._treeInGrove[key]._treeName} (matured)`)
          isMature = true
        }
      }
      if (!isMature) console.log(`No mature tree~`)
  }

  showDeadTrees () {
      let isDead = false
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      console.log(`List of The Dead Tree in Tree Grove`)
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      for (const key in this._treeInGrove) {
        if (this._treeInGrove[key]._age > this._treeInGrove[key].maxAge) {
          console.log(`Tree number ${Number(key) + 1}: ${this._treeInGrove[key]._treeName} (matured)`)
          isDead = true
        }
      }
      if (!isDead) console.log(`No dead tree~`)
  }
}

var grove = new TreeGrove()

grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
```

- apple_tree.js
```JavaScript
const tree = require('./fruit_tree.js')
const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class AppleTree extends FruitTree 
{
  // berikan parameter di class pohon apel
  constructor (treeName = 'AppleTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 6, healthInitStatus = true, growRate = 0.4, maxGrowthAge = 21, maxAge = 25) {
    super(treeName, treeInitAge, treeInitHeight, matureAge, healthInitStatus, growRate, maxGrowthAge, maxAge)
  }

  //untuk memproduksi buah
  produceFruits () {
    // jika buah sudah sampai masa produksi
    if (this.age >= this.matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 10
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Apple()
        if (fruit.quality === 'good') {
          this.good++
        } else {
          this.bad++
        }
        this.fruits.push(fruit)
      }
    }
  }
}

class Apple extends Fruit {
  // produksi apel
  constructor () {
    super('red')
    // this.quality
    this._astrigency = true
  }
}

module.exports = AppleTree
```

- fruit_tree.js
```JavaScript
class FruitTree 
{
  // Berikan parameter pada kelas FruiTree
  constructor (treeName = 'FruitTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 3, healthInitStatus = true, growRate = 0.4, maxGrowthAge = 17, maxAge = 20) {
    
    this._treeName = treeName
    this._age = treeInitAge
    this._height = treeInitHeight
    this._fruits = []
    this._harvested = 0
    this._healthy = healthInitStatus
    this._matureAge = matureAge
    this._maxAge = maxAge
    this._maxGrowthAge = maxGrowthAge
    this._maxFruits = 50
    this._good = 0
    this._bad = 0
    this._growRate = growRate
  }

  set good(number) {
    this._good = number;
  }

  set bad(number) {
    this._bad = number;
  }

  get good() {
    return this._good
  }

  get bad() {
    return this._bad
  }

  get healthy () {
    return this._healthy
  }

  get matureAge () {
    return this._matureAge
  }

  get maxGrowthAge () {
    return this._maxGrowthAge
  }

  get maxAge () {
    return this._maxAge
  }

  // get isMatured () 
  // {

  // }

  get growRate () {
    return this._growRate
  }

  get treeName () {
    return this._treeName
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(1)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthy
  }

  get harvested () {
    return this._harvested
  }

  // Pertumbuhan pohon
  grow () 
  {
    // Penambahan umur pohon setiap 1 tahun
    this._age++

    // Tinggi pohon random
    if (this.age < this.maxGrowthAge) {
      this._height += this.growRate
    }

    // Set umur max pohon
    if (this._age < this._maxAge) {
      this._healthy = true
    } else {
      this._healthy = false
    }
  }

  // Produksi buah
  produceFruits () 
  {
    // Kondisi jika masa produksi telah sampai
    if (this._age >= this._matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 30
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Fruit()
        const quality = fruit.quality
        if (quality === 'good') {
          this._good++
        } else {
          this._bad++
        }
        this._fruits.push(quality)
      }
    }
  }

  // Panen 
  harvest () {
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`
    this._fruits = []
    this._bad = 0
    this._good = 0
  }
}

class Fruit 
{
  // Kualitas buah
  constructor (colour = 'white') {
    this.quality = this.getQuality()
    this._colour = colour
  }

  getQuality () {
    return ((Math.floor(Math.random() * 50)) % 2 === 0) ? 'good' : 'bad'
  }
}

module.exports = { FruitTree, Fruit }
```

- mango_tree.js
```JavaScript
const tree = require('./fruit_tree.js')
const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class MangoTree extends FruitTree 
{
  // berikan parameter di class pohon mangga
  constructor (treeName = 'MangoTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 5, healthInitStatus = true, growRate = 0.3, maxGrowthAge = 18, maxAge = 22) {
    super(treeName, treeInitAge, treeInitHeight, matureAge, healthInitStatus, growRate, maxGrowthAge, maxAge)
  }

  // grow () 
  // {
  //   // Penambahan umur pohon setiap 1 tahun
  //   this._age++

  //   // Tinggi pohon random
  //   if (this.age < this.maxGrowthAge) {
  //     this._height += this.growRate
  //   }

  //   // Set umur max pohon
  //   if (this._age < this._maxAge) {
  //     this._healthy = true
  //   } else {
  //     this._healthy = false
  //   }

  // untuk memproduksi buah
  produceFruits () {
    // jika buah sudah sampai masa produksi
    if (this.age >= this.matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 25
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Mango()
        const quality = fruit.quality
        if (quality === 'good') {
          this.good++
        } else {
          this.bad++
        }
        this.fruits.push(quality)
      }
    }
  }
}

class Mango extends Fruit {
  // produksi apel
  constructor () {
    super('yellow')
    // this.quality
    this._containMangiferin = true
  }
}

module.exports = MangoTree
```

- pear_tree.js
```JavaScript
const tree = require('./fruit_tree.js')
const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class PearTree extends FruitTree 
{
  // berikan parameter di class pohon pear
  constructor (treeName = 'PearTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 2, healthInitStatus = true, growRate = 0.15, maxGrowthAge = 16, maxAge = 17) {
    super(treeName, treeInitAge, treeInitHeight, matureAge, healthInitStatus, growRate, maxGrowthAge, maxAge)
  }

  // untuk memproduksi buah
  produceFruits () {
    // jika buah sudah sampai masa produksi
    if (this.age >= this.matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 17
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Pear()
        if (fruit.quality === 'good') {
          this.good++
        } else {
          this.bad++
        }
        this.fruits.push(fruit)
      }
    }
  }
}

class Pear extends Fruit {
  // produksi pear
  constructor () {
    super('chartreuse green')
    // this.quality
    this._roughTexture = true
  }
}

module.exports = PearTree
```
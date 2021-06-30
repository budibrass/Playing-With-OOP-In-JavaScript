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
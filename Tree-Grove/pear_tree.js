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
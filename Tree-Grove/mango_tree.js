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
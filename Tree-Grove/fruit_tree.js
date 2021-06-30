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
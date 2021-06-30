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


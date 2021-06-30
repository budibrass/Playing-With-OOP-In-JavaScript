# Parsing Data

```JavaScript
"use strict"

const fs = require("fs");

class Person {
  constructor(id,first_name,last_name,email,phone,created_at) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.created_at = created_at;
  }
}

class PersonParser {
  constructor(file) {
    this._file = file
    this._people = []
    this.dataPerson();
  }

  dataPerson(){
    let data = fs.readFileSync(this._file, 'utf-8').split('\n');
    for(let i = 0; i < data.length; i++)
    {
      // console.log(data[i]);
      let tmp = data[i].split(',');
      // console.log(tmp);
      let instancePerson = new Person(tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5])
      this._people.push(instancePerson)
    }
  }

  get people() {
    return this._people;
  }

  get file(){
    return this._file;
  }

  addPerson(newPerson) {
    this._people.push(newPerson);
  }

  // id,first_name,last_name,email,phone,created_at
  save(){
    let tmpData = [];
    for(let i = 0; i < this._people.length; i++){
      let dataJoin = `${this._people[i].id},${this._people[i].first_name},${this._people[i].last_name},${this._people[i].email},${this._people[i].phone},${this._people[i].created_at}`
      // console.log(dataJoin)
      tmpData.push(dataJoin)
    }
    // console.log(tmpData)
    fs.writeFileSync(this._file, tmpData.join('\n'),'utf-8')
  }
}

// id,first_name,last_name,email,phone,created_at
let parser = new PersonParser('people.csv')
// console.log(parser);
parser.addPerson(new Person('201','budi','santoso','budi@gmail.com','0812','1-782-671-2356,2013-12-13T15:29:38-08:00'))
parser.save();
console.log(`There are ${parser.people.length} people in the file '${parser.file}'.`)
```
'use strict';
function Animal(name, type) {
  this.name = name;
  this.type = type;
}

class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animal) {
    if (animal.type == 'cat' || animal.type == 'dog') {
      this.shelter.push(animal);
      return this;
    } else {
      return 'Not cat or dog';
    }
  }

  dequeue(pref) {
    if (pref != 'cat' && pref != 'dog') {
      return null;
    }

    let dequeuedAnimal;

    if (pref == 'cat' || pref == 'dog') {
      for (let index = 0; index < this.shelter.length; index++) {
        if (this.shelter[index].type == pref) {
          dequeuedAnimal = this.shelter[index];
          this.shelter[index] = 'removed';
          index += this.shelter.length;
        }
      }
    }
    const newArr = [];
    this.shelter.forEach((element) => {
      if (element != 'removed') {
        newArr.push(element);
      }
    });
    this.shelter = newArr;
    return dequeuedAnimal;
  }
}

module.exports = { Animal, AnimalShelter };

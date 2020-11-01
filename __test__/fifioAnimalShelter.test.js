const animalShelter = require('../challenges/fifoAnimalShelter/animal-shelter');

const a1 = new animalShelter.Animal('test', 'cat');
const a11 = new animalShelter.Animal('test', 'cat');
const a2 = new animalShelter.Animal('test', 'dog');
const a22 = new animalShelter.Animal('test', 'dog');
const a3 = new animalShelter.Animal('test', 'test');

describe('Animal Shelter', () => {
  it('can enqueue cat or dog', () => {
    const shelter = new animalShelter.AnimalShelter();
    shelter.enqueue(a1);
    shelter.enqueue(a2);
    expect(shelter.shelter[0].type).toEqual('cat');
    expect(shelter.shelter[1].type).toEqual('dog');
  });
  it(`can't enqueue if animal is not cat or dog`, () => {
    const shelter = new animalShelter.AnimalShelter();
    shelter.enqueue(a3);
    // shelter.enqueue(a2);
    expect(shelter.shelter.length).toEqual(0);
  });
  it(`can't dequeue if pref is not cat or dog`, () => {
    const shelter = new animalShelter.AnimalShelter();
    const result = shelter.dequeue('feaf');
    expect(result).toBeNull();
  });
  it(`can dequeue if pref is cat or dog`, () => {
    const shelter = new animalShelter.AnimalShelter();
    shelter.enqueue(a1);
    shelter.enqueue(a2);
    shelter.enqueue(a22);
    shelter.enqueue(a11);
    const result = shelter.dequeue('cat');
    const result2 = shelter.dequeue('dog');
    expect(result).toEqual(a1);
    expect(result2).toEqual(a2);
  });
});

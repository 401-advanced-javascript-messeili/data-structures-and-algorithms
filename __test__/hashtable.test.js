'use strict';
const HashTable = require('../challenges/hashtable/hashtable').HashMap;
const hashTable = new HashTable(4000);
hashTable.add('name', 'mahmoud');
hashTable.add('one', 'thing');
hashTable.add('eno', '1');
hashTable.add('neo', '2');
hashTable.add('12345', '1');
hashTable.add('13245', '2');
hashTable.add('12435', '3');
hashTable.add('12354', '4');
hashTable.add('52341', '5');
hashTable.add('15342', '6');
describe('hash table test', () => {
  it('can successfully hash the key', () => {
    let index = hashTable.hash('ahmad');
    expect(index).toEqual(1633);
  });
  it('can get a key', () => {
    let value = hashTable.get('12345');
    expect(value).toEqual('1');
  });
  it('Throw an error if the key is net found', () => {
    let value = hashTable.get('123ee45');
    expect(value).toEqual('Key is not found');
  });
  it('Return true if the key is exists', () => {
    let value = hashTable.contains('12345');
    expect(value).toEqual(true);
  });
  it('Return false if the key is exists', () => {
    let value = hashTable.contains('123d45');
    expect(value).toEqual(false);
  });
});

'use strict';
const hashTable = require('../challenges/hashtable/hashtable');
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

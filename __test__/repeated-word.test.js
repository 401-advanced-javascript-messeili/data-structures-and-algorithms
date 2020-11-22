'use strict';
const repeatedWord = require('../challenges/repeatedWord/repeated-word');
const book = 'hello my name is mohammad hello';
const book2 = 'hello my name is mohammad';
describe('repeated words test', () => {
  it('can successfully return the repeated word', () => {
    let result = repeatedWord(book);
    expect(result).toEqual('hello');
  });
  it('can successfully return Not Found if there are no repeated words', () => {
    let result = repeatedWord(book2);
    expect(result).toEqual('Not Found');
  });
});

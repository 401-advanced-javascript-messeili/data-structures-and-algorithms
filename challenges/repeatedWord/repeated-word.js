const HashTable = require('../hashtable/hashtable').HashMap;
const LinkedList = require('../hashtable/hashtable').LinkedList;
const stringToArray = (str) => {
  let newStr = '';
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      newStr += str[i];
    } else {
      arr.push(newStr);
      newStr = '';
    }
  }
  arr.push(newStr);
  return arr;
};

const repeatedWord = (str) => {
  let arr = stringToArray(str);
  const hashtable = new HashTable(arr.length * 10);
  for (let i = 0; i < arr.length; i++) {
    const index = hashtable.hash(arr[i]);
    if (!hashtable.storage[index]) {
      const ll = new LinkedList();
      ll.prepend(arr[i]);
      hashtable.storage[index] = ll;
    } else if (hashtable.storage[index].head.value === arr[i]) {
      return arr[i];
    }
  }
  return 'Not Found';
};

console.log(repeatedWord('word hellddo yes wrod'));

module.exports = repeatedWord;

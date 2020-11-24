const HashTable = require('../hashtable/hashtable').HashMap;
const LinkedList = require('../hashtable/hashtable').LinkedList;

const hashtable1 = new HashTable(50);
const hashtable2 = new HashTable(50);
const hashtable3 = new HashTable(50);
hashtable1.add('1', 'yes');
hashtable1.add('2', 'no');
hashtable1.add('3', 'if');
hashtable1.add('4', 'true');
hashtable2.add('1', 'yes');
hashtable2.add('2', 'no');
hashtable2.add('3', 'if');

// const repeatedWord = (ht1, th2) => {
//   const hashtable3 = new HashTable(50);
//   for (let i = 0; i < ht1.size; i++) {
//     const index = hashtable3.hash(arr[i]);
//     if (!hashtable3.storage[index]) {
//       const ll = new LinkedList();
//       ll.prepend(arr[i]);
//       hashtable3.storage[index] = ll;
//     } else if (hashtable3.storage[index].head.value === arr[i]) {
//       return arr[i];
//     }
//   }
//   return 'Not Found';
// };

for (let i = 0; i < hashtable1.size; i++) {
  if (hashtable1.storage[i]) {
    console.log(hashtable1.storage[i].head.value);
    hashtable3.addWithoutKey(i, hashtable1.storage[i].head.value);
  }
}

console.log(hashtable2);
console.log(hashtable3);

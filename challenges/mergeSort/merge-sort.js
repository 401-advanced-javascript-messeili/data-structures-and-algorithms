function mergeSort(arr) {
  let left = [];
  let right = [];
  let n = arr.length;
  let mid = Math.ceil(n / 2);

  if (n > 1) {
    for (let i = 0; i < mid; i++) {
      left.push(arr[i]);
    }
    for (let i = mid; i < n; i++) {
      right.push(arr[i]);
    }
    // console.log(left, right);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
    console.log(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }
  }
}

// function merge(left, right, arr1) {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   while (i < left.length && j < right.length) {
//     // console.log('inside');
//     if (left[i] <= right[j]) {
//       arr1[k] = left[i];
//       i = i + 1;
//       // console.log('arr1',arr1);
//     } else {
//       arr1[k] = right[j];
//       // console.log('else arr1',arr1);
//       j = j + 1;
//     }
//     k = k + 1;
//   }
//   if (i === left.length) {
//     while (j < right.length) {
//       arr1[k] = right[j];
//       j = j + 1;
//       k = k + 1;
//     }
//   } else {
//     while (i < left.length) {
//       arr1[k] = left[i];
//       i = i + 1;
//       k = k + 1;
//     }
//   }
// }

let y = mergeSort([5, 9, 8, 7, 2, 1, 6]);
console.log(y);

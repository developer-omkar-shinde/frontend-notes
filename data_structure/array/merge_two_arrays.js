function mergeArrays(arr1, arr2) {
  let mergedArray = new Array(arr1.length + arr2.length); // Create an array of required size
  let index = 0;

  // Copy elements of arr1 to mergedArray
  for (let i = 0; i < arr1.length; i++) {
    mergedArray[index] = arr1[i];
    index++;
  }

  // Copy elements of arr2 to mergedArray
  for (let i = 0; i < arr2.length; i++) {
    mergedArray[index++] = arr2[i];
  }

  return mergedArray;
}

// Example Usage
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(mergeArrays(arr1, arr2));

// ------------------------------- Merge Sorted Array Using While Loop -------------------------------

function mergeSortedArrays(array1, array2) {
  const arr1 = [...array1];
  const arr2 = [...array2];
  const mergedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1?.length && j < arr2?.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray[k] = arr1[i];
      i++;
    } else {
      mergedArray[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < arr1?.length) {
    mergedArray[k] = arr1[i];
    i++;
    k++;
  }

  while (j < arr2?.length) {
    mergedArray[k] = arr2[j];
    j++;
    k++;
  }

  return mergedArray;
}

// Example Usage
const array1 = [1, 3, 55];
const array2 = [2, 4, 6, 7, 8, 66];

console.log(mergeSortedArrays(array1, array2));

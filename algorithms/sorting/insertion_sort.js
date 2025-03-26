function insertionSort(params) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }

  return array;
}

const array = [2, 3, 4, 1, 5];

const sortedArr = insertionSort(array);

console.log(sortedArr);

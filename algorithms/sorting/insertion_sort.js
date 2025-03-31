function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while (j >= 0 && array[j] > array[i]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = array[i];
  }

  return array;
}

const array = [2, 3, 4, 1, 5];

const sortedArr = insertionSort(array);

console.log(sortedArr);
 
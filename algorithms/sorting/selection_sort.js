const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // swapping
    }
  }
  return array;
};

const array = [4, 33, 3, 6, 7, 12, 1];
const sortedArray = selectionSort(array);

console.log(sortedArray);

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
      }
    }
  }

  return array;
};

const arr = [2, 3, 4, 1, 5, 6];
const result = bubbleSort(arr);

console.log(result);

// -------------------- Optimize Way ------------------

// const bubbleSort = (array) => {
//   let n = array.length;

//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false; // Track if a swap happens

//     for (let j = 0; j < n - 1 - i; j++) {
//       // Optimize inner loop
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
//         swapped = true; // Mark swap as happened
//       }
//     }

//     // If no swaps occurred, array is already sorted
//     if (!swapped) break;
//   }

//   return array;
// };

// // Example Usage
// const arr = [2, 3, 4, 5, 6, 1];
// console.log(bubbleSort(arr));

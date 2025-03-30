const quickSort = (arr) => {
  if (arr?.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const result = quickSort([3, 5, 1, 8, 44, 22]);

console.log(result);

// -------------------------- in place implementation --------------------------------

// const partition = (arr, low, hight) => {
//   let pivot = 0;
//   let i = 1;
//   let j = arr.length - 1;

//   while (condition) {}
// };

// const quickSort = (arr) => {
//   partition(arr);
// };

// Only works on sorted Array.

const binarySearch = (target, array) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const index = binarySearch(19, [1, 2, 3, 4, 5, 6, 7, 8]);

console.log(index);

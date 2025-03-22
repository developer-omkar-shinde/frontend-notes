function myIndexOf(array, searchElement) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === searchElement) {
      return i; // Found the element, return index
    }
  }

  return -1; // Element not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50];
console.log(myIndexOf(arr, 30)); // Output: 2
console.log(myIndexOf(arr, 100)); // Output: -1
console.log(myIndexOf(arr, 40, 3)); // Output: 3

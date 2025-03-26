function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

// Usage Example
const numbers = [10, 20, 30, 40, 50];
console.log(linearSearch(numbers, 30)); // Output: 2
console.log(linearSearch(numbers, 100)); // Output: -1

## 🚀 All Array Iteration Methods in JavaScript

### 1️⃣ for loop

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 2️⃣ forEach()

🔹 Executes a function once for each array element.  
🔹 Does NOT return a new array.

```javascript
arr.forEach((num, index) => console.log(`Index ${index}: ${num}`));
```

### 3️⃣ map()

🔹 Returns a new array with modified elements.

```javascript
const squared = arr.map((num) => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
```

### 4️⃣ filter()

🔹 Returns a new array with elements that satisfy the condition.

```javascript
const evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### 5️⃣ reduce()

🔹 Reduces the array to a single value (sum, product, etc.).

```javascript
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

### 6️⃣ some()

🔹 Returns true if at least one element satisfies the condition.

```javascript
const hasEven = arr.some((num) => num % 2 === 0);
console.log(hasEven); // true
```

### 7️⃣ every()

🔹 Returns true if all elements satisfy the condition.

```javascript
const allPositive = arr.every((num) => num > 0);
console.log(allPositive); // true
```

### 8️⃣ find()

🔹 Returns the first element that satisfies the condition.

```javascript
const firstEven = arr.find((num) => num % 2 === 0);
console.log(firstEven); // 2
```

### 9️⃣ findIndex()

🔹 Returns the index of the first element that satisfies the condition.

```javascript
const index = arr.findIndex((num) => num % 2 === 0);
console.log(index); // 1
```

### 🔟 includes()

🔹 Checks if an element exists in an array.

```javascript
console.log(arr.includes(3)); // true
console.log(arr.includes(10)); // false
```

### 1️⃣1️⃣ indexOf()

🔹 Returns the index of an element, or -1 if not found.

```javascript
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(10)); // -1
```

### 1️⃣2️⃣ lastIndexOf()

🔹 Returns the last index of an element (useful for duplicates).

```javascript
const arr2 = [1, 2, 3, 2, 4];
console.log(arr2.lastIndexOf(2)); // 3
```

### 1️⃣3️⃣ for…of loop

🔹 Iterates through values directly.

```javascript
for (let num of arr) {
  console.log(num);
}
```

### 1️⃣4️⃣ entries()

🔹 Returns an iterable of key-value pairs.

```javascript
for (let [index, value] of arr.entries()) {
  console.log(`Index ${index}: ${value}`);
}
```

### 1️⃣5️⃣ keys()

🔹 Returns an iterable of array keys.

```javascript
for (let key of arr.keys()) {
  console.log(key);
}
```

### 1️⃣6️⃣ values()

🔹 Returns an iterable of array values.

```javascript
for (let value of arr.values()) {
  console.log(value);
}
```

---

---

## 🚀 Object Iteration Methods

### 1️⃣ for…in loop

🔹 Iterates over keys of an object.

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
```

### 2️⃣ Object.keys()

🔹 Returns an array of keys.

```javascript
console.log(Object.keys(obj)); // ["a", "b", "c"]
```

### 3️⃣ Object.values()

🔹 Returns an array of values.

```javascript
console.log(Object.values(obj)); // [1, 2, 3]
```

### 4️⃣ Object.entries()

🔹 Returns an array of key-value pairs.

```javascript
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
```

```javascript
const obj = { name: "omkar", age: 25 };

for ([key, value] of Object.entries(obj)) {
  console.log(`key : ${key} , value : ${value}`);
}

// Output -
// key : name , value : omkar
// key : age , value : 25
```

### 5️⃣ Object.fromEntries()

🔹 Converts an array of key-value pairs back into an object.

```javascript
const arrOfEntries = [
  ["x", 10],
  ["y", 20],
];
const objFromEntries = Object.fromEntries(arrOfEntries);
console.log(objFromEntries); // { x: 10, y: 20 }
```

---

---

## 🚀 Here are different ways to check variable types in JavaScript:

📌 1. Check if a Variable is an Array

```javascript
console.log(Array.isArray([1, 2, 3])); // ✅ true
console.log(Array.isArray("hello")); // ❌ false
```

📌 2. Check if a Variable is an Object (excluding null & arrays)

```javascript
const obj = { name: "John" };

console.log(typeof obj === "object" && obj !== null && !Array.isArray(obj)); // ✅ true
```

📌 3. Check if a Variable is a Function

```javascript
function test() {}
const arrowFunc = () => {};

console.log(typeof test === "function"); // ✅ true
console.log(typeof arrowFunc === "function"); // ✅ true
```

📌 4. Check if a Variable is a String

```javascript
console.log(typeof "hello" === "string"); // ✅ true
```

📌 5. Check if a Variable is a Number

```javascript
console.log(typeof 42 === "number"); // ✅ true
console.log(typeof NaN === "number"); // ✅ true
console.log(Number.isFinite(42)); // ✅ true
console.log(Number.isFinite(NaN)); // ✅ false
```

⚠️ Beware of NaN:

```javascript
console.log(typeof NaN === "number"); // ✅ true (but NaN is not a valid number)
console.log(Number.isNaN(NaN)); // ✅ true
```

📌 6. Check if a Variable is a Boolean

```javascript
console.log(typeof true === "boolean"); // ✅ true
```

📌 7. Check if a Variable is null

```javascript
console.log(null === null); // ✅ true
console.log(typeof null === "object"); // ⚠️ true (JavaScript quirk)
```

📌 8. Check if a Variable is undefined

```javascript
let x;
console.log(typeof x === "undefined"); // ✅ true
console.log(x === undefined); // ✅ true
```

---

---

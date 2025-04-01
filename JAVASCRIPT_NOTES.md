# -------------- Javascript Notes -------------

[Prototype](#prototype-in-javascript)  
[Callback](#callback-in-javascript)  
[Promises](#promises-in-javascript)  
[Async Await](#async-await)

# --------- All Array Iteration Methods ---------

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

# ----------- Object Iteration Methods -----------

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

# ----------- Here are different ways to check variable types: -----------

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

# ----------- Prototype in Javascript --------

prototype is a mechanism that allows objects to inherit properties and methods from other objects. It forms the foundation of prototypal inheritance,

A prototype is an object that is associated with every function and object in JavaScript.

When you create a function, JavaScript automatically adds a prototype property to it. This prototype object is shared among all instances created using that function as a constructor.

When you create an object, it inherits properties and methods from its prototype.

### 📌 Prototype Pollution (Security Risk)

Adding a method greet() to Object.prototype, which means all objects in JavaScript will inherit this method.

Prototype pollution occurs when modifying Object.prototype or global prototypes, which affects all objects in JavaScript. This can introduce security vulnerabilities.

```javascript
Object.prototype.greet = function () {
  console.log("Hello World");
};

const obj = {};
obj.greet(); // "Hello World"

// console.log(Object.greet()) // we can use like this also
```

🔴 **Problem**:

- All objects in JavaScript inherit from Object.prototype, so adding properties here pollutes every object.
- Attackers can exploit this in server-side applications to override object properties.

✅ Preventing Prototype Pollution

```javascript
Object.freeze(Object.prototype); // Prevents modifications
```

### 📌 Creating a Prototype for an Object

We can use a constructor function and add methods to its _prototype_:

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating an instance
const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John and I am 30 years old.
```

### 📌 How Prototype Inheritance Works

Every object in JavaScript has an internal link to another object called its prototype. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain.

Prototype Inheritance allows objects to inherit properties and methods from another object via the prototype chain.

```javascript
const person = {
  name: "omkar",
  greet: function () {
    console.log("Hello" + " " + this.name);
  },
};

const employee = Object.create(person); // `employee` inherits from `person`

// employee.name = "Ravi";

employee.greet(); // ✅ Output: "Hello Omkar

console.log(employee);
```

🔹 What’s Happening?

1. **Object.create(person)** creates a new object **(employee)** with person as its prototype.
2. **employee.greet()** is not found in **employee**, so JavaScript looks up the prototype chain and finds **greet** in **person**.

### Custom Constructor with Prototype Inheritance -

Instead of manually setting the prototype, we can use constructor functions and prototype.

✅ Example: Constructor Function + Prototype

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to Person's prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Creating an instance
const john = new Person("John");
john.sayHello(); // ✅ Output: "Hello, my name is John"

// Checking prototype chain
console.log(john.__proto__ === Person.prototype); // ✅ true
console.log(Person.prototype.__proto__ === Object.prototype); // ✅ true
```

🔍 Prototype Chain

```javascript
john → Person.prototype → Object.prototype → null
```

**sayHello()** is not stored on **john** but in **Person.prototype**, saving memory.

Example 2

```javascript
// Parent Constructor Function
function Vehicle(type) {
  this.type = type;
}

// Adding a method to Vehicle's prototype
Vehicle.prototype.start = function () {
  console.log(`${this.type} is starting...`);
};

// Child Constructor Function
function Car(brand, type) {
  Vehicle.call(this, type); // Inheriting properties from Vehicle
  this.brand = brand;
}

// Inheriting Vehicle's prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Adding a new method to Car's prototype
Car.prototype.drive = function () {
  console.log(`${this.brand} is driving.`);
};

// Creating an instance
const myCar = new Car("Toyota", "Sedan");

myCar.start(); // Output: Sedan is starting...
myCar.drive(); // Output: Toyota is driving.

console.log(myCar instanceof Car); // true
console.log(myCar instanceof Vehicle); // true
```

**How It Works?**

**Vehicle.call(this, type);** → Calls the **Vehicle** constructor to set properties.  
**Car.prototype = Object.create(Vehicle.prototype);** → Inherits methods from Vehicle.  
**Car.prototype.constructor = Car;** → Fixes the constructor reference.

### 📌 Prototype Shadowing (🔍 Overriding Inherited Properties)

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello from prototype!");
};

const john = new Person("John");

// Overriding (Shadowing) the prototype method
john.greet = function () {
  console.log("Hello from John!");
};

john.greet(); // ✅ "Hello from John!" (own property)
delete john.greet;
john.greet(); // ✅ "Hello from prototype!" (falls back to prototype)
```

🔍 How It Works?

First call → Finds **greet** in **john** itself (shadows the prototype method).  
After deleting **greet** → Falls back to **Person.prototype.greet**.

### 📌 Extending a Constructor with Inheritance

```javascript
function Employee(name, jobTitle) {
  Person.call(this, name); // Call Person constructor
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Fix constructor reference

// Add a new method
Employee.prototype.describeJob = function () {
  console.log(`${this.name} works as a ${this.jobTitle}`);
};

// Create an instance
const alice = new Employee("Alice", "Software Engineer");
alice.sayHello(); // ✅ Inherited: "Hello, my name is Alice"
alice.describeJob(); // ✅ "Alice works as a Software Engineer"
```

🔍 Prototype Chain

```javascript
alice → Employee.prototype → Person.prototype → Object.prototype → null
```

### 📌 Modern Approach: Using class for Inheritance

ES6 introduced class syntax, which simplifies prototype-based inheritance.

✅ Example: class Inheritance

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, jobTitle) {
    super(name); // Call parent constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`${this.name} works as a ${this.jobTitle}`);
  }
}

const bob = new Employee("Bob", "Designer");
bob.sayHello(); // ✅ Inherited: "Hello, my name is Bob"
bob.describeJob(); // ✅ "Bob works as a Designer"
```

🔍 Prototype Chain

```javascript
bob → Employee.prototype → Person.prototype → Object.prototype → null
```

✅ Cleaner and more readable than constructor functions.

#### 🔹 Key Takeaways

✅ Objects inherit from prototypes in JavaScript, forming a prototype chain.  
✅ Methods in prototype are shared across instances, improving memory efficiency.  
✅ Object.create() allows manual prototype inheritance, while constructor functions & class provide structured ways to inherit properties.

---

---

# --------------- Callback in Javascript ---------------

A callback is a function that is passed as an argument to another function and is executed later. The receiving function calls the callback function at an appropriate time.

🔹 Why Use Callbacks?

✅ Asynchronous Operations → Callbacks are commonly used for handling API requests, reading files, database queries, or handling UI events.  
✅ Reusability → Different callbacks can be passed to the same function, making it flexible.  
✅ Control Flow → Callbacks allow code execution in a specific sequence, preventing premature execution in async operations.

🔹 Example 1:

Callbacks in Asynchronous Code

```Javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // Execute the callback after fetching data
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

// Using fetchData with a callback
fetchData(processData);

// Output -
// (Data fetches after 2 seconds)
// Data fetched!
// Processing data...
```

🔹 Example 2:  
Callbacks in Higher-Order Functions
A higher-order function takes a function as an argument or returns a function.

```javascript
function calculate(a, b, operation) {
  return operation(a, b); // Call the passed function
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, multiply)); // Output: 15
```

## 🔹 Callback Hell (Nested Callbacks)

Callback Hell (also known as "Pyramid of Doom") happens when multiple nested callback functions make the code unreadable, harder to maintain, and difficult to debug.

Example

```javascript
const multiplyByTwo = (a, cb) => {
  setTimeout(() => {
    return cb(a * 2);
  }, 1000);
};

multiplyByTwo(3, (res) => {
  multiplyByTwo(res, (res) => {
    multiplyByTwo(res, (res) => {
      console.log(res);
    });
  });
});
```

## 🔹 Solution: Use Promises

We can refactor the callback hell using Promises, which make the code more readable.

```javascript
const multiplyByTwo = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Invalid input: Not a number");
    } else {
      resolve(num * 2);
    }
  });
};

multiplyByTwo(5)
  .then((res) => multiplyByTwo(res))
  .then((res) => multiplyByTwo(res))
  .then((res) => multiplyByTwo(res))
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
```

## 🔹 Refactoring Callback Hell with async/await

Using async/await makes the code even cleaner and more readable.

```javascript
const calculate = async () => {
  try {
    const res1 = await multiplyByTwo(5);
    const res2 = await multiplyByTwo(res1);
    const res3 = await multiplyByTwo(res2);
    const res4 = await multiplyByTwo(res3);
    console.log(res4);
  } catch (err) {
    console.log(err);
  }
};

calculate();
```

---

---

# -------------- Promises in Javascript --------------

Promises are JavaScript objects that help handle asynchronous operations, such as API calls, file reading, or writing. They prevent callback hell by providing a structured way to handle success and failure.

Promise has three states:

1. Pending → The initial state; operation is still in progress.
2. Fulfilled → The operation completed successfully, and the promise is resolved with a value.
3. Rejected → The operation failed, and the promise is rejected with an error.

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // "Error fetching data."
  });
```

---

[Go to top](#javascript-notes)

# ------------------ Async Await ------------------

async/await is a modern way to handle asynchronous operations in JavaScript. It makes code look synchronous while working asynchronously, improving readability and maintainability.

1. it helps to avoid callback hell and .then() chaining.
2. it provides better error handling using try...catch

```javascript
async function getUserData() {
  try {
    console.log("Fetching user data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getUserData();
```

[Go to top](#javascript-notes)

# ------------------ Async Await ------------------

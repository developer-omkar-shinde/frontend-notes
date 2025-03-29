# JAVASCRIPT INTERVIEW QUESTIONS

---

## 🚀 Explain the event loop in JavaScript. How does it work with the call stack and callback queue? ✅

The event loop is a fundamental concept in JavaScript that enables its non-blocking, asynchronous behavior.

The event loop continuously checks whether the call stack is empty and whether there are pending tasks in the callback queue or microtask queue.

## 🚀 What is a closure in JavaScript, and why is it useful? Give an example ✅

A closure is created when an inner function has access to the outer function’s variables, even after the outer function has finished executing.

In simple terms, a closure allows a function to access variables from an enclosing scope or environment even after that scope has closed.

## 🚀 What are the drawbacks of using closures? ✅

1. Memory Consumption
2. Memory Leaks
3. Performance Overhead
4. Accidental Closures in Loops
5. Complexity and Debugging

## 🚀 How does hoisting work in JavaScript? ✅

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. However, only declarations are hoisted, not initializations.

## 🚀 Currying in JavaScript

## 🚀 How does JavaScript handle asynchronous operations, and what are the differences between callbacks, promises, and async/await? ✅

These tools allow JS to perform asynchronous non-blocking operations, such as fetching data from a server or reading a file.

## 🚀 Callback in js ✅
The callback is a function passed to another function as an argument, which executes after the completion of an asynchronous operation.
It has some cons, like callback hell when dealing with multiple asynchronous operations.

## 🚀 What are Promises in JS? explain in detail. ✅

Promises are objects designed to handle async operations. They were introduced in ES6 to avoid callback hell.

A promise is created using the new Promise() constructor, which takes a function with two parameters. First is resolve, which is called when the operation is successful, and 2nd is reject, which calls on rejection of the operation.

**js provides utility methods to handle multiple promises -**

1️⃣ Promise.all([]) → Waits for all promises to resolve  
2️⃣ Promise.race([]) → Returns first settled promise  
3️⃣ Promise.allSettled([]) → Waits for all promises to settle  
4️⃣ Promise.any([]) → Returns first fulfilled promise

## 🚀 What is a constructor function?

## 🚀 Q3. What is the difference between null and undefined in JavaScript? ✅

undefined is the default state of value. It automatically assigns when the variable is declared.

null is intentionally assigned an empty value. represent absence of value.

## 🚀 How does JavaScript handle memory management, and what is garbage collection? ✅

JavaScript automatically manages memory allocation and deallocation using Garbage Collection. This means developers don’t have to manually allocate or free memory, unlike languages like C or C++.

Garbage Collection is the process of automatically detecting and freeing memory that is no longer in use to prevent memory leaks.

## 🚀 How does JavaScript handle lexical scoping? ✅

JavaScript follows a scope chain to resolve variables:

First, it checks the function’s local scope.
If not found, it looks in the parent scope (the outer function).
If still not found, it moves up the chain until reaching the global scope.
If not found anywhere, it throws a ReferenceError.

## 🚀 How can you use closures to create private variables in JavaScript? ✅

## 🚀 What is the difference between .map(), .filter(), and .reduce()? ✅

## 🚀 What is the difference between var, let, and const? ✅

In JavaScript, var, let, and const are used to declare variables, but they differ in terms of scope, hoisting, and mutability.

## 🚀 What is the spread/rest operator, and how is it useful? difference between spread and rest. ✅

spread -
Copying Arrays or Objects:
Concatenating Arrays or Obj

## 🚀 Explain the concept of optional chaining (?.) in JavaScript. ✅

## 🚀 How does the _this_ keyword work in JavaScript? Provide examples of how this behaves in different contexts. ✅

## 🚀 How would you optimize a JavaScript function to improve performance? ✅

🔹 Use Memoization (Caching Results)
🔹Optimize Loops & Iterations

## 🚀 What is memoization, and how can you implement it in JavaScript? ✅

## 🚀 Explain some features of ES6 ✅

## 🚀 What is the difference between microtasks and macrotasks in JavaScript?

Both are used for managing async operations, microtask has a higher priority than macrotasks (callback queue).
microtasks queue stores - Promises & MutationObserver & queueMicrotask (manually added MT)
callback queue (macrotasks) holds - setTimeout / setInterval, MessageChannel,

In JavaScript, microtasks and macrotasks (also called tasks) are two types of asynchronous operations managed by the event loop. The key difference lies in their priority and execution order.

1. Microtasks
   - Microtasks are processed immediately after the currently executing script and before any macrotasks.
   - They have higher priority than macrotasks.
   - Examples of microtasks:
   - Promises (.then, .catch, .finally)
   - MutationObserver
   - queueMicrotask (explicitly scheduling a microtask)

2. Macrotasks (Tasks)
   - Macrotasks are processed after microtasks are completed and typically involve tasks that interact with the browser or external events.
   - These tasks are placed in the task queue, and the event loop picks them up in the next cycle.
   - Examples of macrotasks:
   - setTimeout / setInterval
   - setImmediate (Node.js only)
   - requestAnimationFrame
   - I/O operations (e.g., reading files, network requests)

Execution Order
  - Run synchronous code.
  - Process all pending microtasks.
  - Pick the next macrotask from the queue.
  - Repeat.

## 🚀 What is destructuring, and how does it work with arrays and objects? ✅

destructuring allows to extraction of values from an array or object and assigns them to a variable in a single line.

## 🚀 What are the different ways to manipulate the DOM in JavaScript? ✅

## 🚀 How would you implement infinite scrolling in vanilla JavaScript? ✅

To achieve this, we can use Intersection Observers. Whenever the last element interacts, we load more data.

## 🚀 What is the difference between deep copy and shallow copy? ✅

<details>
Deep copy and shallow copy refer to how we are duplicating objects

A shallow copy creates a new object, but it only copies the top-level properties of the original object. If the object contains nested objects, those nested objects are not duplicated; instead, their references are copied.

A deep copy creates a new object and recursively copies all nested objects or arrays, ensuring that no references to the original nested objects are shared.

Example
- shallow copy Methods	Object.assign(), Spread (...).
- Deep copy JSON.parse(JSON.stringify(obj), structuredClone(), lodash _.cloneDeep()
</details>

## 🚀 How does JavaScript internally handle type coercion? ✅

Type coercion in JavaScript is the automatic conversion of one data type into another when an operation involves two different types.

1️⃣ Boolean Coercion (ToBoolean)  
2️⃣ String Coercion (ToString)  
3️⃣ Number Coercion (ToNumber)

## 🚀 What are the different ways to clone an object in JavaScript? ✅

## 🚀 How do function expressions and function declarations differ in terms of hoisting? ✅

Both declaration is fully hoisted means the function is moved to the top of its scope along with its definition.
But function expression is partially hoisted. It hoists only a variable, not a function. If the variable is declared with var and you try to console it before initialization, it will print undefined, but with const and let, we will get a ReferenceError.

## 🚀 What are the different types of scopes in JavaScript? ✅

1️⃣ Global Scope 🌍  
2️⃣ Function Scope (Local Scope) 🔁  
3️⃣ Block Scope 🏗️ (Introduced in ES6)  
4️⃣ Lexical Scope (Closure Scope) 🔄  
5️⃣ Module Scope 📦 (Introduced in ES6)

## 🚀 What is an IIFE (Immediately Invoked Function Expression), and why is it used? ✅

An Immediately Invoked Function Expression is a function that is defined and executed immediately after its creation.

1️⃣ Avoiding Global Scope Pollution 🛡️  
2️⃣ Creating Private Variables 🔒  
3️⃣ Executing Asynchronous Code Immediately ⏳  
4️⃣ Encapsulating Code in Modules 📦

## 🚀 What is the difference between an object and a Map in JavaScript? ✅

In JavaScript, both objects and Maps are used to store collections of key-value pairs. but their are few diffrences.

1. An object allows only strings and numbers as keys, but in the map, we can use any data type as a key.
2. The order of keys in the object is unordered, but the Map maintains order.
3. Object is slower for frequent addition or deletion of data as compared to Map
4. For structured data like JSON, we can use Object, and for large data lookup, we can use Map (eg, caching and lookup tables)

## 🚀 What is function composition? ✅

funtion composition is the technique where you combine multiple funtions into single funtions means output of one funtion becomes input of another function.

## 🚀How does localStorage differ from sessionStorage and cookies? ✅

All three are used to store data in browser storage. But there are some differences -

1. The storage limit of localStorage and sessionStorage is between 5-10 Mb, but cookies have only 4KB storage.
2. LocalStorage never clear until you manually close. sessionStorage expires on brower close. we can add Max-Age for cookie when we set cookie.
3. Cookies are accessible on both the server-side and client-side.

## 🚀 What is the difference between a normal function and a fat arrow function? ✅

## 🚀 What is the difference between a for...of loop and a for...in loop? ✅

## 🚀 Explain Object.freeze(), Object.seal() and Object.preventExtensions(). ✅
  Comparison Table
Feature	| Object.freeze() |	Object.seal()|	Object.preventExtensions()
Modify  | existing properties? | 	❌ No	✅ | Yes	✅ Yes
Add new properties? | 	❌ No | 	❌ No	❌ |  No
Delete properties?	| ❌ No	 | ❌ No	 | ✅ Yes
Affects nested objects? |	❌ No  (unless frozen separately)	| ❌ No |	❌ No

## 🚀 What is the difference between slice and splice? ✅

## 🚀 What is a first-class function? ✅
A first-class function is a function that is treated like any other value in a programming language. This means that functions can be:
✅ Assigned to variables
✅ Passed as arguments to other functions
✅ Returned from other functions
✅ Stored in data structures like arrays or objects



## 🚀

---

# Advanced Questions -

## 🚀What is the prototype chain, and how does JavaScript handle inheritance?

<details>
The prototype allows objects to inherit properties and methods from other objects, reducing memory usage and improving code reusability.

Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects via the prototype chain.

</details>

## 🚀 What are debouncing and throttling? ✅

## 🚀 What are some common JavaScript security vulnerabilities, and how do you prevent them?

## 🚀 What is the difference between .call(), .apply(), and .bind()?

## 🚀 What are Web Workers, and when should they be used?

## 🚀 EventEmitter in JavaScript

## 🚀 How would you implement a custom event emitter in JavaScript?

## 🚀 What are some common JavaScript design patterns?

## 🚀 Explain the Factory, Singleton, Observer, and Decorator patterns in JavaScript.

## 🚀 How does _this_ work in different contexts?

## 🚀 How would you optimize a React/JavaScript application for performance?

## 🚀 How does tree-shaking work in JavaScript bundlers like Webpack?

## 🚀 Explain mixins in JavaScript and when you would use them.

## 🚀 How would you implement multiple inheritance in JavaScript?

## 🚀 How would you implement dependency injection in JavaScript?

## 🚀 What is the module pattern in JavaScript?

## 🚀 What are the SOLID principles, and how do they apply to JavaScript?

## 🚀 How do you prevent Cross-Site Scripting (XSS) attacks in JavaScript?

## 🚀 What is Content Security Policy (CSP), and how does it protect web applications?

## 🚀 How do you prevent prototype pollution attacks?

## 🚀 How would you implement a simple caching mechanism in JavaScript? ✅

## 🚀 How would you implement a real-time chat application using JavaScript?

## 🚀 What strategies would you use to improve the load time of a JavaScript-heavy application?

## 🚀 How does garbage collection work in JavaScript?

## 🚀 How does requestAnimationFrame() improve performance?

## 🚀 How does the browser optimize JavaScript execution using JIT compilation?

## 🚀 MutationObserver in JavaScript ✅

## 🚀 Constructors in JavaScript

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

these tools allow js to perform asynchronous non-blocking operations, such as featching data from server or reading file.

## 🚀 Callback in js ✅

callback is funtion passes to another funtion as an argument which exicutes after completion of async operation.
it has some cons like callback hell when dealing with multiple async oprations.

## 🚀 What is Promises in JS? explain in detail. ✅

A promises is an object that designed to handle async oprations. its introduced in ES6 to avoid callback hell.

A promise is created using new Promise() constructor. which t which akes a funtions with two parameters. first is resolve which calls when operations is successfull and 2nd is reject which calls on rejection of opration.

**js provide utility methods to handle multiple promises -**

1️⃣ Promise.all([]) → Waits for all promises to resolve  
2️⃣ Promise.race([]) → Returns first settled promise  
3️⃣ Promise.allSettled([]) → Waits for all promises to settle  
4️⃣ Promise.any([]) → Returns first fulfilled promise

## 🚀 Q3. What is the difference between null and undefined in JavaScript? ✅

undefined is the default state of value. it automatically assign when verialble is declered.

null is intentionally assign empty value. represent absence of value.

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

## 🚀 What is the spread/rest operator, and how is it useful? diffrence beetween spred and rest. ✅

spread -
Copying Arrays or Objects:
Concatenating Arrays or Obj

## 🚀 Explain the concept of optional chaining (?.) in JavaScript. ✅

## 🚀 How does the _this_ keyword work in JavaScript? Provide examples of how this behaves in different contexts. ✅

## 🚀 How would you optimize a JavaScript function to improve performance? ✅

🔹 Use Memoization (Caching Results)
🔹Optimize Loops & Iterations

## 🚀 What is memoization, and how can you implement it in JavaScript? ✅

## 🚀 What is the difference between microtasks and macrotasks in JavaScript?

both are used for manage async oprations, microtask has high priority then microtask (callback queue) and
microtask queue stores - Promises & MutationObserver & queueMicrotask (manually added MT)
callback queue (microtask) holds - setTimeout / setInterval, MessageChannel,

## 🚀 What is destructuring, and how does it work with arrays and objects? ✅

destructing allows to extract values from array or object and assign them to veriable in single line.

## 🚀 What are the different ways to manipulate the DOM in JavaScript? ✅

## 🚀 How would you implement infinite scrolling in vanilla JavaScript? ✅

To achive this we can use Intersection Observers. whenever last element interact we load more data.

## 🚀 What is the difference between deep copy and shallow copy? ✅

<details>
deep copy and shallow copy refer to how we are dublicating objects

A shallow copy creates a new object, but it only copies the top-level properties of the original object. If the object contains nested objects, those nested objects are not duplicated; instead, their references are copied.

A deep copy creates a new object and recursively copies all nested objects or arrays, ensuring that no references to the original nested objects are shared.

</details>

## 🚀 How does JavaScript internally handle type coercion? ✅

Type coercion in JavaScript is the automatic conversion of one data type into another when an operation involves two different types.

1️⃣ Boolean Coercion (ToBoolean)  
2️⃣ String Coercion (ToString)  
3️⃣ Number Coercion (ToNumber)

## 🚀 What are the different ways to clone an object in JavaScript? ✅

## 🚀 How do function expressions and function declarations differ in terms of hoisting? ✅

both declaration is fully hoisted means the funtion is moved to top of its scope along with its defination.
but funtion expression is partially hoisted. it hoist only veriable not a funtion. if the variable is declear with var and you try to console it before initialization it will print undefined but with const and let we will get Refrence error.

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

1. Oject allow only string and number as key but in map we can use any datetype as key.
2. Order of key in object is unordered but Map maintains order.
3. Object is slower for frequent addition or delition of data as compare to Map
4. for stuctured data like JSON we can use Object and for large data lookup we can use Map (eg. cashing and lookup tables)

## 🚀 What is function composition? ✅

funtion composition is the technique where you combine multiple funtions into single funtions means output of one funtion becomes input of another function.

## 🚀How does localStorage differ from sessionStorage and cookies? ✅

All three are use to store data in brower storage. but there are some diffrences -

1. Storage limit of localStorage and sessionStorage is between 5-10 Mb but cookies has only 4KB storage.
2. LocalStorage never clear until you manually close. sessionStorage expires on brower close. we can add Max-Age for cookie when we set cookie.
3. Cookie is accesible on both server-side and client side.

## 🚀 what is the diffrence beetween normal funtion and fat arrow funtion. ✅

## 🚀 What is the difference between a for...of loop and for...in loop?

## 🚀 Explain Object.seal(), Object.freeze(), and Object.preventExtensions().

## 🚀 What is the difference between slice and splice?

## 🚀 What is a first class function?

## 🚀

---

# Advanced Questions -

## 🚀What is the prototype chain, and how does JavaScript handle inheritance?

<details>
The prototype allows objects to inherit properties and methods from other objects, reducing memory usage and improving code reusability.

Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects via the prototype chain.

</details>

## 🚀 What is debouncing and throttling? ✅

## 🚀 Difference Between Synchronous and Asynchronous Iterators in JavaScript

## 🚀 What are some common JavaScript security vulnerabilities, and how do you prevent them?

## 🚀 What is the difference between .call(), .apply(), and .bind()?

## 🚀 What are Web Workers, and when should they be used?

## 🚀 EventEmitter in JavaScript

## 🚀 What are some common JavaScript design patterns?

## 🚀 How does this work in different contexts?

## 🚀 How would you optimize a React/JavaScript application for performance?

## 🚀 How does tree-shaking work in JavaScript bundlers like Webpack?

## 🚀 Explain mixins in JavaScript and when you would use them.

## 🚀 How would you implement multiple inheritance in JavaScript?

## 🚀 Explain the Factory, Singleton, Observer, and Decorator patterns in JavaScript.

## 🚀 How would you implement dependency injection in JavaScript?

## 🚀 What is the module pattern in JavaScript?

## 🚀 What are the SOLID principles, and how do they apply to JavaScript?

## 🚀 What are the common security vulnerabilities in JavaScript?

## 🚀 How do you prevent Cross-Site Scripting (XSS) attacks in JavaScript?

## 🚀 What is Content Security Policy (CSP), and how does it protect web applications?

## 🚀 How do you prevent prototype pollution attacks?

## 🚀 How would you implement a custom event emitter in JavaScript?

## 🚀 How would you implement a simple caching mechanism in JavaScript? ✅

## 🚀 How would you implement a real-time chat application using JavaScript?

## 🚀 What strategies would you use to improve the load time of a JavaScript-heavy application?

## 🚀 How does garbage collection work in JavaScript?

## 🚀 How does requestAnimationFrame() improve performance?

## 🚀 How does the browser optimize JavaScript execution using JIT compilation?

## 🚀 MutationObserver in JavaScript

## 🚀 Constructors in JavaScript

# Advanced Typescript

TypeScript introduces static types. Here are the basic types:

🟢 Primitive Types

```typescript
let age: number = 25;
let userName: string = "Alice";
let isLoggedIn: boolean = true;
```

🟢 Array Types

```typescript
let numbers: number[] = [1, 2, 3];
let fruits: string[] = ["Apple", "Banana"];
```

🟢 Tuple (Fixed-Length Array)

```typescript
let user: [string, number] = ["Alice", 25];
```

🟢 Union Types (Multiple Possible Types)

```typescript
let id: number | string;
id = 101; // ✅ Valid
id = "TS101"; // ✅ Valid
```

🟢 Any (Avoid using it!)

```typescript
let random: any = 42;
random = "Hello"; // ✅ Allowed, but not recommended
```

## 🚀 Type Annotations vs. Type Inference

✅ Explicit Type Annotation

```typescript
let age: number = 30; // You explicitly define the type
```

✅ Type Inference (Recommended)

```typescript
let name = "John"; // TypeScript automatically infers 'string' type
```

---

---

## 🚀 Functions & Type Safety

You can define types for function parameters and return values.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10)); // ✅ 15
```

#### ✅ Optional Parameters

Use ? to make a parameter optional.

```typescript
function greet(name: string, age?: number): string {
  return `Hello ${name}, Age: ${age ?? "Unknown"}`;
}
```

#### ✅ Default Parameters

```typescript
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5)); // ✅ 10
```

---

---

## Objects & Interfaces in TypeScript

Now that you know basic types, let’s learn how to structure objects and enforce type safety using interfaces and type aliases.

### 🚀 Defining Object Types

```typescript
const user = { name: "Alice", age: 25 };
```

But in TypeScript, we should define an explicit type:

```typescript
const user: { name: string; age: number } = { name: "Alice", age: 25 };
```

This ensures that user must always have a name (string) and age (number).

### 🚀 Using Interfaces -

    Interfaces are used to define the shape of an object.

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 25 };
```

✅ Optional & Readonly Properties
You can use ? to mark properties as optional.

```typescript
interface User {
  name: string;
  age?: number; // Optional property
}

const user1: User = { name: "Alice" }; // ✅ Valid
const user2: User = { name: "Bob", age: 30 }; // ✅ Valid
```

Use readonly to prevent modifications:

```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 101, name: "Alice" };
user.id = 102; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
```

### 🚀Using Type Aliases -

type is similar to interface, but more flexible. but we cannot extends

```typescript
type User = {
  name: string;
  age: number;
};

const user: User = { name: "Alice", age: 25 };
```

### 🚀 Extending Interfaces -

You can extend an interface using **extends**.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

const emp: Employee = { name: "Alice", age: 25, jobTitle: "Developer" };
```

Type aliases don’t support **extends**, but you can achieve similar behavior with intersections:

```typescript
type Person = { name: string; age: number };
type Employee = Person & { jobTitle: string };

const emp: Employee = { name: "Alice", age: 25, jobTitle: "Developer" };
```

### 🚀 Function Interfaces -

You can define function signatures inside an interface.

```typescript
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 10)); // ✅ 15
```

---

---

## 🚀 Classes & OOP in TypeScript

---

### 🔹 1. Creating a Class

In TypeScript, we define a class using the class keyword.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance
const person1 = new Person("Alice", 25);
person1.greet(); // ✅ Output: Hello, my name is Alice and I am 25 years old.
```

### 🔹 2. Access Modifiers

#### ✅ 1) public (Default)

Accessible everywhere.

Accessible everywhere.

```typescript
class Person {
  public name: string; // Can be accessed anywhere

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Alice");
console.log(p.name); // ✅ Allowed
```

#### ✅ 2) private (Restricted)

Accessible only inside the class.

```typescript
class Person {
  private age: number; // Cannot be accessed outside

  constructor(age: number) {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }
}

const p = new Person(25);
console.log(p.getAge()); // ✅ Allowed
// console.log(p.age); // ❌ Error: Property 'age' is private
```

#### ✅ 3) protected (Accessible in Derived Classes)

```typescript
class Person {
  protected id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Employee extends Person {
  constructor(id: number) {
    super(id);
  }

  showId() {
    console.log(`Employee ID: ${this.id}`); // ✅ Allowed inside subclass
  }
}

const emp = new Employee(101);
emp.showId();
// console.log(emp.id); // ❌ Error: 'id' is protected
```

### 🔹 3. Readonly Properties

The readonly modifier ensures a property cannot be modified after initialization.

```typescript
class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user = new User(101, "Alice");
console.log(user.id); // ✅ 101
// user.id = 102; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
```

### 🔹 4. Getters & Setters

We can use getter and setter methods to control property access.

```typescript
class BankAccount {
  private balance: number = 0;

  get getBalance(): number {
    return this.balance;
  }

  set setBalance(amount: number) {
    if (amount < 0) {
      console.log("Invalid amount!");
    } else {
      this.balance = amount;
    }
  }
}

const account = new BankAccount();
account.setBalance = 500; // ✅ Setting balance
console.log(account.getBalance); // ✅ 500
account.setBalance = -100; // ❌ Invalid amount!
```

### 🔹 5. Inheritance (Extending Classes)

We use extends to inherit properties and methods from another class.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // Call parent constructor
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // ✅ Output: Woof! Woof!
```

### 🔹 6. Abstract Classes

An abstract class cannot be instantiated directly. It serves as a blueprint.

```typescript
abstract class Shape {
  abstract getArea(): number; // Abstract method (no implementation)

  showInfo() {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.getArea()); // ✅ 78.54
```

---

---

## 🚀 Generics in TypeScript

### 🔹 1. Basic Generics in Functions

Without generics, we would need separa te functions for different types:

```typescript
function identityString(value: string): string {
  return value;
}

function identityNumber(value: number): number {
  return value;
}
```

Instead, we can use generics to make this reusable:

```typescript
function identity<T>(value: T): T {
  return value;
}

// Usage
console.log(identity < tring > "Hello"); // ✅ "Hello"
console.log(identity < number > 42); // ✅ 42
console.log(identity < boolean > true); // ✅ true
```

Here, <T> is a type parameter, and T represents any type that gets passed.

### 🔹 2. Generics with Arrays

Instead of using any[], we can ensure type safety:

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement < number > [10, 20, 30]); // ✅ 10
console.log((getFirstElement < string) | (boolean > ["Alice", "Bob", true])); // ✅ "Alice"
```

### 🔹 3. Generics with Classes

Generics can be applied to classes for better reusability.

```typescript
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

// Usage
const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // ✅ "Hello"

const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // ✅ 123
```

### 🔹 4. Generics with Interfaces

```typescript
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair1: Pair<string, number> = { first: "Alice", second: 25 };
const pair2: Pair<boolean, string> = { first: true, second: "Active" };

console.log(pair1, pair2);
```

### 🔹 5. Generics with Constraints (extends)

We can restrict a generic type using **extends**.

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello")); // ✅ 5
console.log(getLength([1, 2, 3, 4])); // ✅ 4
// console.log(getLength(100)); // ❌ Error: 'number' does not have a 'length' property
```

Here, **T** must have a **length** property (like string, array, or object with length).

### 🔹 6. Using Multiple Generics

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const person = merge({ name: "Alice" }, { age: 25 });
console.log(person); // ✅ { name: "Alice", age: 25 }
```

Here, **merge()** combines two different object types into one.

---

---

## 🚀 Type Utility Functions & Mapped Types

### 🔹 1. keyof – Getting Keys of an Object Type

The keyof operator extracts the keys of an object as a union type.

```typescript
type Person = { name: string; age: number; location: string };
type PersonKeys = keyof Person; // "name" | "age" | "location" // not using this example, just for refrence.

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30, location: "New York" };
console.log(getValue(person, "name")); // ✅ "Alice"
// console.log(getValue<Person>(person, "name"));  behind the seen
console.log(getValue(person, "age")); // ✅ 30
```

✅ **keyof** helps enforce safe access to object properties.

### 🔹 2. typeof – Getting Type from a Variable

The **typeof** operator lets us refer to the type of a variable.

```typescript
const user = { id: 101, username: "Alice" };

type UserType = typeof user; // Same as { id: number; username: string }
```

We can use it in function parameters too:

```typescript
const num = 42;
type NumberType = typeof num; // NumberType = number

function logId(id: typeof num) {
  console.log(id);
}

logId(100); // ✅ Works
// logId("100"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

### 🔹 3. Mapped Types – Transforming Object Types

Mapped types allow us to modify all properties in an object type.

✅ Making all properties **readonly**

```typescript
type User = { id: number; name: string; email: string };

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

const user1: ReadonlyUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};
// user1.name = "Bob"; // ❌ Error: Cannot assign to 'name' because it is a read-only property
```

✅ Making all properties optional

```typescript
type OptionalUser = {
  [K in keyof User]?: User[K];
};

const user2: OptionalUser = {}; // ✅ Works, all properties are optional
```

### 🔹 4. Utility Types (Built-in Type Helpers)

TypeScript provides built-in utility types to simplify type transformations.

#### ✅ 1) Partial<T> – Makes All Properties Optional

```typescript
type User = { id: number; name: string; email: string };

let partialUser: Partial<User> = { name: "Alice" }; // ✅ Allowed, all fields optional
```

#### ✅ 2) Required<T> – Makes All Properties Required

```typescript
type OptionalUser = { id?: number; name?: string };

let fullUser: Required<OptionalUser> = { id: 1, name: "Bob" }; // ✅ Must have both properties
```

#### ✅ 3) Readonly<T> – Makes All Properties Read-Only

```typescript
const user: Readonly<User> = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};
// user.name = "Bob"; // ❌ Error: Cannot assign to 'name' because it is a read-only property
```

#### ✅ 4) Pick<T, K> – Select Specific Properties

```typescript
type NameEmail = Pick<User, "name" | "email">;
// Equivalent to: { name: string; email: string }
```

#### ✅ 5) Omit<T, K> – Remove Specific Properties

```typescript
type UserWithoutEmail = Omit<User, "email">;
// Equivalent to: { id: number; name: string }
```

#### ✅ 6) Record<K, T> – Creates an Object Type with Specific Keys

```typescript
type Roles = "admin" | "editor" | "user";
type Permissions = Record<Roles, boolean>;
// Equivalent to: { admin: boolean; editor: boolean; user: boolean }

const userPermissions: Permissions = { admin: true, editor: false, user: true };
```

---

---

## 🚀 TypeScript Modules & Namespaces

As your TypeScript projects grow, managing code using modules and namespaces becomes essential. This step covers exporting and importing modules, namespaces, and ambient modules in TypeScript.

### 🔹 1. Modules in TypeScript

Modules allow us to split code into multiple files and reuse functionality efficiently.

#### ✅ Exporting & Importing in TypeScript Modules

Create a file **mathUtils.ts**:

```typescript
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;
```

Now, import it into another file **app.ts**:

```typescript
// app.ts
import { add, PI } from "./mathUtils";

console.log(add(10, 5)); // ✅ Output: 15
console.log(PI); // ✅ Output: 3.14
```

#### ✅ Export Default

A module can have a default export, which simplifies importing.

```typescript
// logger.ts
export default function logMessage(msg: string): void {
  console.log(`[LOG]: ${msg}`);
}
```

Now, import it:

```typescript
// app.ts
import logMessage from "./logger";

logMessage("Hello, TypeScript!"); // ✅ [LOG]: Hello, TypeScript!
```

✔️ You don’t need curly braces {} when importing a default export.

#### ✅ Re-exporting (Aggregating Modules)

If you want to export everything from one module into another:

```typescript
// utils.ts
export * from "./mathUtils";
export { default as log } from "./logger";
```

Now, **app.ts** can use:

```typescript
import { add, PI } from "./utils";
import log from "./utils";

log(`The sum is: ${add(10, 5)}`);
console.log(PI);
```

### 🔹 2. Ambient Modules (Using .d.ts Files for Declarations)

Sometimes, we work with JavaScript libraries that don’t have TypeScript types.
We can declare them using .d.ts files.

```typescript
// ambient.d.ts (no need to import this file)
declare module "myLibrary" {
  export function greet(name: string): string;
}
```

Now, in your code:

```typescript
import { greet } from "myLibrary";

console.log(greet("Alice")); // ✅ Works with the declared type
```

---

---

## 🚀 TypeScript Decorators (Advanced Feature)

Decorators are a powerful feature in TypeScript used for meta-programming. They allow us to modify classes, methods, properties, and parameters at runtime. Decorators are widely used in Angular, NestJS, and class-based libraries.

### 🔹 1. Enabling Decorators in TypeScript

Before using decorators, enable them in tsconfig.json:

```typescript
{
 "compilerOptions": {
   "experimentalDecorators": true,
   "emitDecoratorMetadata": true
 }
}

```

### 🔹 2. Creating a Simple Class Decorator

A class decorator is a function that modifies a class.

```javascript

function Logger(constructor: Function) {
 console.log(`Class created: ${constructor.name}`);
}

@Logger
class Person {
 constructor(public name: string) {}
}

const p1 = new Person("Alice");
// ✅ Output: "Class created: Person"

```

✔️ @Logger is executed when the class is defined, not when an instance is created.

### 🔹 3. Method Decorators (Modifying Methods)

Method decorators modify a class’s methods.

```typescript
function LogMethod(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodName} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
// ✅ Output: "Calling add with arguments: [5, 3]"
// ✅ 8
```

✔️ The decorator wraps the original method, logging arguments before execution.

### 🔹 4. Property Decorators (Modifying Properties)

Property decorators modify class properties.

```typescript
function LogProperty(target: any, propertyName: string) {
  console.log(`Property Decorator Applied to: ${propertyName}`);
}

class Product {
  @LogProperty
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const p = new Product("Laptop");
// ✅ Output: "Property Decorator Applied to: title"
```

✔️ Property decorators don’t modify values but allow metadata storage.

### 🔹 5. Parameter Decorators (Logging Parameters Used in Methods)

```javascript
function LogParameter(target: any, methodName: string, paramIndex: number) {
  console.log(`Parameter Decorator on ${methodName} at index ${paramIndex}`);
}

class User {
  greet(@LogParameter name: string) {
    console.log(`Hello, ${name}`);
  }
}

const user = new User();
user.greet("Alice");
// ✅ Output: "Parameter Decorator on greet at index 0"
```

✔️ Logs which parameter was decorated.

### ✔️ Logs which parameter was decorated.

```typescript
function LogAccessor(
  target: any,
  accessorName: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor Decorator on: ${accessorName}`);
}

class Person {
  private _age: number = 30;

  @LogAccessor
  get age() {
    return this._age;
  }
}

const person = new Person();
console.log(person.age);
// ✅ Output: "Accessor Decorator on: age"
```

---

---

## 🚀 Step 8: Conditional, Intersection, and Infer Types

Now, let's dive into some of the most powerful TypeScript features:  
✅ Intersection types (Combining multiple types)  
✅ Conditional types (Type logic based on conditions)  
✅ Infer keyword (Extracting types dynamically)

### 🔹 1. Intersection Types – Combining Multiple Types

Intersection types merge multiple types into one.

```typescript
type User = { name: string; email: string };
type Admin = { role: string };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  role: "SuperAdmin",
};
// ✅ Works because all properties from both types are included.
```

✔️ Use cases: Merging models, handling role-based logic, API responses.

### 🔹 2. Conditional Types – Type Logic Based on Conditions

Conditional types choose a type based on a condition.

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // ✅ "Yes"
type Test2 = IsString<number>; // ✅ "No"
```

✔️ Use cases: Making types flexible, utility functions.

### 🔹 3. Infer Keyword – Extracting Types Dynamically

infer is used inside conditional types to extract types.

```typescript
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(): string {
  return "Hello";
}

type GreetReturnType = GetReturnType<typeof greet>; // ✅ string
```

✔️ Use cases: Extracting function return types, auto-generating types.

---

---

---

---

---

---

---

---

## 🚀 Constants

### enum (Standard Enum)

- Enums in TypeScript are used to define named constants.
- They are compiled into JavaScript objects at runtime.

```typescript
enum Status {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

console.log(Status.SUCCESS); // ✅ "200"
console.log(Status[200]); // ✅ "SUCCESS"

// --------------------------------

enum Colors {
  Red,
  Green,
  Blue,
}

console.log(Colors.Red); // Output: 0
console.log(Colors[1]); // Output: Green
```

✅ Advantages:

Exists at runtime (useful for debugging or dynamic lookups).  
Reverse mapping (Status[200] → "SUCCESS").

❌ Disadvantages:

More JavaScript code generated.  
Higher runtime cost (stores values in an object).

### const enum (Constant Enum) -

👉 Use Case: Defining status codes, event types, or flags that are used multiple times in your code.

```typescript
const enum Status {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

function handleResponse(status: Status) {
  if (status === Status.SUCCESS) {
    console.log("Request was successful!");
  } else if (status === Status.NOT_FOUND) {
    console.log("Resource not found.");
  } else {
    console.log("Server error occurred.");
  }
}

handleResponse(Status.SUCCESS); // ✅ Works
handleResponse(200); // ✅ Works (since enum values are inlined)
handleResponse(201); // ❌ Error: Argument of type '201' is not assignable to type 'Status'.
```

Warning: const enums are erased at runtime, so they cannot be used in contexts where the enum object is needed (e.g., iterating over enum keys).

🔹 Why Use const enum?

- Eliminates runtime overhead by inlining values (improves performance).
- Improves code readability when dealing with status codes.
- Prevents accidental usage of invalid values.

### as const - Defining Immutable Configs

👉 Use Case: Storing immutable data like configuration, API endpoints, or theme values.

```typescript
const API_ENDPOINTS = {
  LOGIN: "/api/login",
  REGISTER: "/api/register",
  LOGOUT: "/api/logout",
} as const;

function callApi(endpoint: keyof typeof API_ENDPOINTS) {
  console.log(`Calling ${API_ENDPOINTS[endpoint]}`);
}

callApi("LOGIN"); // ✅ Works
callApi("INVALID"); // ❌ Error: Argument of type '"INVALID"' is not assignable to 'LOGIN' | 'REGISTER' | 'LOGOUT'.
```

🔹 Why Use as const?

- Ensures object properties are read-only.
- Limits function parameters to predefined values.
- Helps prevent accidental mutation.

### Conclusion

🔹 Use as const when you need a read-only object that still exists in runtime.  
🔹 Use const enum when you want zero runtime cost and just need constant values. (this will replace with static value on runtime/on build)

**If you want to use enum as value then go with as const otherwise go with enum.**

---

---

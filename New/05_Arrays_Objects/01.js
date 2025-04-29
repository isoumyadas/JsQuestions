// What are different ways to create arrays and objects?

// Array

// 1. Array Literal
const arr = [1, 2, 3];

// 2. Array Constructor
const arr1 = new Array(1, 2, 3); // avoid if not necessary

// 3. Array.of()
const arr2 = Array.of(1, 2, 3);

// 4. Array.from() (for converting array-like/iterables)
const str = "hello";
const arr3 = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

// Objects

// 1. Object Literal
const obj = { name: "Soumya", age: 22 };

// 2. Object Constructor
const obj1 = new Object();
obj1.name = "Soumya";

// 3. Object.create() (for setting prototype)
const prototype = {
  greet() {
    console.log("Hi");
  },
};
const obj2 = Object.create(prototype);

// 4. Using Classes
class Person {
  constructor(name) {
    this.name = name;
  }
}
const user = new Person("Soumya");

/**
✅ Use array and object literals ([], {}) — they are concise, clear, and performant.

❌ Avoid overusing constructors like new Array() unless there's a specific reason.

✅ Use Array.from() and Object.create() for more advanced use cases like functional programming or prototype-based inheritance.

✅ Use classes when building structured models in OOP-style code.
*/

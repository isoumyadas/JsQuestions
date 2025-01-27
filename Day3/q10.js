// Q : Explain prototypes and create a custom object method using them.

// What is Prototypes in JS:
// A prototype is a mechanism by which JavaScript objects inherit properties and methods from other objects. Every JavaScript object has an internal property called [[Prototype]], which points to another object. This forms a prototype chain that allows objects to share behaviors.

// Key Concepts
// Prototype Chain:
// When accessing a property or method on an object, JavaScript first looks for it on the object itself.
// If not found, it looks up the prototype chain until it finds the property or reaches null (end of the chain).

// Prototype vs. __proto__:
// __proto__: An accessor property that points to the object's prototype.
// prototype: A property of constructor functions, used to define methods for instances created by that constructor.

// Object.create():
// Allows you to create an object with a specific prototype.

// Prototype Benefits
// Memory Efficiency: Methods are not duplicated for every instance. Instead, they are shared through the prototype.
// Inheritance:  Prototypes allow objects to inherit properties and methods from other objects, enabling code reuse.

// Example:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `Hi, I am ${this.name} and I am ${this.age} years old`;
};

const pers1 = new Person("Alice", 12);
const pers2 = new Person("Som", 20);

console.log(pers1.introduce());
console.log(pers2.introduce());

// Same you can do for Array
Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); // Output: 15

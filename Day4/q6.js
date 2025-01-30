// Q: Explain bind, call, and apply with examples
// For more understading => https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#18a8a069a2a48086a816fd9e3489fdb7

// In JavaScript, bind, call, and apply are methods used to explicitly control the value of this in a function. They are often used when working with objects and borrowing methods.

// 1. call
// Purpose: Invokes a function with a specified this value and individual arguments.
// Syntax: func.call(thisArg, arg1, arg2, ...)

const person = {
  name: "samm",
  age: 23,
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name} ${punctuation}`);
}

greet.call(person, "Hola", "!");

// 2. apply
// Purpose: Similar to call, but arguments are passed as an array.
// Syntax: func.apply(thisArg, [argsArray])

const person1 = {
  firstName: "Jane",
  lastName: "Smith",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

greet.apply(person1, ["Hi", "!"]);

//3. bind
// Purpose: Creates a new function with this bound to a specified object. It doesn’t invoke the function immediately.
// Syntax: func.bind(thisArg, arg1, arg2, ...)

const person2 = {
  firstName: "Alice",
  lastName: "Johnson",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

const boundGreet = greet.bind(person2, "Hey");
boundGreet("!"); // Hey, Alice Johnson!

// Example
const user = { name: "Jhonson" };

function sayHello(greeting) {
  console.log(`${greeting} ${this.name}`);
}

// using call
sayHello.call(user, "Hey");

//using apply
sayHello.apply(user, ["hewllllooo"]);

// using bind
const say = sayHello.bind(user, "hola amigos meet = ");
say();

// In JavaScript, functions have access to a special object called arguments, even if no parameters are defined in the function.
// 🔹 How arguments Works:
// The arguments object is an array-like object that holds all the values passed to a function.
// Even if the function does not declare parameters, it can still access the arguments using arguments[index].

//In modern JavaScript, using the rest parameter (...args) is preferred over arguments

function sumNumbers() {
  const numbers = Array.prototype.slice.call(arguments); // Convert arguments to an array
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4)); // Output: 10

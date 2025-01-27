// Q: Explain this with examples:

//1. Global Context
//In the global context, this refers to the global object (window in browsers or global in Node.js).
console.log(this); // In the browser, it logs the Window object

// 2. Inside an Object
// When used in a method of an object, this refers to the object that owns the method.
const person = {
  name: "Soumya",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Soumya
// Here, this.name refers to the name property of the person object.

// 3. Inside a Function
// In a regular function (not a method), this refers to the global object in non-strict mode, or undefined in strict mode.
function showThis() {
  console.log(this);
}
showThis(); // In non-strict mode, logs the global object (Window in browsers)

// In strict mode:
("use strict");
function showThisStrict() {
  console.log(this);
}
showThisStrict(); // undefined

// 4. Arrow Functions
// Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical context.
const person1 = {
  name: "Soumya",
  greet: function () {
    const arrowFunction = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
    arrowFunction();
  },
};

person1.greet(); // Output: Hello, my name is Soumya
// Here, the arrow function inherits this from the greet method, where this refers to the person object.

// 5. Constructor Functions
// In constructor functions, this refers to the instance of the object being created.
function Person(name) {
  this.name = name;
}

const soumya = new Person("Soumya");
console.log(soumya.name); // Output: Soumya

// 6. Class Methods
// In class methods, this refers to the instance of the class.
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person("Soumya");
person2.greet(); // Output: Hello, my name is Soumya

// 7. Event Listeners
// In event listeners, this typically refers to the DOM element that triggered the event.

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", function () {
  console.log(this); // Logs the button element
});

// 8. Explicit Binding (call, apply, bind)
// You can explicitly set the value of this using call, apply, or bind.
function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person3 = { name: "Soumya" };

greet.call(person3, "Hello"); // Output: Hello, my name is Soumya
greet.apply(person3, ["Hi"]); // Output: Hi, my name is Soumya

const boundGreet = greet.bind(person3);
boundGreet("Hey"); // Output: Hey, my name is Soumya

// 9. In setTimeout or setInterval
// In a regular function, this inside setTimeout or setInterval refers to the global object.

setTimeout(function () {
  console.log(this); // Logs the global object (Window in browsers)
}, 1000);
// To preserve the correct context, use an arrow function:

setTimeout(() => {
  console.log(this); // Inherits `this` from the surrounding context
}, 1000);

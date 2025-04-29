// What's the difference between let, const, and var? Give examples

// 1. Var
// Var: Function scope, meaning a variable declared with var is accessible throughout the entire function it's defined in, or globally if declared outside any function.

function myFunc() {
  var x = 10; // Accessible throughout myFunc
  if (true) {
    var y = 20; // Also accessible throughout myFunc
  }
  console.log(x, y); // Output: 10 20
}

myFunc();

// var: Can be reassigned and re-declared within the same scope.
var x = 10;
x = 20; // Reassignment
var x = 30; // Re-declaration (allowed)
console.log(x); // Output: 30

//var: Variables declared with var are hoisted to the top of their scope (function or global). They are initialized with the value undefined.
console.log(x); // Output: undefined
var x = 10;

// ========================================

// 2. let & const
// let and const: Block scope, meaning a variable declared with let or const is only accessible within the code block (e.g., inside curly braces {}) it's defined in.
function myFunc() {
  let x = 10; // Accessible only within myFunc
  if (true) {
    let y = 20; // Accessible only within the if block
    console.log(x, y); // Output: 10 20
  }
  // console.log(y); // Error: y is not defined
}
myFunc();

// let: Can be reassigned but not re-declared within the same scope.
let x = 10;
x = 20; // Reassignment
// let x = 30; // Error: x has already been declared
console.log(x); // Output: 20

//const: Cannot be reassigned or re-declared.
const x = 10;
// x = 20; // Error: Assignment to constant variable
// const x = 30; // Error: x has already been declared
console.log(x); // Output: 10

//let and const: Variables declared with let and const are also hoisted, but they are not initialized. Trying to access them before their declaration results in a ReferenceError (Temporal Dead Zone)
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;

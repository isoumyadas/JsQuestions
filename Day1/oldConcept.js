// ^ what does hoisting mean? in js
// ^ Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This allows you to use variables and functions before they are declared in the code.

// Q1
function primeNumber(num) {
  const result = num / 2 === 0 ? "The number is prime" : "The number is odd";

  return result;
}

console.log(primeNumber(4));

// Q2
function factorialNum(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorialNum(num - 1);
}

console.log(factorialNum(5));

//Q3 => To reverse the string without bulit-in functions : a. Recursion, b. for loop, c. array manipulation
// Reference: https://www.javaguides.net/2023/09/javascript-reverse-string-without-built-in-reverse-function.html

// With for loop
function revreseStringLoop(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(revreseStringLoop("soumya"));

// with recursion
function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substring(1)) + str.charAt(0); // as substr is deprecated! dont use this. use substring.
}

console.log(reverseString("soumyaranjan"));

// and with built-in functions

function revrese(str) {
  return [...str].reverse().join("");
}

console.log(revrese("LeoMessi"));

// Q4

//  The main difference between var and let, const is. Var is hoisted but not declared
console.log(a); // this will show undefined
var a = "sop";
console.log(a);

// But same you do for let or const
console.log(uname); // you will encounter => ReferenceError: Cannot access 'uname' before initialization as this is in TDZ
const uname = "sammuy";
console.log(uname);

//Q5

/**
 * 
 * Function Declarations: A function declaration defines a function using the function keyword, followed by a name.
 * 
 * Hoisting: Function declarations are fully hoisted. This means they can be called before their declaration in the code.

            greet(); // "Hello!"
            
            function greet() {
                console.log("Hello!");
            }
 * 
 * 
 * 
 * 
 * Function Expressions: A function expression involves assigning a function to a variable or constant.
 * 
 * Hoisting: Function expressions are not hoisted. The variable is hoisted, but its value (the function) is not initialized until runtime. This means they cannot be used before their declaration.

            sayHi(); // TypeError: sayHi is not a function
            
            const sayHi = function() {
                 console.log("Hi!");
            };

    Anonymous or Named: Function expressions can be anonymous (no name) or named.

        const anonymousFunction = function() {
            console.log("I am anonymous");
        };

        const namedFunction = function namedFunc() {
            console.log("I have a name");
        };
 * 
 * 
 * 
 * When to Use?
    Use function declarations when you want functions that are always accessible throughout the scope.
    Use function expressions for flexibility, such as defining functions inline, creating closures, or assigning functions to variables.
 * 
 */

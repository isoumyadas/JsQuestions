// What happens when you declare a variable without let/var/const?

// In non-strict mode ("use strict" not enabled):
// JavaScript automatically creates a global variable, even if you are inside a function.
// The variable becomes a property of the window object in browsers (or global object in Node.js).

function test() {
  x = 5; // no let/var/const
}
test();
console.log(window.x); // 5 (in browser)

// In strict mode ("use strict" enabled):
// JavaScript throws a ReferenceError.

("use strict");
function test() {
  x = 5; // Error: x is not defined
}
test();

/**
 Why is this bad practice?
    It pollutes the global scope, making debugging harder.
    It increases chances of name collisions and security issues.
    It makes code unpredictable and harder to maintain.
 */

// What is the output?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 2000);
}

// What happens with var?
/**
 * var is function-scoped, so there is only one i for the entire loop.
 * The loop finishes very fast, and i becomes 3.
 * After 2 seconds, all setTimeout functions run — and they all use the same final value of i, which is 3.
 */

// What JS actually sees:
// var i = 0;
// setTimeout(() => console.log(i), 2000); // i is shared
// i = 1;
// setTimeout(() => console.log(i), 2000);
// i = 2;
// setTimeout(() => console.log(i), 2000);
// i = 3;

// How does callstack would look like?
// i becomes 0 → registers setTimeout (prints i)
// i becomes 1 → registers another setTimeout
// i becomes 2 → registers another setTimeout
// Now i becomes 3 — loop ends

// All 3 setTimeout callbacks are moved to the callback queue, and then one-by-one onto the call stack by the event loop.
// But remember: var is function-scoped — so all callbacks point to the same i, which is now 3.

// ================================================================================================================================

// What happens with let

/**
 * let is block-scoped, meaning:
 * Each iteration of the loop gets a new, fresh copy of i.
 * So, the first timeout closes over i = 0, second over i = 1, and so on.
 */

// What JS sees:
//  {
//     let i = 0;
//     setTimeout(() => console.log(i), 2000);
//   }
//   {
//     let i = 1;
//     setTimeout(() => console.log(i), 2000);
//   }
//   {
//     let i = 2;
//     setTimeout(() => console.log(i), 2000);
//   }

// How does callstack would look like?

// 1. During the loop execution (0ms)
// setTimeout is called 3 times, immediately.

// Each call:
// Registers a callback to be executed after 2000ms.
// Does not block the code.
// These callbacks go to the Web API environment (handled by browser, not JS engine directly).

// 2. After 2 seconds (2000ms)
// Each callback is moved to the task queue, and then the event loop pushes it onto the call stack when it's empty.

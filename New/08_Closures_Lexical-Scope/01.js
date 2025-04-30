// What is a closure? Show a simple example.
// A closure is when a function remembers and has access to variables from its outer scope, even after that outer function has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

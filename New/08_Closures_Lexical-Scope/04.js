// What's the output and why?

function outer() {
  let x = 5;
  return function inner() {
    return x++;
  };
}
const run = outer();
console.log(run()); // 5
console.log(run()); // 6

// becuase of closure the inner function can remember the x value and increment it.

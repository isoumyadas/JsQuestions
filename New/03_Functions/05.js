// What’s a pure function? Give an impure vs pure function example.

//  Pure Function
// A pure function always:
// Returns the same output for the same input
// Has no side effects (doesn’t change external state)

function add(a, b) {
  return a + b;
}

//2
function square(n) {
  return n * n;
}

// Impure
let count = 0;
function increase() {
  count++; // modifies external state
}

//2
function squareAndLog(n) {
  console.log(n * n); // side effect: console output
}

/**
    Depends on external behavior (logging)
    Does not return a value
*/

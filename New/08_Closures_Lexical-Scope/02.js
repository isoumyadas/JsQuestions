// What is lexical scope
// The scope of a variable is determined by its location in the source code (i.e., where it's written), not where it's called.

function outer() {
  let a = 10;
  function inner() {
    console.log(a); // inner has access to 'a' from outer
  }
  inner();
}

outer(); // 10

// How Does JS Resolve Variables?
// JavaScript uses the scope chain:

// It looks in the local function scope first.
// If not found, it moves to the outer (enclosing) scope.
// Continues upward until it reaches the global scope.
// This is known as lexical scope resolution

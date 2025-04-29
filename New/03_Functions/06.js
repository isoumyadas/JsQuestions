// What will this print?

function outer() {
  var count = 0;
  return function inner() {
    return ++count;
  };
}
const fn = outer(); // 0
console.log(fn()); // 1
console.log(fn()); // 2

//WHY?

// Closures allow the inner function to “remember” and update count even after outer() has finished executing.

// outer() is called once, so count is initialized to 0 only once.

// fn holds the returned inner() function, with access to count via closure.

// Every time you call fn(), it increments and returns count.

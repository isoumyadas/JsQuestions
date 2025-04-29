// What's a callback function? Give a simple example.

// A callback function is a function passed as an argument to another function to be called later.

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Soumya", sayBye);

// Q: Write a higher-order function that accepts a function as an argument.

// For more understanding: https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#18a8a069a2a4806a9b56c4761298fc69

// What does HOF mean? => A Higher-Order Function (HOF) is a function that either takes one or more functions as arguments OR returns a function as its result.
// Why Use Higher-Order Functions?
// Code Reusability – Instead of writing the same logic multiple times, you can pass different functions to a reusable HOF.
// Function Composition – Helps in structuring code in a modular way.
// Improves Readability – Allows for cleaner and more readable code.

function greet(name, formatter) {
  return formatter(name);
}

function casualGreeting(name) {
  return `Hey ${name}`;
}

function formalGreetingg(name) {
  return `Hello MR/MR's ${name}`;
}

console.log(greet("Soumya", casualGreeting));
console.log(greet("SoumyaRanjan Das", formalGreetingg));

// Real world case
function authenticate(userRole, action) {
  return function () {
    if (userRole === "admin") {
      action();
    } else {
      console.log("Access Denied: Admins only!");
    }
  };
}

function deleteUser() {
  console.log("User deleted!");
}

const adminAction = authenticate("admin", deleteUser);
adminAction(); // ✅ Output: User deleted!

const userAction = authenticate("guest", deleteUser);
userAction(); // ❌ Output: Access Denied: Admins only!

// Higher-order functions either accept a function as an argument OR return a function.
// They help in writing cleaner, reusable, and modular code.
// Real-world examples include event listeners, authentication, middleware in Express.js, and built-in array methods like map(), filter(), and reduce().

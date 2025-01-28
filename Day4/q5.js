// Q: Demonstrate closures with a practical example

// Closures are created every time a function is defined, allowing the inner function to access the outer function's variables even when the outer function has finished execution.

// Remembers the variables from its outer (enclosing) scope even after that scope has exited.
// Allows you to "close over" variables and persist their values.

// Why Use Closures?
// Closures are widely used in JavaScript for:

// Data Privacy: Variables remain private to the function, ensuring encapsulation.
// Partial Application: Functions can "remember" preset values to create specialized versions.
// State Management: Closures help maintain state in systems like counters, timers, or even complex systems like the bank account example.

function outerfunc(initialBalance) {
  let balance = initialBalance;

  return {
    addBalance(amount) {
      balance += amount;
      return `You credited ${amount} and Your current balance is ${balance}`;
    },

    withdrawBalance(amount) {
      if (amount > balance) return `You have avaiable balance ${balance}`;

      balance -= amount;
      return `You have debited ${amount} and Your current balance is ${balance}`;
    },

    checkBalance() {
      return `Your current balance is ${balance}`;
    },
  };
}

// save the outerFunc to a variable
const firstBankAccount = outerfunc(3000);

console.log(firstBankAccount.addBalance(400));
console.log(firstBankAccount.withdrawBalance(2700));
console.log(firstBankAccount.checkBalance());

// Also you can create a another bankAccount too
const secondBankAccount = outerfunc(5000);

console.log(secondBankAccount.addBalance(5000));
console.log(secondBankAccount.withdrawBalance(3000));
console.log(secondBankAccount.checkBalance());

// Q :  Write a function to find the factorial of a number using recursion.

// Recursion occurs when a function calls itself within its own body. It solves a problem by breaking it down into smaller and simpler sub-problems of the same type. Eventually, it reaches a point(the base case) where it stops calling itself.

// Learn in deeo : https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4#1688a069a2a4804eaffbe167d5f49e4f

function factorialOfNumber(n) {
  // base case

  if (n === 1) {
    return 1;
  }

  return n * factorialOfNumber(n - 1);
}

console.log(factorialOfNumber(7));

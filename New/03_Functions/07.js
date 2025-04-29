// Create a memoized version of a factorial function.
// Memoization is a technique where function results are cached so that when the same inputs occur again, the function can return the cached result instead of recalculating it.

function memoizedFactorial() {
  const cache = {};

  return function factorial(n) {
    if (n in cache) return cache[n];
    if (n === 0 || n === 1) return 1;

    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}

const fact = memoizedFactorial();

console.log(fact(5)); // 120 (calculated)
console.log(fact(5)); // 120 (from cache)
console.log(fact(6)); // 720 (uses cached 5!)

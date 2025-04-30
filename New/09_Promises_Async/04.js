// What does Promise.all and Promise.race do?

/**
 * Promise.all([])
 * Takes an array of promises.
 * ✅ Resolves when all promises succeed, returning an array of results.
 * ❌ Rejects immediately if any one of them fails.
 */

Promise.all([p1, p2, p3])
  .then((results) => console.log(results)) // [result1, result2, result3]
  .catch((err) => console.log("Error:", err));

/**
 * Promise.race([])
 * ✅ Resolves or ❌ rejects as soon as the first promise settles (whether fulfilled or rejected).
 */
Promise.race([p1, p2, p3])
  .then((result) => console.log("First resolved:", result))
  .catch((err) => console.log("First rejected:", err));

// ==============================================================================================================

const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 3000));
const p2 = new Promise((res) => setTimeout(() => res("P2 done"), 1000));

Promise.all([p1, p2]) // waits for both
  .then(console.log); // ["P1 done", "P2 done"]

Promise.race([p1, p2]) // resolves as soon as P2 does
  .then(console.log); // "P2 done"

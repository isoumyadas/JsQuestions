// Explain labeled break/continue with an example.

// When you use break or continue in nested loops, it only works for the current (inner) loop by default.
// But what if you want to exit or skip the outer loop directly from inside the inner loop?
// That’s where labels help.

// What is Label? => Just a name given to a loop.
// outerLoop: for (...) {
//     for (...) {
//       if (...) break outerLoop;
//     }
//   }

// Without label:  It will break only the inner loop, so outer loop continues.
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break;
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("=========================");

// With label:
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break outer;
    console.log(`i=${i}, j=${j}`);
  }
}
//  break outer; breaks the entire outer loop immediately.

// ==========================================================

// Continue:
// What does continue do?
// continue skips the rest of the current loop and goes to the next iteration.
// Normally, it affects only the inner loop.
// But with a label, you can tell it to skip the outer loop instead!
console.log("=========================");

// Without label:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue; // continue only skips j = 1 inside the inner loop.
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("=========================");

// With label:
outerr: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) continue outerr;
    console.log(`i=${i}, j=${j}`);
  }
}
// Here’s what happens:
// When j === 1, it skips to the next i (outer loop).
// So j = 2 is never reached!

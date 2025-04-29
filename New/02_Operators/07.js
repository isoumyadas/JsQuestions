// How do ++x and x++ behave differently in return statements?

// ++x → Pre-increment
// Increments first, then returns the new value.

let x = 1;
return console.log(++x); // returns 2

// x++ → Post-increment
// Returns current value, then increments.
let yy = 2;
if (yy) return console.log(yy++); // returns 1 (yy becomes 2 *after* return)

console.log(yy);

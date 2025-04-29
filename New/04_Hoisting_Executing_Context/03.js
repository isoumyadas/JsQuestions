// Explain call stack with a visual of:

// && The call stack is a data structure that tracks which function is currently running and what functions are waiting to run.

// Before a() runs:        []
// a() starts:             [a]
// b() called inside a():  [a, b]
// c() called inside b():  [a, b, c]
// console.log("done"):    [a, b, c]
// c() finishes:           [a, b]
// b() finishes:           [a]
// a() finishes:           []

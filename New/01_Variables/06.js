// What will this output and why?

let x;
console.log(x + 2); // Output: NAN

/**
    x is undefined (because you declared it but didn’t assign any value).
    undefined + 2 → JavaScript tries to convert undefined to a number → it becomes NaN (Not a Number).
    So, console.log(x + 2) prints NaN.
 */

// If x would be null then,
// null is converted to 0 in numeric operations.
// So null + 2 → 0 + 2 → 2.

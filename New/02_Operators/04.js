// Write a custom implementation of the ?? (nullish coalescing) behavior.

/**
  Nullish coalescing (??) means:
    “If the left side is null or undefined, use the right side.”

  Difference from ||:
    || returns right side if the left is falsy (0, "", false, null, undefined)

    ?? only checks for null or undefined
 */

null ?? "default"; // "default"
undefined ?? "fallback"; // "fallback"
0 ?? 100; // 0 (not null/undefined)
"" ?? "empty"; // "" (not null/undefined)
false ?? true; // false

// Custom function for ??
function nullishCoalesce(a, b) {
  return a !== null && a !== undefined ? a : b;
}

console.log(nullishCoalesce(null, "okay bro"));
console.log(nullishCoalesce("null", "okay bro"));
console.log(nullishCoalesce(null, undefined));
console.log(nullishCoalesce(null, null));
console.log(nullishCoalesce(undefined, undefined));
console.log(nullishCoalesce("fine bro", null));

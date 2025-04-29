// What will this return?

console.log(0 || ("Hello" && null) || "Bye");

// becuase 0 is denoted as falsly value
// {"hello" && null} gives us null which is also a falsy value
// remaining is "Bye" which is truhty value.

// Output will be "BYE"

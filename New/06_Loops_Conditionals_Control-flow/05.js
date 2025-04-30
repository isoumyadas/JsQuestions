// Use a switch(true) structure to group age ranges (child, adult, senior).

// Why use switch(true)?
// Normally, switch(value) compares cases using strict equality (===). But when you use switch(true), each case can be a condition that returns true.

function categorizeAge(age) {
  switch (true) {
    case age < 13:
      console.log("Child");
      break;
    case age < 60:
      console.log("Adult");
      break;
    default:
      console.log("Senior");
  }
}

categorizeAge(6);

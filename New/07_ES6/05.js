// Write a function using default parameters and rest parameters together.

function testing(val = "testing", ...rest) {
  console.log(rest);
  rest.forEach((name) => {
    console.log(`${val} has all the ${name}`);
  });
}

testing("Hey", "Sammyu", "Jaasu");
testing(undefined, "H", "l");

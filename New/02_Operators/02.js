// What is the difference between == and ===?

/**
 *
 * Difference is == only checks the value not its datatype which is also called loose type checking
 *
 *
 * But === checks the value as well as datatype which is more benefical.
 *
 */

if (5 == "5") {
  console.log("Correct");
}

if (6 === "6") {
  console.log("Ok");
}

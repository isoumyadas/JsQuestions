// Write a function that accepts another function and runs it after 2 seconds.

function callingCallbackFunctionAfterTwoSec(val, callback) {
  console.log("This is working", val);

  setTimeout(callback, 2000);
}

function normalFunction() {
  console.log(`Ok working fine.`);
}

callingCallbackFunctionAfterTwoSec("Soumya", normalFunction);

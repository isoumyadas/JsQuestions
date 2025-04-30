// Create a counter function that remembers its state:

function counterFunction() {
  let count = 1;

  return function () {
    return count++;
  };
}

const counter = counterFunction();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

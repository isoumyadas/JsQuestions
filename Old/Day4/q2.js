// Q :  Implement a function to check if a number is prime.

function ifNumberArePrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

console.log(ifNumberArePrime(87));

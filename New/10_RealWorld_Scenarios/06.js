// Write a sleep function: await sleep(2000);

// In JavaScript, a sleep function pauses the execution for a given time — it's like telling the program to "wait" before moving forward.

/**
This is often useful when:
Simulating delays (e.g., fake API calls)
Rate limiting
Waiting for animation or user interaction
*/

// sleep fun

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");
  await sleep(2000);
  console.log("End after 2 seconds");
}

demo();

async function notAvg() {
  const result = [];
  const arr = [12, 3, 4, 54, 5, 56];
  arr.forEach((i) => result.push(i + 3));

  await sleep(3000);
  console.log("Refreshing the new array");
  await sleep(1000);

  return result;
}

notAvg()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

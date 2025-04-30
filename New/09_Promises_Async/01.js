// What is a Promise? Show how to create and consume it.

// A Promise in JavaScript represents the eventual result of an asynchronous operation — either a success (resolved) or a failure (rejected).

// Created
const myPromise = new Promise((resolve, reject) => {
  const success = false;

  setTimeout(() => {
    if (success) {
      resolve("Promise is law");
    } else {
      reject("Promise is wal");
    }
  }, 2000);
});

//Consuming
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

//resolve() → when async task completes successfully.
// reject() → when it fails.
// .then() → handles success.
// .catch() → handles error.

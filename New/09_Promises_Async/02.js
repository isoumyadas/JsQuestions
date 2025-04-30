// Convert this callback-based function to a Promise:
function fetchDataAsPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
}

// Consumed
const fetchData = fetchDataAsPromise();
fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

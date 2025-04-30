// Chain multiple .then() blocks to simulate multiple steps of an API call.

function fetchingUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  return new Promise((resolve, reject) => {
    if (url) {
      resolve(fetch(url));
    } else {
      reject("Invalid URL");
    }
  });
}

const fetchedUsers = fetchingUsers();

fetchedUsers
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

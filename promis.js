// Function that returns a Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const users = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
        3: { name: "Charlie", age: 35 },
      };

      // Check if the user exists
      const user = users[userId];
      if (user) {
        // Resolve the Promise with user data
        resolve(user);
      } else {
        // Reject the Promise if user is not found
        reject(`User with ID ${userId} not found.`);
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Using the Promise
fetchUserData(1)
  .then((user) => {
    console.log("User data received:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Trying to fetch a user that doesn't exist
fetchUserData(4)
  .then((user) => {
    console.log("User data received:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

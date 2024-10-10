// Simulated API call using a Promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a 2-second delay
  });
}

// Async function to use await
async function getData() {
  console.log("Fetching data...");

  try {
    const data = await fetchData(); // Waits for fetchData to resolve
    console.log(data); // Logs the data once fetched
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
getData();

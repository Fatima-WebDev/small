//Q2. Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 err

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Extract the file name from the request URL
  const fileName = path.join(
    __dirname,
    req.url === "/" ? "index.txt" : req.url
  );

  // Read the file and send the content
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      // If there's an error (e.g., file not found), send a 404 response
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    // If successful, send the content of the file
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

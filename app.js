const http = require("http");

console.log("Auto deploy test 🚀");   // 👈 ADD THIS LINE

const server = http.createServer((req, res) => {
  res.end("Hello from EC2 🚀");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

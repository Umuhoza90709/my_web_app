const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
<<<<<<< HEAD
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server on port 3000!\n');
=======
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello from Node.js on port 3000!</h1>');
>>>>>>> 01315ee90907e1939adf426b61e1d5ff217b45bb
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

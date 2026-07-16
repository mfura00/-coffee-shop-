process.stderr.write('MINIMAL BOOT\n');
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from minimal server');
});
const port = process.env.PORT || 5000;
server.listen(port, () => {
  process.stderr.write('Listening on ' + port + '\n');
});

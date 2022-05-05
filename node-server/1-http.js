const http = require('http');
const http2 = require('http2');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('incoming');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  const url = req.url;
  if (url === '/') {
    res.write('Welcome!');
  } else if (url === '/courses') {
    res.write('Courses');
  } else {
    res.write('Not found');
  }
  res.end();
});

server.listen(8080);

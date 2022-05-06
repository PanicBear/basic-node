const http = require('http');
// const http2 = require('http2');
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('incoming');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  const url = req.url;
  if (url === '/') {
    fs.createReadStream('./index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./courses.html').pipe(res);
  } else {
    fs.createReadStream('./not-found.html').pipe(res);
  }
});

server.listen(8080);

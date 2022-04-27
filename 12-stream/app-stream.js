const fs = require('fs');

const data = [];

fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // default: 64kb
  encoding: 'utf-8',
})
  .once('data', (chunk) => {
    // console.log(chunk);
    data.push(chunk);
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', console.log);

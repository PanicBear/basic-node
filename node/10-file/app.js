const fs = require('fs');

// 1. non-block
// rename(..., callback(err, data))

// fs.rename('./file-new.txt', './file.txt', (error) => {
//   console.log(error);
// });
// console.log('hello');

// 2. block
// try { renameSync(...)} catch(e) {}

// try {
//   fs.renameSync('./file.txt', './file-new.txt');
// } catch (error) {
//   console.error(error);
// }

// 3. promise
// promises.rename().then().catch()

fs.promises
  .rename('./file.txt', './file-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);

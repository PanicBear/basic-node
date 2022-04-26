const fs = require('fs').promises;

// read file
fs.readFile('./file.txt', 'utf8').then(console.log).catch(console.error);

// write file
// 덮어쓰기
fs.writeFile('./file.txt', 'Hello World!').catch(console.error);
// 이어쓰기
fs.appendFile('./file.txt', 'Hello World Again!').catch(console.error);

// copy file
fs.copyFile('./file.txt', './file2.txt').catch(console.error);
// 비동기 작업 후 파일 복사
fs.appendFile('./file.txt', 'Hello World Again!')
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt').catch(console.error);
  })
  .catch(console.error);

// create folder
fs.mkdir('sub-folder').catch(console.error);

// read all file name in folder
fs.readdir('./').then(console.log).catch(console.error);

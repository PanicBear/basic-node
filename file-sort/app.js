const path = require('path');
const os = require('os');
const fs = require('fs').promises;

const homedir = os.homedir();
const targetDirName = process.argv[2];
const targetDirPath = path.join(homedir, 'downloads', targetDirName);

function makeDirectoriesForSort() {
  fs.mkdir(path.join(targetDirPath, 'video')).catch(console.log);
  fs.mkdir(path.join(targetDirPath, 'captured')).catch(console.log);
  fs.mkdir(path.join(targetDirPath, 'duplicated')).catch(console.log);
}

async function getFileListOnly(targetDirPath) {
  const fileList = await fs.readdir(targetDirPath, { withFileTypes: true });
  return fileList.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);
}

makeDirectoriesForSort();
getFileListOnly(targetDirPath).then(console.log);

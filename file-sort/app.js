const path = require('path');
const os = require('os');
const fs = require('fs');

const homedir = os.homedir();
const targetDirName = process.argv[2];
const targetDirPath = path.join(homedir, 'downloads', targetDirName);

function makeDirectoriesForSort() {
  fs.promises.mkdir(path.join(targetDirPath, 'video')).catch(console.log);
  fs.promises.mkdir(path.join(targetDirPath, 'captured')).catch(console.log);
  fs.promises.mkdir(path.join(targetDirPath, 'duplicated')).catch(console.log);
}

async function getFileListOnly(targetDirPath) {
  const fileList = await fs.promises.readdir(targetDirPath, { withFileTypes: true });
  return fileList.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);
}

function moveFileToFolder(fileName, folderName) {
  const originFilePath = path.join(targetDirPath, fileName);
  const targetPath = path.join(targetDirPath, folderName, fileName);

  fs.rename(originFilePath, targetPath, (err) => console.log(err)).then(() => {
    console.log(`${fileName} moved to ${folderName}`);
  });
}

function handleFile(fileName) {
  switch (path.extname(fileName).toLowerCase()) {
    case '.png':
    case '.aae':
      return moveFileToFolder(fileName, 'captured');
    case '.mp4':
    case '.mov':
      return moveFileToFolder(fileName, 'video');
    case '.jpg':
      if (fileName.startsWith('IMG_E')) {
        const originFileName = fileName.replace(/^(IMG_E)/, 'IMG_');
        return moveFileToFolder(originFileName, 'duplicated');
      }
      return;
  }
}

// makeDirectoriesForSort();
getFileListOnly(targetDirPath).then((fileList) => {
  fileList.forEach((file) => handleFile(file));
});

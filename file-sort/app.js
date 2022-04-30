const path = require('path');
const os = require('os');
const fs = require('fs').promises;

const homedir = os.homedir();
const targetDirName = process.argv[2];
const targetDirPath = path.join(homedir, 'downloads', targetDirName);

fs.mkdir(path.join(targetDirPath, 'video')).catch(console.log);
fs.mkdir(path.join(targetDirPath, 'captured')).catch(console.log);
fs.mkdir(path.join(targetDirPath, 'duplicated')).catch(console.log);

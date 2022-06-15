const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10); // 10~12, 너무 길면 오래걸림

console.log(`password: ${password}, hashed: ${hashed}`);

const result1 = bcrypt.compareSync('abcd1234', hashed);
const result2 = bcrypt.compareSync('abcd123', hashed);
console.log(result1);
console.log(result2);

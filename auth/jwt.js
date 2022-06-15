const jwt = require('jsonwebtoken');

const payload = {
  id: 'userId',
  isAdmin: false,
};
const secretKey = 'asdfasdfqwh9gqhg';

const token = jwt.sign(payload, secretKey, { expiresIn: 2 });
console.log(token);

setTimeout(() => {
  jwt.verify(token, secretKey, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

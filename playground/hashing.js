const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
var message = 'I am a user';
var hash = SHA256(message).toString();
console.log(hash);

var data = {
    id: 4
};

console.log(SHA256(JSON.stringify(data) + 'somesecret').toString());

var token = jwt.sign(data, 'somesecret');
console.log(token);

var decoded = jwt.verify(token, 'somesecret');
console.log(decoded);


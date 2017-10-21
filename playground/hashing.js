const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err,hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$rfU.tqSP1.iDRlA1xEd8VOdn3YWcx8KG3yMXLiIL.6qGfvIg8S25K';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});


//var message = 'I am a user';
//var hash = SHA256(message).toString();
//console.log(hash);

//var data = {
//    id: 4
//};

//console.log(SHA256(JSON.stringify(data) + 'somesecret').toString());

//var token = jwt.sign(data, 'somesecret');
//console.log(token);

//var decoded = jwt.verify(token, 'somesecret');
//console.log(decoded);



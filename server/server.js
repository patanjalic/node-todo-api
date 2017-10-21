var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
var { authenticate } = require('./middleware/authenticate');

var { Todo } = require('./db/Todo');
var { User } = require('./db/User');


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({ text: req.body.text });
    todo.save().then((doc) => { res.send(doc) }, (err) => { res.status(400).send('error') });
});

app.post('/users', (req,res) => {
    var user = new User(_.pick(req.body, ['email', 'password']));
    user.save().then(() => { return user.generateAuthToken() })
        .then((token) => res.header('x-auth',token).send(user))
        .catch((e) => {
            console.log(e);
            res.status(400).send(e)
        });
});

app.get('/users/me', authenticate,(req, res) => {
    res.send(req.user);
});

app.listen(3000, () => {
    console.log('Server successfully started on port ' + 3000);
});



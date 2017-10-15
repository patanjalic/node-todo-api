var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todouser:todouser@ds115085.mlab.com:15085/todos');

var Todo = mongoose.model('Todos', {
    text: { type: String },
    completed: { type: Boolean },
    completedAt: { type: Number }
});

var todo = new Todo({ text: 'Watch nfl game' });
todo.save().then((doc) => {
    console.log('Document successfully saved ' + JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Error while saving document ' + e);
    });


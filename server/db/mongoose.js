var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todouser:todouser@ds115085.mlab.com:15085/todos');

module.exports = { mongoose }
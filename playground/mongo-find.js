//const mongoclient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://todouser:todouser@ds115085.mlab.com:15085/todos', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Successfully connected to mongodb server');
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Documents in collection ' + JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to find documents');
        });

    db.collection('Todos').find({completed:true}).toArray().then((docs) => {
        console.log('Documents in collection ' + JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find documents');
    });
    db.close();
});

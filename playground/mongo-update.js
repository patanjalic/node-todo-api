//const mongoclient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://todouser:todouser@ds115085.mlab.com:15085/todos', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Successfully connected to mongodb server');

    db.collection('Todos').findOneAndUpdate({ _id: ObjectID("59dadee9e35ecd1fc48de832") },
        {
            $set: {completed:true}
        },
        {
            returnOriginal: false
        })
        .then((res) => {
        console.log('Document updated ' + JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log('Unable to find documents');
    });
    db.close();
});

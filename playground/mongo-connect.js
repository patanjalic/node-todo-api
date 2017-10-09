//const mongoclient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

//mongodb://<dbuser>:<dbpassword>@ds115085.mlab.com:15085/todos
MongoClient.connect('mongodb://todouser:todouser@ds115085.mlab.com:15085/todos', (err,db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Successfully connected to mongodb server');
  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,res) => {
    if(err) {
      console.log('Failed to insert into db');
    } else {
      console.log('Document successfully inserted into collection '+JSON.stringify(res.ops,undefined,2));
    }
  });

  db.collection('Users').insertOne({
    name: 'Eeshan Krishna',
    age:3,
    location: 'palm beach gardens'
  }, (err,res) => {
    if(err) {
      console.log('Unable to insert data');
    } else {
        console.log('Successfully inserted in users ' + JSON.stringify(res.ops, undefined, 2));
    }
  });
  db.close();
});

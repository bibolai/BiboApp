
const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route'); 
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fakeUserName:FakePassword@cfakeCluster.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("biboDB").collection("user");
  
  var cursor = collection.find();
  
  cursor.each(function(err,doc){
    console.log(doc);
  });
    
  console.log("connected");

  client.close();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', user);
let port = 1111;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
   
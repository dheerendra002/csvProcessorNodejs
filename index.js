const express = require('express');
 

 var stream = require('stream');

const app = express();
//...
app.get('/download', function(request, response){
  //...
  var fileContents = Buffer.from(fileData, "base64");

  var readStream = new stream.PassThrough();
  readStream.end(fileContents);

  response.set('Content-disposition', 'attachment; filename=' + fileName);
  response.set('Content-Type', 'text/plain');

  readStream.pipe(response);
});

 var MongoClient = require('mongodb').MongoClient;
 var url = "mongo-db:27017";

 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

app.get('/', (req, res) => {


  res.send('How are you doing');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
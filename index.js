const express = require('express');
 

 var stream = require('stream');
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
const app = express();
 
app.get('/', (req, res) => {
  res.send('How are you doing');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
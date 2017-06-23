var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('I am Groot\n');
});

app.listen(3000);
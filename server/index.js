var express = require('express');
var app = express();
var sqlz = require ('../database/sequelize.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  sqlz.getStock();
  console.log('hi');
  
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});


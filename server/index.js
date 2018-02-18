var express = require('express');
var app = express();
var sqlz = require ('../database/sequelize.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/items', (req, res) => {
  if (sqlz.getGroceries.isFulfilled) {
    res.send(sqlz.getGroceries)
  }
  // res.send(sqlz.getGroceries)

})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});


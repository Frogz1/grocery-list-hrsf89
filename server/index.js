var express = require('express');
var app = express();
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
var sqlz = require ('../database/sequelize.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/items', (req, res) => {
  if (sqlz.getGroceries.isFulfilled) {
    res.send(sqlz.getGroceries)
  }
  // res.send(sqlz.getGroceries)

})

app.post('/items', jsonParser, (req, res) => {
  console.log(req.body);
  if (req.body) {

    let val = {
      description: req.body.description,
      quantity: req.body.quantity
    }
    console.log(val)
    sqlz.addItem(val);

  }
  let val = {
    description: req.body.description,
    quantity: req.body.quantity
  }
  var why = JSON.stringify(req.body);
  res.send(why);
})

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});


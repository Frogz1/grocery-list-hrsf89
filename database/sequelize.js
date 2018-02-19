

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize('Grocery', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});



const Stock = sequelize.define('stock', {
  id: {
    primaryKey:true,
    type: Sequelize.INTEGER
  },
  description: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

const items =

  Stock.findAll({
    logging: console.log  
  }).then((groceries) => {
    groceries = groceries.map((ele) => {
      return ele.get({
        plain: true
      });
    })
  
    // console.log(groceries)
    return groceries;
  
  });
 
let getLatestItems = function() {
  let item;
  Stock
    .sync()
    .then(() => {
      return Stock.findAll({}).then((items) => {
        items = items.map((ele) => {
          return ele.get({
            plain: true
          })
          item = items;
        })
      })
    })
    return item;
}

const addItem = (value) =>  {
  console.log(value);
  Stock.sync().then(() => {
    console.log(value)
    return Stock.create({description: value.description, quantity: value.quantity})
  });
    
//     ({
//   quantity: value.quantity,
//   description: value.description
// }).then((val) => {
//   console.log(val);
// });
}
  



  

  // }).spread((items) => {
  // console.log(items);
  // console.log(items.get({
  //   plain: true
  // }));
  
  // console.log(`Description: ${data.description} \n Quantity: ${data.quantity}`);




module.exports.getGroceries = items
module.exports.addItem = addItem.bind(this);
module.exports.Stock = Stock;

module.exports.getLatestItems = getLatestItems

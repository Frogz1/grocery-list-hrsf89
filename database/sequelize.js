const Sequelize = require('sequelize');
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
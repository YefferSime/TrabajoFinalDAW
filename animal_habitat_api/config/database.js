const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbanimales', 'root', 'simeh2005', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

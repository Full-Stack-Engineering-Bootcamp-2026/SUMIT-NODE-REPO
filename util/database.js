const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_schema', 'root', 'Root@1234', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

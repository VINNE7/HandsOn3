const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const databaseConnection = new Sequelize(dbConfig);

module.exports = databaseConnection;
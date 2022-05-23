const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente');

const databaseConnection = new Sequelize(dbConfig);

Cliente.init(databaseConnection);

module.exports = databaseConnection;
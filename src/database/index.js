const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente');
const Atendimento = require('../models/Atendimento');
const Psicologo = require('../models/Psicologo');

const databaseConnection = new Sequelize(dbConfig);

Cliente.init(databaseConnection);
Atendimento.init(databaseConnection);
Psicologo.init(databaseConnection);

Atendimento.associate(databaseConnection.models);

module.exports = databaseConnection;
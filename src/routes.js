const express = require('express');
const ClienteController = require('./controllers/ClienteController');
const AtendimentoController = require('./controllers/AtendimentoController');
const PsicologoController = require('./controllers/PsicologoController');

const routes = express.Router();

routes.post('/clientes', ClienteController.store );

routes.post('/atendimentos', AtendimentoController.store);

routes.post('/psicologos', PsicologoController.store);

module.exports = routes;
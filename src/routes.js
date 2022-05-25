const express = require('express');
const ClienteController = require('./controllers/ClienteController');
const AtendimentoController = require('./controllers/AtendimentoController');
const PsicologoController = require('./controllers/PsicologoController');

const routes = express.Router();

routes.post('/clientes', ClienteController.store );
routes.get('/clientes', ClienteController.index);
routes.get('/clientes/:id', ClienteController.show);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.destroy);

routes.post('/atendimentos', AtendimentoController.store);
routes.get('/atendimentos', AtendimentoController.index);
routes.get('/atendimentos/:id', AtendimentoController.show);
routes.put('/atendimentos/:id', AtendimentoController.update);
routes.delete('/atendimentos/:id', AtendimentoController.destroy);

routes.post('/psicologos', PsicologoController.store);
routes.get('/psicologos', PsicologoController.index);
routes.get('/psicologos/:id', PsicologoController.show);
routes.put('/psicologos/:id', PsicologoController.update);
routes.delete('/psicologos/:id', PsicologoController.destroy);

module.exports = routes;
const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const AtendimentoController = require('./controllers/AtendimentoController');
const PsicologoController = require('./controllers/PsicologoController');
const AuthController = require('./controllers/AuthController');

const PsicologoValidation = require('./validations/psicologos');
const ClienteValidation = require('./validations/clientes');
const AtendimentoValidation = require('./validations/atendimentos');
const AuthValidation = require('./validations/auth');

const Auth = require('./middlewares/auth');

const routes = express.Router();

routes.post('/login', AuthValidation.login, AuthController.login);

routes.post('/clientes', ClienteValidation.store, ClienteController.store );
routes.get('/clientes', ClienteController.index);
routes.get('/clientes/:id', ClienteValidation.show, ClienteController.show);
routes.put('/clientes/:id', ClienteValidation.update, ClienteController.update);
routes.delete('/clientes/:id', ClienteValidation.delete, ClienteController.destroy);

routes.post('/atendimentos', Auth, AtendimentoValidation.store, AtendimentoController.store);
routes.get('/atendimentos', AtendimentoController.index);
routes.get('/atendimentos/:id', AtendimentoValidation.show, AtendimentoController.show);
routes.put('/atendimentos/:id', AtendimentoValidation.update, AtendimentoController.update);
routes.delete('/atendimentos/:id', AtendimentoValidation.delete, AtendimentoController.destroy);

routes.post('/psicologos', PsicologoValidation.store, PsicologoController.store);
routes.get('/psicologos', PsicologoController.index);
routes.get('/psicologos/:id', PsicologoValidation.show, PsicologoController.show);
routes.put('/psicologos/:id', PsicologoValidation.update, PsicologoController.update);
routes.delete('/psicologos/:id', PsicologoValidation.delete, PsicologoController.destroy);

module.exports = routes;
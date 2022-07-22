const express =  require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const connection =  require('./database/connection');

const routes = express.Router();

    //Cadastro de ong e listagem//
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

    //Cadastro de pedidos e com valor $ e exclusão//
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete)
    
    //Lista de incidentes com valores $ //
routes.get('/profile', ProfileController.index);

    //Autentificação se usuario esta cadastrado//
routes.post('/sessions', SessionController.create);

module.exports = routes;
const express = require('express');

const routes = express.Router();
const Authentification = require('./../src/Controllers/Authentification');
routes.post('/login', Authentification.Login);
routes.post('/createUser',Authentification.createUser);

module.exports=routes;
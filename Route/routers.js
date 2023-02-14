const express = require('express');

const routes = express.Router();
const Authentification = require('./../src/Controllers/Authentification');
routes.post('/login', Authentification.Login);
routes.post('/createUser',Authentification.createUser);
routes.put('/updateUser/:id',Authentification.updateUser);


module.exports=routes;
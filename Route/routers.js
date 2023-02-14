const express = require('express');

const routes = express.Router();
const Login = require('./../src/Controllers/login');
routes.post('/login', Login.Login);
module.exports=routes;
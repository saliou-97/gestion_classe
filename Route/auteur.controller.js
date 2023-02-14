const express = require('express');

const routes = express.Router();
const Login=require("./../src/Controllers/login")


routes.get('/login', Login.Login);



module.exports=routes;
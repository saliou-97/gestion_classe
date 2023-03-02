const express = require('express');

const routes = express.Router();




//route classe
const Classe = require("../src/controllers/classe_controller.js");

routes.get('/classe/', Classe.getAllClasse);
routes.get('/classe/:id', Classe.getClasseByID);
routes.post('/classe/', Classe.createClasse);
routes.delete('/classe/:id',Classe.deleteClasse);
routes.put('/classe/:id', Classe.updateClasse);

const Filiere = require("../src/controllers/filiere_controller.js");

routes.get('/filiere/', Filiere.getAllFiliere);
routes.get('/filiere/:id', Filiere.getFiliereByID);
routes.post('/filiere/', Filiere.createFiliere);
routes.delete('/filiere/:id',Filiere.deleteFiliere);
routes.put('/filiere/:id', Filiere.updateFiliere);

const Matiere = require("../src/controllers/matiere_controller.js");

routes.get('/matiere/', Matiere.getAllMatiere);
routes.get('/matiere/:id', Matiere.getMatiereByID);
routes.post('/matiere/', Matiere.createMatiere);
routes.delete('/matiere/:id',Matiere.deleteMatiere);
routes.put('/matiere/:id', Matiere.updateMatiere);

module.exports=routes;
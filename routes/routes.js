const express = require('express');

const routes = express.Router();

//const routes = express.Router();
const Authentification = require('./../src/Controllers/Authentification');
routes.post('/login', Authentification.Login);
routes.post('/createUser',Authentification.createUser);
routes.put('/updateUser/:id',Authentification.updateUser);

const User=require("./../src/Controllers/user_controller.js")
routes.post("/creereleve",User.creereleve)

const Depense=require("../src/Controllers/depences_controller.js")

routes.get('/depense/', Depense.getAllDepense);
routes.get('/depense/:id', Depense.getDepenseByID);
routes.post('/depense/', Depense.createDepense);
routes.delete('/depense/:id', Depense.deleteDepense);
routes.put('/depense/:id', Depense.updateDepense);

const Note=require("../src/controllers/note_controller.js")
const uploaded=require("./../middleware/upload.js")

routes.get('/note/', Note.getAllNote);
routes.get('/note/:id', Note.getNoteByID);
routes.post('/note/', Note.createNote);
routes.post("/uploadnote",uploaded.single("file"),Note.upload)
routes.delete('/note/:id',Note.deleteNote);
routes.put('/note/:id', Note.updateNote);


const Paiement=require("../src/controllers/paiement_controller.js");

routes.get('/paiement/', Paiement.getAllPaiement);
routes.get('/paiement/:id', Paiement.getPaiementByID);
routes.post('/paiement/', Paiement.createPaiement);
routes.delete('/paiement/:id',Paiement.deletePaiement);
routes.put('/paiement/:id', Paiement.updatePaiement);

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
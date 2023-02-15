const express = require('express');

const routes = express.Router();

const Depense=require("./../controllers/depences_controller.js")

routes.get('/depense/', Depense.getAllDepense);
routes.get('/depense/:id', Depense.getDepenseByID);
routes.post('/depense/', Depense.createDepense);
routes.delete('/depense/:id', Depense.deleteDepense);
routes.put('/depense/:id', Depense.updateDepense);

const Note=require("./../controllers/note_controller.js")
const uploaded=require("./../middleware/upload.js")

routes.get('/note/', Note.getAllNote);
routes.get('/note/:id', Note.getNoteByID);
routes.post('/note/', Note.createNote);
routes.post("/uploadnote",uploaded.single("file"),Note.upload)
routes.delete('/note/:id',Note.deleteNote);
routes.put('/note/:id', Note.updateNote);


const Paiement=require("./../controllers/paiement_controller.js");

routes.get('/paiement/', Paiement.getAllPaiement);
routes.get('/paiement/:id', Paiement.getPaiementByID);
routes.post('/paiement/', Paiement.createPaiement);
routes.delete('/paiement/:id',Paiement.deletePaiement);
routes.put('/paiement/:id', Paiement.updatePaiement);




module.exports=routes;
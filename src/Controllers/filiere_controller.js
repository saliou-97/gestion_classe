const db=require("../models/index.js")
const Filiere=db.db.filiere;

module.exports={
    createFiliere(req, res) {
        Filiere.create(req.body)
        .then(filiere => {
            res.status(201).json(filiere);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateFiliere(req, res) {
        const id = req.params.id;
        const FiliereUpdated =  await Filiere.update(req.body, {where: {id: id}});
        res.status(201).json(FiliereUpdated);
    },
    getAllFiliere(req, res) {
        Filiere.findAll()
        .then(function(filiere){res.status(200).json(filiere)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getFiliereByID(req, res){
        const id = req.params.id;
        res.status(200).json(await Filiere.findOne({id:req.params.id}));
    },*
    
    deleteFiliere(req, res) {
        const id = req.params.id;
        Filiere.destroy({where: {id: id }})
        .then(() => {res.status(200).json({status: 'success', message: 'Filiere bien supprimée'})})
        .catch((err) =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})});
    },
}
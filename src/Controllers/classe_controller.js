const db=require("../models/index.js")
const Classe=db.db.classe;

module.exports={
    createClasse(req, res) {
        Classe.create(req.body)
        .then(classe=> {
            res.status(201).json(classe);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateClasse(req, res) {
        const id = req.params.id;
        const Class =  await Classe.update(req.body, {where: {id: id}});
        res.status(201).json(Class);
    },
    getAllClasse(req, res) {
        Classe.findAll()
        .then(function(classe){res.status(200).json(classe)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getClasseByID(req, res){
        const id = req.params.id;
        res.status(200).json(await Classe.findOne({id:req.params.id}));
    },
    deleteClasse(req, res) {
        const id = req.params.id;
        Classe.destroy({where: {id: id }})
        .then(() => {res.status(200).json({status: 'success', message: 'Classe bien supprimée'})})
        .catch((err) =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})});
    },
}
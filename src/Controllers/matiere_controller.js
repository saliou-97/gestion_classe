const db=require("../models/index.js")
const Matiere=db.db.matiere;

module.exports={
    createMatiere(req, res) {
        Matiere.create(req.body)
        .then(matiere => {
            res.status(201).json(matiere);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateMatiere(req, res) {
        const id = req.params.id;
        const MatiereUpdated =  await Matiere.update(req.body, {where: {id: id}});
        res.status(201).json(MatiereUpdated);
    },
    getAllMatiere(res) {
        Matiere.findAll()
        .then(function(matiere){res.status(200).json(matiere)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getMatiereByID(req, res){
        const id = req.params.id;
        res.status(200).json(await Matiere.findOne({id:req.params.id}));
    },
    deleteMatiere(req, res) {
        const id = req.params.id;
        Matiere.destroy({where: {id: id }})
        .then(() => {res.status(200).json({status: 'success', message: 'Matiere bien supprimée'})})
        .catch((err) =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})});
    },
}
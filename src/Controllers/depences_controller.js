const db=require("./../models/index.js")
const Depense=db.db.depense;

module.exports={
    createDepense(req, res) {
        Depense.create(req.body)
        .then(depense => {
            res.status(201).json(depense);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateDepense(req, res) {
        const id = req.params.id;
        const DepenseUpdated =  await Depense.update(req.body, {where: {id: id}});
        res.status(201).json(DepenseUpdated);
    },
    getAllDepense(req, res) {
        //res.status(200).json(await Livre.findAll());
        Depense.findAll()
        .then(function(Depense){res.status(200).json(Depense)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getDepenseByID(req, res){
        const id = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await Depense.findOne({id:req.params.id}));
    },
    deleteDepense(req, res) {
        const id = req.params.id;
        Depense.destroy({where: {id: id }})
        .then(() => {res.status(200).json({status: 'success', message: 'Depense bien supprimé'})})
        .catch((err) =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})});
    },
}
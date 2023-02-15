const db=require("./../models/index.js")
const Paiement=db.db.paiement;

module.exports={
    createPaiement(req, res) {
        Paiement.create(req.body)
        .then(note => {
            res.status(201).json(note);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updatePaiement(req, res) {
        const id = req.params.id;
        const PAYER =  await Paiement.update(req.body, {where: {id: id}});
        res.status(201).json(PAYER);
    },
    getAllPaiement(req, res) {
        //res.status(200).json(await Livre.findAll());
        Paiement.findAll()
        .then(function(paiement){res.status(200).json(paiement)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getPaiementByID(req, res){
        const id = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await Paiement.findOne({id:req.params.id}));
    },
    deletePaiement(req, res) {
        const id = req.params.id;
        Paiement.destroy({where: {id: id }})
        .then(() => {res.status(200).json({status: 'success', message: 'Paiement bien supprimé'})})
        .catch((err) =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})});
    },
}
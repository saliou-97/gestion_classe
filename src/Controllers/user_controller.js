const df=require("../models/index.js")
const User=df.db.users;
const bcrypt = require('bcrypt');
const Eleve=df.db.eleve


module.exports={
    async creereleve(req,res){
     const user= await  User.findOne({ where: { email: req.body.email } })
      if(user){
        return res.status(400).json({"message":"Existe"})
      }
        const password=1223444 //bcrypt.hash(req.body.password, 10)
        User.create({
              email:req.body.email,
              prenom:req.body.prenom,  
              genre:req.body.genre,
              nom:req.body.nom,
              adresse:req.body.adresse,
              date_naissance:req.body.date_naissance,
              lieu_naissance:req.body.lieu_naissance,
              nationalite:req.body.nationalite,
              situation_matrimoniale:req.body.situation_matrimoniale,
              groupe_sanguine:req.body.groupe_sanguine,
              telephone:req.body.telephone,
              situation_professionel:req.body.situation_professionel,
              password:password
        })
        .then(result=>{
            Eleve.create({
                code_permanent:req.body.code,
                situation:req.body.situation,
                redouble:req.body.double,
                userId:result.id
            })
            .then(data=>{
               return res.status(201).json(result)
            })
            .catch(err=>{ return res.status(500).json(err)})
        })
        .catch(error=>{
            return res.status(500).json(error)
        })
      }
          
      

       
      
       //return res.status(400).json({"message":"Existe"})
}
const db=require("./../models/index.js");
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const privatekey=require("./../auth/private_key")
const {User}=require("./../models/index.js")

module.exports = {
    Login(req, res) {
         User.findOne({ where: { email: req.body.email } }).then(user => {
            if(!user){
            const message='l_utilisateur demande n_existe pas'
            return res.status(404).json({message})
            }
    
             
          bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
            if(!isPasswordValid) {
              const message = `Le mot de passe est incorrecte`;
              return res.status(404).json({ message })
            }
            //JWT
         const token=jwt.sign(
            {userId:user.id},
            privatekey,
            {expiresIn:"24h"}
         )
          iduser=user.id
          console.log(iduser)
            const message = `L'utilisateur a été connecté avec succès`;
           
           const islogin='true';
            return res.status(200).json({ message, data: user,token,islogin })
          })
        })
         .catch(error=>{
            const message='l_utilisateur n_a pas pu etre connecte avec succes'
            return res.json({message,data:error})
         })
    },
    createUser(req, res) {
      bcrypt.hash(req.body.password,10)
      .then(hash=>User.create({
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
        password:hash
  
      })
      .then(result=>{
        if(result!=null){
        erreur=false
         message="Utilisateur Inscrit avec Succées"
         return res.json({erreur,message,data:result})
        }
        else{
          message='Impossible d_enregistrer l_utilisateur'
          res.json({message})
        }
  
      })
      .catch(erreur=>{
        message='Impossible d_enregistrer l_utilisateur'
        res.json({message,data:erreur})
  
      })
      )
  },
  

}
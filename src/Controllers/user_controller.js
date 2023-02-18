const df=require("../models/index.js")
const User=df.db.users;
const bcrypt = require('bcrypt');
const Eleve=df.db.eleve
const Prof=df.db.prof
const Parent=df.db.parent
const Poste=df.db.agent
module.exports={
    createUser(req, res) {
      const id = + req.params.id;
      console.log(id);
      if(id<0 || id>4){
        message="veuillez choisir entre 1:eleve , 2:Prof , 3:Parent et 4:Agent comme paramétre"
        return res.status(404).json({message})

      }
      
      User.findOne({ where: { email: req.body.email } }).then(user => {
        if(!user){
          bcrypt.hash(req.body.password,10)
          .then(
            hash=>User.create({
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
              if(id===1){
              Eleve.create({
                code_permanent:req.body.code,
                situation:req.body.situation,
                redouble:req.body.double,
                userId:result.id
            })
            .then(resultat2=>{
              if(resultat2){
                erreur=false
                message="Utilisateur est  Inscrit avec Succées"
                return res.json({erreur,message,data:result,resultat2})

              }
            })
            .catch(error=>{
              message="impossible de creer un utilisateur"
              return res.status(501).json({message,data:error})
            })
          }
          if(id===2){
            Prof.create({
              statut_professionel:req.body.statusProfess,
              
              userId:result.id
          })
          .then(resultat2=>{
            if(resultat2){
              erreur=false
              message="Utilisateur est  Inscrit avec Succées"
              return res.json({erreur,message,data:result,resultat2})

            }
          })
          .catch(error=>{
            message="impossible de creer un utilisateur"
            return res.status(501).json({message,data:error})
          })

          }
          if(id===3){
            Parent.create({
              statut:req.body.status,
              
              userId:result.id
          })
          .then(resultat2=>{
            if(resultat2){
              erreur=false
              message="Utilisateur est  Inscrit avec Succées"
              return res.json({erreur,message,data:result,resultat2})

            }
          })
          .catch(error=>{
            message="impossible de creer un utilisateur"
            return res.status(501).json({message,data:error})
          })

          }
          if(id===4){
            Poste.create({
              poste:req.body.poste,
              
              userId:result.id
          })
          .then(resultat2=>{
            if(resultat2){
              erreur=false
              message="Utilisateur est  Inscrit avec Succées"
              return res.json({erreur,message,data:result,resultat2})

            }
          })
          .catch(error=>{
            message="impossible de creer un utilisateur"
            return res.status(501).json({message,data:error})
          })
          }
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
          
          }
          else{
            const message='l_utilisateur que vous voulez inscrire a déja une compte'
            return res.status(404).json({message})
          }

      })

     
  },
          
      

       
      
       //return res.status(400).json({"message":"Existe"})
}
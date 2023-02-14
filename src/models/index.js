const { HasMany } = require('sequelize')
const database=require('../database/db_auto_academie.js')
const sequelize=database.sequelize
const Sequelize=database.Sequelize
const bcrypt=require('bcrypt')
const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.users=require('./users.js')(sequelize,Sequelize)
db.eleve=require("./eleve_model.js")(sequelize,Sequelize)
db.parent=require("./parent_model.js")(sequelize,Sequelize)
db.prof=require("./prof_model.js")(sequelize,Sequelize)
db.agent=require("./agent_model.js")(sequelize,Sequelize)
db.classe=require("./classe_model.js")(sequelize,Sequelize)
db.filiere=require("./filiere_model.js")(sequelize,Sequelize)
db.matiere=require("./matiere_model.js")(sequelize,Sequelize)
const User=db.users


db.filiere.hasMany(db.classe,{foreignkey:"id_filiere"})
db.classe.belongsTo(db.filiere,{foreignkey:"id_filiere"})

db.classe.hasMany(db.eleve,{foreignkey:"id_classe"})
db.eleve.belongsTo(db.classe,{foreignkey:"id_classe"})

db.classe.hasMany(db.prof,{foreignkey:"id_classe"})
db.prof.hasMany(db.classe,{foreignkey:"id_prof"})

db.filiere.hasMany(db.matiere,{foreignkey:"id_filiere"})
db.matiere.hasMany(db.filiere,{foreignkey:"id_matiere"})


db.users.hasOne(db.eleve,{foreignkey:'id_eleve'})
db.eleve.belongsTo(db.users,{foreignkey:"id_eleve"})

db.users.hasOne(db.prof,{foreignkey:'id_prof'})
db.prof.belongsTo(db.users,{foreignkey:"id_prof"})

db.users.hasOne(db.parent,{foreignkey:'id_parent'})
db.parent.belongsTo(db.users,{foreignkey:"id_parent"})

db.users.hasOne(db.agent,{foreignkey:'id_agent'})
db.agent.belongsTo(db.users,{foreignkey:"id_agent"})
const initDb = () => {
    return  db.sequelize.sync(/*{force: true}*/)
      .then(() => {
       
        
          bcrypt.hash('admin2023',10)
    .then(hash=>db.users.create({
      email:'admin@gmail.com',
      prenom:"Mohamadou Moustapha",  
      genre:'H',
      nom:"Traore",
      adresse:"Parcelle U2",
      date_naissance:"2023-02-14 13:42:28.000000",
      lieu_naissance:"Mbour",
      nationalite:"Sénégalais",
      situation_matrimoniale:"celibataire",
      groupe_sanguine:"O+",
      telephone:"785260388",
      situation_professionel:"étudiant",
      password:hash
    })
    .then(user=>console.log(user.toJSON()))

    )
        console.log("Base de données bien synchronisée.");
      })
      .catch((err) => {
        console.log("Echec lors de la synchronisation: " + err.message);
      });

}

module.exports={db,initDb,User};
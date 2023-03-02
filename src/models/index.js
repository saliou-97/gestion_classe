const { HasMany } = require('sequelize')
const database=require('../database/gestion_classe.js')
const sequelize=database.sequelize
const Sequelize=database.Sequelize
const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize


db.classe=require("./classe_model.js")(sequelize,Sequelize)
db.filiere=require("./filiere_model.js")(sequelize,Sequelize)
db.matiere=require("./matiere_model.js")(sequelize,Sequelize)


db.filiere.hasMany(db.classe,{foreignkey:"id_filiere"})
db.classe.belongsTo(db.filiere,{foreignkey:"id_filiere"})

db.filiere.belongsToMany(db.matiere,{through: "matiere_filiere"})
db.matiere.belongsToMany(db.filiere,{through: "matiere_filiere"})


const initDb = () => {
  return db.sequelize.sync({force:true})
  .then(()=>{
    console.log('La base de donnée a bien été synchronisé  !')
  })
  .catch((err) => {
    console.log("Echec lors de la synchronisation: " + err.message);
  });
}

module.exports={db,initDb};
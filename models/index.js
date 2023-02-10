const { BelongsToMany } = require('sequelize')
const database=require('../database/db_auto_academie.js')
const sequelize=database.sequelize
const Sequelize=database.Sequelize

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



db.filiere.hasMany(db.classe,{foreignkey:"id_filiere"})
db.classe.belongsTo(db.filiere,{foreignkey:"id_filiere"})

db.classe.hasMany(db.eleve,{foreignkey:"id_classe"})
db.eleve.belongsTo(db.classe,{foreignkey:"id_classe"})

db.classe.belongsToMany(db.prof,{through: "Classe_Prof"})
db.prof.belongsToMany(db.classe,{through:"Classe_Prof"})

db.filiere.belongsToMany(db.matiere,{through: "Matiere_Filiere"})
db.matiere.belongsToMany(db.filiere,{through: "Matiere_Filiere"})


db.users.hasOne(db.eleve,{foreignkey:'id_eleve'})
db.eleve.belongsTo(db.users,{foreignkey:"id_eleve"})

db.users.hasOne(db.prof,{foreignkey:'id_prof'})
db.prof.belongsTo(db.users,{foreignkey:"id_prof"})

db.users.hasOne(db.parent,{foreignkey:'id_parent'})
db.parent.belongsTo(db.users,{foreignkey:"id_parent"})

db.users.hasOne(db.agent,{foreignkey:'id_agent'})
db.agent.belongsTo(db.users,{foreignkey:"id_agent"})

module.exports=db;
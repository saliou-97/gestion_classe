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
db.depense=require("./depence_model.js")(sequelize,Sequelize)
db.paiement=require("./paiement_model")(sequelize,Sequelize)
db.note=require("./note_model.js")(sequelize,Sequelize)



db.filiere.hasMany(db.classe,{foreignkey:"id_filiere"})
db.classe.belongsTo(db.filiere,{foreignkey:"id_filiere"})

db.classe.hasMany(db.eleve,{foreignkey:"id_classe"})
db.eleve.belongsTo(db.classe,{foreignkey:"id_classe"})

db.classe.belongsToMany(db.prof,{through: "classe_prof"})
db.prof.belongsToMany(db.classe,{through:"classe_prof"})

db.filiere.belongsToMany(db.matiere,{through: "matiere_filiere"})
db.matiere.belongsToMany(db.filiere,{through: "matiere_filiere"})

db.agent.hasMany(db.depense,{foreignkey:"id_agent"})
db.depense.belongsTo(db.agent,{foreignkey:"id_agent"})

db.agent.hasMany(db.paiement,{foreignkey:"id_agent"})
db.paiement.belongsTo(db.agent,{foreignkey:"id_agent"})

db.prof.hasMany(db.note,{foreignkey:"id_prof"})
db.note.belongsTo(db.prof,{foreignkey:"id_prof"})

db.eleve.hasMany(db.note,{foreignkey:"id_eleve"})
db.note.belongsTo(db.eleve,{foreignkey:"id_eleve"})

db.users.hasOne(db.eleve,{foreignkey:'id_eleve'})
db.eleve.belongsTo(db.users,{foreignkey:"id_eleve"})

db.users.hasOne(db.prof,{foreignkey:'id_prof'})
db.prof.belongsTo(db.users,{foreignkey:"id_prof"})

db.users.hasOne(db.parent,{foreignkey:'id_parent'})
db.parent.belongsTo(db.users,{foreignkey:"id_parent"})

db.users.hasOne(db.agent,{foreignkey:'id_agent'})
db.agent.belongsTo(db.users,{foreignkey:"id_agent"})

module.exports=db;
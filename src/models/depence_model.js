module.exports=function(sequelize,Sequelize){
    const Depense=sequelize.define("depence",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        motif:{
            type:Sequelize.STRING,

        },
        observation:{
            type:Sequelize.STRING
        },
        prenom_benif:{
            type:Sequelize.STRING,
            allowNull:false
        },
        nom_benif:{
            type:Sequelize.STRING,
            allowNull:false
        },
        montant_depence:{
            type:Sequelize.FLOAT,
            allowNull:false
        }
    })
    return Depense ;
}
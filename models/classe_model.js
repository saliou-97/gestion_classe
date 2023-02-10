module.exports=function(sequelize,Sequelize){
    const Classe= sequelize.define("classe",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom_classe:{
            type:Sequelize.STRING,
            allowNull:false
        },
        annee:{
            type:Sequelize.STRING,
            allowNull:false
        }

    })
    return Classe;
}
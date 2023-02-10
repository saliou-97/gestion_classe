module.exports=function(sequelize,Sequelize){
    const Filiere= sequelize.define("filiere",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        intitule:{
            type:Sequelize.STRING,
            allowNull:false
        }
    })
    return Filiere;
}
module.exports=function(sequelize,Sequelize){
    const Matiere=sequelize.define("matiere",{
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
    return Matiere;
}
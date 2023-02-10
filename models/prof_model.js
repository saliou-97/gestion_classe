module.exports=function(sequelize,Sequelize){
    const Prof=sequelize.define("professeur",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        statut_professionel:{
            type:Sequelize.STRING,
            allowNull:false
        }
    })
    return Prof;
}
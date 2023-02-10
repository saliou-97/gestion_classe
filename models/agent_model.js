module.exports=function(sequelize,Sequelize){
    const Agent=sequelize.define("agent",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        poste:{
            type:Sequelize.STRING,
            allowNull:false
        }
    })
}
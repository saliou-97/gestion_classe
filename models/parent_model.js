module.exports=function(sequelize,Sequelize){
    const Parent=sequelize.define("parent",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        statut:{
            type:Sequelize.String,
            allowNull:false
        },
        
    })
}
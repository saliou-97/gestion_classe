module.exports=function(sequelize,Sequelize){
    const Parent=sequelize.define("parent",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        statut:{
            type: Sequelize.STRING,
            allowNull:false,
        }
        
    })
    return Parent;
}
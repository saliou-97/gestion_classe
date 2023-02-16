module.exports=function(sequelize,Sequelize){
    const Eleve=sequelize.define("eleve",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        code_permanent:{
            type:Sequelize.INTEGER,
            allowNull:false,
            
        },
        image:{
            type:Sequelize.STRING
        },
        situation:{
            type:Sequelize.STRING,
            allowNull:false
        },
        rebouble:{
            type:Sequelize.ENUM("OUI","NON"),
            defaultValue:"NON"
        }
    })
    return Eleve;
}
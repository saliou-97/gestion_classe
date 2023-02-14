module.exports=function(sequelize,Sequelize){
    const Note=sequelize.define("note",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        date_note:{
            type:Sequelize.DATE,
            allowNull:false
        },
        type_note:{
            type:Sequelize.ENUM("devoir","examen")
        },
        note:{
            type:Sequelize.FLOAT,
            allowNull:false
        }
    })
    return Note ;
}
module.exports=function(sequelize,Sequelize){
    const Users=sequelize.define("users",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        prenom:{
            type:Sequelize.STRING,
            allowNull:false
        },
        nom:{
            type:Sequelize.STRING,
            allowNull:false
        },
        adresse:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        date_naissance:{
            type:Sequelize.DATE,
            allowNull:false
        },
        lieu_naissance:{
            type:Sequelize.STRING,
            allowNull:false
        },
        genre:{
            type:Sequelize.ENUM("H","F"),
            defaultValue:"H"
        },
        nationalite:{
            type:Sequelize.STRING,
            allowNull:false
        },
        situation_matrimoniale:{
            type:Sequelize.ENUM("celibataire","marie")
        },
        situation_professionel:{
            type:Sequelize.STRING,
            allowNull:false
        },
        groupe_sanguine:{
            type:Sequelize.ENUM("AB-","O-","B-","A-","AB+","O+","B+","A+"),
        },
        telephone:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        }
        

    })
    return Users
    
}
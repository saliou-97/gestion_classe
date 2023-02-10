module.exports=function(sequelize,Sequelize) {
    const Paiement=sequelize.define("paiement",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        motif_du_paiement:{
            type:Sequelize.STRING,

        },
        montant:{
            type:Sequelize.FLOAT,
            allowNull:false
        },
        date_paiement:{
            type:Sequelize.Date,
            allowNull:false
        }
    })
    return Paiement;
    
}
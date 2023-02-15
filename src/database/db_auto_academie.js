const Sequelize=require('sequelize')
const env=require("dotenv").config()
const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect:"mysql",
    host:"localhost",
    port:process.env.PORT_MYSQL,
    operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
module.exports={sequelize,Sequelize}
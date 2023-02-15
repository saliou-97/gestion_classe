const  express = require( 'express');
const  bodyparser = require ( "body-parser" ) ;
const env=require("dotenv").config();
const app=express();
const  db = require ( "./models/index.js" );
const routes=require("./routes/routes.js")

global.__basedir = __dirname + "/";
console.log(global.__basedir)
console.log(__dirname)

db.sequelize.sync(/*{force: true}*/)
  .then(() => {
    console.log("Base de données bien synchronisée.");
  })
  .catch((err) => {
    console.log("Echec lors de la synchronisation: " + err.message);
  });

app.use(bodyparser.json())
app.use("/api",routes);

//Ajout le port sur .env et le fixer à 4444
const Port=process.env.PORT;
app.listen ( Port , ( ) => {
    console.log ( 'le serveur est demarre ' +Port)
} )
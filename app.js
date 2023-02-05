const  express = require( 'express');
const  bodyparser = require ( "body-parser" ) ;
const env=require("dotenv").config();
const app=express();

//Ajout le port sur .env et le fixer à 4444
const Port=process.env.PORT;
app.listen ( Port , ( ) => {
    console.log ( 'le serveur est demarre ' +Port)
} )
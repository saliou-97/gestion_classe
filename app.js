const  express = require( 'express');
const  bodyparser = require ( "body-parser" ) ;
const env=require("dotenv").config();
const app=express();
const morgan=require('morgan')
const bodyParser=require('body-parser')
const  db = require ( "./src/models/index" )


const routes = require('./routes/routes');
app
.use(morgan('dev'))
.use(bodyParser.json())

/*  fonction qui gére la création des tables * */
//db.initDb();


global.__basedir = __dirname + "/";
console.log(global.__basedir)
console.log(__dirname)




//Ajout le port sur .env et le fixer à 4444
const Port=process.env.PORT;
app.listen ( Port , ( ) => {
    console.log ( 'le serveur est demarre ' +Port)
} )
//app.use('/', AuteurController);
app.use('/api/v1',routes);


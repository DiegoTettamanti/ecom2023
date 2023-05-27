import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

import usuarioRoutes from '../src/routes/usuarioRoutes.js'; 
import mongoose from 'mongoose';
import passport from 'passport';
import addLogger from '../src/middleware/logger.js';
import {port, dbConnection} from './config/config.js';





//Crear la App
const app = express();
app.use(express.urlencoded({ extended: true }))
//app.use(session(objectConfig.session));

app.use(passport.initialize());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
//app.use('/static', express.static(__dirname +'/public'))


// Habilitar Cookie Parser
app.use( cookieParser() )

// Habilitar CSRF
app.use( csrf({cookie: true}) )


//Conectar Mongo
//initConnections();
//dbConnection();


//Habilitar Pug
app.set('view engine', 'pug');
app.set('views',  '../views');


app.use(addLogger)
//Carpeta Public
app.use(express.static('public'));

//Routing
app.use('/auth', usuarioRoutes)
// app.get('/:pid', productsRoutes)



//Definir un puerto y arrancar el proyecto
const port = 8080;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto' ${port}`);
});
import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

import usuarioRoutes from '../src/routes/usuarioRoutes.js'; 
import passport from 'passport';
import addLogger from '../src/middleware/logger.js';
import {port} from './config/config.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiexpress from 'swagger-ui-express';



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

const swaggerOptions = {
    definitions: {
        openApi: '3.0.1',
        info: {
            title:'Documentacion de Ecom23',
            description: 'Api pensada para el comercio electronico'
        
        }

},
apis: [`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJSDoc(swaggerOptions);

//Routing de Docs
app.use('/apidocs', swaggerUiexpress.serve, swaggerUiexpress.setup(specs));



//Definir un puerto y arrancar el proyecto
//const port = 8080;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto' ${port}`);
});
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js';  
//import productsRoutes from './routes/productsRoutes.js';
import { Server } from 'socket.io';
//import uploader from './uploader.js';
import mongoose from 'mongoose';

//Conectar Mongo
mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});
 

//Crear la App
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());    



 
//Habilitar Pug
app.set('view engine', 'pug');
app.set('views',  './views');

//Carpeta Public
app.use(express.static('public'));

//Routing
app.use('/auth', usuarioRoutes)
//app.get('/:pid', productsRoutes)



//Definir un puerto y arrancar el proyecto
const port = 8080;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto' ${port}`);
});
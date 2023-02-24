import express from 'express';
import { formularioLogin, formularioRegistro, olvidePassword } from '../controlers/usuariocontroler.js';
import usuarioControler from '../controlers/usuariocontroler'



const router = express.Router();

module.exports = function(){

router.get('/login', formularioLogin );

router.get('/registro', formularioRegistro );

router.get('/olvidepassword', olvidePassword ); 

                //CRUD **   *   * * * * * * * * * * * * * * * *
    //Agrega nuevos usuarios vía POST
router.post('/usuarios', usuarioControler.nuevoUsuario); 

    //obtener todos los usuarios
router.get('/usuarios', usuarioControler.mostrarUsuarios);

    //Muestra un usuario especifico (ID)
router.get('/usuarios/idUsuario', usuarioControler.mostrarUsuario);

    // Actualizar Usuario
router.put('/usuarios/:idUsuario', usuarioControler.actualizarUsuario);

    //Eliminar Cliente
router.delete('/usuarios/:idUsuario', usuarioControler.eiliminarUsuario);



    return router;
}

export default router
import express from 'express';
import { formularioLogin, formularioRegistro, olvidePassword } from '../controlers/usuariocontroler.js';
import usuariocontroler from '../controlers/usuariocontroler.js'





const router = express.Router();

module.exports = function(){

router.get('/login', formularioLogin );

router.get('/registro', formularioRegistro );

router.get('/olvidepassword', olvidePassword ); 

                //CRUD **   *   * * * * * * * * * * * * * * * *
    //Agrega nuevos usuarios vía POST
router.post('/usuarios', usuariocontroler.nuevoUsuario); 

    //obtener todos los usuarios
router.get('/usuarios', usuariocontroler.mostrarUsuarios);

    //Muestra un usuario especifico (ID)
router.get('/usuarios/idUsuario', usuariocontroler.mostrarUsuario);

    // Actualizar Usuario
router.put('/usuarios/:idUsuario', usuariocontroler.actualizarUsuario);

    //Eliminar Cliente
router.delete('/usuarios/:idUsuario', usuariocontroler.eiliminarUsuario);



    return router;
}

export default router
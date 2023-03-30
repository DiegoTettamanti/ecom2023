import express from 'express';
import { formularioLogin, formularioRegistro, cerrarSesion, comprobarToken, nuevoPassword } from '../controlers/usuarioController.js';

const router = express.Router();

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
router.delete('/usuarios/:idUsuario', usuariocontroler.eliminarUsuario);

// Cerrar sesión
router.post('/cerrar-sesion', cerrarSesion)

// Almacena el nuevo password
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);




export default  router
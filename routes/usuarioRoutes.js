import express from 'express';
import { formularioLogin, formularioRegistro, cerrarSesion, comprobarToken, nuevoPassword} from '../controlers/usuarioController.js';
import usuario from '../models/Users.js';

const router = express.Router();



router.get('auth/login', formularioLogin );

router.get('auth/registro', formularioRegistro );

router.get('auth/olvidepassword'); 

                //CRUD **   *   * * * * * * * * * * * * * * * *


// Cerrar sesión
router.post('/cerrar-sesion', cerrarSesion)

// Almacena el nuevo password
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);




export default  router
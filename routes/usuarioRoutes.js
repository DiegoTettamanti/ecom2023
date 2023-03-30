import express from 'express';
import { formularioLogin, formularioRegistro, cerrarSesion, comprobarToken, nuevoPassword } from '../controlers/usuarioController.js';
import { passportAuth} from '../middleware/passportAuth';
import {userSchema} from '../models/userSchema';

const router = express.Router();

router.get('/', passportAuth, async (req, res) => {
    const {page=1} = req.query;
    const {docs} = await userSchema.paginate({}, {limit: 2,page})

    res.status(200).send(docs)
});


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
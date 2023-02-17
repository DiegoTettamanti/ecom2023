import express from 'express';
import { formularioLogin, formularioRegistro, olvidePassword } from '../controlers/usuariocontroler.js';

const router = express.Router();


router.get('/login', formularioLogin );

router.get('/registro', formularioRegistro );

router.get('/olvidepassword', olvidePassword ); 



export default router
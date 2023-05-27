import express from 'express';
import { productManager } from '../productManager';
import Users from '../models/Users.js';
import productsRoutes from '../models/productsRoutes.js';
const router = express.Router();


router.use('/:pid', productManager );

router.get('/registro', formularioRegistro );


export { router, productManager, productsRoutes}

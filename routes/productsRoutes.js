import express from 'express';
import { productManager } from '../productManager';

const router = express.Router();


router.use('/:pid', productManager );

//router.get('/registro', formularioRegistro );


export { router, productManager, productsRoutes}

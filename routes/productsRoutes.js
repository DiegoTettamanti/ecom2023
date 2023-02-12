import express from 'express';
import { productManager } from '..productManager.js';

const router = express.Router();


router.get('/:pid', productManager );

//router.get('/registro', formularioRegistro );


export { router, productManager, productsRoutes}

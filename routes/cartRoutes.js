import { Router } from 'express'
import Cart from '../controlers/cartController/Cart.js';


const router = Router()

// POST localhost/api/carts 
router.post('/api/carts', async (req, res) =>{
    const cart = req.body
    cart.id = Date.now()
    cart.product = []

    res.status(200).json({cart,
    msg: 'Carrito creado'})

})
//Get localhost/api/carts/:cid 
router.get('/:cid', async (req, res) =>{
    const { cartid } = req.params

    res.status(200).json({
        msg: 'carrito personalizado',
        cid: ''
    })
})
//POST localhost/api/carts/:cid/product/:pid
router.post('/api/carts', cartController.nuevoCart)





export default {router};
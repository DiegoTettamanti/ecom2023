import Cart from '../models/Cart.js';

const cartid = (req, res) => {
    res.render('auth/cid', {
        autenticado: false  
    })
}

//Agrega un nuevo Cart
exports.nuevoCart = async (req, res) => {
    console.log(req.body)
}


export default Cart
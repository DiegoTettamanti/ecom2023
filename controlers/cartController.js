import Cart from '../models/Cart.js';

const cartid = (req, res) => {
    res.render('auth/cid', {
        autenticado: false  
    })
}

//Agrega un nuevo Cart


export default Cart
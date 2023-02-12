const cart = (req, res) => {
    res.render('auth/cid', {
        autenticado: false  
    })
}

export {
    cart
}
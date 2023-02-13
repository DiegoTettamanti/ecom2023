
const formularioLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: false  
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear cuenta',
    })
}

const olvidePassword = (req, res) => {
    res.render('auth/olvidepassword', {
        pagina: 'Crear cuenta',
    })
}

export {
    formularioLogin,
    formularioRegistro,
    olvidePassword
}
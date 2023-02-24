import Userschema from './models/User.model.js';


// Agrega un nuevo usuario
exports.nuevoUsuario = async (req, res, next) => {
    const usuario = new usuario(req.body);
try {
    //almacenar registro
    await usuario.save;
    res.json({mensaje: 'Se agrego un nuevo usuario'});
} catch (error) {
    //si hay un error, console.log y next
    console.log(error);
    next();
}
}


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
        pagina: 'Recupera tu contraseña',
    })
}

export default {
    formularioLogin,
    formularioRegistro,
    olvidePassword
    
}
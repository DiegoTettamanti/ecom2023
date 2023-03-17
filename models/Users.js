import { Schema, model } from 'mongoose'
import { productsRoutes } from '../routes/productsRoutes';
import router from '../routes/usuarioRoutes';
const mongoose = require ( 'mongoose' )

const collection = 'usuarios';

const Userschema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim:true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }
    })






    module.exports = model('Users', Userschema);


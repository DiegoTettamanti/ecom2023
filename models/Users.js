import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'


const usuario  = 'collection';

const userSchema = new Schema({
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
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    cart: {
        type: String,
    },
    role: {
        type: String,
        required: true
    }
})


   export default { usuario, userSchema};

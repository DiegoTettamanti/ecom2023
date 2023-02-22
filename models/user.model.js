import { Schema } from 'mongoose'
const mongoose = require('mongoose');


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

module.exports = mongoose.model('Usuario',Userschema)


export default {Userschema}
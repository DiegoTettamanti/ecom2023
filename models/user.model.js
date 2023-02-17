import { Schema, model } from 'mongoose'

const userCollection = 'Usuarios'
const Userschema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    }
    })

module.exports = model(userCollection,Userschema)
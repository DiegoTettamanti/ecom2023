import { Schema, model } from 'mongoose'

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



export  {Userschema, collection}


    module.exports = model(collection, Userschema);


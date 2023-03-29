import { Schema, model } from 'mongoose'
import mongoose from 'mongoose'

let collection = 'users';

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






   export default {collection, Userschema}

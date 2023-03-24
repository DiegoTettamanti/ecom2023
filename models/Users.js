import { Schema, model } from 'mongoose'
const mongoose = require ('mongoose')

const collection = 'users';

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






    module.exports = model('users', Userschema);


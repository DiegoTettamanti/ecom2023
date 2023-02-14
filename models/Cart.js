import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const cartsSchema = new Schema({
    nombre: {
        type: stringify,
        trim: true  
    },
    apellido: {
        type: String,
        trim: true
    },
   
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },    
    id: {
        type: String,
        trim: true,
        unique: true,
    }
})

module.exports = mongoose.model('Cart', cartsSchema);

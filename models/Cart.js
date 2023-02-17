import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const cartsSchema = new Schema({
    nombre: {
        type: String,
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

export default ('Cart', cartsSchema);

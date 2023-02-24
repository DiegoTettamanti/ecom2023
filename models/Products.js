import { Schema as _Schema } from 'mongoose';
const Schema = _Schema;

const productsSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number
    },
    imagen: {
        type: String
    }
});
module.exports = model(products, productsSchema);


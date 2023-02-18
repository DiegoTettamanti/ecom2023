import { connect } from 'connect';
import mongoose from 'mongoose';

const { connect } = require('mongoose')

const url = 'mongodb+srv://Tettacorp:Fullstack23@cluster17.63yiu.mongodb.net/'
// const url_local = 'mongodb//localhost:27017/nombreDB'

mongoose.set("strictQuery", false);

const dbConnection = async () => {
    return await connect(url, err => {
        if (err) {
            console.log('No se puede conectar mongodb: ', err)
            process.exit()
        }
        console.log('DB conectada ')
    })
}

module.exports = { dbConnection }





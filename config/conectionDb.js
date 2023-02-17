import { connect } from 'connect';

const { connect } = require('mongoose')

const url = 'mongodb+srv://federicoaosandon:Federico1@cluster0.an130di.mongodb.net/?retryWrites=true&w=majority'
// const url_local = 'mongodb//localhost:27017/nombreDB'

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

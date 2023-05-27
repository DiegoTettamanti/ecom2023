import MongoStore from'connect-mongo'
import {connect}  from 'mongoose'
import dotenv from'dotenv'
import { commander } from '../src/utils/commander'
import MongoSingleton from './MongoSingleton'


const {mode} =  commander.opts()


const enviroment = mode || "development"

dotenv.config({
    path: enviroment === 'development'? './.env.development' : './.env.production'
})

// const url = "mongodb+srv://Tettacorp:Fullstack23@cluster17.63yiu.mongodb.net"
let url = process.env.MONGO_URL 


let configObject = {
    PORT: process.env.PORT,
    MONGO_URL: url,
    adminName: process.env.ADMIN_NAME || 'admin',
    adminPassword: process.env.ADMIN_PASSWORD || 'admin',
    mail_password: process.env.MAIL_PASSWORD,
    mail_admin: 'tettamanti.diego@gmail.com',
    
    _dbConnection: async () => {
        try {
            connect(url)
            console.log('DB conectada')
        } catch (error) {
            console.log(error)
            process.exit()
        }
    },
get dbConnection() {
        return this._dbConnection
    },
set dbConnection(value) {
        this._dbConnection = value
    },

    dbConnection: () => MongoSingleton.getInstance(),
    session:{
        store: MongoStore.create({
            mongoUrl: url,
            mongoOptions: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            ttl: 15000000000
        })
    }, 
        secret: 's3cr3t0',
        resave: false,
        saveUninitialized: false
    };



export default {
    configObject  
}

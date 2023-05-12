import winston from "winston";

const logger = winston.createLogger({
    transports:[
        new winston.transports.ConsoleTransport({level: 'http'}),
        new winston.transports.File({filename:'.errors.log'})
    ]
})

exports.addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}


export default logger
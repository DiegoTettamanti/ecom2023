import winston from "winston";

const logger = winston.createLogger({
    transports:
        new winston.transports.ConsoleTransport({level: 'http'}),
})

exports.addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}

import { createTransport } from 'nodemailer';
import {mail_password, mail_admin} from '../config/config.js';

const transport = createTransport({

    service: 'gmail',
    port: 578,
    auth: {
        user: mail_admin,
        pass: mail_password
}})
let from = `servicio de reset password <${mail_admin}>`

const sendEmail = async () => {
    return await transport.sendEmail(
        from
    )
}
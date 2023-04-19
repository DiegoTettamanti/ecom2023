import { passport } from "passport";
import { Strategy } from "passport-jwt";
import pkg from 'passport';


const { passport } = pkg;

const passportAuth = Strategy =>{
    return async (req, res,next) =>{
        passport.authenticate()
    }
}

export default passportAuth
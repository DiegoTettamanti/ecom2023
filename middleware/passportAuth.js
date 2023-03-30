import { passport } from "passport";
import { Strategy } from "passport-jwt";



const passportAuth = Strategy =>{
    return async (req, res,next) =>{
        passport.authenticate()
    }
}

export default passportAuth
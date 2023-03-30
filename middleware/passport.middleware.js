import passport from 'passport';
import {Strategy, ExtractJWT} from 'passport-jwt';

const JWTstrategy = Strategy
const ExtractJWT = ExtractJWT
let cookieExtractor =(req)=>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies('coderCookieToken')
    }
    return token
}

const initializePassport = () =>{
    passport.use('jwt', new JWTstrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret'
    },async(jwt_payload, done) =>{
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error);
        }
    }
    ))
}

export default initializePassport
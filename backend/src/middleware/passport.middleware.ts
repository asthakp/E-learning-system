import passport from "passport";
import {Strategy} from 'passport-google-oauth20'


const clientID=process.env.GOOGLE_CLIENT_ID ?? ''
const clientSecret=process.env.GOOGLE_CLIENT_SECRET ?? ''

export const passportInitialize=()=>{
  passport.use(new Strategy({
    clientID,
    clientSecret,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken:string, refreshToken:string, profile:object, cb:any) {
    cb(null, profile)
  }
));

passport.serializeUser((user:object, done:any)=>{
    done(null, user)
})

passport.deserializeUser((user:object, done:any)=>{
    done(null, user)
})

}
export default passport
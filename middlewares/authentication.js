let passport = require('passport')
let passportJWT = require('passport-jwt')
let config = require('../config.json')
const db = require('../models')

const ExtractJwt = passportJWT.ExtractJwt
const jwtOption = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.scretKey
}

const JwtStrategy = passportJWT.Strategy
const howToAuth = new JwtStrategy(jwtOption, async function (payload, done) {
    done(null, true, payload)
})

const isLogin = async function (req, res, next) {
    let found = await db.login.findOne({where:{token: req.headers.authorization, status: 'login'}})
    if(found == null) res.send(405)    
    next();
}

passport.use(howToAuth)
module.exports = [passport.authenticate("jwt", { session: false }), isLogin]
let userdb = require('../models/user')
let log_login = require('../models/Loglogin')
let passwordEncode = require('../utilities/passwordEncoder')
let jwt = require('jwt-simple')
let config = require('../config.json')
let moment = require('moment')

module.exports = {
    signin: async function (username, password) {
        const user = await userdb.findUsername(username)
        if (await passwordEncode.matchPassword(password, user.password)) {            
            let token = 'Bearer ' + jwt.encode({
                id:user.id,
                username: user.username,
                fname: user.fname,
                lname: user.lname,
                role: user.role,
                status: user.status,
                iat: moment().unix(),
                exp: moment().add(config.expire, 'days').unix()
            }, config.scretKey) 
            log_login.login(token, user.id)                        
            return {token: token}
        } else {
            throw 'not match password'
        }
    }
}
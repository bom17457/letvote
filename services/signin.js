let userdb = require('../models/user')
let log_login = require('../models/Loglogin')
let passwordEncode = require('../utilities/passwordEncoder')
let jwt = require('jwt-simple')
let config = require('../config.json')
let moment = require('moment')

module.exports = {
    signin: async function (username, password) {
        let user = await userdb.findUsername(username)
        if (await passwordEncode.matchPassword(password, user.password)) {
            user.exp = moment().add(config.expire, 'days').format('YYYY-MM-DD HH:MM:SS')
            let token = jwt.encode(user, config.scretKey)
            log_login.login(token, user.id)            
            
            return {token: token}
        } else {
            throw 'not match password'
        }
    }
}
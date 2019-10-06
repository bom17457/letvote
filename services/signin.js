let userdb = require('../models/user')
let log_login = require('../models/Loglogin')
let passwordEncode = require('../utilities/passwordEncoder')
let jwt = require('jwt-simple')
let config = require('../config.json')
let moment = require('moment')

module.exports = {
    signin: async function (username, password) {
        let user = await userdb.findUser(username)        
        if (username == user.username) {
            if (await passwordEncode.verifyPassword(password, user.password)) {                
                delete user.password
                delete user.create_datetime             
                user.exp = moment().add(config.expire, 'days').format('YYYY-MM-DD HH:MM:SS')                
                let token = jwt.encode(user, config.scretKey)
                
                log_login.login(token, user.id)
                user.AccessToken = token                       
                
                delete user.exp
                delete user.id
                return user
            }else{                
                throw 'password not match'
            }
        } else {
            throw 'username not match'
        }
    }
}
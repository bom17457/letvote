let userdb = require('../models/user')
let users = require('../models/user.model')
let log_login = require('../models/Loglogin')
let passwordEncode = require('../utilities/passwordEncoder')
let jwt = require('jwt-simple')
let config = require('../config.json')
let moment = require('moment')

module.exports = {
    signin: async function (username, password) {
        let user = await users.findAll({
            where: {
                username: username
            }            
        })
        if(user.length == 0) throw 'not found user'
        user = user[0]
        if(!await passwordEncode.matchPassword(password, user.password)) throw 'not match password'
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
    }
}
let db = require('../models')
let passwordEncode = require('../utilities/passwordEncoder')
let jwt = require('jwt-simple')
let config = require('../config.json')
let moment = require('moment')

module.exports = {
    signin: async function (username, password) {
        let user = await db.users.findOne({where: { username: username }})
        if (user == null) throw 'not found user'
        if (!await passwordEncode.matchPassword(password, user.password)) throw 'not match password'
        let token = 'Bearer ' + jwt.encode({
            id: user.id,
            username: user.username,
            fname: user.fname,
            lname: user.lname,
            role: user.role,
            status: user.status,
            iat: moment().unix(),
            exp: moment().add(config.expire, 'days').unix()
        }, config.scretKey)
        await db.login.create({ token: token, user_id: user.id, status: 'login' })
        return { token: token }
    }
}
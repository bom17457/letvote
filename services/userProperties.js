let userdb = require('../models/user')
let log_login = require('../models/Loglogin')
let config = require('../config.json')
let moment = require('moment')

module.exports = {
    properties: async function (id) {
        let userdetail = await userdb.getUserDetail(id)
        return userdetail
    }
}
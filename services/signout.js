let loglogin = require('../models/Loglogin')

module.exports.logout = async function(token, id){
    if(typeof token == 'undefined') throw 'token is not define'
    loglogin.logout(token, id)
}
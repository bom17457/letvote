var db = require('./db.js')
var passwordEncode = require('../utilities/passwordEncoder')

module.exports.findUser = function(username) {
    var user = db.query(`SELECT * from user WHERE username='${username}' LIMIT 1`)
        .then(function (result) {     
            if(result.length == 0) throw error
            return result[0]            
        })
        .catch(function (error) {
            throw error
        })
    return user;
}
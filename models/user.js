var db = require('./db.js')
var passwordEncode = require('../utilities/passwordEncoder')

module.exports.findUsername = function(username) {
    var user = db.query(`SELECT id, fname, lname, username, password, role from user WHERE username='${username}' LIMIT 1`)
        .then(function (result) {     
            if(result.length == 0) throw 'not found user'
            return result[0]            
        })
        .catch(function (error) {
            throw error
        })
    return user;
}
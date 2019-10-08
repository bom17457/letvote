var db = require('./db.js')
var passwordEncode = require('../utilities/passwordEncoder')

module.exports.findUsername = async function(username) {
    let user = await db.query(`SELECT id, fname, lname, username, password, role, status from user WHERE username='${username}' LIMIT 1`)   
    if(user.length == 0) throw 'not found user'
    return user[0];
}

module.exports.getUserDetail = async function(id) {
    let user = await db.query(`SELECT id, fname, lname, username, role, status from user WHERE id='${id}' LIMIT 1`)
    if(user.length == 0) throw 'not found'
    return user[0];
}
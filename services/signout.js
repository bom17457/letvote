let db = require('../models')

module.exports.logout = async function(token, id){
    if(typeof token == 'undefined') throw 'token is not define'    
    await db.login.create({token:token, user_id: id, status:'logout'})
}
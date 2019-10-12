let users = require('../models/user.model')

module.exports = {
    properties: async function (id) {
        let userdetail = await users.findAll({where:{id:id}})
        if(userdetail.length == 0) throw 'not found'
        return userdetail[0]
    }
}
let db = require('../models')

module.exports.getBallots = async function(){
    return await db.elections.findAll()
}
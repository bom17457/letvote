let db = require('../models')

module.exports.getBallots = async function (userID) {
    let election = await db.sequelize.query(`select *, IF((select COUNT(*) from vote_election where voter_id = '${userID}' and election_id = elections.id), 'vote', 'unvote')as isVote from elections`)    
    return election[0]
}
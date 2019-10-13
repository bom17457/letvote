let db = require('../models')
let candidate_join_Election = require('../models/CandidateJoinElection.model')
let users = require('../models/user.model')

module.exports.enrollCandidate = async function (electionID, userID) {
    let transaction;
    try{
        transaction = await db.transaction();   
        
        await users.update({role:'candidate'}, {where:{id: userID}}, {transaction})                        
        await candidate_join_Election.create({ election_id: electionID, user_id: userID}, {transaction})                
        await transaction.commit();
        let user = users.findOne({attributes:['id','fname', 'lname', 'username', 'status', 'role'], where: {id:userID}})
        return user
    }catch(Exception){                
        await transaction.rollback();
        throw 'cannot enroll candidate to this election'
    }


}

module.exports.disableCandidateWithReport = async function () {
    
}


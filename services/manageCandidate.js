let db = require('../models')

module.exports.enrollCandidate = async function (electionID, userID) {
    let transaction;
    try {
        transaction = await db.sequelize.transaction();

        await db.users.update({ role: 'candidate' }, { where: { id: userID } }, { transaction })
        await db.candidate_join_election.create({ election_id: electionID, user_id: userID }, { transaction })
        await transaction.commit();
        let user = await db.users.findOne({ attributes: ['id', 'fname', 'lname', 'username', 'status', 'role'], where: { id: userID } })
        return user
    } catch (Exception) {
        await transaction.rollback();
        throw 'cannot enroll candidate to this election'
    }


}

module.exports.disableCandidateWithReport = async function (electionID, candidateID, report) {
    let transaction;
    try {
        transaction = await db.sequelize.transaction();

        await db.users.update({ role: 'voter' }, { where: { id: candidateID } }, { transaction })
        await db.candidate_join_election.update({ status: 'disable' },{ where:{ election_id: electionID, user_id: candidateID }}, { transaction })
        //Insert To DisableWithReport
        await transaction.commit();
        let user = await db.users.findOne({ attributes: ['id', 'fname', 'lname', 'username', 'status', 'role'], where: { id: candidateID } })        
        if(user==null) throw 'not found user'
        return user
    } catch (Exception) {
        await transaction.rollback();
        throw 'cannot revoke candidate in this election'
    }
}

module.exports.getCandidates = async function (electionID) {
    let candidates = await db.sequelize.query(`select users.id, users.fname, users.lname, users.role, candidate_join_election.status from users inner join candidate_join_election on users.id = candidate_join_election.user_id where candidate_join_election.election_id = ${electionID}`)
    return candidates[0]
}
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

module.exports.disableCandidateWithReport = async function (electionID, candidateID, reason) {
    let transaction;
    try {
        transaction = await db.sequelize.transaction();

        await db.users.update({ role: 'voter' }, { where: { id: candidateID } }, { transaction })
        await db.candidate_join_election.update({ status: 'disable' }, { where: { election_id: electionID, user_id: candidateID } }, { transaction })
        await db.disableCandidate.create({
            election_id: electionID,
            candidate_id: candidateID,
            reason: reason
        })
        await transaction.commit();
        let user = await db.users.findOne({ attributes: ['id', 'fname', 'lname', 'username', 'status', 'role'], where: { id: candidateID } })
        if (user == null) throw 'not found user'
        return user
    } catch (Exception) {
        await transaction.rollback();
        throw 'cannot revoke candidate in this election'
    }
}

module.exports.getCandidates = async function (electionID) {
    let candidates = await db.sequelize.query(`select users.id, users.fname, users.lname, users.role, candidate_join_election.status, disableCandidate.reason
    from users 
    join candidate_join_election on users.id = candidate_join_election.user_id
    left join disableCandidate on disableCandidate.election_id = candidate_join_election.election_id and disableCandidate.candidate_id = candidate_join_election.user_id
    where candidate_join_election.election_id = ${electionID}
    GROUP BY users.id
    ORDER BY users.id desc`)
    return candidates[0]
}
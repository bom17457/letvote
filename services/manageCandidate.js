let db = require('../models')

module.exports.enrollCandidate = async function (electionID, userID) {
    let transaction;
    try {
        transaction = await db.sequelize.transaction();

        await db.users.update({ role: 'candidate' }, { where: { id: userID } }, { transaction })
        await db.candidate_join_election.create({ election_id: electionID, user_id: userID }, { transaction })
        await transaction.commit();
        let user = db.users.findOne({ attributes: ['id', 'fname', 'lname', 'username', 'status', 'role'], where: { id: userID } })
        return user
    } catch (Exception) {
        await transaction.rollback();
        throw 'cannot enroll candidate to this election'
    }


}

module.exports.disableCandidateWithReport = async function () {

}

module.exports.getCandidates = async function (electionID) {
    let candidates = await db.sequelize.query(`select users.id, users.fname, users.lname, users.role, users.status from users inner join candidate_join_election on users.id = candidate_join_election.user_id where candidate_join_election.election_id = ${electionID}`)
    return candidates[0]
}
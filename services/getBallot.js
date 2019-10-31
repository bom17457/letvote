let db = require('../models')
let Op = db.Sequelize.Op
const moment = require('moment')
module.exports.getBallots = async function (userID) {
    let election = await db.sequelize.query(`select elections.*, vote_election.voter_id as isVote
    from elections 
    left join vote_election on vote_election.election_id = elections.id 
    where elections.status='active' 
    or vote_election.voter_id = '${userID}'`)
    return election[0]
}

module.exports.getCandidates = async function (electionID) {
    let candidates = await db.sequelize.query(`select users.id, users.fname, users.lname, users.role, users.status 
    from users inner 
    join candidate_join_election 
    on users.id = candidate_join_election.user_id 
    where candidate_join_election.election_id = ${electionID} and candidate_join_election.status = 'enable'`)
    return candidates[0]
}

module.exports.getBallotDetail = async function (electionID) {
    let election = await db.elections.findOne({ where: { status: 'active', id: electionID } })
    return election
}

module.exports.vote = async function (electionID, candidateID, voterID) {
    return await db.vote_election.create({
        election_id: electionID,
        candidate_id: candidateID,
        voter_id: voterID,
        create_datetime: new Date()
    })
}

module.exports.isNotExistVote = async function (electionID, id) {
    let haveVote = await db.vote_election.findOne({ where: { election_id: electionID, voter_id: id } })
    if (haveVote != null) throw 'have vote'
}

module.exports.isBetweenVote = async function (electionID) {
    let election = await db.elections.findOne({ where: { id: electionID } })
    if (election == null) throw 'not found elections'
    const between = moment().startOf('day').isBetween(moment(election.start_vote_datetime), moment(election.end_vote_datetime), 'day')
    const same_start = moment().startOf('day').isSame(moment(election.start_vote_datetime), 'day')
    const same_end = moment().startOf('day').isSame(moment(election.end_vote_datetime), 'day')
    if (!(between || same_start || same_end)) throw 'timeup'

    return between || same_start || same_end
}

module.exports.result = async function (electionID) {
    let result = await db.sequelize.query(`select 
    vote_election.candidate_id, 
    users.fname, 
    users.lname, 
    COUNT(voter_id) as 'result'
    from vote_election 
    join users on users.id = candidate_id 
    Where election_id = ${electionID} GROUP BY candidate_id ORDER BY result desc`)

    return result[0]
}
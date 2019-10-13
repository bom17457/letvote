const Sequelize = require('sequelize')
const db = require('./')
const CandidateJoinElection = db.define('candidate_join_election',{
    election_id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    status: {
        type: Sequelize.ENUM('enable', 'disable'),
        default: 'enable'
    }
})

module.exports = CandidateJoinElection


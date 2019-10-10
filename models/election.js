let db = require('./db')

module.exports.findOneElection = function () {
}

/**
 * @param Object
 * 
 */
module.exports.insertOneElection = async function (data, userID) {
    let query = `INSERT INTO letvote.election 
                (
                    topic,
                    description, 
                    displaytext, 
                    start_register_datetime, 
                    end_register_datetime, 
                    start_vote_datetime, 
                    end_vote_datetime, status, 
                    create_datetime, 
                    user_id
                ) VALUES(
                    '${data.topic}',
                    '${data.description}', 
                    '${data.displayText}',  
                    '${data.electionFrom}', 
                    '${data.electionTo}', 
                    '${data.registerFrom}', 
                    '${data.registerTo}', 
                    'publish', 
                    current_timestamp(), 
                    '${userID}'
                )`
    await db.query(query)
}

module.exports.getAll = async function(){
    let query = `SELECT * FROM letvote.election`
    return await db.query(query)
}

module.exports.updateOneElection = function (token, id) {
}

module.exports.updateElectionStatus = function (token) {

}
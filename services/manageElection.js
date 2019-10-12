let manageElection = require('../models/election')
let elections = require('../models/election.model.js')

module.exports.insert = async function(data, userID){        
    await elections.create({
        topic: data.topic,
        description: data.description, 
        displaytext: data.displayText, 
        start_register_datetime: data.registerFrom,
        end_register_datetime: data.registerTo, 
        start_vote_datetime: data.electionFrom, 
        end_vote_datetime : data.electionTo, 
        status: 'public',         
        user_id: userID
    })
}

module.exports.getAllElection = async function(){
    return await elections.findAll()
}
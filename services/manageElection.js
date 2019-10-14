let db = require('../models')

module.exports.insert = async function(data, userID){       
    console.log(data) 
    await db.elections.create({
        topic: data.topic,
        description: data.description, 
        displaytext: data.displayText, 
        start_register_datetime: data.registerFrom,
        end_register_datetime: data.registerTo, 
        start_vote_datetime: data.electionFrom, 
        end_vote_datetime : data.electionTo, 
        status: 'active',         
        create_datetime: new Date(),
        owner: userID
    })
}

module.exports.getAllElection = async function(){
    return await db.elections.findAll()
}
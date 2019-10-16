let db = require('../models')

module.exports.insert = async function(data, userID){           
    await db.elections.upsert({
        id: data.id,
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

    return await db.elections.findOne({order:[['create_datetime', 'DESC']]})
}

module.exports.getAllElection = async function(){
    return await db.elections.findAll()
}

module.exports.getElectionByID = async function(id){
    let election = await db.elections.findOne({where:{id:id}})
    if(election == null) throw 'not found'
    return election
}

module.exports.inactiveById = async function(id){
    return await db.elections.update({status: 'inactive'}, {where:{id:id}})
}
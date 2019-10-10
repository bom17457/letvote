let manageElection = require('../models/election')

module.exports.insert = async function(data, userID){    
    await manageElection.insertOneElection(data, userID)
}

module.exports.getAllElection = async function(){
    return await manageElection.getAll()
}
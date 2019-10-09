let manageElection = require('../models/election')

module.exports.insert = async function(data, userID){    
    await manageElection.insertOneElection(data, userID)
}
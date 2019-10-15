var express = require('express');
var router = express.Router();
let Iballot = require('../services/getBallot')

const struct = {
  ballots: async function (req, res, next) {        
    try{
      let ballot = await Iballot.getBallots()      
      res.json(ballot)
    } catch(Exception) {            
      res.send(400, {message:Exception.toString()})
    }
  }
}
router.get('/', struct.ballots);
module.exports = {
  router: router,
  ...struct
}
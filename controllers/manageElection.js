var express = require('express');
var router = express.Router();
var manageElection = require('../services/manageElection')

const struct = {
  getElection: async function(req, res, next){
    try{
      let result = await manageElection.getAllElection()
      res.json(result)
    }catch(Exception){
      res.sendStatus(400)
    }
  },
  getElectionByid: async function(req, res, next){

  },
  PostElection: async function (req, res, next) {    
    const new_election = req.body
    const {id} = req.authInfo
    try{
      await manageElection.insert(new_election, id)
      res.send(201)
    }catch(Exception){            
      res.send(400, {})
    }
  },
  UpdateElection: async function(req, res, next) {
    try{

      res.json({})
    }catch(Exception){
      res.send(400, {})
    }
  },
  DisableElection: async function(req, res, next){
    try{

    }catch(Exception){
      res.send(400, {})
    }
  }
}
router.get('/', struct.getElection)
router.get(':id', struct.getElectionByid)
router.post('/', struct.PostElection);
router.put('/', struct.UpdateElection);
router.delete('/', struct.DisableElection);
module.exports = {
  router: router,
  ...struct
}
var express = require('express');
var router = express.Router();

const struct = {
  Election: async function(req, res, next){
    try{

    }catch(Exception){
      res.send(400, {})
    }
  },
  PostElection: async function (req, res, next) {
    try{
      
      res.json({})
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
router.get('/', struct.Election)
router.post('/', struct.PostElection);
router.put('/', struct.UpdateElection);
router.delete('/', struct.DisableElection);
module.exports = {
  router: router,
  ...struct
}
var express = require('express');
var router = express.Router();
var manageElection = require('../services/manageElection')

const struct = {
  getElection: async function (req, res, next) {
    let result = await manageElection.getAllElection()
    res.json(result)
  },
  getElectionByid: async function (req, res, next) {
    let { id } = req.params
    try {
      let result = await manageElection.getElectionByID(id)
      res.json(result)
    } catch (Exception) {
      res.status(400)
    }
  },
  PostElection: async function (req, res, next) {
    const new_election = req.body
    const { id } = req.authInfo
    try {
      let result = await manageElection.insert(new_election, id)
      res.json(result)
    } catch (Exception) {
      res.send(400)
    }
  },
  DisableElection: async function (req, res, next) {
    let { id } = req.params
    try {
      let result = await manageElection.inactiveById(id)
      res.json(result)
    } catch (Exception) {
      res.status(400)
    }
  }
}
router.get('/', struct.getElection)
router.get('/:id', struct.getElectionByid)
router.post('/', struct.PostElection);
router.delete('/:id', struct.DisableElection);
module.exports = {
  router: router,
  ...struct
}
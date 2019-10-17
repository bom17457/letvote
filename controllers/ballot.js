var express = require('express');
var router = express.Router();
let Iballot = require('../services/getBallot')

const struct = {
  ballots: async function (req, res, next) {
    try {
      let { id } = req.authInfo
      let ballot = await Iballot.getBallots(id)
      res.json(ballot)
    } catch (Exception) {
      res.send(400, { message: Exception.toString() })
    }
  },
  getCandidiateInBallot: async function (req, res, next) {
    try {
      let { electionID } = req.params
      let candidateInBallot = await Iballot.getCandidates(electionID)
      res.json(candidateInBallot)
    } catch (Exception) {
      res.status(400)
    }
  },
  getBallotDetail: async function (req, res, next) {
    try {
      let { electionID } = req.params
      let ballotDetail = await Iballot.getBallotDetail(electionID)
      res.json(ballotDetail)
    } catch (Exception) {
      res.status(400)
    }
  },
  vote: async function (req, res, next) {
    try {
      let { id } = req.authInfo
      let { electionID, candidateID } = req.body
      await Iballot.vote(electionID, candidateID, id)
      res.send(200)
    } catch (Exception) {
      res.send(400)
    }
  },
  isNotExistVote: async function (req, res, next) {
    try {
      let { id } = req.authInfo
      let electionID = req.params.electionID || req.body.electionID
      await Iballot.isNotExistVote(electionID, id)
      next()
    } catch (Exception) {
      res.send(400)
    }
  },
  isBetweenVote: async function (req, res, next) {
    try {
      let electionID = req.params.electionID || req.body.electionID
      await Iballot.isBetweenVote(electionID)
      next();
    } catch (Exception) {
      res.send(400)
    }
  },
  result: async function (req, res, next) {
    try {
      let electionID = req.params.electionID || req.body.electionID
      let result = await Iballot.result(electionID)      
      res.json(result)
    } catch (Exception) {
      res.status(400)
    }
  }
}
router.get('/', struct.ballots);
router.get('/result', struct.result)
router.get('/:electionID', struct.isBetweenVote, struct.isNotExistVote, struct.getBallotDetail)
router.get('/candidate/:electionID', struct.isBetweenVote, struct.isNotExistVote, struct.getCandidiateInBallot)
router.post('/vote', struct.isBetweenVote, struct.isNotExistVote, struct.vote)
module.exports = {
  router: router,
  ...struct
}
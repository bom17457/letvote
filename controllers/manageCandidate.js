var express = require('express');
var router = express.Router();
var manageCandidate = require('../services/manageCandidate')
const struct = {
    enrollCandidate: async function (req, res, next) {
        try {
            const { voterID, electionID } = req.body
            let new_role_user = await manageCandidate.enrollCandidate(electionID, voterID)
            res.json(new_role_user)
        } catch (Exception) {
            console.log(Exception)
            res.send(400, Exception)
        }
    },
    getCandidates: async function (req, res, next) {
        try {
            const { electionID } = req.params
            let candidates = await manageCandidate.getCandidates(electionID)
            res.json(candidates)
        } catch (Exception) {
            res.status(400)
        }
    },
    disableCandidate: async function (req, res, next) {
        try {
            const { electionID, report } = req.body
            res.status(200)
        } catch (Exception) {
            res.status(400)
        }
    }
}
router.get('/', struct.getCandidates);
router.post('/enroll', struct.enrollCandidate)
module.exports = {
    router: router,
    ...struct
}
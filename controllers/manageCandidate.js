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
            res.send(400, Exception)
        }
    },
    getCandidates: async function (req, res, next) {
        try {
            const { electionID } = req.params
            res.sendStatus(200)
        } catch (Exception) {
            res.SendStatus(400)
        }
    },
    disableCandidate: async function (req, res, next) {
        try {
            const { electionID, report } = req.body
            res.sendStatus(200)
        } catch (Exception) {
            res.SendStatus(400)
        }
    }
}
router.get('/', struct.enrollCandidate);
module.exports = {
    router: router,
    ...struct
}
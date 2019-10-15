let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let ballot = require('../../controllers/ballot')

describe('getAllElection', function () {
    it('should return 200 and return json object', async function () {
        let req = new mockRequest({
            authInfo:{
                id: '025930461038-4'
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.ballots(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return array datatype')
        await assert.equal(typeof res._getJSON()[0].topic, 'string', 'Should return string')
    })
})

describe('getBallotDetail', function(){
    it('Should return 200 and return json object', async function(){
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-4'
            },
            params: {
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.getBallotDetail(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')        
    })
})

describe('getCandidateInBallot', function(){
    it('Should return 200 and return json object', async function(){
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-4'
            },
            params: {
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.getCandidiateInBallot(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')        
    })
})

describe('voting', function(){
    it('Should return 200 and return json object', async function(){
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-4'
            },
            body:{
                electionID: 1,
                candidateID: '025930461038-2',
                voterID: '025930461038-5'
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.vote(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')        
    })
})

describe('check vote', function(){
    it('Should execute next function', async function(){
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-10'
            },
            params: {
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.isNotVote(req, res, next)
        await assert.equal(exec, true, 'Should execute next function')        
    })

    it('Should not execute function', async function(){
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-4'
            },
            params: {
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.isNotVote(req, res, next)
        await assert.equal(exec, false, 'Should not execute next function')  
        await assert.equal(res.statusCode, '400', 'Should return status code 400')      
    })
})
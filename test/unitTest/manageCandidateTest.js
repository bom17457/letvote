let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let manageCandidate = require('../../controllers/manageCandidate')

describe('enroll candidate to election', function(){
    it('should return 200 and user role change to candidate', async function(){
        let req = new mockRequest({
            body: {
                voterID: '025930461038-5',
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await manageCandidate.enrollCandidate(req, res, next)
        await assert.equal(res.statusCode, '200', `Should return 200, got ${res.statusCode}`)
        await assert.equal(typeof res._getJSON(), 'object', 'Should return JSON object')
        await assert.equal(res._getJSON().role, 'candidate', 'should be equal candidate')
    })
})

describe('get candidate list in election', function(){
    it('should return 200 and list of candidate in election', async function(){
        let req = new mockRequest({
            params:{
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await manageCandidate.getCandidates(req, res, next)
        await assert.equal(res.statusCode, '200', `Should return 200, got ${res.statusCOde}`)
        await assert.equal(typeof res._getJSON(), 'object', 'Should return JSON object')
        await assert.equal(res._getJSON()[0].role, 'candidate', 'Should return candidate')
    })
})

describe('disable candidate with report', function(){
    it('should return 200 and return status disable', async function(){
        let req = new mockRequest({
            body:{
                candidateID: 1,
                reportMessage:'message reporter'
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }
        
        await manageCandidate.disableCandidate('req, res, next')
        await assert.equal(res.statusCode, '200', `Should return 200, got ${res.statusCode}`)
        await assert.equal(res._getJSON().status, 'disable', 'should be equal disable')
    })   
})
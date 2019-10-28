let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let ballot = require('../../controllers/ballot')
let ballot_service = require('../../services/getBallot')

describe('getAllBallot', function () {
    it('should return 200 and return json object', async function () {        
        let req = new mockRequest({
            authInfo: {
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
        await assert.notEqual(typeof res._getJSON()[0].isVote, 'undefined', 'Should not return undefined')
    })
})

describe('getBallotDetail', function () {
    it('Should return 200 and return json object', async function () {
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

describe('getCandidateInBallot', function () {
    it('Should return 200 and return json object', async function () {
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

describe('voting', function () {
    it('Should return 200 and return json object', async function () {        
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-5'
            },
            body: {
                electionID: 1,
                candidateID: '025930461038-2',
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.vote(req, res, next)
        await assert.equal(res.statusCode, '200', `Should return 200, got ${res.statusCode}`)
    })

    it('Should return 400', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-5'
            },
            body: {
                electionID: 0,
                candidateID: '0259-2',
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.vote(req, res, next)
        await assert.equal(res.statusCode, '400', `Should return 400, got ${res.statusCode}`)
    })
})

describe('check is not exist vote', function () {
    it('Should execute next function', async function () {
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

        await ballot.isNotExistVote(req, res, next)
        await assert.equal(exec, true, 'Should execute next function')
    })

    it('Should not execute function', async function () {
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

        await ballot.isNotExistVote(req, res, next)
        await assert.equal(exec, false, 'Should not execute next function')
        await assert.equal(res.statusCode, '400', 'Should return status code 400')
    })

    it('Should return true', async function () {

        let isBetween = await ballot_service.isBetweenVote(3)
        await assert.equal(isBetween, true, 'Should return "true"')
    })

    it('Should return "not found elections"', async function () {

        let isBetween = await ballot_service.isBetweenVote(0).catch(function (err) {
            return err.toString()
        })
        await assert.equal(isBetween.toString(), 'not found elections', 'Should return "not found elections"')
    })

    it('Should return "timeup"', async function () {

        let isBetween = await ballot_service.isBetweenVote(1).catch(function (err) {
            return err.toString()
        })
        await assert.equal(isBetween.toString(), 'timeup', 'Should return "not found elections"')
    })
})


describe('get election result', function () {
    it('Should return 200 and result is number', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-1'
            },
            params: {
                electionID: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.result(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should be return 200')
        await assert.equal(typeof res._getJSON()[0].result, 'number', 'Should be return number')
    })

    it('Should return 400', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '02593046'
            },
            params: {

            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.result(req, res, next)
        await assert.equal(res.statusCode, '400', `Should be return 400, got ${res.statusCode}`)
    })
})

describe('is between vote', function () {
    it('Should return execute next function', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-1'
            },
            params: {
                electionID: 3
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.isBetweenVote(req, res, next)
        await assert.equal(exec, true, 'Should execute next()')
    })

    it('Should return 400', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-1'
            },
            params: {
                electionID: 0
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await ballot.isBetweenVote(req, res, next)
        await assert.equal(res.statusCode, '400', 'Should be return 200')
    })
})
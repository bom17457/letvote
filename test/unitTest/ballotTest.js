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
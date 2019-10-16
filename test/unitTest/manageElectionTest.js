let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let manageElection = require('../../controllers/manageElection')

describe('Create or Update Election', function () {

    it('Should return 200 --create', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-1'
            },
            body: {
                topic: 'Student Election 2020',
                description: 'Electing success',
                electionFrom: '2019-09-22 11:01:50',
                electionTo: '2019-09-22 11:01:50',
                registerFrom: '2019-09-22 11:01:50',
                registerTo: '2019-09-22 11:01:50',
                displayText: 'Who is your partant'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function () { exec = true };

        await manageElection.PostElection(req, res, next)        
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.notEqual(res.statusCode, '400', 'Should not return 400')
        await assert.equal(typeof res._getJSON(), 'object', 'should return object')
    })

    it('Should return 200 --update', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-1'
            },
            body: {
                id: 2,
                topic: 'Student Election 2020 update',
                description: 'Electing success',
                electionFrom: '2019-09-22 11:01:50',
                electionTo: '2019-09-22 11:01:50',
                registerFrom: '2019-09-22 11:01:50',
                registerTo: '2019-09-22 11:01:50',
                displayText: 'Who is your partant'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function () { exec = true };

        await manageElection.PostElection(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.notEqual(res.statusCode, '400', 'Should not return 400')
    })

    it('Should return 400', async function () {
        let req = new mockRequest({
            authInfo: {
                id: '025930461038-1'
            },
            body: {
                topic: 'Student Election 2020',
                description: 'Electing fail',
                electionFrom: '18082019',
                electionTo: '18082019',
                registerFrom: '18082019',
                registerTo: '18082019',
                displayText: 'Who is your partant'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function () { exec = true };

        await manageElection.PostElection(req, res, next)
        await assert.equal(res.statusCode, '400', 'Should not return 400')
    })
})

describe('getAllElection', function () {
    it('should return 200 and return json object', async function () {
        let req = new mockRequest({})
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await manageElection.getElection(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return array datatype')
    })
})

describe('get election by id', function () {
    it('should return 200 and return json object', async function () {
        let req = new mockRequest({
            params: {
                id: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await manageElection.getElectionByid(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return array datatype')
    })
})

describe('inactive', function () {
    it('should return 200 and return json object', async function () {
        let req = new mockRequest({
            params: {
                id: 1
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function () { exec = true }

        await manageElection.DisableElection(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')        
    })
})
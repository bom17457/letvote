let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let getUserProperties = require('../../controllers/getUserProperties')
const sinon = require('sinon')
const db = require('../../models')
describe('get user properties', function(){
    let encode;
    it('Should return user detail and status code 200 "OK"', async function(){        
        let req = new mockRequest({            
            authInfo: {
                id:'025930461038-1'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};

        await getUserProperties.getProperties(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.notEqual(res.statusCode, '401', 'Should not return 401')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return json object')
        await assert.equal(Object.keys(res._getJSON()).includes('id'), true, 'Should return id')
        await assert.equal(Object.keys(res._getJSON()).includes('username'), true, 'Should return username')
        await assert.equal(Object.keys(res._getJSON()).includes('fname'), true, 'Should return fname')
        await assert.equal(Object.keys(res._getJSON()).includes('lname'), true, 'Should return lname')
        await assert.equal(Object.keys(res._getJSON()).includes('role'), true, 'Should return role')
        await assert.equal(Object.keys(res._getJSON()).includes('status'), true, 'Should return status')
    })    

    it('Should return message and status code 401', async function(){
        let req = new mockRequest({
            authInfo: {
                id:'000930461038-1'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};

        await getUserProperties.getProperties(req, res, next)
        await assert.equal(res.statusCode, '401', 'Should return 401') 
        await assert.equal(res._getJSON().message, 'not found', 'Should return message `not found`')      
    })
})

describe('search user properties', function(){
    let sandbox;
    let searchStub;

    before(function(){
        sandbox = sinon.sandbox.create();
        searchStub = sandbox.stub(db.users, 'findAll')
    })

    it('input id only Should return 200 and userlist', async function(){
        searchStub.returns({})
        let req = new mockRequest({
            body: {
                id:'025930461038-1',
                fullname: ''
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function(){exec = true};

        await getUserProperties.searchUser(req, res, next)
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return object')
    })

    it('Should return 400 not found', async function(){
        searchStub.returns([])
        let req = new mockRequest({
            body: {
                id:'00000000000-1',
                fullname: 'authority fsdfs'
            }
        })
        let res = new mockResponse({})
        let exec = false
        let next = function(){exec = true};

        await getUserProperties.searchUser(req, res, next)
        await assert.equal(res.statusCode, '400', 'Should return 400')
        await assert.equal(res._getJSON().message, 'not found', 'Should return "not found"')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return object')
    })
})
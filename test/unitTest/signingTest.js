let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let signin = require('../../controllers/signin')
describe('signin', function(){

    it('Should return 200 and return json Object Datatype', async function(){
        let req = new mockRequest({
            body: {
                username: 'authority',
                password: 'abcd1234'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signin.signin(req, res, next)        
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.notEqual(res.statusCode, '401', 'Should not return 401')
        await assert.equal(typeof res._getJSON().token, 'string', 'Should return string')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return json object')        
    })

    it('Should return 401 and message as string type if username dotn match', async function(){
        let req = new mockRequest({
            body: {
                username: 'abcd',
                password: 'abcd1234'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signin.signin(req, res, next)        
        await assert.notEqual(res.statusCode, '200', 'Should return 200')
        await assert.equal(res.statusCode, '401', 'Should not return 401')          
        await assert.equal(typeof res._getJSON().message, 'string', 'Should return string')
        await assert.equal(res._getJSON().message, 'not found user', 'Should return message `not found user`')
    })

    it('Should return 401 and message as string type if password dotn match', async function(){
        let req = new mockRequest({
            body: {
                username: 'authority',
                password: 'abcd12345'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signin.signin(req, res, next)        
        await assert.notEqual(res.statusCode, '200', 'Should return 200')
        await assert.equal(res.statusCode, '401', 'Should not return 401')          
        await assert.equal(typeof res._getJSON().message, 'string', 'Should return string')
        await assert.equal(res._getJSON().message, 'not match password', 'Should return message `not match password`')
    })
})
let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let signin = require('../../routes/signin')
describe('signin', function(){

    it('Should return 200 and return json Object Datatype', async function(){
        let req = new mockRequest({
            body: {
                username: 'voter',
                password: 'abcd1234'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signin.signin(req, res, next)        
        await assert.equal(res.statusCode, '200', 'Should return 200')
        await assert.notEqual(res.statusCode, '401', 'Should not return 401')
        await assert.equal(typeof res._getJSON(), 'object', 'Should return json object')        
    })

    it('Should return 401 if username dotn match in database', async function(){
        let req = new mockRequest({
            body: {
                username: 'abcd',
                password: 'defg'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signin.signin(req, res, next)        
        await assert.notEqual(res.statusCode, '200', 'Should return 200')
        await assert.equal(res.statusCode, '401', 'Should not return 401')          
    })
})
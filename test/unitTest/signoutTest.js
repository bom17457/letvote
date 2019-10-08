let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let signout = require('../../controllers/signout')

describe('signout', function(){

    it('Should return 200', async function(){
        let req = new mockRequest({
            headers: {
                "authorization": "Bearer sometoken"
            },
            authInfo: {
                id: '025930461038-1'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signout.signout(req, res, next)        
        await assert.equal(res.statusCode, '200', 'Should return 200')     
        await assert.notEqual(res.statusCode, '401', 'Should not return 401')
    })

    it('Should return 401', async function(){
        let req = new mockRequest({
            headers: {
                "authorizations": "Bearer sometoken"
            },
            authInfo: {
                id: '025930461038-1'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signout.signout(req, res, next)        
        await assert.equal(res.statusCode, '401', 'Should return 401')     
        await assert.notEqual(res.statusCode, '200', 'Should not return 200')
    })
})
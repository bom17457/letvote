let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let signin = require('../../controllers/signout')
describe('signout', function(){

    it('Should return 200', async function(){
        let req = new mockRequest({
            header: {
                "AccessToken": "Barer sometoken"
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        await signin.signin(req, res, next)        
        await assert.equal(res.statusCode, '200', 'Should return 200')     
    })

})
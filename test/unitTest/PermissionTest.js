let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let authen = require('../../middlewares/permission')
describe('authen', function(){

    it('Should execute next function if authentication allow', async function(){
        let req = new mockRequest({
            authInfo: {
                role: 'manager'
            }
        })
        let res = new mockResponse({})

        let exec = false
        let next = function(){exec = true};
        
        let auth = await authen(['manager', 'voter'])
        await auth(req, res, next)
        await assert.equal(exec, true, 'should execute next')
        await assert.notEqual(res.statusCode, '401', 'Should not return 401')
    })

    it('Should return 401  if authentication not allow', async function(){
        let req = new mockRequest({
            authInfo: {
                role: 'voter'
            }
        })
        let res = new mockResponse({})
        let next = function(){return true};
    
        let auth = await authen(['manager'])
        await auth(req, res, next)
        assert.equal(res.statusCode, '401', 'should return http 401 unauthorize')
    })
})
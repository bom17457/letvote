let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let passwordEncoder = require('../../utilities/passwordEncoder')
describe('passwordEncoder', function(){
    let encode;
    it('Should return string', async function(){        
        encode = await passwordEncoder.hash('password')
        await assert.notEqual(typeof encode, 'String', 'Should return string')
    })    

    it('Should return true if pass the password verify', async function(){
        let result = await passwordEncoder.verifyPassword('password', encode)
        await assert.equal(result, true, 'Should return true')
    })

    it('Should return false if not pass the password verify', async function(){
        let result = await passwordEncoder.verifyPassword('passw0rd', encode)
        await assert.equal(result, false, 'Should return false')
    })
})
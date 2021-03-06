let assert = require('assert')
let mockResponse = require('mock-express-response')
let mockRequest = require('mock-express-request')
let passwordEncoder = require('../../utilities/passwordEncoder')
describe('passwordEncoder', function(){
    let encode;
    it('Should return string', async function(){        
        encode = await passwordEncoder.hash('password')
        await assert.equal(typeof encode, 'string', 'Should return string')
    })    

    it('Should return true if pass the password verify', async function(){
        let result = await passwordEncoder.matchPassword('password', encode)
        await assert.equal(result, true, 'Should return true')
    })

    it('Should return false if not pass the password verify', async function(){
        let result = await passwordEncoder.matchPassword('passw0rd', encode)
        await assert.equal(result, false, 'Should return false')
    })
})
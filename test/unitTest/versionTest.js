process.env.NODE_ENV = "test"

let assert = require('assert')
let version = require('../../routes/version')
let mock = require('mock-express-response')

describe('get version', function(){
    it('get version should return 200 and field name version and type string', async function(){
        let req = { get: function(){}}
        let res = new mock({})
        let next = {};

        await version.getVersion(req, res, next)
        assert.equal(res.statusCode, '200', 'should return http 200')
        assert.equal(typeof res._getJSON().version, 'string', 'should return string')
        assert.notEqual(res._getJSON().version.length, 0, 'Should not return empty')
    })
})
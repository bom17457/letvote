var express = require('express');
var router = express.Router();
var package = require('../package.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  getVersion(req, res, next)
});

module.exports = {
  router: router,
  getVersion:function(req, res, next){
    res.json({version: package.version})
  }
}
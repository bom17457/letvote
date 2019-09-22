var express = require('express');
var router = express.Router();
var package = require('../package.json')
/* GET home page. */

const route = {
  getVersion:function(req, res, next){
    res.json({version: package.version})
  }
}
router.get('/', route.getVersion);

module.exports = {
  router: router,
  ...route
}
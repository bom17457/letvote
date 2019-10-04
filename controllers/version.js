var express = require('express');
var router = express.Router();
var config = require('../config.json')
/* GET home page. */

const route = {
  getVersion:function(req, res, next){
    res.json({version: config.version})
  }
}
router.get('/', route.getVersion);

module.exports = {
  router: router,
  ...route
}
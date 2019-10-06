var express = require('express');
var router = express.Router();
var config = require('../config.json')
/* GET home page. */

const struct = {
  getVersion:function(req, res, next){
    res.json({version: config.version})
  }
}
router.get('/', struct.getVersion);

module.exports = {
  router: router,
  ...struct
}
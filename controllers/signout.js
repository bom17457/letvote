var express = require('express');
var router = express.Router();
var ISignin = require('../services/signin')

const struct = {
  signout: async function (req, res, next) {
    
  },
}
router.post('/', struct.signout);
module.exports = {
  router: router,
  ...struct
}
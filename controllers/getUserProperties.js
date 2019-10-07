var express = require('express');
var router = express.Router();
var IUserProperties = require('../services/userProperties.js')

const struct = {
  getProperties: async function (req, res, next) {
    const {id} = req.authInfo    
    try{
      let user = await IUserProperties.properties(id)
      res.json(user)
    } catch(Exception) {            
      res.send(401, {message:Exception.toString()})
    }
  },
}
router.post('/', struct.getProperties);
module.exports = {
  router: router,
  ...struct
}
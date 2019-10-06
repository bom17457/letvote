var express = require('express');
var router = express.Router();
var ISignin = require('../services/signin')

const struct = {
  signin: async function (req, res, next) {
    const {username, password} = req.body    
    try{
      let user = await ISignin.signin(username, password)      
      res.json(user)
    }catch(Exception){            
      res.send(401, {message:Exception.toString()})
    }
  },
}
router.post('/', struct.signin);
module.exports = {
  router: router,
  ...struct
}
var express = require('express');
var router = express.Router();
var ISignout = require('../services/signout')

const struct = {
  signout: async function (req, res, next) {
    const {authorization} = req.headers;
    const {id} = req.authInfo
    try{
        await ISignout.logout(authorization, id)
        res.send('200')
    }catch(Exception){
        res.send('401', Exception.toString())
    }
  },
}
router.get('/', struct.signout);
module.exports = {
  router: router,
  ...struct
}
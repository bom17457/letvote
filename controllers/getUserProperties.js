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
  searchUser: async function (req, res, next) {
    try {
        const { id, fullname } = req.body
        let users = await IUserProperties.searchUser(id, fullname)
        res.json(users)
    } catch (Exception) {        
        res.send(400, { message: Exception.toString() })
    }
},
}
router.get('/', struct.getProperties);
router.post('/search', struct.searchUser)
module.exports = {
  router: router,
  ...struct
}
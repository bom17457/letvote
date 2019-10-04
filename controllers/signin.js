var express = require('express');
var router = express.Router();
var package = require('../package.json')
var encodeAlgorithm = rquire('../extendsion/EncodeAlgorithm.js')
/* GET home page. */
this = {...method.data, ...method, ...this};
const struct = {
  data:{
    db:null
  },
  constructor:async function(dbContext){
    this.db = dbContext
  },
  signin: async function (req, res, next) {
    const {username, password} = req.body
    this.encodePassword(password)
    let query = `SELECT * FROM user WHERE username = '${username}' and password = '${password}'`
    let result = await this.db.query(query)

    if(result.username == username){
      next();
    }else{
      res.sendStatus(401)
    }
  },
  encodePassword: async function(pwd){
    pwd = encodeAlgorithm(pwd);
  },
  returnJWT: async function(){

  }
}
router.post('/', method.signin);
module.exports = {
  router: router,
  ...struct
}
var express = require('express');
var router = express.Router();
var package = require('../package.json')
/* GET home page. */

const route = {
  signin:function(req, res, next){
      const {username, password} = req.body
      console.log(username,)
      setTimeout(function(){
        if(username == "authority" && password == "abcd1234"){
            res.json({
                id:'025930461038-1',
                fname:'Akaporn',
                lname:'Katip',
                role:'authority',
                token:'$2$4.a563cd35ed499da09d'
            })
          }else if(username == "voter" && password == "abcd1234"){
            res.json({
                id:'025930461038-2',
                fname:'Tip',
                lname:'Tip',
                role:'voter',
                token:'$2$4.a563cd35ed499da09d'
            })
          }else if(username == "candidate" && password == "abcd1234"){
            res.json({
                id:'025930461038-3',
                fname:'Tip3',
                lname:'Tip3',
                role:'voter',
                token:'$2$4.a563cd35ed499da09d'
            })
          }else{
            res.sendStatus(401)
          }
      }, 1000)      
  }
}
router.post('/', route.signin);
module.exports = {
  router: router,
  ...route
}
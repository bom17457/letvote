var express = require('express');
var router = express.Router();
var package = require('../package.json')
/* GET home page. */

const route = {
    ballot: function (req, res, next) {
        setTimeout(function(){
            res.json([
                {
                  id: "5d7a924b175caef0f4fac903",
                  name: "Love Ballard",
                  voters: 2029,
                  candidates: 3,
                  start_d: "2019-10-22 11:01:50",
                  end_d: "2019-10-30 09:01:50",
                  status: "private"
                },
                {
                  id: "5d7a924bc69b11436abb09b3",
                  name: "Shelby Garrett",
                  voters: 2937,
                  candidates: 2,
                  start_d: "2019-10-22 11:01:05",
                  end_d: "2019-10-23 11:01:50",
                  status: "public"
                },
                {
                  id: "5d7a924b175caef0f4fac902",
                  name: "Love Ballard",
                  voters: 2029,
                  candidates: 3,
                  start_d: "2019-10-22 11:01:50",
                  end_d: "2019-10-30 09:01:50",
                  status: "private"
                },
                {
                  id: "5d7a924bc69b11436abb09b1",
                  name: "Shelby Garrett",
                  voters: 2937,
                  candidates: 2,
                  start_d: "2019-10-22 11:01:05",
                  end_d: "2019-10-23 11:01:50",
                  status: "public"
                }
              ])
        }, 3000)
        
    }
}
router.get('/', route.ballot);
module.exports = {
    router: router,
    ...route
}
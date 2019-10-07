const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports.hash = function (paintextPWD) {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) reject(err)
            bcrypt.hash(paintextPWD, salt, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            })
        })
    })
}


module.exports.matchPassword = function (paintextPWD, hash) {
    return new Promise(function (resolve, reject) {
        bcrypt.compare(paintextPWD, hash, function(err, res){
            if(err) reject(err)
            resolve(res)
        })
    })
}